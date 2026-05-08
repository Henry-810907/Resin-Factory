import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import HtmlLangSetter from "@/components/HtmlLangSetter";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, isLocale, localeMeta, type Locale } from "@/i18n/settings";

const SITE_URL = "https://resin-factory.com";
const LEGAL_NAME = "Shenzhen Heli Toys Co., Ltd.";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: { lang: string };
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang;
  const dict = await getDictionary(lang);
  const title = `${dict.meta.siteName} — ${dict.meta.tagline}`;
  const desc = dict.meta.defaultDescription;

  // 给所有语言生成 hreflang alternates
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeMeta[l].htmlLang] = `${SITE_URL}/${l}`;
  }
  languages["x-default"] = `${SITE_URL}/en`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: `%s · ${dict.meta.siteName}` },
    description: desc,
    alternates: { canonical: `/${lang}`, languages },
    openGraph: {
      type: "website",
      locale: localeMeta[lang].ogLocale,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeMeta[l].ogLocale),
      url: `${SITE_URL}/${lang}`,
      siteName: dict.meta.siteName,
      title,
      description: desc,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    formatDetection: { email: false, address: false, telephone: false },
    icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
    other: { google: "notranslate" },
  };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const meta = localeMeta[lang];

  // JSON-LD Organization + WebSite + 多语言版本
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: LEGAL_NAME,
        alternateName: dict.meta.siteName,
        url: SITE_URL,
        logo: `${SITE_URL}/og-image.jpg`,
        image: `${SITE_URL}/og-image.jpg`,
        email: "hello@resin-factory.com",
        telephone: "+86-136-8269-2148",
        foundingDate: "2013",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Room 318, Building 618, Bagua Ling Industrial Zone, Bagua 1st Road",
          addressLocality: "Futian District, Shenzhen",
          addressRegion: "Guangdong",
          addressCountry: "CN",
        },
        areaServed: "Worldwide",
        description: dict.meta.defaultDescription,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/${lang}`,
        name: dict.meta.siteName,
        description: dict.meta.defaultDescription,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: meta.htmlLang,
      },
    ],
  };

  return (
    <>
      <HtmlLangSetter lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Header dict={dict.header} lang={lang} />
      {children}
      <Footer dict={dict.footer} navDict={dict.header.nav} lang={lang} />
      <WhatsAppFloat dict={dict.whatsapp} />
    </>
  );
}
