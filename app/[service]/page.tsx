import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { serviceDocs } from "@/data/docs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/Faq";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CallbackSection } from "@/components/CallbackSection";
import { PageHero } from "@/components/PageHero";
import { Toc, Sections, CardGrid, Checklist } from "@/components/DocBlocks";
import { Transparency } from "@/components/Transparency";
import { meta, breadcrumb, serviceSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () =>
  services.map((s) => ({ service: s.slug }));
type Props = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Props) {
  const { service } = await params;
  const c = serviceDocs[service];
  return c ? meta(c.meta.title, c.meta.description, `/${service}`) : {};
}

export default async function Page({ params }: Props) {
  const { service } = await params;
  const s = services.find((x) => x.slug === service);
  const c = serviceDocs[service];
  if (!s || !c) notFound();
  return (
    <>
      <JsonLd
        data={breadcrumb([
          ["Ana Sayfa", "/"],
          ["Hizmetler", "/hizmetler"],
          [s.title, `/${s.slug}`],
        ])}
      />
      <JsonLd data={serviceSchema(s.title, c.meta.description, `/${s.slug}`)} />
      <PageHero kicker={c.kicker} title={c.h1} lead={c.lead}>
        <Cta problem={s.title} />
      </PageHero>

      <article className="border-t border-line px-6 py-20 md:px-10 md:py-32 lg:px-14">
        <div className="grid gap-16 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-24">
          <Toc
            items={c.sections.map((b) => b.h)}
            extra={[
              ["Belirtiler", "belirtiler"],
              ["Talebinize yazın", "hazirlik"],
              ["Yapmayın", "yapmayin"],
              ["Sık sorulanlar", "sss"],
            ]}
          />
          <Sections blocks={c.sections} />
        </div>
      </article>

      <CardGrid
        id="belirtiler"
        kicker="Belirtiler"
        title={
          <>
            Bu belirtiler varsa,{" "}
            <span className="serif font-normal">dikkat.</span>
          </>
        }
        items={c.signs}
      />
      <Checklist
        id="hazirlik"
        tone="volt"
        icon="check"
        kicker="Talebinize yazın"
        title={
          <>
            Şunları yazın,{" "}
            <span className="serif font-normal">işi hızlandırın.</span>
          </>
        }
        items={c.prepare}
      />
      <Checklist
        id="yapmayin"
        tone="danger"
        icon="x"
        kicker="Yapmayın"
        title={
          <>
            Bu hatalara{" "}
            <span className="serif font-normal text-danger">düşmeyin.</span>
          </>
        }
        items={c.dont}
      />

      <div className="space-y-28 px-6 py-24 md:space-y-40 md:px-10 md:py-40 lg:px-14">
        <FaqSection items={c.faq} />
        <RelatedLinks
          problemSlugs={c.problems}
          serviceSlugs={c.services}
          heading="İlgili rehberler ve hizmetler"
        />
        <div className="rv rounded-[2rem] border border-line p-8 md:p-14">
          <h2 className="type-h2 !text-[clamp(2.2rem,5vw,5rem)]">
            Desteğe{" "}
            <span className="serif font-normal text-accent">
              hazır mısınız?
            </span>
          </h2>
          <div className="mt-8">
            <Cta problem={s.title} />
          </div>
        </div>
      </div>
      <Transparency />
      <CallbackSection />
    </>
  );
}
