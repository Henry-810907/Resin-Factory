import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 全场单字体 Inter:常规 B2B 工厂网站,无衬线
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://resin-factory.com"),
  title: "Resin Factory — Custom Resin Figurines for Brands & IP",
  description:
    "B2B custom resin figurine manufacturer. Sculpting, mold-making, casting, hand-painting in our own factory. Low MOQ, free design, CE/EN71/ASTM tested, worldwide shipping.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://resin-factory.com",
    siteName: "Resin Factory",
    title: "Custom Resin Figurines for Brands & IP",
    description:
      "B2B custom resin figurine manufacturer. Sculpting, mold-making, casting, hand-painting in our own factory. Low MOQ, free design, CE/EN71/ASTM tested, worldwide shipping.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Resin Figurines for Brands & IP",
    description:
      "B2B custom resin figurine manufacturer. Sculpting, mold-making, casting, hand-painting in our own factory. Low MOQ, free design, CE/EN71/ASTM tested, worldwide shipping.",
  },
  // 屏蔽浏览器自动翻译提示(Chrome 等)
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={body.variable} translate="no">
      <body className="bg-white text-slate-800 font-sans notranslate antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
