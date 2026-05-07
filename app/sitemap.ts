import type { MetadataRoute } from "next";

/**
 * 自动生成 /sitemap.xml,提交给 Google Search Console / Bing 等。
 * Next.js 会自动把这个 export 编译成 https://resin-factory.com/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const SITE = "https://resin-factory.com";
  const lastModified = new Date();

  return [
    {
      url: `${SITE}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE}/products`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE}/values`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
