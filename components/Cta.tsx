// import { Phone } from "lucide-react"; // telefon gizlendi
// import { externalProps, telLink, waLink } from "@/lib/contact";
import { externalProps, waLink } from "@/lib/contact";
import { TrackLink } from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Cta({
  problem,
  tone = "dark",
}: {
  problem?: string;
  tone?: "dark" | "bone";
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Telefon ile arama gizlendi
      <TrackLink
        event="phone_click"
        href={telLink()}
        className={`btn ${tone === "bone" ? "btn-ink" : "btn-volt"}`}
      >
        <Phone size={18} aria-hidden /> Hemen Ara
      </TrackLink>
      */}
      <TrackLink
        event="whatsapp_click"
        params={{ problem }}
        href={waLink(problem)}
        {...externalProps}
        className={`btn ${tone === "bone" ? "btn-ink" : "btn-volt"}`}
      >
        <WhatsAppIcon size={18} /> WhatsApp&apos;tan Yaz
      </TrackLink>
    </div>
  );
}
