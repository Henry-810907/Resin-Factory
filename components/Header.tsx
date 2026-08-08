import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/settings";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  dict: Dictionary["header"];
  lang: Locale;
};

/**
 * 常规 B2B Header(多语言版):
 *  - 白底 + 底部细线分隔
 *  - 左:文字品牌
 *  - 中:导航(从字典读)
 *  - 右:语言切换器 + 橙色 CTA
 */
export default function Header({ dict, lang }: Props) {
  const NAV: { label: string; href: string }[] = [
    { label: dict.nav.products, href: `/${lang}/products` },
    { label: dict.nav.portfolio, href: `/${lang}/portfolio` },
    { label: dict.nav.about, href: `/${lang}/about` },
    { label: dict.nav.values, href: `/${lang}/values` },
    { label: dict.nav.blog, href: `/${lang}/blog` },
    { label: dict.nav.contact, href: `/${lang}/contact` },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* 顶部联系信息条 */}
      <div className="bg-brand-dark text-slate-300 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          <a href="mailto:henry@resin-factory.com" onClick={() => { if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') { (window as any).gtag('event', 'conversion', { 'send_to': 'AW-18376214280/_2MFCNvGht4cEliOu7pE' }); } }} className="hover:text-brand-orange transition flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7L22 6" /></svg>
            <span>henry@resin-factory.com</span>
          </a>
          <a href="https://wa.me/8613682692148" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 32 32" fill="currentColor"><path d="M16.003 2.667c-7.36 0-13.336 5.973-13.336 13.333 0 2.347.61 4.64 1.776 6.667l-1.886 6.886 7.06-1.853a13.27 13.27 0 0 0 6.382 1.626h.005c7.357 0 13.333-5.972 13.333-13.333 0-3.561-1.386-6.91-3.901-9.426a13.244 13.244 0 0 0-9.433-3.9zm0 24.36h-.004a11.06 11.06 0 0 1-5.642-1.546l-.405-.241-4.19 1.099 1.118-4.084-.263-.42a11.072 11.072 0 0 1-1.696-5.835c0-6.122 4.984-11.105 11.085-11.105 2.962 0 5.745 1.155 7.835 3.249a10.998 10.998 0 0 1 3.244 7.84c0 6.123-4.984 11.043-11.082 11.043zm6.078-8.273c-.333-.166-1.969-.972-2.273-1.082-.305-.111-.527-.166-.749.166-.222.333-.86 1.082-1.054 1.305-.194.222-.388.249-.721.083-.333-.166-1.405-.518-2.677-1.65-.989-.881-1.659-1.97-1.853-2.303-.194-.333-.021-.513.146-.679.15-.149.333-.388.5-.582.166-.194.222-.333.333-.555.111-.222.056-.416-.027-.582-.083-.166-.749-1.806-1.026-2.475-.27-.65-.546-.562-.75-.572l-.638-.011c-.222 0-.582.083-.886.416-.305.333-1.165 1.139-1.165 2.776 0 1.638 1.193 3.221 1.359 3.443.166.222 2.347 3.583 5.685 5.024.794.343 1.413.547 1.896.7.797.253 1.522.218 2.094.132.639-.095 1.969-.805 2.247-1.583.277-.777.277-1.444.194-1.583-.083-.139-.305-.222-.638-.388z" /></svg>
            <span>WhatsApp</span>
          </a>
          <a href="tel:+8613682692148" className="hover:text-brand-orange transition flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" /></svg>
            <span>+86 136 8269 2148</span>
          </a>
        </div>
      </div>
      <div className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4">
        <Link href={`/${lang}`} aria-label={dict.homeAria} className="flex items-center gap-2 shrink-0">
          <Image src="/logo.jpg" alt="Resin Factory Logo" width={32} height={32} className="rounded-md" />
          <span className="font-bold text-base sm:text-xl text-brand-dark tracking-tight whitespace-nowrap">
            {dict.brand}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium text-slate-700">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand-orange transition-colors whitespace-nowrap">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <LanguageSwitcher current={lang} label={dict.language} />
          <Link
            href={`/${lang}/contact`}
            className="bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-md shadow-sm whitespace-nowrap"
          >
            {dict.cta}
          </Link>
        </div>
      </div>
      </div>
    </header>
  );
}
