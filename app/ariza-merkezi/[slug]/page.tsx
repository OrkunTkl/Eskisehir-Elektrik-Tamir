import { notFound } from "next/navigation";
import { problems } from "@/data/problems";
import { problemDocs } from "@/data/docs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/Faq";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CallbackSection } from "@/components/CallbackSection";
import { PageHero } from "@/components/PageHero";
import { SeverityChip } from "@/components/SeverityChip";
import {
  Sections,
  CardGrid,
  Steps,
  Checklist,
  Toc,
} from "@/components/DocBlocks";
import { Transparency } from "@/components/Transparency";
import { meta, breadcrumb, articleSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () =>
  problems.map((p) => ({ slug: p.slug }));
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const d = problemDocs[slug];
  return d
    ? meta(d.meta.title, d.meta.description, `/ariza-merkezi/${slug}`)
    : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = problems.find((x) => x.slug === slug);
  const d = problemDocs[slug];
  if (!p || !d) notFound();
  return (
    <>
      <JsonLd
        data={breadcrumb([
          ["Ana Sayfa", "/"],
          ["Arıza Merkezi", "/ariza-merkezi"],
          [p.title, `/ariza-merkezi/${p.slug}`],
        ])}
      />
      <JsonLd
        data={articleSchema(
          d.h1,
          d.meta.description,
          `/ariza-merkezi/${p.slug}`,
        )}
      />
      <PageHero
        kicker="Arıza rehberi"
        aside={<SeverityChip s={d.severity} />}
        title={d.h1}
        lead={d.lead}
      >
        <Cta problem={p.title} />
      </PageHero>

      <article className="border-t border-line px-6 py-20 md:px-10 md:py-32 lg:px-14">
        <div className="grid gap-16 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-24">
          <Toc
            items={d.sections.map((b) => b.h)}
            extra={[
              ["Olası nedenler", "nedenler"],
              ["Güvenli adımlar", "adimlar"],
              ["Yapmayın", "yapmayin"],
              ["Servis çağırın", "servis"],
              ["Sık sorulanlar", "sss"],
            ]}
          />
          <Sections blocks={d.sections} />
        </div>
      </article>

      <CardGrid
        id="nedenler"
        kicker="Olası nedenler"
        title={
          <>
            Arkasında <span className="serif font-normal">ne olabilir?</span>
          </>
        }
        items={d.causes}
      />
      <Steps
        id="adimlar"
        kicker="Güvenle yapabilecekleriniz"
        title={
          <>
            Sırayla{" "}
            <span className="serif font-normal text-accent">
              şunları deneyin.
            </span>
          </>
        }
        items={d.steps}
      />
      <Checklist
        id="yapmayin"
        tone="danger"
        icon="x"
        kicker="Yapmayın"
        title={
          <>
            Bunlardan{" "}
            <span className="serif font-normal text-danger">kaçının.</span>
          </>
        }
        items={d.dont}
      />
      <Checklist
        id="servis"
        tone="volt"
        icon="check"
        kicker="Servis çağırın"
        title={
          <>
            Bu durumlarda <span className="serif font-normal">uzman şart.</span>
          </>
        }
        items={d.call}
      />

      <div className="space-y-28 px-6 py-24 md:space-y-40 md:px-10 md:py-40 lg:px-14">
        <FaqSection items={d.faq} />
        <RelatedLinks
          problemSlugs={d.problems}
          serviceSlugs={d.services}
          heading="İlgili rehberler ve hizmetler"
        />
        <div className="rv rounded-[2rem] border border-line p-8 md:p-14">
          <h2 className="type-h2 !text-[clamp(2.2rem,5vw,5rem)]">
            Elektrikçi desteği{" "}
            <span className="serif font-normal text-accent">
              için bize ulaşın.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-mute">
            Talebinizi iletin; ilçenizi ve sorunun niteliğini değerlendirip
            uygun bağımsız servis sağlayıcıya yönlendirelim.
          </p>
          <div className="mt-8">
            <Cta problem={p.title} />
          </div>
        </div>
      </div>
      <Transparency />
      <CallbackSection />
    </>
  );
}
