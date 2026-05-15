/**
 * 复用的 JSON-LD 片段工具。
 * 每个函数返回 JSX `<script type="application/ld+json">` 节点,直接放页面里。
 */
import React from "react";

const SITE_URL = "https://resin-factory.com";

const tag = (data: object, key: string) => (
  <script
    key={key}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

/** 面包屑(用于所有非首页) */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
  return tag(data, "breadcrumb");
}

/** Product schema(产品页用) */
export function ProductListJsonLd({
  items,
  lang,
}: {
  items: { name: string; description: string; image: string }[];
  lang: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Custom Resin Figurine Products",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: it.name,
        description: it.description,
        image: it.image.startsWith("http") ? it.image : `${SITE_URL}${it.image}`,
        brand: { "@type": "Brand", name: "Resin Factory" },
        manufacturer: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "5",
          highPrice: "500",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/${lang}/contact`,
        },
      },
    })),
  };
  return tag(data, "products");
}

/** FAQ schema */
export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
  return tag(data, "faq");
}

/** 单篇博客 Article schema */
export function ArticleJsonLd({
  title,
  description,
  image,
  url,
  datePublished,
  authorName,
  lang,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  authorName: string;
  lang: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    datePublished,
    dateModified: datePublished,
    inLanguage: lang,
    author: { "@type": "Person", name: authorName },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: url.startsWith("http") ? url : `${SITE_URL}${url}`,
  };
  return tag(data, "article");
}
