"use client";
import { useEffect, useRef } from "react";
export function Hero({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) =>
      el.toggleAttribute("data-off", !e.isIntersecting),
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        ref.current!.style.setProperty("--x", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      className="relative -mt-[var(--header-h)] flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-28 pt-[calc(var(--header-h)+3rem)] md:px-10 md:pb-20 lg:px-14"
    >
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,#000_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(420px circle at var(--x,72%) var(--y,35%), #7c8cff12, transparent 70%)",
        }}
      />
      <svg
        aria-hidden
        className="circuit pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
        fill="none"
      >
        <g
          stroke="#ffffff"
          strokeOpacity=".07"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        >
          <path d="M0 640H420L480 580H900L960 660H1440" />
          <path d="M0 240H260L320 180H700" />
          <path d="M900 120H1100L1160 180H1440" />
          <path d="M1040 900V760L1100 700V520" />
        </g>
        <g
          stroke="#7c8cff"
          strokeOpacity=".35"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        >
          <path className="flow" d="M0 640H420L480 580H900L960 660H1440" />
          <path
            className="flow"
            style={{ animationDelay: "-4s" }}
            d="M1040 900V760L1100 700V520"
          />
        </g>
        <g fill="#7c8cff" fillOpacity=".45">
          <circle cx="420" cy="640" r="2.5" />
          <circle cx="900" cy="580" r="2.5" />
          <circle cx="960" cy="660" r="2.5" />
          <circle cx="700" cy="180" r="2" fillOpacity=".25" />
          <circle cx="1100" cy="700" r="2.5" />
          <circle cx="1160" cy="180" r="2" fillOpacity=".25" />
        </g>
      </svg>
      <div className="relative w-full">{children}</div>
    </section>
  );
}
