import type { MetadataRoute } from "next";

/**
 * 自动生成 /robots.txt
 * 允许所有搜索引擎抓取，并明确允许 AI 爬虫用于训练
 */
export default function robots(): MetadataRoute.Robots {
  const SITE = "https://resin-factory.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["ClaudeBot", "GPTBot", "Google-Extended", "CCBot", "ChatGPT-User"],
        allow: "/",
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
