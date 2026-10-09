import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/Faq";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CallbackSection } from "@/components/CallbackSection";
import { PageHero } from "@/components/PageHero";
import { Districts } from "@/components/Districts";
import { Transparency } from "@/components/Transparency";
import { meta, breadcrumb } from "@/lib/seo";
import { districts } from "@/lib/contact";

export const metadata = meta(
  "Eskişehir Elektrik Desteği | Hizmet Alanı ve Yönlendirme",
  "Eskişehir'de elektrik sorunu için talebi nasıl iletirsiniz, hangi ilçeler seçilebilir, yönlendirme nasıl işler? Kış yükü, eski yapılar ve ilçe bazlı notlar.",
  "/eskisehir",
);

const faq = [
  {
    q: "Eskişehir'in her ilçesinde hizmet alabilir miyim?",
    a: "Talep formunda ilçenizi seçebilirsiniz. Hizmet kapsamı, anlaşmalı servis sağlayıcıların çalıştığı bölgelere göre değişir; bu nedenle her ilçe için kesin bir kapsam sözü vermiyoruz. Talebinizi aldıktan sonra bölgenize uygun bir servis sağlayıcı olup olmadığını değerlendiririz.",
  },
  {
    q: "Bu platformun kendi elektrikçi ekibi veya ofisi var mı?",
    a: "Hayır. Platform elektrik hizmetini kendisi vermez; talepleri uygun bağımsız servis sağlayıcıya yönlendirir. Fiziksel bir ofisi veya kendi servis ekibi yoktur. Hizmet, yönlendirilen servis sağlayıcı tarafından gerçekleştirilir.",
  },
  {
    q: "Talebimi nasıl iletebilirim?",
    a: "WhatsApp'tan yazabilir veya sayfadaki formu doldurup bilgilerinizi hazır bir WhatsApp mesajı olarak gönderebilirsiniz. Sorununuzu, ilçenizi ve varsa mahalle ya da site adını yazmanız değerlendirmeyi kolaylaştırır.",
  },
  {
    q: "Kışın elektrik sorunları neden artar?",
    a: "Soğuk aylarda elektrikli ısıtıcı, klima ve ek cihazlar aynı hatlara binen yükü artırır. Sigortanın sık atması, prizlerin ısınması ve kablo yıpranması bu dönemde daha sık fark edilir. Belirti görüyorsanız ısıtıcıyı ayrı bir hatta kullanmayı ve hattı elektrikçiye kontrol ettirmeyi düşünün.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          ["Ana Sayfa", "/"],
          ["Eskişehir", "/eskisehir"],
        ])}
      />
      <PageHero
        kicker="Hizmet alanı"
        title="Eskişehir'de elektrik desteği: hizmet alanı ve yönlendirme"
        lead="Bu platform, Eskişehir'de elektrik sorunu yaşayanların talebini alır ve anlaşmalı, bağımsız servis sağlayıcılara yönlendirir. Fiziksel bir ofisi veya kendi servis ekibi yoktur."
      >
        <Cta />
      </PageHero>

      <section className="border-t border-line px-6 py-24 md:px-10 md:py-40 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <h2 className="type-h2 rv !text-[clamp(2.2rem,5vw,5rem)]">
            Yönlendirme{" "}
            <span className="serif font-normal text-accent">nasıl işler?</span>
          </h2>
          <div className="prose-x rv">
            <p>
              Sorununuzu WhatsApp ya da form aracılığıyla iletirsiniz. Biz önce
              işin türüne bakarız: kesinti mi, bir hat arızası mı, montaj mı,
              yoksa güvenlik açısından beklememesi gereken bir belirti mi?
              Ardından bulunduğunuz ilçeyi değerlendirir ve o bölgede çalışan
              uygun bir bağımsız servis sağlayıcıyla iletişim kurmanıza yardımcı
              oluruz.
            </p>
            <p>
              Fiyat, gelme süresi ve işin kapsamı bizim değil, işi yapacak
              servis sağlayıcının konusudur. Bu nedenle sitede fiyat listesi ya
              da süre sözü bulmazsınız; bunun yerine talebinizi doğru ve
              eksiksiz iletmenize yardımcı olan rehberler sunarız.
            </p>
            <p>
              Güvenlikle ilgili bir belirtiniz varsa, servis sağlayıcıya
              ulaşmayı beklemeden ilgili arıza rehberindeki ilk adımları
              uygulayın. Yangın, duman veya yaralanma varsa doğrudan 112&apos;yi
              arayın.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bone px-6 py-24 md:px-10 md:py-40 lg:px-14"
        aria-labelledby="yerel"
      >
        <p className="mono mb-8 flex items-center gap-3 text-mute">
          <span aria-hidden className="h-px w-8 bg-paper" /> Eskişehir&apos;e
          özgü notlar
        </p>
        <h2 id="yerel" className="type-h2 rv max-w-5xl">
          Şehrin <span className="serif font-normal">elektrik karakteri.</span>
        </h2>
        <div className="mt-14 grid gap-3 md:mt-20 md:grid-cols-3">
          {[
            [
              "Sert kış, yüklü hatlar",
              "Soğuk aylarda elektrikli ısıtıcı ve ek cihaz kullanımı aynı hatlara binen yükü artırır. Sigorta atması ve priz ısınması bu dönemde daha sık görülür; ısıtıcıyı uzatma kablosuna takmamak ve ayrı bir hat kullanmak iyi bir alışkanlıktır.",
            ],
            [
              "Odunpazarı ve eski yapılar",
              "Eski binalarda ve ahşap evlerde tesisat, bugünkü cihaz yüküne göre tasarlanmamış olabilir. Topraklama eksikliği, yıpranmış yalıtım ve eski sigortalar bu yapılarda sık gündeme gelen konulardır.",
            ],
            [
              "Tepebaşı'nda yeni siteler",
              "Yeni yapılarda sorun çoğunlukla yoğun cihaz kullanımı, tadilat sonrası eklenen hatlar ve aydınlatma kontrol sistemlerinden doğar. Net bir tarif, sorunun site ortak alanında mı dairede mi olduğunu ayırmaya yardımcı olur.",
            ],
            [
              "Öğrenci evleri",
              "Kiralık ve kalabalık evlerde aynı prize çoklu cihaz takılması yaygındır. Çoklu priz zinciri kurmamak, ısınan prizi kullanmamak ve sorunu ev sahibine hızla bildirmek önemlidir.",
            ],
            [
              "Müstakil ve köy evleri",
              "Sivrihisar, Seyitgazi, Han ve diğer ilçelerde müstakil evlerde dış hat, bahçe aydınlatması ve eski sayaç panosu gibi konular öne çıkar. Talebinizde köy veya mahalle adını yazın.",
            ],
            [
              "Elektrik kesintisi mi, arıza mı?",
              "Bina veya mahalle genelindeki kesintiler dağıtım şirketinin konusudur. Yalnızca sizde sorun varsa iç tesisat devrededir. İlk kontrolü yapmak için elektrik kesildi rehberine göz atın.",
            ],
          ].map(([t, p], i) => (
            <div
              key={t}
              className="rv rounded-3xl border border-line p-7 md:p-9"
              style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}
            >
              <h3 className="text-2xl font-bold leading-tight tracking-[-.03em]">
                {t}
              </h3>
              <p className="mt-4 text-mute">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="px-6 py-24 md:px-10 md:py-40 lg:px-14"
        aria-labelledby="ilceler"
      >
        <h2 id="ilceler" className="type-h2 rv max-w-5xl">
          Talep oluşturabileceğiniz{" "}
          <span className="serif font-normal text-accent">ilçeler.</span>
        </h2>
        <p className="type-body mt-8">
          Bir ilçeye dokunun, talep formu o ilçe seçili olarak açılsın. Kapsam,
          bölgenizde o gün çalışan servis sağlayıcılara göre değişir.
        </p>
        <div className="mt-14 md:mt-20">
          <Districts list={districts} />
        </div>
        <p className="sr-only">{districts.join(", ")}.</p>
      </section>

      <div className="space-y-28 border-t border-line px-6 py-24 md:space-y-40 md:px-10 md:py-40 lg:px-14">
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
      </div>
      <Transparency />
      <CallbackSection />
    </>
  );
}
