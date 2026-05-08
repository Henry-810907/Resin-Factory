import { Inter } from "next/font/google";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

/**
 * 根 layout 只负责注入字体和 body。
 * <html lang> 和 <html dir> 由 [lang]/layout.tsx 通过客户端处理(下面 ClientHtmlLang 组件)。
 * 注意:Next 14 App Router 不允许在路由组里设置 <html>,所以根 layout 仍要保留 <html><body>。
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={body.variable} suppressHydrationWarning>
      <body className="bg-white text-slate-800 font-sans notranslate antialiased">{children}</body>
    </html>
  );
}
