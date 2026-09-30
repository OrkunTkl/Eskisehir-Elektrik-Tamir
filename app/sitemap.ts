import type { MetadataRoute } from "next";
import { SITE } from "@/lib/contact";
import { services } from "@/data/services";
import { problems } from "@/data/problems";
import { serviceContent } from "@/data/seo-content";
// Yalnızca indexlenmesi gereken canonical URL'ler. Canonical'ı başka sayfaya verilenler, noindex ve özel sayfalar yer almaz.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/hizmetler", "/ariza-merkezi", "/eskisehir",
    ...services.filter((s) => !serviceContent[s.slug]?.canonicalTo).map((s) => `/${s.slug}`),
    ...problems.map((p) => `/ariza-merkezi/${p.slug}`),
  ];
  return paths.map((p) => ({ url: `${SITE}${p}` }));
}