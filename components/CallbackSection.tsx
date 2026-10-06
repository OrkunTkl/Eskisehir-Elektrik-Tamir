import { CallbackForm } from "@/components/CallbackForm";

export function CallbackSection() {
  return (
    <section
      id="talep"
      aria-labelledby="talep-h"
      className="bone scroll-mt-20 px-6 py-24 md:px-10 md:py-40 lg:px-14"
    >
      <div className="grid gap-14 lg:grid-cols-[5fr_6fr] lg:gap-24">
        <div>
          <p className="mono mb-8 flex items-center gap-3 text-mute">
            <span aria-hidden className="h-px w-8 bg-paper" /> Talep formu
          </p>
          <h2 id="talep-h" className="type-h2 rv">
            Tek mesaj.
            <br />
            <span className="serif font-normal">Gerisi</span> yönlendirme.
          </h2>
          <p
            className="type-body rv mt-8"
            style={{ ["--d" as string]: "120ms" }}
          >
            Bilgilerinizi yazın; WhatsApp&apos;ta hazır bir mesaj olarak
            açılsın. Siz sadece “Gönder”e basın. Bilgileriniz bu sitede
            saklanmaz.
          </p>
        </div>
        <div className="rv" style={{ ["--d" as string]: "150ms" }}>
          <CallbackForm />
        </div>
      </div>
    </section>
  );
}
