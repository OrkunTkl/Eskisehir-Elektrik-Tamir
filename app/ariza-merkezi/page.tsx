import { ProblemLinks } from "@/components/ProblemLinks";
import { BreakerPanel, type PanelItem } from "@/components/BreakerPanel";
import { PageHero } from "@/components/PageHero";
import { CallbackSection } from "@/components/CallbackSection";
import { problems } from "@/data/problems";
import { problemDocs } from "@/data/docs";
import { meta } from "@/lib/seo";

export const metadata = meta(
  "Arıza Merkezi | Sorununuzu Seçin | Eskişehir Elektrik",
  "Sigorta, şalter, priz, kaçak akım, yanık kokusu: belirtiyi seçin, olası nedenleri ve güvenli ilk adımları öğrenin. Eskişehir elektrik arıza rehberi.",
  "/ariza-merkezi",
);

const items: PanelItem[] = problems.map((p) => {
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

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Arıza merkezi"
        title="Arızayı tarif edemiyor musunuz?"
        lead="Panodan belirtiyi seçin. Önce ne olduğunu anlamanıza, sonra güvenli olanı yapmanıza yardımcı olalım."
      />
      <section className="px-6 pb-24 md:px-10 md:pb-40 lg:px-14">
        <BreakerPanel items={items} />
      </section>
      <div className="border-t border-line">
        <ProblemLinks />
      </div>
      <CallbackSection />
    </>
  );
}
