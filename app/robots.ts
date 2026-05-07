import type { MetadataRoute } from "next";

/**
 * 自动生成 /robots.txt
 * 默认允许所有搜索引擎抓取,并把 sitemap 位置告知。
 */
export default function robots(): MetadataRoute.Robots {
  const SITE = "https://resin-factory.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // 不希望被抓取的路径在这里写 disallow,例如:
        // disallow: ["/admin", "/api/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
