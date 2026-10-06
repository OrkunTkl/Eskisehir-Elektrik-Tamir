"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Sayfa genelinde: .rv öğelerini görünür olunca açar, imleç halkası ve okuma ilerleme çubuğu. */
export function Motion() {
  const pathname = usePathname();
  const ring = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".rv:not([data-in]), .rv-line:not([data-in])",
      ),
    );
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.setAttribute("data-in", ""));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-in", "");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current)
        bar.current.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const r = ring.current;
    if (
      !r ||
      matchMedia("(pointer: coarse)").matches ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    let x = 0,
      y = 0,
      cx = 0,
      cy = 0,
      raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      r.style.transform = `translate(${cx}px,${cy}px)`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      r.setAttribute("data-on", "");
      const hot = (e.target as HTMLElement | null)?.closest(
        "a,button,summary,[data-hot]",
      );
      r.toggleAttribute("data-hot", !!hot);
    };
    const leave = () => r.removeAttribute("data-on");
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent"
      >
        <div ref={bar} className="h-full origin-left scale-x-0 bg-accent" />
      </div>
      <div ref={ring} aria-hidden className="cursor-ring" />
    </>
  );
}
