"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { externalProps, waLink } from "@/lib/contact";

const nav: [string, string][] = [
  ["Hizmetler", "/hizmetler"],
  ["Arıza Merkezi", "/ariza-merkezi"],
  ["Eskişehir", "/eskisehir"],
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cta = useRef<HTMLAnchorElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open]);

  const magnet = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = cta.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.12}px, ${(e.clientY - r.top - r.height / 2) * 0.2}px)`;
  };
  const unmagnet = () => {
    if (cta.current) cta.current.style.transform = "";
  };

  return (
    <>
      <header
        className={`fade sticky top-0 z-50 flex h-[var(--header-h)] w-full items-center justify-between px-6 transition-[background-color,backdrop-filter] duration-500 md:px-10 lg:px-14 ${
          scrolled && !open ? "bg-ink/50 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-[.14em] text-paper"
        >
          ESKİŞEHİR ELEKTRİK
        </Link>

        <nav
          aria-label="Ana menü"
          className="hidden items-center gap-9 text-sm md:flex"
        >
          {nav.map(([l, h]) => (
            <Link
              key={h}
              href={h}
              className="text-mute transition-colors duration-300 hover:text-paper"
            >
              {l}
            </Link>
          ))}
          <a
            ref={cta}
            href={waLink()}
            {...externalProps}
            onPointerMove={magnet}
            onPointerLeave={unmagnet}
            className="rounded-full border border-white/25 px-5 py-2.5 font-medium text-paper transition-[transform,border-color,color] duration-300 ease-out hover:border-accent hover:text-accent-soft"
          >
            WhatsApp&apos;tan Yaz
          </a>
        </nav>

        <button
          type="button"
          className="text-sm font-medium tracking-wide text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Kapat" : "Menü"}
        </button>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[45] flex flex-col justify-end bg-ink px-6 pb-[calc(3.5rem+env(safe-area-inset-bottom))] pt-28 transition-[opacity,visibility] duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        />
        <nav aria-label="Mobil menü" className="flex flex-col gap-2">
          {nav.map(([l, h], i) => (
            <Link
              key={h}
              href={h}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              className={`type-h2 !text-[clamp(2.5rem,12vw,4.5rem)] py-1 text-paper transition-[opacity,transform] duration-700 ease-out hover:text-accent-soft ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              {l}
            </Link>
          ))}
        </nav>
        <a
          href={waLink()}
          {...externalProps}
          tabIndex={open ? 0 : -1}
          style={{ transitionDelay: open ? "380ms" : "0ms" }}
          className={`mt-10 inline-flex w-fit rounded-full border border-white/25 px-6 py-3 font-medium text-paper transition-[opacity,transform,border-color] duration-700 hover:border-accent ${
            open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          WhatsApp&apos;tan Yaz
        </a>
      </div>
    </>
  );
}
