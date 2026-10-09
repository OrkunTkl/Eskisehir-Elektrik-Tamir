"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { Phone } from "lucide-react"; // telefon gizlendi
// import { externalProps, telLink, waLink } from "@/lib/contact";
import { externalProps, waLink } from "@/lib/contact";
import { services } from "@/data/services";
import { problems } from "@/data/problems";
import { TrackLink } from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const b =
  "flex items-center justify-center gap-2 rounded-full py-3 text-center text-[15px] font-medium";

// Hizmet veya arıza sayfasındaysa başlığı WhatsApp mesajına ekler.
function topicFor(path: string) {
  const p = path.match(/^\/ariza-merkezi\/([^/]+)\/?$/);
  if (p) return problems.find((x) => x.slug === p[1])?.title;
  return services.find((x) => `/${x.slug}` === path.replace(/\/$/, ""))?.title;
}

export function StickyCta() {
  const pathname = usePathname();
  const [hide, setHide] = useState(false);
  // Talep formu ekrandayken çubuğu gizle: ekranı kaplamasın.
  useEffect(() => {
    setHide(false);
    const el = document.getElementById("talep");
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setHide(e.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [pathname]);
  const topic = topicFor(pathname);
  return (
    <div
      aria-hidden={hide}
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-1 gap-2 border-t border-line bg-ink/95 px-3 pt-2.5 pb-[max(.625rem,env(safe-area-inset-bottom))] backdrop-blur-sm transition-transform duration-300 md:hidden ${hide ? "translate-y-full" : ""}`}
    >
      {/* Telefon ile arama gizlendi
      <TrackLink
        event="phone_click"
        href={telLink()}
        tabIndex={hide ? -1 : 0}
        className={`${b} bg-paper text-ink`}
      >
        <Phone size={17} aria-hidden /> Hemen Ara
      </TrackLink>
      */}
      <TrackLink
        event="whatsapp_click"
        params={{ problem: topic }}
        href={waLink(topic)}
        {...externalProps}
        tabIndex={hide ? -1 : 0}
        className={`${b} text-[#04331a]`}
        style={{ background: "#25D366" }}
      >
        <WhatsAppIcon size={17} /> WhatsApp
      </TrackLink>
    </div>
  );
}
