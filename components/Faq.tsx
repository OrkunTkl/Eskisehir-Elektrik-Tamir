import type { Faq } from "@/data/seo-content";
// Görünür SSS: içerik sayfada her zaman açık, gizli değil.
export function FaqSection({
  items,
  id = "sss",
}: {
  items: Faq[];
  id?: string;
}) {
  if (!items.length) return null;
  return (
    <section aria-labelledby={id} className="mt-16 max-w-3xl">
      <h2 id={id} className="text-2xl font-semibold md:text-3xl">
        Sık sorulan sorular
      </h2>
      <dl className="mt-6 border-b border-line">
        {items.map((f) => (
          <div key={f.q} className="border-t border-line py-6">
            <dt className="text-lg font-medium md:text-xl">{f.q}</dt>
            <dd className="mt-2 text-mute">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
