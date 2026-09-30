import Link from "next/link";
import { problems } from "@/data/problems";
// Seçici etkileşimli olduğu için, tüm rehberlere giden taranabilir düz bağlantı listesi.
export function ProblemLinks() {
  return (
    <section
      aria-labelledby="tum-rehberler"
      className="px-6 py-20 md:px-10 md:py-32 lg:px-14"
    >
      <h2
        id="tum-rehberler"
        className="text-3xl font-semibold tracking-tight md:text-5xl"
      >
        Tüm arıza rehberleri
      </h2>
      <ul className="mt-10 border-b border-line">
        {problems.map((p) => (
          <li
            key={p.slug}
            className="grid gap-2 border-t border-line py-6 md:grid-cols-[1fr_2fr] md:gap-10"
          >
            <Link
              href={`/ariza-merkezi/${p.slug}`}
              className="text-xl font-medium text-accent-soft underline-offset-4 hover:underline md:text-2xl"
            >
              {p.title}
            </Link>
            <p className="max-w-2xl text-mute">{p.short}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
