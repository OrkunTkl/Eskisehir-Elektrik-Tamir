import Link from "next/link";
import { problems } from "@/data/problems";
import { SeverityChip } from "@/components/SeverityChip";

export function ProblemLinks() {
  return (
    <section
      aria-labelledby="tum-rehberler"
      className="px-6 py-20 md:px-10 md:py-32 lg:px-14"
    >
      <h2 id="tum-rehberler" className="type-h2 !text-[clamp(2.4rem,6vw,6rem)]">
        Tüm arıza rehberleri
      </h2>
      <ul className="mt-12 border-b border-line">
        {problems.map((p, i) => (
          <li key={p.slug}>
            <Link
              href={`/ariza-merkezi/${p.slug}`}
              className="group relative grid gap-3 overflow-hidden border-t border-line py-8 md:grid-cols-[4rem_1fr_1.2fr_auto] md:items-center md:gap-8"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-paper/[.05] transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="mono relative text-mute">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative text-2xl font-semibold tracking-[-.03em] transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                {p.title}
              </span>
              <span className="relative max-w-xl text-mute">
                {p.short.split(/(?<=\.)\s/)[0]}
              </span>
              <SeverityChip s={p.severity} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
