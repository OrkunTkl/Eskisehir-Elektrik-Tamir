import { Check, X } from "lucide-react";
import type { Block, Item } from "@/data/docs";

const slugify = (s: string) =>
  s
    .toLocaleLowerCase("tr")
    .replace(/[^a-z0-9ğüşıöç]+/g, "-")
    .replace(/^-|-$/g, "");
export const anchorOf = (i: number) => `b${i + 1}`;

export function Toc({
  items,
  extra = [],
}: {
  items: string[];
  extra?: [string, string][];
}) {
  return (
    <nav aria-label="Bu sayfada" className="hidden lg:block">
      <div className="sticky top-28">
        <p className="mono mb-5 text-mute">Bu sayfada</p>
        <ol className="space-y-3 border-l border-line pl-5 text-sm">
          {items.map((h, i) => (
            <li key={h}>
              <a
                href={`#${anchorOf(i)}`}
                className="text-mute transition-colors hover:text-accent"
              >
                {h}
              </a>
            </li>
          ))}
          {extra.map(([l, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-mute transition-colors hover:text-accent"
              >
                {l}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export function Sections({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-20 md:space-y-28">
      {blocks.map((b, i) => (
        <section key={b.h} id={anchorOf(i)} className="rv scroll-mt-28">
          <p className="mono text-accent">{String(i + 1).padStart(2, "0")}</p>
          <h2 className="display mt-3 max-w-3xl text-[clamp(2rem,4.6vw,4.4rem)] !leading-[.98]">
            {b.h}
          </h2>
          <div className="prose-x mt-8">
            {b.p.map((t, k) => (
              <p key={k}>{t}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function CardGrid({
  items,
  id,
  kicker,
  title,
  tone = "bone",
}: {
  items: Item[];
  id?: string;
  kicker: string;
  title: React.ReactNode;
  tone?: "bone" | "dark";
}) {
  return (
    <section
      id={id}
      aria-label={kicker}
      className={`${tone === "bone" ? "bone" : ""} scroll-mt-20 px-6 py-24 md:px-10 md:py-36 lg:px-14`}
    >
      <p className="mono mb-8 flex items-center gap-3 text-mute">
        <span aria-hidden className="h-px w-8 bg-accent" /> {kicker}
      </p>
      <h2 className="type-h2 rv max-w-4xl !text-[clamp(2.2rem,5.6vw,5.6rem)]">
        {title}
      </h2>
      <ul className="mt-14 grid gap-3 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <li
            key={it.t}
            className="rv group flex min-h-64 flex-col rounded-3xl border border-line p-7 transition-colors duration-500 hover:bg-accent hover:text-[#0a0a0b] md:p-8"
            style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}
          >
            <span className="display text-5xl text-accent transition-colors duration-500 group-hover:text-[#0a0a0b]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-auto pt-8 text-xl font-bold leading-snug tracking-[-.02em] md:text-2xl">
              {it.t}
            </h3>
            <p className="mt-3 text-mute transition-colors duration-500 group-hover:text-[#0a0a0b]/80">
              {it.d}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Steps({
  items,
  id,
  kicker,
  title,
}: {
  items: Item[];
  id?: string;
  kicker: string;
  title: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={kicker}
      className="scroll-mt-20 px-6 py-24 md:px-10 md:py-36 lg:px-14"
    >
      <p className="mono mb-8 flex items-center gap-3 text-mute">
        <span aria-hidden className="h-px w-8 bg-accent" /> {kicker}
      </p>
      <h2 className="type-h2 rv max-w-4xl !text-[clamp(2.2rem,5.6vw,5.6rem)]">
        {title}
      </h2>
      <ol className="mt-14 border-b border-line md:mt-20">
        {items.map((s, i) => (
          <li
            key={s.t}
            className="rv grid gap-3 border-t border-line py-8 md:grid-cols-[6rem_1fr_1.2fr] md:gap-10 md:py-12"
          >
            <span className="display text-5xl text-accent md:text-7xl">
              {i + 1}
            </span>
            <h3 className="text-2xl font-bold leading-tight tracking-[-.03em] md:text-3xl">
              {s.t}
            </h3>
            <p className="text-mute md:text-lg">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Checklist({
  items,
  id,
  kicker,
  title,
  tone,
  icon,
}: {
  items: string[];
  id?: string;
  kicker: string;
  title: React.ReactNode;
  tone: "volt" | "danger";
  icon: "check" | "x";
}) {
  const Icon = icon === "check" ? Check : X;
  return (
    <section
      id={id}
      aria-label={kicker}
      className={`${tone === "volt" ? "volt" : ""} scroll-mt-20 px-6 py-24 md:px-10 md:py-36 lg:px-14`}
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div>
          <p className="mono mb-8 flex items-center gap-3 opacity-70">
            <span
              aria-hidden
              className={`h-px w-8 ${tone === "volt" ? "bg-paper" : "bg-danger"}`}
            />{" "}
            {kicker}
          </p>
          <h2 className="type-h2 rv !text-[clamp(2.2rem,5vw,5rem)]">{title}</h2>
        </div>
        <ul className="divide-y divide-[color:var(--color-line)] border-y border-line">
          {items.map((t) => (
            <li
              key={t}
              className="rv flex gap-5 py-6 text-lg leading-snug md:text-xl"
            >
              <span
                className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${tone === "volt" ? "bg-[#0a0a0b] text-[#d7ff1f]" : "bg-danger text-[#0a0a0b]"}`}
              >
                <Icon size={16} strokeWidth={3} aria-hidden />
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export const _slug = slugify;
