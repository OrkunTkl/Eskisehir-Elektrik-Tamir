import { meta } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { ProblemSelector } from "@/components/ProblemSelector";
import { ServiceList } from "@/components/ServiceList";
import { HowItWorks } from "@/components/HowItWorks";
import { SingleContact } from "@/components/SingleContact";
import { CallbackSection } from "@/components/CallbackSection";
import { ReviewSection } from "@/components/ReviewSection";
export const metadata = meta(
  "Eskişehir Elektrikçi | Elektrik Arıza ve Elektrikçi Desteği",
  "Eskişehir'de elektrik arızası için ne yapmanız gerektiğini öğrenin. Sorununuzu belirleyin ve uygun elektrikçi desteğine ulaşmak için bizimle iletişime geçin.",
  "/",
);
const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;
export default function Home() {
  return (
    <>
      <Hero>
        <p
          className="reveal mb-8 flex items-center gap-3 text-xs tracking-[.22em] text-mute md:mb-12"
          style={d(250)}
        >
          <span aria-hidden className="h-px w-8 bg-accent/70" />
          ESKİŞEHİR / ELEKTRİK DESTEĞİ
        </p>
        <h1 className="type-h1">
          <span className="reveal block" style={d(400)}>
            ESKİŞEHİR&apos;DE
          </span>
          <span className="reveal block" style={d(520)}>
            ELEKTRİK
          </span>
          <span className="reveal block" style={d(640)}>
            SORUNUNUZ
          </span>
          <span className="reveal block text-mute" style={d(760)}>
            MU VAR?
          </span>
        </h1>
        <p className="type-body reveal mt-10 md:mt-14" style={d(950)}>
          Arızanızı belirleyin, ne yapmanız gerektiğini öğrenin ve uygun
          elektrikçi desteğine ulaşın.
        </p>
        <div className="reveal mt-9" style={d(1100)}>
          <Cta />
        </div>
      </Hero>
      <ProblemSelector />
      <HowItWorks />
      <section aria-labelledby="hizmetler" className="pb-28 md:pb-44">
        <div className="px-6 md:px-10 lg:px-14">
          <h2 id="hizmetler" className="type-h2 !text-[clamp(3.5rem,7vw,8rem)]">
            Hizmetler
          </h2>
          <p className="mt-5 text-lg text-mute">
            Hangi konuda desteğe ihtiyacınız var?
          </p>
        </div>
        <div className="mt-14 md:mt-20">
          <ServiceList />
        </div>
      </section>
      <SingleContact />
      <CallbackSection />
      <ReviewSection />
    </>
  );
}
