"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { problemOptions, waContextLink } from "@/lib/contact";
import { districts, timeSlots, submitLead, getAttribution } from "@/lib/leads";
import { track } from "@/lib/analytics";

const field =
  "mt-2 w-full rounded-xl border border-line bg-white/[.04] px-4 py-3 text-paper outline-none transition placeholder:text-mute/60 focus:border-accent";
const lbl = "block text-sm text-mute";
type Status = "idle" | "sending" | "done" | "fallback" | "error";

export function CallbackForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState("");
  const [problem, setProblem] = useState("");
  const [district, setDistrict] = useState("");
  const [fileName, setFileName] = useState("");
  const started = useRef(false);
  const t0 = useRef(Date.now());
  const ev = () => ({
    problem: problemOptions.find((o) => o.value === problem)?.label,
    district: district || undefined,
  });

  const onStart = () => {
    if (started.current) return;
    started.current = true;
    t0.current = Date.now();
    track("lead_started", ev());
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // honeypot: botlar doldurur
    const name = String(f.get("name") ?? "").trim();
    const phone = String(f.get("phone") ?? "").replace(/[^\d+]/g, "");
    const digits = phone.replace(/\D/g, "");
    if (name.length < 2) return setErr("Lütfen adınızı ve soyadınızı yazın.");
    if (digits.length < 10 || digits.length > 13)
      return setErr("Lütfen geçerli bir telefon numarası yazın.");
    if (!problem) return setErr("Lütfen sorun veya hizmet türünü seçin.");
    if (Date.now() - t0.current < 2500)
      return setErr("Lütfen formu kontrol edip tekrar gönderin.");
    setErr("");
    setStatus("sending");
    track("callback_submit", ev());
    const res = await submitLead({
      name,
      phone,
      problem_type: problem,
      district: district || undefined,
      description:
        String(f.get("description") ?? "")
          .trim()
          .slice(0, 500) || undefined,
      preferred_time: String(f.get("time") ?? "") || undefined,
      ...getAttribution(),
    });
    if (res.ok) {
      track("lead_submitted", ev());
      track("lead_completed", ev());
      setStatus("done");
    } else setStatus(res.reason === "not_configured" ? "fallback" : "error");
  }

  if (status === "done")
    return (
      <p role="status" className="rounded-2xl border border-line p-8 text-xl">
        Talebiniz bize ulaştı. Sizi en kısa sürede arayacağız.
      </p>
    );
  if (status === "fallback" || status === "error")
    return (
      <div role="status" className="rounded-2xl border border-line p-8">
        <p className="text-xl">
          {status === "fallback"
            ? "Talep formu şu an aktif değil."
            : "Talebiniz gönderilemedi."}{" "}
          Bize WhatsApp veya telefonla ulaşabilirsiniz.
        </p>
        <a
          href={waContextLink(problem, district)}
          onClick={() => track("whatsapp_click", ev())}
          className="mt-6 inline-flex rounded-full bg-paper px-7 py-3.5 font-medium text-ink transition-colors hover:bg-accent-soft"
        >
          WhatsApp ile yaz
        </a>
      </div>
    );

  return (
    <form
      onSubmit={onSubmit}
      onFocus={onStart}
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
      <div className="grid gap-5 md:grid-cols-2">
        <label className={lbl}>
          Uygun zaman (isteğe bağlı)
          <select name="time" className={field}>
            {timeSlots.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className={lbl}>
          Fotoğraf ekle (isteğe bağlı)
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
            className={`${field} text-sm file:mr-3 file:rounded-full file:border-0 file:bg-white/10 file:px-3 file:py-1 file:text-paper`}
          />
          {fileName && (
            <span className="mt-1 block text-xs text-mute/70">{fileName}</span>
          )}
        </label>
      </div>
      {err && (
        <p role="alert" className="text-sm text-[#ff9b9b]">
          {err}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-paper px-8 py-3.5 font-semibold tracking-wide text-ink transition-colors hover:bg-accent-soft disabled:opacity-60"
        >
          {status === "sending" ? "GÖNDERİLİYOR…" : "TALEBİMİ İLET"}
        </button>
        <p className="max-w-sm text-xs leading-relaxed text-mute">
          Bilgilerinizi yalnızca talebinizi değerlendirmek ve sizi aramak için
          kullanırız.{" "}
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
