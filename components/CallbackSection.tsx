import { CallbackForm } from "@/components/CallbackForm";
export function CallbackSection() {
  return (
    <section
      id="talep"
      aria-labelledby="talep-h"
      className="scroll-mt-20 border-t border-line px-6 py-24 md:px-10 md:py-40 lg:px-14"
    >
      <div className="grid gap-14 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <div>
          <h2 id="talep-h" className="type-h2">
            TALEBİNİZİ
            <br />
            İLETİN.
          </h2>
          <p className="type-body mt-8">
            Bilgilerinizi yazın; WhatsApp&apos;ta hazır bir mesaj olarak
            açılsın. Mesajı göndermeniz yeterli.
          </p>
        </div>
        <CallbackForm />
      </div>
    </section>
  );
}
