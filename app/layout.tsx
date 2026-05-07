import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// 全场单字体 Inter:常规 B2B 工厂网站,无衬线
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://resin-factory.com";
const SITE_NAME = "Resin Factory";
const LEGAL_NAME = "Shenzhen Heli Toys Co., Ltd.";
const DEFAULT_TITLE =
  "Resin Factory — Custom Resin Figurines for Brands & IP";
const DEFAULT_DESC =
  "B2B custom resin figurine manufacturer in Shenzhen. Sculpting, mould-making, casting and hand-painting under one roof. Low MOQ from 100 units, free 3D sculpting, CE/EN71/ASTM tested, worldwide shipping. Serving brands, IP licensors, designer-toy artists, museums and charities.";
const DEFAULT_KEYWORDS = [
  "custom resin figurines",
  "resin figurine manufacturer",
  "China resin factory",
  "Shenzhen resin factory",
  "custom designer toys",
  "blind box manufacturer",
  "GK kit manufacturer",
  "resin statue OEM",
  "bobblehead manufacturer",
  "polystone figurine",
  "low MOQ resin figurines",
  "CE EN71 ASTM resin",
  "B2B resin figurine OEM",
  "mascot statue manufacturer",
  "IP licensed figurines",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: DEFAULT_DESC,
  keywords: DEFAULT_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: LEGAL_NAME, url: SITE_URL }],
  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,
  category: "Manufacturing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Resin Factory — Custom Resin Figurines for Brands & IP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // 屏蔽浏览器自动翻译提示(Chrome 等)
  other: {
    google: "notranslate",
  },
  // 搜索引擎站长平台验证(占位,拿到后填上)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   other: { "msvalidate.01": "your-bing-verification-code" },
  // },
};

// 全站结构化数据(JSON-LD)
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: LEGAL_NAME,
      alternateName: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/og-image.jpg`,
      image: `${SITE_URL}/og-image.jpg`,
      email: "hello@resin-factory.com",
      telephone: "+86-136-8269-2148",
      foundingDate: "2013",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Room 318, Building 618, Bagua Ling Industrial Zone, Bagua 1st Road",
        addressLocality: "Futian District, Shenzhen",
        addressRegion: "Guangdong",
        addressCountry: "CN",
      },
      areaServed: "Worldwide",
      sameAs: [],
      description: DEFAULT_DESC,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESC,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={body.variable} translate="no">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
      </head>
      <body className="bg-white text-slate-800 font-sans notranslate antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
