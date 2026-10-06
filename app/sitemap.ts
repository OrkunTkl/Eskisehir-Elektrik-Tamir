import type { MetadataRoute } from "next";
import { SITE } from "@/lib/contact";
import { services } from "@/data/services";
import { problems } from "@/data/problems";

// Yalnızca indexlenmesi gereken canonical URL'ler.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/hizmetler", "/ariza-merkezi", "/eskisehir",
    ...services.map((s) => `/${s.slug}`),
    ...problems.map((p) => `/ariza-merkezi/${p.slug}`),
  ];
  return paths.map((p) => ({ url: `${SITE}${p}` }));
}