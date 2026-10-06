"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { externalProps, waLink } from "@/lib/contact";
import { Bolt } from "@/components/Bolt";

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
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
  };
  const unmagnet = () => {
    if (cta.current) cta.current.style.transform = "";
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex h-[var(--header-h)] w-full items-center justify-between px-6 transition-[background-color,backdrop-filter,border-color] duration-500 md:px-10 lg:px-14 ${
          scrolled && !open
            ? "border-b border-line bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-paper"
          aria-label="Eskişehir Elektrik ana sayfa"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-ink transition-transform duration-500 group-hover:rotate-[20deg]">
            <Bolt size={16} />
          </span>
          <span className="text-[15px] font-bold leading-none tracking-[-.02em]">
            Eskişehir
            <span className="serif ml-1 text-[19px] font-normal text-accent">
              elektrik
            </span>
          </span>
        </Link>

        <nav
          aria-label="Ana menü"
          className="hidden items-center gap-9 text-sm md:flex"
        >
          {nav.map(([l, h]) => (
            <Link
              key={h}
              href={h}
              aria-current={pathname.startsWith(h) ? "page" : undefined}
              className="relative text-mute transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 hover:text-paper hover:after:scale-x-100 aria-[current=page]:text-paper aria-[current=page]:after:scale-x-100"
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
            className="btn btn-volt !px-5 !py-3 !text-sm"
          >
            WhatsApp&apos;tan Yaz
          </a>
        </nav>

        <button
          type="button"
          className="mono text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Kapat ✕" : "Menü ＋"}
        </button>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[45] flex flex-col justify-end bg-ink px-6 pb-[calc(3.5rem+env(safe-area-inset-bottom))] pt-28 transition-[opacity,visibility] duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobil menü" className="flex flex-col gap-1">
          {nav.map(([l, h], i) => (
            <Link
              key={h}
              href={h}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              className={`type-h2 !text-[clamp(2.8rem,13vw,5rem)] py-1 text-paper transition-[opacity,transform] duration-700 hover:text-accent ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
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
          className="btn btn-volt mt-10 w-fit"
        >
          WhatsApp&apos;tan Yaz
        </a>
      </div>
    </>
  );
}
