"use client";
import { useEffect, useRef, useState } from "react";

const steps: [string, string, string][] = [
  [
    "01",
    "Anlatın",
    "Telefonla arayın, WhatsApp'tan yazın ya da formu doldurun. Ne olduğunu, hangi odada başladığını ve ilçenizi yazmanız yeterli; teknik terim gerekmez.",
  ],
  [
    "02",
    "Değerlendirelim",
    "Sorunun niteliğine ve bulunduğunuz bölgeye bakarız. Gerekirse güvenlik için birkaç somut yönlendirme yaparız; fiyat ya da süre sözü vermeyiz.",
  ],
  [
    "03",
    "Yönlendirelim",
    "Bölgenizde çalışan, uygun bağımsız servis sağlayıcıyla iletişim kurmanızı sağlarız. Kapsam ve fiyat, işi yapacak elektrikçiyle netleşir.",
  ],
];

/** Dikey "tel" kaydırdıkça dolar, her adım sırayla yanar. */
export function Process() {
  const root = useRef<HTMLOListElement>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = root.current!;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        setP(Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height)));
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  return (
    <ol ref={root} className="relative mt-16 md:mt-24">
      <span
        aria-hidden
        className="absolute bottom-6 left-[1.1rem] top-6 w-px bg-line md:left-[2.4rem]"
      />
      <span
        aria-hidden
        className="absolute left-[1.1rem] top-6 w-px bg-accent shadow-[0_0_14px_2px_#d7ff1f88] md:left-[2.4rem]"
        style={{ height: `calc((100% - 3rem) * ${p})` }}
      />
      {steps.map(([n, t, d], i) => {
        const lit = p >= (i + 0.35) / steps.length - 0.12;
        return (
          <li
            key={n}
            className="relative grid grid-cols-[2.4rem_1fr] gap-6 pb-16 last:pb-0 md:grid-cols-[4.8rem_1fr] md:gap-14 md:pb-28"
          >
            <span
              aria-hidden
              className="z-10 mt-2 flex h-9 w-9 items-center justify-center rounded-full border text-[11px] font-bold transition-all duration-500 md:h-[4.8rem] md:w-[4.8rem] md:text-base"
              style={{
                background: lit ? "#d7ff1f" : "#0a0a0b",
                color: lit ? "#0a0a0b" : "#8f918b",
                borderColor: lit ? "#d7ff1f" : "#ffffff26",
                boxShadow: lit ? "0 0 36px -4px #d7ff1faa" : "none",
              }}
            >
              {n}
            </span>
            <div className="grid gap-4 md:grid-cols-[1fr_1fr] md:gap-14">
              <h3
                className="display text-[clamp(2.4rem,6vw,6rem)] transition-opacity duration-500"
                style={{ opacity: lit ? 1 : 0.3 }}
              >
                {t}
              </h3>
              <p
                className="max-w-md text-lg text-mute transition-opacity duration-500 md:pt-3 md:text-xl"
                style={{ opacity: lit ? 1 : 0.4 }}
              >
                {d}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
