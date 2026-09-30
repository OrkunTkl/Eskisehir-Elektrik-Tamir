import { ProblemLinks } from "@/components/ProblemLinks";
import { ProblemSelector } from "@/components/ProblemSelector";
import { meta } from "@/lib/seo";
export const metadata = meta(
  "Arıza Merkezi | Sorununuzu Seçin",
  "Sigorta, şalter, priz gibi elektrik sorunlarının olası nedenlerini ve güvenli ilk adımları öğrenin.",
  "/ariza-merkezi",
);
export default function Page() {
  return (
    <>
      <div className="px-6 pt-12 md:px-10 md:pt-24 lg:px-14">
        <h1 className="type-page max-w-4xl">Arızayı tarif edemiyor musunuz?</h1>
        <p className="mt-8 max-w-2xl text-lg text-mute md:text-xl">
          Sorununuzu seçin. Önce ne olduğunu anlamanıza yardımcı olalım.
        </p>
      </div>
      <ProblemSelector />
      <ProblemLinks />
    </>
  );
}
