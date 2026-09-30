import { meta } from "@/lib/seo";
import { ReviewRequest } from "@/components/ReviewRequest";
export const metadata = {
  ...meta(
    "Deneyiminizi paylaşmak ister misiniz?",
    "Platform ve servis sağlayıcı deneyiminizi ayrı ayrı paylaşın.",
    "/deneyiminizi-paylasin",
  ),
  robots: { index: false },
};
export default function Page() {
  // TODO(backend): tamamlanan talebe ait servis sağlayıcının googleReviewUrl değeri sunucudan alınıp buraya verilecek.
  // URL parametresinden link ALINMAZ (kötüye kullanım riski). Şimdilik link yok -> ikinci CTA görünmez.
  return (
    <div className="px-6 py-32 md:px-10 md:py-44 lg:px-14">
      <h1 className="type-page">Deneyiminizi paylaşmak ister misiniz?</h1>
      <div className="mt-16 md:mt-24">
        <ReviewRequest googleReviewUrl={undefined} />
      </div>
    </div>
  );
}
