import { meta } from "@/lib/seo";
export const metadata = meta(
  "Aydınlatma Metni (KVKK)",
  "Kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
  "/gizlilik",
);
export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-32 md:py-44">
      <h1 className="type-page">Aydınlatma Metni</h1>
      <div className="mt-10 space-y-5 text-lg text-mute">
        <p>
          Talep formuna yazdığınız ad, telefon, ilçe ve açıklama bilgileri
          yalnızca talebinizi değerlendirmek, sizi aramak ve uygun servis
          sağlayıcıya yönlendirmek amacıyla işlenir.
        </p>
        <p>Veri sorumlusu: [UNVAN / İLETİŞİM BİLGİSİ BURAYA EKLENECEK]</p>
        <p>
          KVKK kapsamındaki haklarınız ve başvuru yolları: [HUKUKİ METİN BURAYA
          EKLENECEK]
        </p>
      </div>
    </article>
  );
}
