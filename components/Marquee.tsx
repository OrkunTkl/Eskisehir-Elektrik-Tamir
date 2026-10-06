import { problems } from "@/data/problems";

export function Marquee() {
  const items = [
    ...problems.map((p) => p.label),
    "Avize montajı",
    "Tesisat yenileme",
    "Aydınlatma",
    "Pano kontrolü",
  ];
  const row = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`px-8 text-[clamp(2.2rem,5vw,4.5rem)] font-bold uppercase tracking-[-.04em] ${i % 2 ? "serif !font-normal normal-case text-paper/80 !tracking-normal" : ""}`}
          >
            {t}
          </span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="shrink-0 opacity-90"
          >
            <path d="M13.2 1.5 4.5 13.4h6.1L9.4 22.5l9.1-12.4h-6.2z" />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div
      className="volt overflow-hidden border-y border-ink py-5"
      role="presentation"
    >
      <p className="sr-only">
        Sigorta atması, priz arızası, elektrik kesintisi, kaçak akım ve daha
        fazlası için rehberler.
      </p>
      <div className="marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
