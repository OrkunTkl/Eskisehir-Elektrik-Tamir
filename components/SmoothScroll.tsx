"use client";
import { useEffect } from "react";

/**
 * Mouse tekerleği "tak tak" adımlarını yumuşatır (inertia).
 * Dokunmatik cihazlarda ve reduced-motion'da devreye girmez.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (
      matchMedia("(pointer: coarse)").matches ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    let target = window.scrollY,
      cur = window.scrollY,
      raf = 0,
      running = false,
      last = 0;
    const max = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const tick = (t: number) => {
      const dt = Math.min((t - last) / 1000, 0.05);
      last = t;
      cur += (target - cur) * (1 - Math.exp(-dt * 8));
      if (Math.abs(target - cur) < 0.4) {
        cur = target;
        running = false;
        window.scrollTo(0, cur);
        return;
      }
      window.scrollTo(0, cur);
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (running) return;
      cur = window.scrollY;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.defaultPrevented) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // yatay: dokunma
      if (document.body.style.overflow === "hidden") return; // modal açık
      let el = e.target as HTMLElement | null;
      while (el && el !== document.body) {
        const oy = getComputedStyle(el).overflowY;
        if (
          (oy === "auto" || oy === "scroll") &&
          el.scrollHeight > el.clientHeight
        )
          return; // iç scroll alanı
        el = el.parentElement;
      }
      e.preventDefault();
      if (!running) target = window.scrollY;
      const dy = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY;
      target = Math.max(0, Math.min(max(), target + dy));
      start();
    };

    // klavye / scrollbar ile yapılan kaydırmalarda hedefi senkronla
    const onScroll = () => {
      if (!running) {
        target = window.scrollY;
        cur = target;
      }
    };

    // ServiceWave vb. için: window.dispatchEvent(new CustomEvent("smooth-scroll-to", {detail:{y}}))
    const onTo = (e: Event) => {
      const d = (e as CustomEvent).detail;
      if (!d) return;
      target = Math.max(0, Math.min(max(), d.y));
      d.handled = true;
      start();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("smooth-scroll-to", onTo);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("smooth-scroll-to", onTo);
    };
  }, []);
  return null;
}
