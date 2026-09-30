// Lead formu yardımcıları. BACKEND BAĞLANTISI YOK: submitLead şimdilik yalnızca bir yer tutucudur.
import type { LeadInput } from "@/types/lead";

export const LEADS_ENABLED = process.env.NEXT_PUBLIC_LEADS_ENABLED === "true";

export const districts = ["Tepebaşı", "Odunpazarı", "Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han", "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Sarıcakaya", "Seyitgazi", "Sivrihisar"];
export const timeSlots = ["Fark etmez", "Sabah", "Öğleden sonra", "Akşam"];

export function getAttribution() {
  if (typeof window === "undefined") return {};
  const q = new URLSearchParams(window.location.search);
  return {
    source: q.get("utm_source") ?? "direct",
    utm_source: q.get("utm_source") ?? undefined,
    utm_medium: q.get("utm_medium") ?? undefined,
    utm_campaign: q.get("utm_campaign") ?? undefined,
    landing_page: window.location.pathname,
  };
}

// TODO(backend): burada /api/leads veya Supabase insert çağrılacak. Sunucu tarafında rate-limit + doğrulama ekleyin.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function submitLead(_input: LeadInput): Promise<{ ok: boolean; reason?: "not_configured" | "error" }> {
  if (!LEADS_ENABLED) return { ok: false, reason: "not_configured" };
  return { ok: false, reason: "error" };
}