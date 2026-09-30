const PAD = "px-6 md:px-10 lg:px-14";
const steps = [
  [
    "01",
    "SORUNUNUZU ANLATIN",
    "Elektrik arızanızı, montaj ihtiyacınızı veya yapmak istediğiniz işi bize iletin.",
  ],
  [
    "02",
    "TALEBİNİZİ DEĞERLENDİRELİM",
    "İşin niteliğini ve hizmet bölgesini anlayarak uygun servis sağlayıcıyı belirleyelim.",
  ],
  [
    "03",
    "ELEKTRİKÇİYE YÖNLENDİRELİM",
    "Uygun servis sağlayıcıyla iletişiminizi sağlayalım.",
  ],
];
export function HowItWorks() {
  return (
    <section aria-labelledby="nasil" className={`py-28 md:py-44 ${PAD}`}>
      <p className="mb-8 flex items-center gap-3 text-xs tracking-[.22em] text-mute md:mb-12">
        <span aria-hidden className="h-px w-8 bg-accent/70" />
        NASIL ÇALIŞIYORUZ?
      </p>
      <h2 id="nasil" className="type-h1">
        SİZ ANLATIN.
        <br />
        GERİSİNİ
        <br />
        <span className="text-mute">BİZ HALLEDELİM.</span>
      </h2>
      <p className="type-body mt-10 md:mt-14">
        Elektrik sorununuzu telefon veya WhatsApp üzerinden anlatın.
        İhtiyacınızı değerlendirelim ve uygun servis sağlayıcıya yönlendirelim.
      </p>
      <ol className="mt-16 grid gap-4 md:mt-28 md:grid-cols-3 md:gap-5">
        {steps.map(([n, t, d]) => (
          <li
            key={n}
            className="group flex flex-col rounded-3xl border border-line bg-white/[.03] p-7 transition-colors duration-500 hover:border-accent/50 hover:bg-white/[.05] md:min-h-[24rem] md:p-9"
          >
            <span className="text-6xl font-semibold tracking-[-.05em] text-accent-soft/80 md:text-8xl">
              {n}
            </span>
            <span
              aria-hidden
              className="mt-8 h-px w-full bg-line transition-colors duration-500 group-hover:bg-accent/50"
            />
            <h3 className="mt-8 text-[clamp(1.5rem,2.2vw,2.25rem)] font-semibold leading-[1.05] tracking-[-.03em]">
              {t}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-mute md:mt-auto md:pt-10">
              {d}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
