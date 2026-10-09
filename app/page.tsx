import Link from "next/link";
import { meta } from "@/lib/seo";
import { districts } from "@/lib/contact";
import { services } from "@/data/services";
import { problems } from "@/data/problems";
import { problemDocs } from "@/data/docs";
import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { Marquee } from "@/components/Marquee";
import { BreakerPanel, type PanelItem } from "@/components/BreakerPanel";
import { Manifesto } from "@/components/Manifesto";
import { ServiceStack } from "@/components/ServiceStack";
import { Process } from "@/components/Process";
import { Districts } from "@/components/Districts";
import { FaqSection } from "@/components/Faq";
import { CallbackSection } from "@/components/CallbackSection";
import { JsonLd } from "@/components/JsonLd";

export const metadata = meta(
  "Eskişehir Elektrikçi | Elektrik Arıza Rehberi ve Servis Yönlendirme",
  "Eskişehir'de elektrik arızası mı var? Sorunu tanıyın, güvenli ilk adımı öğrenin ve uygun elektrikçiye tek mesajla ulaşın. 9 hizmet, 9 arıza rehberi, 14 ilçe.",
  "/",
);

const rules: [string, string][] = [
  [
    "Islak elle dokunmayın.",
    "Islak zeminde ya da ıslak elle pano, priz ve elektrikli alete dokunmak çarpılma riskini ciddi biçimde artırır.",
  ],
  [
    "Kapakları açmayın.",
    "Priz, pano ve buat kapaklarının içi uzman işidir. Gördüğünüz her kablo bir şeye bağlıdır ve enerjili olabilir.",
  ],
  [
    "Sigortayı zorlamayın.",
    "Atan bir sigorta bir uyarıdır. Tekrar tekrar açmak arızayı gizler ve kabloyu ısıtır.",
  ],
  [
    "Amperi büyütmeyin.",
    "Sürekli atan sigortayı daha yüksek akımlısıyla değiştirmek, kabloların korumasız kalması demektir.",
  ],
  [
    "Koku varsa uzaklaşın.",
    "Yanık kokusunu aramayın. Cihazı güvenle çekebiliyorsanız çekin, hattı kapatın, alandan uzaklaşın.",
  ],
  [
    "Yangında su kullanmayın.",
    "Elektrik kaynaklı yangında önce 112. Su, enerjili ekipmanda tehlikeyi büyütür.",
  ],
];

const homeFaq = [
  {
    q: "Bu site bir elektrik firması mı?",
    a: "Hayır. Eskişehir Elektrik bir bilgi ve yönlendirme platformudur. Elektrik işini kendisi yapmaz; talebinizi ve ilçenizi değerlendirip uygun bağımsız servis sağlayıcıyla iletişim kurmanıza yardımcı olur. Fiyat ve işin kapsamı, işi yapacak servis sağlayıcıyla netleşir.",
  },
  {
    q: "Elektrik arızasında ilk ne yapmalıyım?",
    a: "Önce güvenliğinizi sağlayın: yanık kokusu, kıvılcım veya duman varsa alandan uzaklaşın ve 112'yi arayın. Belirti yoksa kesintinin yalnızca sizde mi yoksa binada mı olduğuna bakın, panoyu dışarıdan kontrol edin ve ilgili arıza rehberini okuyun.",
  },
  {
    q: "Eskişehir'in hangi ilçelerinden talep alabilirsiniz?",
    a: "Formda Tepebaşı ve Odunpazarı'nın yanı sıra Alpu'dan Sivrihisar'a kadar tüm Eskişehir ilçeleri seçilebilir. Gerçek kapsam, o gün bölgenizde çalışan servis sağlayıcılara göre değişir; bu yüzden her ilçe için kesin kapsam sözü vermiyoruz.",
  },
  {
    q: "Talebimi nasıl iletebilirim?",
    a: "WhatsApp'tan yazabilir ya da sayfadaki formu doldurabilirsiniz. Form sunucuya veri göndermez; bilgilerinizi hazır bir WhatsApp mesajına dönüştürür ve göndermeyi siz onaylarsınız.",
  },
  {
    q: "Fiyat ve süre hakkında bilgi verir misiniz?",
    a: "Hayır. Fiyatı ve gelme süresini platform belirlemez; bunlar işi yapacak bağımsız servis sağlayıcı tarafından, işin kapsamı netleştikten sonra bildirilir.",
  },
];

const panelItems: PanelItem[] = problems.map((p) => {
  const d = problemDocs[p.slug];
  return {
    slug: p.slug,
    label: p.label,
    title: p.title,
    severity: p.severity,
    lead: d.lead
      .split(/(?<=\.)\s/)
      .slice(0, 2)
      .join(" "),
    causes: d.causes.slice(0, 3).map((c) => c.t),
    step: d.steps[0].d,
  };
});

const d = (ms: number) =>
  ({ ["--d" as string]: `${ms}ms` }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <Hero
        meter={
          <dl className="mono grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-6 text-mute">
            {[
              [String(problems.length), "arıza rehberi"],
              [String(services.length), "hizmet başlığı"],
              [String(districts.length), "ilçe"],
            ].map(([n, l], i) => (
              <div key={l} className="rise" style={d(1500 + i * 120)}>
                <dd className="display !tracking-[-.04em] text-[clamp(2.2rem,5vw,3.8rem)] text-paper">
                  {n}
                </dd>
                <dt className="mt-1">{l}</dt>
              </div>
            ))}
          </dl>
        }
      >
        <p
          className="mono rise mb-8 flex items-center gap-3 text-mute"
          style={d(200)}
        >
          <span className="live-dot h-2 w-2 rounded-full bg-accent" /> Eskişehir
          · Arıza rehberi &amp; servis yönlendirme
        </p>
        <h1 className="display text-[clamp(3.2rem,min(15.5vw,21vh),16rem)]">
          <span className="hl">
            <span style={d(300)}>Elektrik</span>
          </span>
          <span className="hl">
            <span style={d(420)}>
              gitti<span className="text-accent">,</span>
            </span>
          </span>
          <span className="hl">
            <span
              className="serif !tracking-[-.03em] font-normal text-accent flick"
              style={d(560)}
            >
              sakin kalın.
            </span>
          </span>
        </h1>
        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[1.2fr_1fr] md:items-end">
          <p className="type-body rise !max-w-xl" style={d(900)}>
            Eskişehir&apos;de arızayı tanıyın, güvenli ilk adımı öğrenin;
            gerekiyorsa bölgenizdeki uygun elektrikçiye tek mesajla ulaşın.
          </p>
          <div className="rise md:justify-self-end" style={d(1050)}>
            <Cta />
          </div>
        </div>
      </Hero>

      <Marquee />

      <section
        aria-labelledby="teshis"
        className="px-6 py-28 md:px-10 md:py-44 lg:px-14"
      >
        <p className="mono mb-8 flex items-center gap-3 text-mute">
          <span aria-hidden className="h-px w-8 bg-accent" /> 01 · Belirtiyi
          seçin
        </p>
        <h2 id="teshis" className="type-h2 rv max-w-5xl">
          Panoyu açın.
          <br />
          <span className="serif font-normal text-accent">Hangi hat</span> attı?
        </h2>
        <p className="type-body rv mt-8" style={d(120)}>
          Bir şalteri indirin: belirtinin olası nedenlerini, güvenli ilk adımı
          ve ne zaman servis çağırmanız gerektiğini görün.
        </p>
        <div className="rv mt-14 md:mt-20" style={d(150)}>
          <BreakerPanel items={panelItems} />
        </div>
      </section>

      <section
        aria-label="Yaklaşımımız"
        className="border-t border-line px-6 py-28 md:px-10 md:py-48 lg:px-14"
      >
        <Manifesto
          className="display max-w-[22ch] text-[clamp(2.4rem,7.4vw,8rem)] !leading-[.98] md:max-w-[26ch]"
          text="Elektrikle ilgili en iyi karar çoğu zaman acele etmemektir. Önce ne olduğunu anlayın, sonra güvenli olanı yapın, gerisini uzmana bırakın."
        />
      </section>

      <section aria-labelledby="hizmetler" className="pb-20 md:pb-32">
        <div className="px-6 md:px-10 lg:px-14">
          <p className="mono mb-8 flex items-center gap-3 text-mute">
            <span aria-hidden className="h-px w-8 bg-accent" /> 02 · Hizmetler
          </p>
          <h2 id="hizmetler" className="type-h2 rv">
            Dokuz konu,
            <br />
            <span className="serif font-normal text-accent">tek adres.</span>
          </h2>
        </div>
        <div className="mt-14 md:mt-24">
          <ServiceStack />
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/hizmetler" className="btn btn-ghost">
            Tüm hizmet dizini
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="nasil"
        className="border-t border-line px-6 py-28 md:px-10 md:py-44 lg:px-14"
      >
        <p className="mono mb-8 flex items-center gap-3 text-mute">
          <span aria-hidden className="h-px w-8 bg-accent" /> 03 · Nasıl
          çalışır?
        </p>
        <h2 id="nasil" className="type-h2 rv max-w-4xl">
          Siz anlatın.
          <br />
          <span className="serif font-normal text-accent">
            Geri kalanı
          </span>{" "}
          yolda.
        </h2>
        <Process />
      </section>

      <section
        aria-labelledby="kurallar"
        className="bone px-6 py-28 md:px-10 md:py-44 lg:px-14"
      >
        <p className="mono mb-8 flex items-center gap-3 text-mute">
          <span aria-hidden className="h-px w-8 bg-paper" /> 04 · Altı güvenlik
          kuralı
        </p>
        <h2 id="kurallar" className="type-h2 rv max-w-5xl">
          Yapmayacağınız
          <br />
          <span className="serif font-normal">altı şey.</span>
        </h2>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-line bg-[#0a0a0b24] md:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {rules.map(([t, p], i) => (
            <li
              key={t}
              className="rv flex min-h-72 flex-col justify-between bg-[#ecebe4] p-7 transition-colors duration-500 hover:bg-[#d7ff1f] md:p-10"
              style={d(i * 70)}
            >
              <span className="display text-[5rem] leading-none text-paper/15 md:text-[7rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-bold tracking-[-.03em] md:text-3xl">
                  {t}
                </h3>
                <p className="mt-3 text-mute">{p}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="ilceler"
        className="px-6 py-28 md:px-10 md:py-44 lg:px-14"
      >
        <p className="mono mb-8 flex items-center gap-3 text-mute">
          <span aria-hidden className="h-px w-8 bg-accent" /> 05 · Hizmet alanı
        </p>
        <h2 id="ilceler" className="type-h2 rv max-w-5xl">
          Eskişehir&apos;in{" "}
          <span className="serif font-normal text-accent">14 ilçesi.</span>
        </h2>
        <p className="type-body rv mt-8" style={d(100)}>
          İlçenize dokunun, talep formu sizin için seçilsin. Kapsam, o gün
          bölgenizde çalışan servis sağlayıcılara göre değişir.
        </p>
        <div className="mt-14 md:mt-20">
          <Districts list={districts} />
        </div>
      </section>

      <section className="border-t border-line px-6 py-28 md:px-10 md:py-40 lg:px-14">
        <FaqSection items={homeFaq} id="sss-ana" />
      </section>

      <CallbackSection />
    </>
  );
}
