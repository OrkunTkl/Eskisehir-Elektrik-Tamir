export type ReviewStatus = "pending" | "approved" | "rejected";
// Site yorumu: YALNIZCA platformdaki iletişim/yönlendirme deneyimini değerlendirir (Google yorumu değildir).
export type Review = {
  id: string; created_at: string; name: string; rating: 1 | 2 | 3 | 4 | 5; comment: string;
  service_type?: string; district?: string; provider_id?: string;
  status: ReviewStatus; moderation_reason?: string; // spam | sahte | hakaret | kişisel veri | hukuki
};
export type ReviewInput = Pick<Review, "name" | "rating" | "comment" | "service_type" | "district" | "provider_id">;