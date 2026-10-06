"use client";
import { useEffect, useRef } from "react";

type P = { x: number; y: number };
type Bolt = { pts: P[]; life: number; max: number; w: number; branches: P[][] };

// Orta-nokta kaydırmalı şimşek: iki elektrot arasında rastgele kıvrılan hat.
function makePath(a: P, b: P, jitter: number, depth: number): P[] {
  let pts: P[] = [a, b];
  let j = jitter;
  for (let i = 0; i < depth; i++) {
    const next: P[] = [];
    for (let k = 0; k < pts.length - 1; k++) {
      const p = pts[k],
        q = pts[k + 1];
      const dx = q.x - p.x,
        dy = q.y - p.y;
      const len = Math.hypot(dx, dy) || 1;
      const off = (Math.random() - 0.5) * j;
      next.push(p, {
        x: (p.x + q.x) / 2 + (-dy / len) * off,
        y: (p.y + q.y) / 2 + (dx / len) * off,
      });
    }
    next.push(pts[pts.length - 1]);
    pts = next;
    j *= 0.55;
  }
  return pts;
}

/** Hero arka planı: imleç ile elektrot arasında zıplayan elektrik arkı. */
export function ArcCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0,
      h = 0,
      dpr = 1,
      raf = 0,
      visible = true;
    const bolts: Bolt[] = [];
    const mouse = { x: -1, y: -1, on: false, lastShot: 0 };
    let nodes: P[] = [];

    const resize = () => {
      const r = c.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = [
        { x: w * 0.06, y: h * 0.78 },
        { x: w * 0.94, y: h * 0.22 },
        { x: w * 0.78, y: h * 0.86 },
        { x: w * 0.2, y: h * 0.14 },
        { x: w * 0.55, y: h * 0.5 },
      ];
    };

    const shoot = (a: P, b: P, strong = false) => {
      const main = makePath(a, b, Math.hypot(b.x - a.x, b.y - a.y) * 0.28, 6);
      const branches: P[][] = [];
      const nb = strong ? 3 : 2;
      for (let i = 0; i < nb; i++) {
        const s = main[Math.floor(Math.random() * (main.length - 4)) + 2];
        const ang =
          Math.atan2(b.y - a.y, b.x - a.x) + (Math.random() - 0.5) * 1.8;
        const L = 40 + Math.random() * 140;
        branches.push(
          makePath(
            s,
            { x: s.x + Math.cos(ang) * L, y: s.y + Math.sin(ang) * L },
            L * 0.4,
            4,
          ),
        );
      }
      bolts.push({
        pts: main,
        life: 0,
        max: strong ? 26 : 38,
        w: strong ? 2.2 : 1.6,
        branches,
      });
    };

    const stroke = (pts: P[], width: number, alpha: number) => {
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.lineWidth = width;
      ctx.strokeStyle = `rgba(215,255,31,${alpha})`;
      ctx.stroke();
    };

    let nextAuto = 0;
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);

      // Elektrot düğümleri
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3, 0, 6.283);
        ctx.fillStyle = "rgba(215,255,31,.55)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, 10, 0, 6.283);
        ctx.strokeStyle = "rgba(215,255,31,.14)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      if (t > nextAuto) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        let b = nodes[Math.floor(Math.random() * nodes.length)];
        if (b === a) b = nodes[(nodes.indexOf(a) + 1) % nodes.length];
        shoot(a, b);
        nextAuto = t + 1400 + Math.random() * 2200;
      }

      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowColor = "#d7ff1f";
      ctx.shadowBlur = 18;
      for (let i = bolts.length - 1; i >= 0; i--) {
        const b = bolts[i];
        b.life++;
        if (b.life > b.max) {
          bolts.splice(i, 1);
          continue;
        }
        const k = 1 - b.life / b.max;
        const flick = b.life % 5 < 2 ? 1 : 0.55;
        const a = k * flick;
        stroke(b.pts, b.w * 3.2, a * 0.18);
        stroke(b.pts, b.w, a * 0.95);
        for (const br of b.branches) stroke(br, b.w * 0.6, a * 0.55);
      }
      ctx.restore();
    };

    const onMove = (e: PointerEvent) => {
      const r = c.getBoundingClientRect();
      const x = e.clientX - r.left,
        y = e.clientY - r.top;
      if (y < 0 || y > r.height) {
        mouse.on = false;
        return;
      }
      mouse.x = x;
      mouse.y = y;
      mouse.on = true;
      const now = performance.now();
      if (now - mouse.lastShot > 260) {
        let best = nodes[0],
          bd = 1e9;
        for (const n of nodes) {
          const d = Math.hypot(n.x - x, n.y - y);
          if (d < bd) {
            bd = d;
            best = n;
          }
        }
        if (bd < Math.max(w, h) * 0.75) {
          shoot(best, { x, y }, true);
          mouse.lastShot = now;
        }
      }
    };

    resize();
    if (reduce) {
      // Hareketsiz tek bir ark
      shoot(nodes[0], nodes[1]);
      bolts[0].life = 0;
      bolts[0].max = 1e9;
      ctx.save();
      ctx.shadowColor = "#d7ff1f";
      ctx.shadowBlur = 14;
      stroke(bolts[0].pts, 1.4, 0.5);
      ctx.restore();
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(c);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
