import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { serviceContent } from "@/data/seo-content";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/Faq";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CallbackSection } from "@/components/CallbackSection";
import { meta, breadcrumb, serviceSchema } from "@/lib/seo";
export const dynamicParams = false;
export const generateStaticParams = () =>
  services.map((s) => ({ service: s.slug }));
type Props = { params: Promise<{ service: string }> };
export async function generateMetadata({ params }: Props) {
  const { service } = await params;
  const c = serviceContent[service];
  return c
    ? meta(c.title, c.description, `/${service}`, { canonical: c.canonicalTo })
    : {};
}
export default async function Page({ params }: Props) {
  const { service } = await params;
  const s = services.find((x) => x.slug === service);
  const c = serviceContent[service];
  if (!s || !c) notFound();
  return (
    <>
      <article className="px-6 py-16 md:px-10 md:py-28 lg:px-14">
        <JsonLd
          data={breadcrumb([
            ["Ana Sayfa", "/"],
            ["Hizmetler", "/hizmetler"],
            [s.title, `/${s.slug}`],
          ])}
        />
        {!c.canonicalTo && (
          <JsonLd data={serviceSchema(s.title, c.description, `/${s.slug}`)} />
        )}
        <h1 className="type-page max-w-5xl">{c.h1}</h1>
        <p className="mt-8 max-w-2xl text-lg text-mute md:text-xl">{c.lead}</p>
        {c.canonicalTo && (
          <p className="mt-6 text-lg">
            <Link
              className="text-accent-soft underline underline-offset-4"
              href={c.canonicalTo}
            >
              Ayrıntılı rehberi okuyun
            </Link>
          </p>
        )}
        {c.sections.map((x) => (
          <section key={x.h} className="mt-14 max-w-2xl">
            <h2 className="text-2xl font-semibold md:text-3xl">{x.h}</h2>
            <p className="mt-4 text-lg text-mute">{x.p}</p>
          </section>
        ))}
        <RelatedLinks
          problemSlugs={c.problems}
          serviceSlugs={c.services}
          heading="İlgili rehberler ve hizmetler"
        />
        <FaqSection items={c.faq} />
        <p className="mt-16 max-w-2xl text-sm text-mute/80">
          Bu platform elektrik hizmetini kendisi vermez; talebinizi uygun
          bağımsız servis sağlayıcıya yönlendirir.
        </p>
        <div className="mt-8">
          <Cta problem={s.title} />
        </div>
      </article>
      <CallbackSection />
    </>
  );
}
