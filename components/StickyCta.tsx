"use client";
import { useEffect, useState } from "react";
import { telLink, waLink } from "@/lib/contact";
import { TrackLink } from "@/components/TrackLink";
const b = "rounded-full py-2.5 text-center text-sm font-medium";
export function StickyCta() {
  const [hide, setHide] = useState(false);
  // Talep formu ekrandayken çubuğu gizle: ekranı kaplamasın.
  useEffect(() => {
    const el = document.getElementById("talep");
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setHide(e.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      aria-hidden={hide}
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-line bg-ink/90 px-3 pt-2.5 pb-[max(.625rem,env(safe-area-inset-bottom))] backdrop-blur-sm transition-transform duration-300 md:hidden ${hide ? "translate-y-full" : ""}`}
    >
      <TrackLink
        event="phone_click"
        href={telLink()}
        tabIndex={hide ? -1 : 0}
        className={`${b} bg-paper text-ink`}
      >
        Ara
      </TrackLink>
      <TrackLink
        event="whatsapp_click"
        href={waLink()}
        tabIndex={hide ? -1 : 0}
        className={`${b} border border-white/25 text-paper`}
      >
        WhatsApp
      </TrackLink>
      <TrackLink
        event="callback_open"
        href="#talep"
        tabIndex={hide ? -1 : 0}
        className={`${b} border border-line text-mute`}
      >
        Bizi Arayın
      </TrackLink>
    </div>
  );
}
