import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { SeoImage } from "@/components/SeoImage";

/**
 * Hizmetleri kaydırdıkça üst üste binen (sticky) kartlar olarak gösterir.
 * Sunucu bileşenidir; ek JS gerektirmez. Başlık seviyesi `as` ile ayarlanır.
 */
export function ServiceStack({ as: H = "h3" }: { as?: "h2" | "h3" }) {
  return (
    <ul role="list" className="px-6 pb-24 md:px-10 lg:px-14">
      {services.map((s, i) => (
        <li
          key={s.slug}
          className="sticky mb-6 md:mb-10"
          // Her kart bir öncekinin biraz altında durur, böylece yığın görünür.
          style={{ top: `calc(var(--header-h) + 1rem + ${i * 0.75}rem)` }}
        >
          <Link
            href={`/${s.slug}`}
            className="group grid overflow-hidden rounded-[2rem] border border-line bg-ink-2 transition-colors duration-500 hover:border-accent/50 focus-visible:border-accent/50 md:grid-cols-[1.1fr_1fr]"
          >
            <div className="flex flex-col justify-between gap-10 p-6 md:p-10">
              <span className="mono text-mute transition-colors duration-500 group-hover:text-accent">
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </span>
              <div>
                <H className="text-[clamp(2rem,6vw,3.5rem)] font-semibold leading-[1] tracking-[-.04em] text-paper">
                  {s.title}
                </H>
                <p className="mt-4 max-w-md text-base leading-relaxed text-mute md:text-lg">
                  {s.desc}
                </p>
                <span className="mono mt-6 inline-flex items-center gap-2 text-paper">
                  Detayları gör
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-ink md:aspect-auto md:min-h-[18rem]">
              <SeoImage
                decorative
                src={s.image}
                width={800}
                height={600}
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ServiceStack;
