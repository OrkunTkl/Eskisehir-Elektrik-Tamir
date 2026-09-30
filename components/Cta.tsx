import { Phone, MessageCircle } from "lucide-react";
import { telLink, waLink } from "@/lib/contact";
import { TrackLink } from "@/components/TrackLink";
export function Cta({ problem }: { problem?: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      <TrackLink
        event="phone_click"
        href={telLink()}
        className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[.04] px-6 py-3 font-medium text-paper transition hover:border-accent hover:text-accent-soft"
      >
        <Phone size={18} aria-hidden /> Telefonla Ulaş
      </TrackLink>
      <TrackLink
        event="whatsapp_click"
        params={{ problem }}
        href={waLink(problem)}
        className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-mute transition hover:border-accent hover:text-paper"
      >
        <MessageCircle size={18} aria-hidden /> WhatsApp
      </TrackLink>
      <TrackLink
        event="callback_open"
        href="#talep"
        className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-mute transition hover:border-accent hover:text-paper"
      >
        Sizi Arayalım
      </TrackLink>
    </div>
  );
}
