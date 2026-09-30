"use client";
import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import {
  DEFAULT_WA_MESSAGE,
  PHONE_DISPLAY,
  telLink,
  waMessage,
} from "@/lib/contact";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const DEFAULT_MSG = DEFAULT_WA_MESSAGE;
// WhatsApp marka renkleri
const WA_GREEN = "#25D366";
const WA_DARK = "#075E54";
const WA_CREAM = "#efeae2";

export function FloatingContact() {
  const [panel, setPanel] = useState<"wa" | "tel" | null>(null);
  const [msg, setMsg] = useState(DEFAULT_MSG);

  useEffect(() => {
    if (!panel) return;
    const key = (e: KeyboardEvent) => e.key === "Escape" && setPanel(null);
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [panel]);

  const toggle = (p: "wa" | "tel") => setPanel((cur) => (cur === p ? null : p));

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 md:flex">
      {panel === "wa" && (
        <div
          role="dialog"
          aria-label="WhatsApp ile mesaj yazın"
          className="w-80 overflow-hidden rounded-2xl shadow-2xl"
          style={{ background: WA_CREAM, color: "#111b21" }}
        >
          <div
            className="flex items-center gap-3 px-4 py-3 text-white"
            style={{ background: WA_DARK }}
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full text-white"
              style={{ background: WA_GREEN }}
            >
              <WhatsAppIcon size={22} />
            </span>
            <div className="leading-tight">
              <p className="font-semibold">WhatsApp ile yazın</p>
              <p className="text-xs text-white/70">Eskişehir Elektrik</p>
            </div>
          </div>
          <div className="p-4">
            <label
              htmlFor="fc-msg"
              className="block text-sm"
              style={{ color: "#54656f" }}
            >
              Mesajınız
            </label>
            <textarea
              id="fc-msg"
              rows={4}
              maxLength={500}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="mt-1 w-full resize-none rounded-xl border bg-white p-3 text-sm outline-none"
              style={{ borderColor: "#d1d7db", color: "#111b21" }}
            />
            <button
              onClick={() => {
                if (msg.trim())
                  window.open(
                    waMessage(msg.trim()),
                    "_blank",
                    "noopener,noreferrer",
                  );
              }}
              disabled={!msg.trim()}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full py-2.5 font-semibold transition hover:brightness-95 disabled:opacity-50"
              style={{ background: WA_GREEN, color: "#04331a" }}
            >
              <WhatsAppIcon size={18} /> WhatsApp&apos;ta gönder
            </button>
            <p className="mt-2 text-xs" style={{ color: "#54656f" }}>
              Mesaj WhatsApp&apos;ta açılır; göndermek için orada onaylamanız
              gerekir.
            </p>
          </div>
        </div>
      )}
      {panel === "tel" && (
        <div
          role="dialog"
          aria-label="Telefon"
          className="w-72 rounded-2xl border border-line bg-[#131316] p-5 shadow-2xl"
        >
          <p className="text-sm text-mute">Telefon</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">
            {PHONE_DISPLAY}
          </p>
          <a
            href={telLink()}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-accent py-2.5 font-semibold text-ink"
          >
            <Phone size={16} aria-hidden /> Ara
          </a>
        </div>
      )}
      <div className="flex gap-3">
        <button
          aria-label="Telefon numarasını göster"
          aria-expanded={panel === "tel"}
          onClick={() => toggle("tel")}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-[#131316] transition hover:border-accent hover:text-accent-soft"
        >
          {panel === "tel" ? <X size={22} /> : <Phone size={22} />}
        </button>
        <button
          aria-label="WhatsApp ile mesaj yaz"
          aria-expanded={panel === "wa"}
          onClick={() => toggle("wa")}
          className="flex h-14 w-14 items-center justify-center rounded-full text-white transition"
          style={{ background: WA_GREEN }}
        >
          {panel === "wa" ? <X size={24} /> : <WhatsAppIcon size={28} />}
        </button>
      </div>
    </div>
  );
}
