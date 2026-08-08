import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import { locales, localeMeta, defaultLocale, type Locale } from "@/i18n/settings";

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/**
 * 根 layout — SSR 阶段就把 <html lang dir> 写对。
 *
 *  middleware 把当前 pathname 写到 x-pathname 请求头,
 *  这里读出来,提取语言段,设置正确的 lang/dir。
 *  阿拉伯语自动切 RTL,首屏不闪。
 */
function detectLang(): Locale {
  const h = headers();
  const path = h.get("x-pathname") ?? "";
  const seg = path.split("/")[1] ?? "";
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = detectLang();
  const meta = localeMeta[lang];
  return (
    <html lang={meta.htmlLang} dir={meta.dir} className={body.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-slate-800 font-sans notranslate antialiased">
        {/* 跳过到主内容(键盘可访问性) */}
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-brand-orange focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:z-[100] focus:font-semibold focus:text-sm">
          Skip to main content
        </a>
        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18376214280"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18376214280');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
