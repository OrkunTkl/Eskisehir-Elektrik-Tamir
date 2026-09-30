import { notFound } from "next/navigation";
import { problems } from "@/data/problems";
import {
  problemFaq,
  problemRelated,
  problemSeoTitle,
} from "@/data/seo-content";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/Faq";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CallbackSection } from "@/components/CallbackSection";
import { meta, breadcrumb, articleSchema } from "@/lib/seo";
export const dynamicParams = false;
export const generateStaticParams = () =>
  problems.map((p) => ({ slug: p.slug }));
type Props = { params: Promise<{ slug: string }> };
const cut = (t: string, n = 158) =>
  t.length <= n ? t : t.slice(0, n).replace(/\s+\S*$/, "") + "…";
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = problems.find((x) => x.slug === slug);
  return p
    ? meta(
        problemSeoTitle[slug] ?? `${p.title} | Arıza Rehberi`,
        cut(p.short),
        `/ariza-merkezi/${p.slug}`,
      )
    : {};
}
const List = ({ h, items }: { h: string; items: string[] }) => (
  <section className="mt-14 max-w-2xl">
    <h2 className="text-2xl font-semibold">{h}</h2>
    <ul className="mt-4 list-disc space-y-2 pl-5 text-mute">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </section>
);
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = problems.find((x) => x.slug === slug);
  if (!p) notFound();
  const rel = problemRelated[slug];
  return (
    <>
      <article className="px-6 py-16 md:px-10 md:py-28 lg:px-14">
        <JsonLd
          data={breadcrumb([
            ["Ana Sayfa", "/"],
            ["Arıza Merkezi", "/ariza-merkezi"],
            [p.title, `/ariza-merkezi/${p.slug}`],
          ])}
        />
        <JsonLd
          data={articleSchema(
            p.title,
            cut(p.short),
            `/ariza-merkezi/${p.slug}`,
          )}
        />
        <h1 className="type-page">{p.title}</h1>
        <p className="mt-8 max-w-2xl text-lg text-mute md:text-xl">{p.short}</p>
        <List h="En yaygın nedenler" items={p.causes} />
        <List h="Güvenle neler yapabilirsiniz?" items={p.safe} />
        <List h="Ne zaman elektrikçiye ulaşmalısınız?" items={p.call} />
        <p className="mt-10 max-w-2xl text-sm text-mute/80">
          Bu sayfa genel bilgi amaçlıdır. Pano, kablo veya priz içine müdahale
          etmeyin; emin değilseniz bir elektrikçiden destek alın. Yangın veya
          yaralanma varsa 112&apos;yi arayın.
        </p>
        <FaqSection items={problemFaq[slug] ?? []} />
        {rel && (
          <RelatedLinks
            problemSlugs={rel.problems}
            serviceSlugs={rel.services}
            heading="İlgili rehberler ve hizmetler"
          />
        )}
        <h2 className="mb-4 mt-16 text-2xl font-semibold md:text-3xl">
          Elektrikçi desteği için bize ulaşın
        </h2>
        <p className="mb-6 max-w-2xl text-mute">
          Talebinizi iletin; ilçenizi ve sorunun niteliğini değerlendirip uygun
          servis sağlayıcıya yönlendirelim.
        </p>
        <Cta problem={p.title} />
      </article>
      <CallbackSection />
    </>
  );
}
