import Link from "next/link";
import { problems } from "@/data/problems";
import { services } from "@/data/services";
const a =
  "text-accent-soft underline underline-offset-4 transition hover:text-paper";
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
  return (
    <nav aria-label={heading} className="mt-16 max-w-3xl">
      <h2 className="text-2xl font-semibold md:text-3xl">{heading}</h2>
      <ul className="mt-5 space-y-2 text-lg">
        {ps.map((p) => (
          <li key={p.slug}>
            <Link className={a} href={`/ariza-merkezi/${p.slug}`}>
              {p.title}
            </Link>
          </li>
        ))}
        {ss.map((s) => (
          <li key={s.slug}>
            <Link className={a} href={`/${s.slug}`}>
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
