import type { MetadataRoute } from "next";
import { locales, localeMeta } from "@/i18n/settings";

/**
 * 多语言 sitemap.xml
 *  - 7 种语言 × 7 个路由 = 49 条 URL
 *  - 每条 URL 带 alternates.languages,告诉谷歌它的所有语言变体
 *  - 谷歌据此正确收录每种语言版本,避免重复内容惩罚
 */
const ROUTES: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/values", changeFrequency: "yearly", priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE = "https://resin-factory.com";
  const lastModified = new Date();

  // 为每条路由生成 hreflang alternates(包括 x-default)
  const buildAlternates = (path: string) => {
    const languages: Record<string, string> = {};
    for (const l of locales) {
      languages[localeMeta[l].htmlLang] = `${SITE}/${l}${path}`;
    }
    languages["x-default"] = `${SITE}/en${path}`;
    return { languages };
  };

  const entries: MetadataRoute.Sitemap = [];
  for (const lang of locales) {
    for (const r of ROUTES) {
      entries.push({
        url: `${SITE}/${lang}${r.path}`,
        lastModified,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
        alternates: buildAlternates(r.path),
      });
    }
  }
  return entries;
}
