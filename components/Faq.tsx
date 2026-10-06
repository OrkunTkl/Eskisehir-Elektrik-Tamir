import type { Faq } from "@/data/docs";

// Görünür SSS: içerik sayfada her zaman açık, gizli değil.
export function FaqSection({
  items,
  id = "sss",
  heading = "Sık sorulan sorular",
  className = "",
}: {
  items: Faq[];
  id?: string;
  heading?: string;
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <section aria-labelledby={id} className={className}>
      <h2 id={id} className="type-h2 !text-[clamp(2.2rem,5vw,5rem)]">
        {heading}
      </h2>
      <dl className="mt-10 border-b border-line">
        {items.map((f, i) => (
          <div
            key={f.q}
            className="rv grid gap-3 border-t border-line py-8 md:grid-cols-[4rem_1fr_1.1fr] md:gap-8 md:py-10"
          >
            <span className="mono text-mute">
              {String(i + 1).padStart(2, "0")}
            </span>
            <dt className="text-xl font-semibold leading-snug tracking-[-.02em] md:text-2xl">
              {f.q}
            </dt>
            <dd className="text-mute md:text-lg">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
