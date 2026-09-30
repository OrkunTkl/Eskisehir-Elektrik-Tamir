import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/Faq";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CallbackSection } from "@/components/CallbackSection";
import { meta, breadcrumb } from "@/lib/seo";
import { districts } from "@/lib/contact";
export const metadata = meta(
  "Eskişehir Elektrik Desteği | Hizmet Alanı ve Yönlendirme",
  "Eskişehir'de elektrik sorunu için talebinizi nasıl iletirsiniz, hangi ilçeler için talep oluşturabilirsiniz ve yönlendirme nasıl işler? Tüm ayrıntılar bu sayfada.",
  "/eskisehir",
);
const faq = [
  {
    q: "Eskişehir'in her ilçesinde hizmet alabilir miyim?",
    a: "Talep formunda ilçenizi seçebilirsiniz. Hizmet kapsamı, anlaşmalı servis sağlayıcıların çalıştığı bölgelere göre değişir; bu nedenle her ilçe için kesin bir kapsam sözü vermiyoruz. Talebinizi aldıktan sonra bölgenize uygun bir servis sağlayıcı olup olmadığını değerlendiririz.",
  },
  {
    q: "Bu platformun kendi elektrikçi ekibi veya ofisi var mı?",
    a: "Hayır. Platform elektrik hizmetini kendisi vermez; talepleri uygun bağımsız servis sağlayıcıya yönlendirir. Hizmet, yönlendirilen servis sağlayıcı tarafından gerçekleştirilir.",
  },
  {
    q: "Talebimi nasıl iletebilirim?",
    a: "Telefonla arayabilir, WhatsApp'tan yazabilir veya sayfadaki formu doldurup bilgilerinizi hazır bir WhatsApp mesajı olarak gönderebilirsiniz. Sorununuzu ve ilçenizi yazmanız değerlendirmeyi kolaylaştırır.",
  },
];
export default function Page() {
  return (
    <>
      <div className="px-6 py-16 md:px-10 md:py-28 lg:px-14">
        <JsonLd
          data={breadcrumb([
            ["Ana Sayfa", "/"],
            ["Eskişehir", "/eskisehir"],
          ])}
        />
        <h1 className="type-page max-w-5xl">
          Eskişehir&apos;de elektrik desteği: hizmet alanı ve yönlendirme
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-mute md:text-xl">
          Bu platform, Eskişehir&apos;de elektrik sorunu yaşayanların talebini
          alır ve anlaşmalı, bağımsız servis sağlayıcılara yönlendirir. Fiziksel
          bir ofisi veya kendi servis ekibi yoktur.
        </p>
        <section className="mt-14 max-w-2xl">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Yönlendirme nasıl işler?
          </h2>
          <p className="mt-4 text-lg text-mute">
            Sorununuzu iletirsiniz; işin türünü ve bulunduğunuz ilçeyi
            değerlendirir, uygun bir servis sağlayıcıyla iletişim kurmanızı
            sağlarız. Fiyat ve işin kapsamı, hizmeti verecek servis sağlayıcıyla
            netleşir.
          </p>
        </section>
        <section className="mt-14 max-w-2xl" aria-labelledby="ilceler">
          <h2 id="ilceler" className="text-2xl font-semibold md:text-3xl">
            Talep oluşturabileceğiniz ilçeler
          </h2>
          <p className="mt-4 text-lg text-mute">{districts.join(", ")}.</p>
        </section>
        <RelatedLinks
          problemSlugs={[
            "elektrik-kesildi",
            "sigorta-neden-atar",
            "priz-calismiyor",
          ]}
          serviceSlugs={[
            "elektrik-ariza",
            "acil-elektrikci",
            "elektrik-tesisati",
            "avize-montaji",
          ]}
          heading="Sık karşılaşılan konular"
        />
        <FaqSection items={faq} />
        <div className="mt-12">
          <Cta />
        </div>
      </div>
      <CallbackSection />
    </>
  );
}
