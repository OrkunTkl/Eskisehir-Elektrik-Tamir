const PAD = "px-6 md:px-10 lg:px-14";
// "Net süreç" iddiası yalnızca talep takibi gerçekten yapılıyorsa true yapılmalı.
const SHOW_TRACKING_CLAIM = false;
const items = [
  ["TEK TEMAS", "Sorununuzu bir kez anlatın."],
  ["YEREL YÖNLENDİRME", "Eskişehir'deki uygun servis sağlayıcıya ulaşalım."],
  ...(SHOW_TRACKING_CLAIM
    ? [["NET SÜREÇ", "Talebinizin hangi aşamada olduğunu takip edelim."]]
    : []),
];
export function SingleContact() {
  return (
    <section
      aria-labelledby="tek"
      className={`border-t border-line py-28 md:py-44 ${PAD}`}
    >
      <h2 id="tek" className="type-h2">
        TEK BİR
        <br />
        İLETİŞİM NOKTASI.
      </h2>
      <p className="type-body mt-10 md:mt-14">
        Farklı numaralar aramak veya kimden hizmet alacağınızı araştırmak yerine
        ihtiyacınızı doğrudan bize aktarabilirsiniz.
      </p>
      <dl className="mt-16 border-b border-line md:mt-24">
        {items.map(([t, d]) => (
          <div
            key={t}
            className="grid gap-2 border-t border-line py-7 md:grid-cols-[1fr_2fr] md:gap-10 md:py-9"
          >
            <dt className="text-sm tracking-[.18em] text-accent-soft">{t}</dt>
            <dd className="text-xl text-paper/80 md:text-2xl">{d}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
