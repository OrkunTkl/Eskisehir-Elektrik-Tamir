import { ReviewInput } from "@/types/reviews";

export const REVIEWS_ENABLED = process.env.NEXT_PUBLIC_REVIEWS_ENABLED === "true";
export const SITE_REVIEW_SCOPE = "Bu yorum, Eskişehir Elektrik platformundaki iletişim ve yönlendirme deneyimini değerlendirir; elektrik hizmetini veren servis sağlayıcıyı değerlendirmez.";
// Sayfada yıldız ortalaması gösterilecekse YALNIZCA gerçek onaylı yorumlardan hesaplanır; yorum yoksa null.
export const average = (r: { rating: number }[]) => (r.length ? r.reduce((a, b) => a + b.rating, 0) / r.length : null);
// TODO(backend): yorumlar status="pending" olarak kaydedilecek. Puana göre filtreleme (review gating) YAPILMAYACAK.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function submitReview(_input: ReviewInput): Promise<{ ok: boolean; reason?: "not_configured" | "error" }> {
  if (!REVIEWS_ENABLED) return { ok: false, reason: "not_configured" };
  return { ok: false, reason: "error" };
}