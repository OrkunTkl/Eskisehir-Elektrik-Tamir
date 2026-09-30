export const PHONE = "PHONE_PLACEHOLDER";
export const WHATSAPP = "WHATSAPP_PLACEHOLDER";
export const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
export const telLink = () => `tel:${PHONE}`;
export const waLink = (problem?: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Merhaba, Eskişehir'de elektrik desteğine ihtiyacım var." + (problem ? `\nSorunum: ${problem}` : ""))}`;
export const PHONE_DISPLAY = PHONE; // gerçek numara gelince okunaklı biçimde yazın, örn. "0 5XX XXX XX XX"
export const waMessage = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export type ProblemOption = { value: string; label: string; phrase: string; tail?: boolean };
export const problemOptions: ProblemOption[] = [
  { value: "sigorta", label: "Sigorta / şalter atıyor", phrase: "sigorta sürekli atıyor", tail: true },
  { value: "priz", label: "Priz / anahtar çalışmıyor", phrase: "priz çalışmıyor", tail: true },
  { value: "avize", label: "Avize / aydınlatma montajı", phrase: "avize montajı için elektrikçi desteğine ihtiyacım var" },
  { value: "kesinti", label: "Elektrik kesildi", phrase: "elektrik kesildi", tail: true },
  { value: "kacak", label: "Kaçak akım / elektrik kaçağı", phrase: "kaçak akım sorunu yaşıyorum", tail: true },
  { value: "yanik", label: "Yanık kokusu / kıvılcım", phrase: "yanık kokusu veya kıvılcım fark ettim", tail: true },
  { value: "diger", label: "Diğer", phrase: "elektrik sorunum var", tail: true },
];
// Yalnızca kullanıcının seçtiği bilgilerle mesaj üretir; hiçbir şey uydurmaz.
export function waContextLink(problemValue?: string, district?: string) {
  const o = problemOptions.find((x) => x.value === problemValue);
  const loc = district ? ` ${district} bölgesinde` : "'de";
  const msg = o
    ? `Merhaba, Eskişehir${loc}, ${o.phrase}.${o.tail ? " Elektrik desteğine ihtiyacım var." : ""}`
    : `Merhaba, Eskişehir${loc} elektrik desteğine ihtiyacım var.`;
  return waMessage(msg);
}