"use client";
import { useRef, useState } from "react";
import { districts } from "@/lib/leads";
import { problemOptions } from "@/lib/contact";
import { submitReview } from "@/lib/reviews";
const field =
  "mt-2 w-full rounded-xl border border-line bg-white/[.04] px-4 py-3 text-paper outline-none transition focus:border-accent";
const lbl = "block text-sm text-mute";
export function ReviewForm({ providerId }: { providerId?: string }) {
  const [rating, setRating] = useState(0);
  const [err, setErr] = useState("");
  const [state, setState] = useState<
    "idle" | "sending" | "done" | "off" | "error"
  >("idle");
  const t0 = useRef(Date.now());
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // honeypot
    const name = String(f.get("name") ?? "").trim();
    const comment = String(f.get("comment") ?? "").trim();
    if (name.length < 2)
      return setErr("Lütfen adınızı veya takma adınızı yazın.");
    if (!rating) return setErr("Lütfen 1 ile 5 arasında bir puan seçin.");
    if (comment.length < 10)
      return setErr("Lütfen deneyiminizi birkaç cümleyle yazın.");
    if (!f.get("confirm"))
      return setErr("Lütfen deneyimi yaşadığınızı onaylayın.");
    if (Date.now() - t0.current < 4000)
      return setErr("Lütfen yorumunuzu kontrol edip tekrar gönderin.");
    setErr("");
    setState("sending");
    const res = await submitReview({
      name,
      rating: rating as 1 | 2 | 3 | 4 | 5,
      comment: comment.slice(0, 1000),
      service_type: String(f.get("service") ?? "") || undefined,
      district: String(f.get("district") ?? "") || undefined,
      provider_id: providerId,
    });
    setState(
      res.ok ? "done" : res.reason === "not_configured" ? "off" : "error",
    );
  }
  if (state === "done")
    return (
      <p role="status" className="rounded-2xl border border-line p-8 text-xl">
        Teşekkürler. Yorumunuz incelendikten sonra yayınlanacaktır.
      </p>
    );
  if (state === "off" || state === "error")
    return (
      <p role="status" className="rounded-2xl border border-line p-8 text-xl">
        {state === "off"
          ? "Yorum formu şu an aktif değil."
          : "Yorumunuz gönderilemedi."}{" "}
        Lütfen daha sonra tekrar deneyin.
      </p>
    );
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>
          Web sitesi
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="rounded-xl border border-line p-4 text-sm text-mute">
        Bu form, elektrik hizmetini veren kişiyi değil;{" "}
        <strong className="font-medium text-paper">
          bizimle iletişim ve yönlendirme deneyiminizi
        </strong>{" "}
        değerlendirmeniz içindir.
      </p>
      <label className={lbl}>
        Ad / İsim
        <input
          name="name"
          maxLength={60}
          autoComplete="given-name"
          className={field}
        />
      </label>
      <fieldset>
        <legend className={lbl}>Puan (1-5)</legend>
        <div className="mt-2 flex gap-2" role="radiogroup" aria-label="Puan">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={`${n} puan`}
              onClick={() => setRating(n)}
              className={`h-12 w-12 rounded-full border text-lg transition ${rating >= n ? "border-accent bg-accent/20 text-accent-soft" : "border-line text-mute hover:border-white/30"}`}
            >
              {n}
            </button>
          ))}
        </div>
      </fieldset>
      <label className={lbl}>
        Yorum
        <textarea
          name="comment"
          rows={5}
          maxLength={1000}
          className={`${field} resize-none`}
        />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className={lbl}>
          Hizmet türü (isteğe bağlı)
          <select name="service" className={field}>
            <option value="">Seçin</option>
            {problemOptions.map((o) => (
              <option key={o.value}>{o.label}</option>
            ))}
          </select>
        </label>
        <label className={lbl}>
          İlçe (isteğe bağlı)
          <select name="district" className={field}>
            <option value="">Seçin</option>
            {districts.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="flex items-start gap-3 text-sm text-mute">
        <input
          type="checkbox"
          name="confirm"
          className="mt-1 h-4 w-4 accent-[#7c8cff]"
        />
        Elektrik hizmetini gerçekten aldıktan sonra bizimle iletişim/yönlendirme
        sürecini değerlendiriyorum.
      </label>
      {err && (
        <p role="alert" className="text-sm text-[#ff9b9b]">
          {err}
        </p>
      )}
      <p className="text-xs leading-relaxed text-mute/80">
        Yorumlar yayınlanmadan önce yalnızca spam, sahte içerik, hakaret,
        kişisel veri veya hukuka aykırılık açısından incelenir. Puanı ne olursa
        olsun uygun yorumlar yayınlanır; içerik değiştirilmez.
      </p>
      <div>
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-full bg-paper px-8 py-3.5 font-semibold tracking-wide text-ink transition-colors hover:bg-accent-soft disabled:opacity-60"
        >
          {state === "sending" ? "GÖNDERİLİYOR…" : "DENEYİMİMİ GÖNDER"}
        </button>
      </div>
    </form>
  );
}
