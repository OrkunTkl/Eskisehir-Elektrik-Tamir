import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { problems } from "@/data/problems";
import { services } from "@/data/services";

export function RelatedLinks({
  problemSlugs = [],
  serviceSlugs = [],
  heading = "İlgili sayfalar",
}: {
  problemSlugs?: string[];
  serviceSlugs?: string[];
  heading?: string;
}) {
  const ps = problemSlugs
    .map((s) => problems.find((p) => p.slug === s))
    .filter(Boolean) as typeof problems;
  const ss = serviceSlugs
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;
  if (!ps.length && !ss.length) return null;
  const items = [
    ...ps.map((p) => ({
      href: `/ariza-merkezi/${p.slug}`,
      tag: "Arıza rehberi",
      title: p.title,
    })),
    ...ss.map((s) => ({ href: `/${s.slug}`, tag: "Hizmet", title: s.title })),
  ];
  return (
    <nav aria-label={heading}>
      <h2 className="type-h2 !text-[clamp(2.2rem,5vw,5rem)]">{heading}</h2>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="group flex h-full min-h-40 flex-col justify-between rounded-3xl border border-line p-6 transition-colors duration-500 hover:border-accent hover:bg-accent hover:text-[#0a0a0b]"
            >
              <span className="mono flex items-center justify-between text-mute transition-colors group-hover:text-[#0a0a0b]/70">
                {it.tag}
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </span>
              <span className="mt-8 text-2xl font-semibold leading-tight tracking-[-.03em]">
                {it.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
