import type { MetadataRoute } from "next";
import { locales, localeMeta } from "@/i18n/settings";
import { BLOG_SLUGS } from "@/lib/blog-posts";

/**
 * 多语言 sitemap.xml
 *  - 主路由 × 7 语言
 *  - blog 详情页 × 7 语言
 *  - legal pages × 7 语言
 *  - 每条 URL 带 alternates.languages(hreflang)
 *
 * lastModified 用一个稳定的发布日期(每次部署不变),Google 才会信任新鲜度信号。
 * 想标记真的更新,改下面 LAST_MODIFIED 常量。
 */
const LAST_MODIFIED = new Date();

const ROUTES: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/values", changeFrequency: "yearly", priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/shipping", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE = "https://resin-factory.com";

  const buildAlternates = (path: string) => {
    const languages: Record<string, string> = {};
    for (const l of locales) {
      languages[localeMeta[l].htmlLang] = `${SITE}/${l}${path}`;
    }
    languages["x-default"] = `${SITE}/en${path}`;
    return { languages };
  };

  const entries: MetadataRoute.Sitemap = [];

  // 主路由
  for (const lang of locales) {
    for (const r of ROUTES) {
      entries.push({
        url: `${SITE}/${lang}${r.path}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
        alternates: buildAlternates(r.path),
      });
    }
  }

  // 博客详情
  for (const lang of locales) {
    for (const slug of BLOG_SLUGS) {
      const path = `/blog/${slug}`;
      entries.push({
        url: `${SITE}/${lang}${path}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: buildAlternates(path),
      });
    }
  }

  return entries;
}
