import { ServiceList } from "@/components/ServiceList";
import { meta } from "@/lib/seo";
export const metadata = meta(
  "Elektrik Hizmetleri | Eskişehir Elektrik",
  "Elektrik arızası, tesisat, avize montajı ve daha fazlası için hizmet başlıkları.",
  "/hizmetler",
);
export default function Page() {
  return (
    <div className="pb-28 pt-12 md:pb-44 md:pt-24">
      <div className="px-6 md:px-10 lg:px-14">
        <h1 className="type-h1">Hizmetler</h1>
        <p className="type-body mt-8 md:mt-12">
          Eskişehir&apos;de karşılaşılan elektrik sorunları için hizmet
          başlıkları. Bir başlık seçin; ilgili sayfada neler yapabileceğinizi
          görün ve uygun servis sağlayıcıya ulaşın.
        </p>
      </div>
      <div className="mt-16 md:mt-28">
        <ServiceList as="h2" />
      </div>
    </div>
  );
}
