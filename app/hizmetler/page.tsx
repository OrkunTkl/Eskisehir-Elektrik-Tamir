import { ServiceList } from "@/components/ServiceList";
import { PageHero } from "@/components/PageHero";
import { CallbackSection } from "@/components/CallbackSection";
import { Transparency } from "@/components/Transparency";
import { meta } from "@/lib/seo";

export const metadata = meta(
  "Elektrik Hizmetleri | Eskişehir Elektrik",
  "Eskişehir'de elektrik arızası, tesisat, avize montajı, priz, sigorta ve kaçak akım için hizmet başlıkları. Konuyu seçin, rehberi okuyun, uygun servise ulaşın.",
  "/hizmetler",
);

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Hizmet dizini"
        title="Dokuz konu, her biri kendi rehberiyle."
        lead="Eskişehir'de karşılaşılan elektrik sorunları için hizmet başlıkları. Bir başlık seçin; ilgili sayfada belirtileri, hazırlanmanız gerekenleri ve ne yapmamanız gerektiğini görün."
      />
      <div className="border-t border-line">
        <ServiceList as="h2" />
      </div>
      <Transparency />
      <CallbackSection />
    </>
  );
}
