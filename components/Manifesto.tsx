"use client";
import { useEffect, useRef } from "react";

/** Kaydırdıkça kelime kelime aydınlanan büyük metin. İçerik DOM'da tam durur (SEO / erişilebilirlik). */
export function Manifesto({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const root = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((s) => (s.style.opacity = "1"));
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(
        1,
        Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.25)),
      );
      const lit = p * spans.length * 1.15;
      spans.forEach((s, i) => {
        s.style.opacity = String(Math.min(1, Math.max(0.16, lit - i + 0.16)));
      });
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  return (
    <p ref={root} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          data-w
          style={{ opacity: 0.16, transition: "opacity .25s linear" }}
        >
          {w}{" "}
        </span>
      ))}
    </p>
  );
}
