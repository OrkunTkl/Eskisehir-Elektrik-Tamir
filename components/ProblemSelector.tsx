"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CircuitBoard,
  Flame,
  Hand,
  Lightbulb,
  Phone,
  Plug,
  PlugZap,
  Power,
  ShieldAlert,
  TriangleAlert,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { problems } from "@/data/problems";
import { externalProps, telLink, waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const ICONS: Record<string, LucideIcon> = {
  "sigorta-neden-atar": CircuitBoard,
  "salter-atiyor": Power,
  "priz-calismiyor": Plug,
  "elektrik-kesildi": PlugZap,
  "kacak-akim-rolesi-atiyor": ShieldAlert,
  "yanik-kokusu": Flame,
  "kivilcim-olusuyor": Zap,
  "lambalar-calismiyor": Lightbulb,
  "elektrik-kacagi": TriangleAlert,
};
const iconOf = (slug: string) => ICONS[slug] ?? Zap;
// Kart eğimleri (derece), dikey kayma ve renk dönüşümü
const TILT = [-3, 2.4, -2, 3, -2.6, 2, -3.2, 2.6, -2.2];
const tilt = (i: number) => TILT[i % TILT.length];
const offY = (i: number) => (i % 2 ? 26 : -10);
const isAccent = (i: number) => i % 2 === 0;

function QuoteTop() {
  return (
    <svg
      aria-hidden
      className="absolute right-5 top-4 h-6 w-auto opacity-90"
      viewBox="0 0 27 25"
      fill="none"
    >
      <path
        className="fill-current"
        d="M20.8828 17.625C18.9828 17.625 17.5078 16.8 16.4578 15.15C15.4578 13.45 14.9578 11.325 14.9578 8.775C14.9578 6.275 15.4828 4.2 16.5328 2.55C17.5828 0.849999 19.0328 0 20.8828 0C22.7328 0 24.1578 0.824998 25.1578 2.47499C26.2078 4.125 26.7328 6.225 26.7328 8.775C26.7328 13.225 25.6828 17.025 23.5828 20.175C21.4828 23.325 19.2828 24.9 16.9828 24.9C16.1328 24.9 15.4828 24.675 15.0328 24.225L15.2578 22.725C15.6578 22.975 16.0828 23.1 16.5328 23.1C17.6828 23.1 18.7328 22.475 19.6828 21.225C20.6828 19.925 21.0828 18.725 20.8828 17.625ZM6.18281 17.625C4.28281 17.625 2.80781 16.8 1.75781 15.15C0.757813 13.45 0.257813 11.325 0.257813 8.775C0.257813 6.275 0.782813 4.2 1.83281 2.55C2.88281 0.849999 4.33281 0 6.18281 0C8.03281 0 9.45781 0.824998 10.4578 2.47499C11.5078 4.125 12.0328 6.225 12.0328 8.775C12.0328 13.225 10.9828 17.025 8.88281 20.175C6.78281 23.325 4.58281 24.9 2.28281 24.9C1.43281 24.9 0.782813 24.675 0.332813 24.225L0.557813 22.725C0.957813 22.975 1.38281 23.1 1.83281 23.1C2.98281 23.1 4.03281 22.475 4.98281 21.225C5.98281 19.925 6.38281 18.725 6.18281 17.625Z"
      />
    </svg>
  );
}
function QuoteBottom() {
  return (
    <svg
      aria-hidden
      className="absolute bottom-4 left-5 h-6 w-auto opacity-90"
      viewBox="0 0 28 27"
      fill="none"
    >
      <path
        className="fill-current"
        d="M6.44073 18.5486C8.3382 18.6465 9.85374 17.8985 10.9873 16.3048C12.0736 14.6586 12.6823 12.5621 12.8137 10.0155C12.9425 7.51884 12.525 5.41956 11.5614 3.71767C10.6004 1.96584 9.19606 1.04229 7.34852 0.947002C5.50097 0.851716 4.03537 1.60222 2.95172 3.19852C1.81812 4.79225 1.18566 6.86243 1.05432 9.40904C0.825116 13.8531 1.678 17.7022 3.61297 20.9562C5.54794 24.2101 7.6639 25.8964 9.96084 26.0148C10.8097 26.0586 11.4704 25.8674 11.943 25.4412L11.7956 23.9316C11.3832 24.1606 10.9524 24.2636 10.503 24.2404C9.35448 24.1812 8.33807 23.5029 7.45371 22.2056C6.522 20.8559 6.18433 19.6368 6.44073 18.5486ZM21.1212 19.3057C23.0187 19.4036 24.5342 18.6557 25.6678 17.0619C26.7541 15.4157 27.3628 13.3193 27.4942 10.7727C27.6229 8.27598 27.2055 6.1767 26.2419 4.47481C25.2808 2.72298 23.8766 1.79943 22.029 1.70414C20.1815 1.60885 18.7159 2.35936 17.6322 3.95566C16.4986 5.54939 15.8661 7.61957 15.7348 10.1662C15.5056 14.6103 16.3585 18.4593 18.2935 21.7133C20.2284 24.9673 22.3444 26.6535 24.6413 26.772C25.4902 26.8157 26.1509 26.6245 26.6235 26.1983L26.4761 24.6887C26.0637 24.9178 25.6328 25.0207 25.1834 24.9975C24.035 24.9383 23.0186 24.26 22.1342 22.9628C21.2025 21.613 20.8648 20.394 21.1212 19.3057Z"
      />
    </svg>
  );
}

const PAD = "px-6 md:px-10 lg:px-14";
const IDLE_MS = 250; // bırakıldıktan sonra otomatik akışa dönüş gecikmesi
const OFF = 120; // döngü sarma payı (px)

export function ProblemSelector() {
  const n = problems.length;
  const sec = useRef<HTMLElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const items = useRef<(HTMLLIElement | null)[]>([]);
  const panel = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  // Sonsuz döngü: kartlar 3 kez render edilir; tx her zaman ortadaki kopyanın çevresinde tutulur.
  const st = useRef({
    x: 0,
    tx: 0,
    vel: 0,
    rot: 0,
    prevX: 0,
    down: false,
    focus: false,
    modal: false,
    visible: false,
    moved: 0,
    startX: 0,
    startTx: 0,
    lastX: 0,
    lastT: 0,
    W: 0,
    resumeAt: 0,
    raf: 0,
    running: false,
    last: 0,
    speed: 18,
    auto: true,
  });

  const wrapPos = () => {
    const s = st.current;
    if (s.W <= 0) return;
    while (s.tx > -(s.W - OFF)) {
      s.tx -= s.W;
      s.x -= s.W;
      s.startTx -= s.W;
    }
    while (s.tx <= -(2 * s.W - OFF)) {
      s.tx += s.W;
      s.x += s.W;
      s.startTx += s.W;
    }
  };

  const measure = useCallback(() => {
    const a = items.current[0],
      b = items.current[n],
      s = st.current;
    if (!a || !b) return;
    const W = b.offsetLeft - a.offsetLeft;
    if (W <= 0) return;
    const old = s.W;
    const phase =
      old > 0 ? ((((-s.tx - (old - OFF)) % old) + old) % old) / old : 0;
    s.W = W;
    const t = -(W - OFF + phase * W);
    s.x += t - s.tx;
    s.tx = t;
    s.speed = matchMedia("(max-width:767px)").matches ? 10 : 18;
  }, [n]);

  const paintCards = useCallback(() => {
    const r = st.current.rot;
    items.current.forEach((el, i) => {
      if (!el) return;
      const k = i % n;
      const swing = r * (1 + (k % 3) * 0.18) * (k % 2 ? -0.6 : 1);
      el.style.transform = `translate3d(0,${offY(k)}px,0) rotate(${tilt(k) + swing}deg)`;
    });
  }, [n]);

  const tick = useCallback(
    (now: number) => {
      const s = st.current;
      const dt = Math.min((now - s.last) / 1000, 0.05) || 0.016;
      s.last = now;
      const active = s.visible && !document.hidden;
      if (!s.down) {
        s.tx += s.vel * dt; // atalet
        s.vel *= Math.exp(-dt * 3.2);
        if (
          s.auto &&
          active &&
          !s.focus &&
          !s.modal &&
          now >= s.resumeAt &&
          Math.abs(s.vel) < 20
        ) {
          s.tx -= s.speed * dt; // yavaş otomatik akış (sola)
        }
      }
      wrapPos();
      s.prevX = s.x;
      s.x += (s.tx - s.x) * (1 - Math.exp(-dt * 12));
      const targetRot = clamp(((s.x - s.prevX) / dt) * 0.0035, -9, 9);
      s.rot += (targetRot - s.rot) * (1 - Math.exp(-dt * 10));
      if (track.current)
        track.current.style.transform = `translate3d(${s.x}px,0,0)`;
      paintCards();
      const settled =
        !s.down &&
        Math.abs(s.vel) < 4 &&
        Math.abs(s.tx - s.x) < 0.1 &&
        Math.abs(s.rot) < 0.02;
      if (settled && !(s.auto && active && !s.modal)) {
        s.x = s.tx;
        s.rot = 0;
        if (track.current)
          track.current.style.transform = `translate3d(${s.x}px,0,0)`;
        paintCards();
        s.running = false;
        return;
      }
      s.raf = requestAnimationFrame(tick);
    },
    [paintCards],
  );

  const kick = useCallback(() => {
    const s = st.current;
    if (s.running) return;
    s.running = true;
    s.last = performance.now();
    s.raf = requestAnimationFrame(tick);
  }, [tick]);

  const touched = () => {
    st.current.resumeAt = performance.now() + IDLE_MS;
  };

  useEffect(() => {
    const s = st.current,
      w = wrap.current;
    s.auto = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    measure();
    if (track.current)
      track.current.style.transform = `translate3d(${s.tx}px,0,0)`;
    s.x = s.tx;
    paintCards();
    const ro = new ResizeObserver(() => {
      measure();
      kick();
    });
    if (w) ro.observe(w);
    if (track.current) ro.observe(track.current);
    const io = new IntersectionObserver(
      ([e]) => {
        s.visible = e.isIntersecting;
        if (s.visible) kick();
      },
      { threshold: 0.15 },
    );
    if (sec.current) io.observe(sec.current);
    const vis = () => {
      if (!document.hidden) kick();
    };
    document.addEventListener("visibilitychange", vis);
    const onWheel = (e: WheelEvent) => {
      const dx =
        Math.abs(e.deltaX) > Math.abs(e.deltaY)
          ? e.deltaX
          : e.shiftKey
            ? e.deltaY
            : 0;
      if (!dx) return; // dikey scroll'a dokunma
      e.preventDefault();
      s.vel = 0;
      s.tx -= dx;
      touched();
      kick();
    };
    w?.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", vis);
      w?.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(s.raf);
      s.running = false;
    };
  }, [measure, kick, paintCards]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const s = st.current;
    s.down = true;
    s.moved = 0;
    s.startX = s.lastX = e.clientX;
    s.startTx = s.tx;
    s.lastT = performance.now();
    s.vel = 0;
    kick();
    const move = (ev: PointerEvent) => {
      const dx = ev.clientX - s.startX;
      s.moved = Math.max(s.moved, Math.abs(dx));
      s.tx = s.startTx + dx;
      const now = performance.now(),
        dt = (now - s.lastT) / 1000;
      if (dt > 0) s.vel = s.vel * 0.6 + ((ev.clientX - s.lastX) / dt) * 0.4;
      s.lastX = ev.clientX;
      s.lastT = now;
    };
    const up = () => {
      s.down = false;
      if (performance.now() - s.lastT > 90) s.vel = 0;
      s.vel = clamp(s.vel, -3000, 3000);
      touched();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      kick();
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  };

  // Klavye odağındaki (gerçek) kartı görünür alana getir
  const reveal = (i: number, e: React.FocusEvent) => {
    const s = st.current,
      li = items.current[n + i],
      w = wrap.current;
    if (!li || !w || !e.target.matches(":focus-visible")) return;
    s.focus = true;
    const l = li.offsetLeft;
    if (l + s.tx < 0 || l + li.offsetWidth + s.tx > w.clientWidth)
      s.tx = -(l - 24);
    kick();
  };

  useEffect(() => {
    st.current.modal = open !== null;
    if (open === null) {
      kick();
      return;
    }
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    panel.current?.animate?.(
      [
        { opacity: 0, transform: "translateY(16px)" },
        { opacity: 1, transform: "none" },
      ],
      { duration: 420, easing: "cubic-bezier(.22,1,.36,1)" },
    );
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") return setOpen(null);
      if (e.key !== "Tab" || !panel.current) return;
      const f = panel.current.querySelectorAll<HTMLElement>("a[href],button");
      const first = f[0],
        last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", key);
      prev?.focus?.();
    };
  }, [open, kick]);

  const current = open !== null ? problems[open] : null;
  const CurIcon = current ? iconOf(current.slug) : null;

  return (
    <section
      ref={sec}
      aria-labelledby="ne-oldu"
      className="relative overflow-hidden py-28 md:py-44"
    >
      <div
        className={`flex flex-col justify-between gap-8 sm:flex-row sm:items-end ${PAD}`}
      >
        <div>
          <h2 id="ne-oldu" className="type-h2 !text-[clamp(3.5rem,7vw,8rem)]">
            Ne oldu?
          </h2>
          <p className="mt-5 text-lg text-mute">Bir sorun seçin</p>
        </div>
        <p
          className="flex items-center gap-3 text-xs tracking-[.18em] text-mute"
          aria-hidden
        >
          <Hand
            size={18}
            strokeWidth={1.5}
            className="nudge text-accent-soft"
          />
          BASILI TUTUP KAYDIR
        </p>
      </div>

      <div
        ref={wrap}
        onPointerDown={onPointerDown}
        onBlur={() => {
          st.current.focus = false;
          touched();
        }}
        style={{ touchAction: "pan-y" }}
        className="mt-14 cursor-grab select-none overflow-x-clip py-14 active:cursor-grabbing md:mt-14"
      >
        <ul
          ref={track}
          className={`relative flex w-max gap-6 will-change-transform ${PAD}`}
        >
          {[0, 1, 2].flatMap((c) =>
            problems.map((p, i) => {
              const idx = c * n + i;
              const real = c === 1; // yalnızca ortadaki kopya erişilebilir; diğerleri görsel kopya
              return (
                <li
                  key={`${c}-${p.slug}`}
                  ref={(el) => {
                    items.current[idx] = el;
                  }}
                  aria-hidden={real ? undefined : true}
                  className="w-[300px] shrink-0 sm:w-[400px]"
                  style={{
                    transform: `translate3d(0,${offY(i)}px,0) rotate(${tilt(i)}deg)`,
                  }}
                >
                  <a
                    href={`/ariza-merkezi/${p.slug}`}
                    tabIndex={real ? undefined : -1}
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    onFocus={(e) => real && reveal(i, e)}
                    onClick={(e) => {
                      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
                      e.preventDefault();
                      if (st.current.moved > 6) return; // sürükleme, tıklama değil
                      setOpen(i);
                    }}
                    className={`relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl px-8 pb-14 pt-14 text-center text-ink shadow-[0_18px_50px_-18px_rgba(0,0,0,.8)] ${
                      isAccent(i) ? "bg-accent-soft" : "bg-paper"
                    }`}
                  >
                    <QuoteTop />
                    <span>
                      <span className="block text-2xl font-bold leading-snug md:text-[1.75rem]">
                        {p.title}
                      </span>
                      <span className="mt-4 block text-[17px] leading-relaxed opacity-80">
                        {p.short}
                      </span>
                    </span>
                    <span className="mt-6 inline-flex items-center justify-center gap-1 text-base font-semibold">
                      Detayı gör <ArrowRight size={16} aria-hidden />
                    </span>
                    <QuoteBottom />
                  </a>
                </li>
              );
            }),
          )}
        </ul>
      </div>

      {current && CurIcon && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm md:p-4"
          onClick={() => setOpen(null)}
        >
          <div
            ref={panel}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[96vh] min-h-[min(90vh,64rem)] w-full max-w-[min(96vw,92rem)] flex-col overflow-y-auto rounded-3xl border border-white/10 bg-[#0b0c0f] p-7 md:p-16"
          >
            <button
              ref={closeBtn}
              aria-label="Kapat"
              onClick={() => setOpen(null)}
              className="absolute right-5 top-5 rounded-full border border-line p-2 text-mute transition hover:border-accent hover:text-paper md:right-8 md:top-8"
            >
              <X size={18} />
            </button>
            <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-20">
              <div>
                <CurIcon
                  size={30}
                  strokeWidth={1.5}
                  className="text-accent-soft"
                  aria-hidden
                />
                <h3 className="mt-6 pr-10 text-[clamp(2.4rem,5.2vw,5.5rem)] font-semibold leading-[.98] tracking-[-.04em]">
                  {current.title}
                </h3>
              </div>
              <p className="text-lg text-mute md:text-xl md:leading-relaxed">
                {current.short}
              </p>
            </div>

            <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-14">
              {(
                [
                  ["Olası nedenler", current.causes],
                  ["Güvenle yapabilecekleriniz", current.safe],
                  ["Şu durumda servis çağırın", current.call],
                ] as const
              ).map(([h, list]) => (
                <div key={h}>
                  <h4 className="text-base font-medium text-accent-soft">
                    {h}
                  </h4>
                  <ul className="mt-3">
                    {list.map((x) => (
                      <li
                        key={x}
                        className="border-t border-line py-4 text-base leading-snug text-paper/85 md:text-lg"
                      >
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-14 md:pt-20">
              <Link
                href={`/ariza-merkezi/${current.slug}`}
                className="inline-flex items-center rounded-full bg-paper px-7 py-3.5 text-base font-medium text-ink transition hover:bg-accent-soft"
              >
                Detaylı rehberi aç
              </Link>
              <a
                href={telLink()}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-medium transition hover:border-accent hover:text-accent-soft"
              >
                <Phone size={16} aria-hidden /> Ara
              </a>
              <a
                href={waLink(current.title)}
                {...externalProps}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-medium text-[#04331a] transition hover:brightness-95"
                style={{ background: "#25D366" }}
              >
                <WhatsAppIcon size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
