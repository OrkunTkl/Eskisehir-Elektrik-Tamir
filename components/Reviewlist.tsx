import { approvedReviews } from "@/data/reviews";
import Link from "next/link";
const stars = (n: number) => "★".repeat(n) + "☆".repeat(5 - n);
export function ReviewList({ limit }: { limit?: number }) {
  const list = limit ? approvedReviews.slice(0, limit) : approvedReviews;
  if (!list.length)
    return (
      <div className="border-y border-line py-12 md:py-16">
        <p className="text-2xl text-paper/80 md:text-3xl">
          İlk deneyimlerinizi burada paylaşabilirsiniz.
        </p>
        <p className="mt-4 max-w-xl text-mute">
          Yalnızca gerçek, onaylanmış deneyimler yayınlanır.
        </p>
        <Link
          href="/yorumlar#yorum-formu"
          className="mt-7 inline-flex rounded-full border border-white/25 px-6 py-3 font-medium transition hover:border-accent hover:text-accent-soft"
        >
          Deneyimimi paylaşmak istiyorum
        </Link>
      </div>
    );
  return (
    <ul className="border-b border-line">
      {list.map((r) => (
        <li
          key={r.id}
          className="grid gap-4 border-t border-line py-9 md:grid-cols-[1fr_3fr] md:gap-10 md:py-12"
        >
          <div className="text-sm text-mute">
            <p className="text-accent-soft" aria-label={`${r.rating} / 5 puan`}>
              {stars(r.rating)}
            </p>
            <p className="mt-2">
              {r.name}
              {r.district ? `, ${r.district}` : ""}
            </p>
            {r.service_type && <p className="mt-1">{r.service_type}</p>}
          </div>
          <blockquote className="max-w-3xl text-xl leading-snug text-paper/85 md:text-3xl">
            “{r.comment}”
          </blockquote>
        </li>
      ))}
    </ul>
  );
}
