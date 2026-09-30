import { meta } from "@/lib/seo";
import { PHONE_DISPLAY } from "@/lib/contact";

export const metadata = meta(
  "Aydınlatma Metni (KVKK)",
  "Kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
  "/gizlilik",
);

// Veri sorumlusu bilgileri gerçek değerler bilinince ortam değişkenleriyle girilir; girilmemişse satır hiç gösterilmez.
const controller = process.env.NEXT_PUBLIC_CONTROLLER_NAME?.trim();
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
const address = process.env.NEXT_PUBLIC_CONTROLLER_ADDRESS?.trim();

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24 md:py-40">
      <h1 className="type-page">Aydınlatma Metni</h1>
      <div className="mt-10 space-y-5 text-lg text-mute">
        <p>
          Bu site, Eskişehir&apos;de elektrik hizmeti arayan kullanıcıların
          talebini telefon veya WhatsApp üzerinden alıp uygun bağımsız servis
          sağlayıcıya yönlendirir. Sitedeki talep formu bilgileri bir sunucuya
          kaydetmez; girdiğiniz bilgiler yalnızca sizin başlattığınız hazır bir
          WhatsApp mesajına dönüşür.
        </p>
        <p>
          <strong className="font-medium text-paper">İşlenen veriler:</strong>{" "}
          Bizi aradığınızda veya WhatsApp&apos;tan yazdığınızda ilettiğiniz ad,
          telefon numarası, ilçe ve sorun açıklaması.
        </p>
        <p>
          <strong className="font-medium text-paper">Amaç:</strong> Talebinizi
          değerlendirmek, sizinle iletişime geçmek ve sizi uygun servis
          sağlayıcıya yönlendirmek.
        </p>
        <p>
          <strong className="font-medium text-paper">Aktarım:</strong>{" "}
          Talebinizi yönlendirebilmek için bilgileriniz, ilgili iş için seçilen
          bağımsız servis sağlayıcıyla paylaşılabilir.
        </p>
        <p>
          <strong className="font-medium text-paper">Haklarınız:</strong> 6698
          sayılı KVKK&apos;nın 11. maddesi uyarınca verilerinizin işlenip
          işlenmediğini öğrenme, düzeltilmesini veya silinmesini isteme ve
          itiraz etme haklarına sahipsiniz. Taleplerinizi aşağıdaki iletişim
          bilgilerinden iletebilirsiniz.
        </p>
        {(controller || email || address || PHONE_DISPLAY) && (
          <div>
            <p className="font-medium text-paper">Veri sorumlusu ve iletişim</p>
            <ul className="mt-2 space-y-1">
              {controller && <li>{controller}</li>}
              {address && <li>{address}</li>}
              {email && (
                <li>
                  E-posta:{" "}
                  <a
                    className="underline underline-offset-4 hover:text-paper"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </li>
              )}
              {PHONE_DISPLAY && <li>Telefon: {PHONE_DISPLAY}</li>}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
