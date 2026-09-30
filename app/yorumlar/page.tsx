import { meta } from "@/lib/seo";
import { ReviewForm } from "@/components/ReviewForm";
import { approvedReviews } from "@/data/reviews";
import { SITE_REVIEW_SCOPE } from "@/lib/reviews";
import { ReviewList } from "@/components/Reviewlist";
export const metadata = meta(
  "Gerçek Deneyimler",
  "Platformdaki iletişim ve yönlendirme deneyimini paylaşın.",
  "/yorumlar",
  { noindex: approvedReviews.length === 0 },
);
export default function Page() {
  return (
    <div className="px-6 py-32 md:px-10 md:py-44 lg:px-14">
      <h1 className="type-h1">
        GERÇEK
        <br />
        DENEYİMLER
      </h1>
      <p className="type-body mt-10 md:mt-14">
        Bizimle iletişim ve yönlendirme deneyiminizi paylaşın.{" "}
        {SITE_REVIEW_SCOPE}
      </p>
      <div className="mt-20 md:mt-28">
        <ReviewList />
      </div>
      <section
        id="yorum-formu"
        aria-labelledby="yf"
        className="mt-28 scroll-mt-20 grid gap-14 lg:grid-cols-[5fr_6fr] lg:gap-20 md:mt-44"
      >
        <h2 id="yf" className="type-h2">
          DENEYİMİNİZİ
          <br />
          PAYLAŞIN.
        </h2>
        <ReviewForm />
      </section>
    </div>
  );
}
