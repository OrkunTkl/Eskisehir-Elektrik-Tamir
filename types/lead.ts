export type LeadStatus = "new" | "contacted" | "assigned" | "completed" | "cancelled";
// Veritabanı satırı (backend aşamasında kullanılacak)
export type Lead = {
  id: string; created_at: string; name: string; phone: string; district?: string;
  problem_type?: string; service_type?: string; description?: string; source?: string;
  utm_source?: string; utm_medium?: string; utm_campaign?: string; landing_page?: string;
  status: LeadStatus; assigned_provider_id?: string; notes?: string;
};
// Formdan gelen girdi
export type LeadInput = {
  name: string; phone: string; problem_type: string; district?: string; description?: string;
  preferred_time?: string; source?: string; utm_source?: string; utm_medium?: string; utm_campaign?: string; landing_page?: string;
};