"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { districts, problemOptions, waMessage } from "@/lib/contact";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const field =
  "mt-2 w-full rounded-xl border border-line bg-paper/[.05] px-4 py-3.5 text-base text-paper outline-none transition placeholder:text-mute/60 focus:border-paper";
const lbl = "block text-sm text-mute";

// Form sunucuya veri göndermez: bilgiler hazır bir WhatsApp mesajına dönüştürülür ve
// kullanıcı mesajı WhatsApp'ta kendisi gönderir.
export function CallbackForm() {
  const [err, setErr] = useState("");
  const [waUrl, setWaUrl] = useState("");
  const [problem, setProblem] = useState("");
  const [district, setDistrict] = useState("");
  const t0 = useRef(0);
  useEffect(() => {
    const on = (e: Event) =>
      setDistrict(String((e as CustomEvent).detail ?? ""));
    window.addEventListener("set-district", on);
    return () => window.removeEventListener("set-district", on);
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // honeypot: botlar doldurur
    const name = String(f.get("name") ?? "").trim();
    const phone = String(f.get("phone") ?? "").replace(/[^\d+]/g, "");
    const digits = phone.replace(/\D/g, "");
    if (name.length < 2) return setErr("Lütfen adınızı ve soyadınızı yazın.");
    if (!/^(\+?90|0)?5\d{9}$/.test(phone))
      return setErr(
        "Lütfen geçerli bir cep telefonu numarası yazın. Örnek: 0532 123 45 67",
      );
    if (!problem) return setErr("Lütfen sorun veya hizmet türünü seçin.");
    if (!t0.current || Date.now() - t0.current < 1500)
      return setErr("Lütfen bilgileri kontrol edip tekrar deneyin.");
    setErr("");
    const label = problemOptions.find((o) => o.value === problem)?.label ?? "";
    const desc = String(f.get("description") ?? "")
      .trim()
      .slice(0, 500);
    const lines = [
      "Merhaba, Eskişehir'de elektrik hizmeti almak istiyorum.",
      `Ad: ${name}`,
      `Telefon: ${digits}`,
      district ? `İlçe: ${district}` : "",
      `Sorun: ${label}`,
      desc ? `Açıklama: ${desc}` : "",
    ].filter(Boolean);
    const url = waMessage(lines.join("\n"));
    track("form_whatsapp_submit", {
      problem: label,
      district: district || undefined,
    });
    setWaUrl(url);
    // Kullanıcı hareketi içinde açılır; engellenirse aşağıdaki düğme kullanılır.
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (waUrl)
    return (
      <div role="status" className="rounded-3xl border border-line p-8">
        <p className="text-xl">
          WhatsApp mesajınız hazırlandı. Mesajı göndermek için WhatsApp&apos;ta
          &ldquo;Gönder&rdquo; düğmesine basmanız gerekir.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink"
          >
            <WhatsAppIcon size={18} /> WhatsApp&apos;ı yeniden aç
          </a>
          <button
            type="button"
            onClick={() => setWaUrl("")}
            className="text-mute underline underline-offset-4 hover:text-paper"
          >
            Bilgileri düzenle
          </button>
        </div>
      </div>
    );

  return (
    <form
      onSubmit={onSubmit}
      onFocus={() => {
        if (!t0.current) t0.current = Date.now();
      }}
      noValidate
      className="grid gap-5"
    >
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>
          Web sitesi
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className={lbl}>
          Ad Soyad
          <input
            name="name"
            autoComplete="name"
            maxLength={80}
            className={field}
          />
        </label>
        <label className={lbl}>
          Telefon
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={20}
            placeholder="05XX XXX XX XX"
            className={field}
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className={lbl}>
          Sorun / Hizmet
          <select
            value={problem}
            onChange={(e) => {
              setProblem(e.target.value);
              track("problem_selected", {
                problem: problemOptions.find((o) => o.value === e.target.value)
                  ?.label,
              });
            }}
            className={field}
          >
            <option value="">Seçin</option>
            {problemOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className={lbl}>
          İlçe
          <select
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
              if (e.target.value)
                track("district_selected", { district: e.target.value });
            }}
            className={field}
          >
            <option value="">Seçin (isteğe bağlı)</option>
            {districts.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </label>
      </div>
      <label className={lbl}>
        Kısa açıklama (isteğe bağlı)
        <textarea
          name="description"
          rows={3}
          maxLength={500}
          className={`${field} resize-none`}
        />
      </label>
      {err && (
        <p role="alert" className="text-sm text-[#c1260a]">
          {err}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="submit" className="btn btn-ink">
          <WhatsAppIcon size={18} /> WHATSAPP&apos;TAN GÖNDER
        </button>
        <p className="max-w-sm text-xs leading-relaxed text-mute">
          Bilgileriniz bu sitede saklanmaz; hazır bir WhatsApp mesajına dönüşür.{" "}
          <Link
            href="/gizlilik"
            className="underline underline-offset-2 hover:text-paper"
          >
            Aydınlatma metni
          </Link>
        </p>
      </div>
    </form>
  );
}
