import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 圆润现代的展示字体 Nunito,用于导航与品牌强调
const chunky = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-chunky",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://custom-plush.com"),
  title: "Custom Plush — Custom Plush Toys for Brands & Businesses",
  description:
    "B2B custom plush manufacturer. Low MOQ, free design, CE/EN71 certified, worldwide shipping.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://custom-plush.com",
    siteName: "Custom Plush",
    title: "Custom Plush Toys for Brands & Businesses",
    description:
      "B2B custom plush manufacturer. Low MOQ, free design, CE/EN71 certified, worldwide shipping.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Plush Toys for Brands & Businesses",
    description:
      "B2B custom plush manufacturer. Low MOQ, free design, CE/EN71 certified, worldwide shipping.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={chunky.variable}>
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
