"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { Mesh } from "three";
import { services } from "@/data/services";
import { problems } from "@/data/problems";
import { Cta } from "@/components/Cta";

const n = services.length;
const GAP = 8;
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

// Tüm kartlar aynı vertex shader'dan geçer: şerit ekran x'ine göre TEK yüzey gibi eğilir ve dalgalanır.
const VS = `uniform float uHW; uniform float uV; uniform float uZ; varying vec2 vUv; varying float vN;
void main(){ vUv=uv; vec4 w=modelMatrix*vec4(position,1.); float nx=w.x/uHW; vN=nx;
 float d=nx+0.17-uV*0.2;
 float B=d<0. ? 0.5+0.5*cos(3.14159*max(d,-1.)) : (d<0.6 ? 0.5+0.5*cos(3.14159*d/0.6) : 0.33*smoothstep(0.6,0.93,d));
 float sc=1.+0.6*B*(1.+0.15*abs(uV));
 w.z+=uZ*(1.-1./sc);
 gl_Position=projectionMatrix*viewMatrix*w; }`;
const FS = `uniform sampler2D uMap; varying vec2 vUv; varying float vN;
void main(){ vec4 c=texture2D(uMap,vUv); float f=1.-smoothstep(1.2,1.8,abs(vN)); gl_FragColor=vec4(c.rgb,c.a*f); }`;

function drawCard(img: HTMLImageElement, title: string) {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 640;
  const g = c.getContext("2d")!;
  g.beginPath();
  g.roundRect(0, 0, 1024, 640, 44);
  g.clip();
  g.drawImage(img, 0, 0, 1024, 640);
  const hl = g.createLinearGradient(0, 0, 1024, 640);
  hl.addColorStop(0, "rgba(255,255,255,.14)");
  hl.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = hl;
  g.fillRect(0, 0, 1024, 640);
  g.strokeStyle = "rgba(255,255,255,.28)";
  g.lineWidth = 6;
  g.beginPath();
  g.roundRect(0, 0, 1024, 640, 44);
  g.stroke();
  const gr = g.createLinearGradient(0, 320, 0, 640);
  gr.addColorStop(0, "rgba(0,0,0,0)");
  gr.addColorStop(1, "rgba(0,0,0,.75)");
  g.fillStyle = gr;
  g.fillRect(0, 320, 1024, 320);
  g.fillStyle = "#f3f1ec";
  g.font = "500 44px system-ui, sans-serif";
  g.fillText(title, 40, 590);
  g.fillStyle = "#000";
  g.beginPath();
  g.arc(960, 580, 30, 0, 7);
  g.fill();
  g.strokeStyle = "#f3f1ec";
  g.lineWidth = 4;
  g.beginPath();
  g.moveTo(946, 580);
  g.lineTo(974, 580);
  g.moveTo(963, 567);
  g.lineTo(975, 580);
  g.lineTo(963, 593);
  g.stroke();
  return c;
}

export function ServiceWave() {
  const outer = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const cards = useRef<(HTMLAnchorElement | null)[]>([]);
  const pos = useRef(0);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState<string | null>(null);

  // Dikey scroll, sabitlenmiş sahnede şeridi yatay kaydırır (pos = kart cinsinden konum).
  const update = useCallback(() => {
    const o = outer.current,
      st = stage.current;
    if (!o || !st) return;
    const range = o.offsetHeight - st.clientHeight;
    pos.current = clamp(-o.getBoundingClientRect().top / range, 0, 1) * (n - 1);
    if (counter.current)
      counter.current.textContent = `${String(Math.round(pos.current) + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
  }, []);

  const goTo = (i: number) => {
    const o = outer.current,
      st = stage.current;
    if (!o || !st) return;
    const range = o.offsetHeight - st.clientHeight;
    const y =
      o.getBoundingClientRect().top +
      window.scrollY +
      (clamp(i, 0, n - 1) / (n - 1)) * range;
    const ev = new CustomEvent("smooth-scroll-to", {
      detail: { y, handled: false },
    });
    window.dispatchEvent(ev);
    if (!ev.detail.handled) window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const pop = () =>
      setOpen(
        services.find((x) => `/${x.slug}` === location.pathname)?.slug ?? null,
      );
    window.addEventListener("popstate", pop);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("popstate", pop);
    };
  }, [update]);

  // WebGL sahnesi
  useEffect(() => {
    let dead = false,
      raf = 0,
      cleanup = () => {};
    (async () => {
      try {
        const THREE = await import("three");
        const st = stage.current;
        if (!st || dead) return;
        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
        });
        renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
        renderer.domElement.className = "absolute inset-0 h-full w-full";
        renderer.domElement.setAttribute("aria-hidden", "true");
        st.prepend(renderer.domElement);
        const scene = new THREE.Scene();
        const cam = new THREE.PerspectiveCamera(30, 1, 10, 20000);
        const fog = new THREE.Fog(0x000000, 1, 2);
        scene.fog = fog;
        const grid = new THREE.GridHelper(8000, 80, 0x555555, 0x333333);
        scene.add(grid);
        const uni = { uHW: { value: 1 }, uV: { value: 0 }, uZ: { value: 0 } };
        const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
        let W = 600,
          H = 375,
          w = 1,
          h = 1;
        const geo = new THREE.PlaneGeometry(1, 1, 48, 1);
        const meshes: (Mesh | undefined)[] = [];
        services.forEach((s, i) => {
          const img = new window.Image();
          img.onload = () => {
            if (dead) return;
            const tex = new THREE.CanvasTexture(drawCard(img, s.title));
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.anisotropy = 8;
            const mat = new THREE.ShaderMaterial({
              uniforms: { ...uni, uMap: { value: tex } },
              vertexShader: VS,
              fragmentShader: FS,
              transparent: true,
            });
            const m = new THREE.Mesh(geo, mat);
            m.scale.set(W, H, 1);
            scene.add(m);
            meshes[i] = m;
          };
          img.src = `/services/${s.slug}.svg`;
        });
        const resize = () => {
          w = st.clientWidth;
          h = st.clientHeight;
          renderer.setSize(w, h, false);
          W = Math.min(h * 0.36 * 1.6, w * (w < 768 ? 0.6 : 0.5));
          H = W * 0.625;
          const z = h / 2 / Math.tan((15 * Math.PI) / 180);
          cam.aspect = w / h;
          cam.position.set(0, 50, z);
          cam.lookAt(0, -20, 0);
          cam.updateProjectionMatrix();
          uni.uHW.value = w / 2;
          uni.uZ.value = z;
          fog.near = z * 0.8;
          fog.far = z * 3.5;
          grid.position.y = h * 0.04 - H / 2 - 20;
          meshes.forEach((m) => m?.scale.set(W, H, 1));
          cards.current.forEach((a) => {
            if (a) {
              a.style.width = `${W}px`;
              a.style.height = `${H}px`;
            }
          });
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(st);
        let vis = true;
        const io = new IntersectionObserver(([e]) => {
          vis = e.isIntersecting;
        });
        io.observe(st);
        let s = pos.current,
          v = 0,
          last = performance.now();
        const tick = (now: number) => {
          raf = requestAnimationFrame(tick);
          const dt = Math.min((now - last) / 1000, 0.05);
          last = now;
          if (!vis) return;
          // kare hızından bağımsız, yumuşak yaklaşma
          s += (pos.current - s) * (1 - Math.exp(-dt * 5));
          const tv = rm ? 0 : clamp((pos.current - s) * 3, -1.5, 1.5);
          v += (tv - v) * (1 - Math.exp(-dt * 7)); // dalga şiddeti de yumuşak
          uni.uV.value = v;
          meshes.forEach((m, i) =>
            m?.position.set((i - s) * (W + GAP), h * 0.04, 0),
          );
          cards.current.forEach((a, i) => {
            if (a)
              a.style.transform = `translate(-50%,-50%) translateX(${(i - s) * (W + GAP)}px)`;
          });
          renderer.render(scene, cam);
        };
        tick(performance.now());
        cleanup = () => {
          cancelAnimationFrame(raf);
          ro.disconnect();
          io.disconnect();
          renderer.dispose();
          renderer.domElement.remove();
        };
        if (dead) cleanup();
      } catch {
        /* WebGL yoksa sahne boş kalır; kartlar linkler olarak erişilebilir */
      }
    })();
    return () => {
      dead = true;
      cleanup();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const key = (e: KeyboardEvent) => e.key === "Escape" && history.back();
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", key);
    };
  }, [open]);

  const openService = (slug: string) => {
    history.pushState(null, "", `/${slug}`);
    setOpen(slug);
  };
  const current = services.find((s) => s.slug === open);

  return (
    <section
      ref={outer}
      aria-labelledby="hizmetler"
      style={{ height: `${100 + (n - 1) * 85}vh` }}
      className="relative bg-black"
    >
      <div
        ref={stage}
        className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden"
      >
        <h2
          id="hizmetler"
          className="absolute left-6 top-6 z-[60] text-xs font-medium uppercase tracking-[.2em]"
        >
          Hizmetler
        </h2>
        {services.map((s, i) => (
          <a
            key={s.slug}
            href={`/${s.slug}`}
            ref={(el) => {
              cards.current[i] = el;
            }}
            onFocus={() => goTo(i)}
            onClick={(e) => {
              e.preventDefault();
              openService(s.slug);
            }}
            className="absolute left-1/2 top-[46%] z-10 cursor-pointer rounded-3xl"
          >
            <span className="sr-only">{s.title}</span>
          </a>
        ))}
        <div className="absolute inset-x-6 bottom-6 z-[60] flex items-center justify-between text-xs tracking-[.2em]">
          <span ref={counter} aria-hidden>
            01 / {String(n).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                aria-label={dir < 0 ? "Önceki hizmet" : "Sonraki hizmet"}
                onClick={() => goTo(Math.round(pos.current) + dir)}
                className="rounded-full border border-line bg-black p-3 hover:border-accent hover:text-accent-soft"
              >
                {dir < 0 ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => history.back()}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-ink p-8 md:p-10"
          >
            <button
              ref={closeBtn}
              aria-label="Kapat"
              onClick={() => history.back()}
              className="absolute right-5 top-5 rounded-full border border-line p-2 hover:border-accent"
            >
              <X size={18} />
            </button>
            <h3 className="pr-10 text-3xl font-semibold tracking-tight md:text-4xl">
              {current.title}
            </h3>
            <p className="mt-4 text-mute">
              {current.desc} Bu platform hizmeti kendisi vermez; sizi anlaşmalı
              servis sağlayıcıya yönlendirir.
            </p>
            <h4 className="mt-8 font-semibold">İlgili arıza rehberleri</h4>
            <ul className="mt-3 space-y-1">
              {problems.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <Link
                    className="text-accent-soft underline"
                    href={`/ariza-merkezi/${p.slug}`}
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Cta problem={current.title} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
