import { Phone } from "lucide-react";
import { externalProps, telLink, waLink } from "@/lib/contact";
import { TrackLink } from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
export function Cta({ problem }: { problem?: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      <TrackLink
        event="phone_click"
        href={telLink()}
        className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-medium text-ink transition hover:bg-accent-soft"
      >
        <Phone size={18} aria-hidden /> Hemen Ara
      </TrackLink>
      <TrackLink
        event="whatsapp_click"
        params={{ problem }}
        href={waLink(problem)}
        {...externalProps}
        className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[.04] px-6 py-3 font-medium text-paper transition hover:border-accent hover:text-accent-soft"
      >
        <WhatsAppIcon size={18} /> WhatsApp&apos;tan Yaz
      </TrackLink>
    </div>
  );
}
