// Bağımlılıksız analytics soyutlaması. Sayfada dataLayer / gtag / plausible varsa ona iletir, yoksa sessizce geçer.
export type EventName =
  | "phone_click" | "whatsapp_click" | "callback_open" | "callback_submit"
  | "problem_selected" | "service_selected" | "district_selected"
  | "lead_started" | "lead_submitted" | "lead_completed" | "provider_assigned";

export type EventParams = { problem?: string; service?: string; district?: string; source?: string; landing_page?: string };
const ALLOWED = ["problem", "service", "district", "source", "landing_page"] as const;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...a: unknown[]) => void;
    plausible?: (name: string, o?: { props?: Record<string, string> }) => void;
  }
}

// Telefon benzeri uzun rakam dizilerini olaya asla göndermeyiz.
const scrub = (v: string) => v.replace(/\+?\d[\d\s().-]{6,}\d/g, "[gizli]").slice(0, 100);

export function track(name: EventName, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  const p: Record<string, string> = { landing_page: window.location.pathname };
  for (const k of ALLOWED) {
    const v = params[k];
    if (v) p[k] = scrub(v);
  }
  if (!p.source) p.source = new URLSearchParams(window.location.search).get("utm_source") ?? "direct";
  try {
    window.dataLayer?.push({ event: name, ...p });
    window.gtag?.("event", name, p);
    window.plausible?.(name, { props: p });
    if (process.env.NODE_ENV === "development") console.debug("[track]", name, p);
  } catch {}
}