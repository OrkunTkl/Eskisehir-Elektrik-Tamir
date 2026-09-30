export const TRANSPARENCY_TEXT =
  "Bu platform, Eskişehir'de elektrik hizmeti arayan kullanıcıları anlaşmalı servis sağlayıcılarla buluşturur. Elektrik hizmeti, yönlendirilen bağımsız servis sağlayıcı tarafından gerçekleştirilir.";
export function Transparency() {
  return (
    <section
      aria-label="Şeffaflık"
      className="border-t border-line px-6 py-14 md:px-10 md:py-20 lg:px-14"
    >
      <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-10">
        <p className="text-sm tracking-[.18em] text-mute">ŞEFFAFLIK</p>
        <p className="max-w-2xl text-lg text-paper/70">{TRANSPARENCY_TEXT}</p>
      </div>
    </section>
  );
}
