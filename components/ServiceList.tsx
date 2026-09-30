import Link from "next/link";
import { services } from "@/data/services";

export function ServiceList({ as: H = "h3" }: { as?: "h2" | "h3" }) {
  return (
    <ul className="border-b border-line">
      {services.map((s, i) => (
        <li key={s.slug}>
          <Link
            href={`/${s.slug}`}
            className="group block border-t border-line px-6 py-9 transition-[background-color,border-color] duration-500 hover:border-accent/50 hover:bg-white/[.025] focus-visible:border-accent/50 focus-visible:bg-white/[.025] md:px-10 md:py-14 lg:px-14"
          >
            <div className="flex flex-col gap-5 md:grid md:grid-cols-[8rem_minmax(0,1fr)_minmax(0,21rem)] md:items-baseline md:gap-10 lg:grid-cols-[10rem_minmax(0,1fr)_minmax(0,24rem)]">
              <span className="flex items-center gap-3 text-xl font-light tabular-nums text-mute transition-colors duration-500 group-hover:text-accent group-focus-visible:text-accent md:text-3xl">
                {String(i + 1).padStart(2, "0")}
                <span
                  aria-hidden
                  className="h-px w-8 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
                <span
                  aria-hidden
                  className="-ml-2 h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity delay-300 duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                />
              </span>
              <H className="text-[clamp(2.2rem,9vw,3.5rem)] font-semibold leading-[1] tracking-[-.04em] text-paper transition-transform duration-500 md:text-[clamp(3rem,4.6vw,6rem)] group-hover:translate-x-1">
                {s.title}
              </H>
              <p className="max-w-md text-base leading-relaxed text-mute transition-colors duration-500 group-hover:text-paper/80 md:text-lg">
                {s.desc}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
