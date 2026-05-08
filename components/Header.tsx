import Link from "next/link";
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
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6 py-4">
        <Link href={`/${lang}`} aria-label={dict.homeAria} className="flex items-center gap-2 shrink-0">
          <span className="w-8 h-8 bg-brand-orange rounded-md flex items-center justify-center text-white font-bold text-sm">
            R
          </span>
          <span className="font-bold text-xl text-brand-dark tracking-tight whitespace-nowrap">
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

        <div className="flex items-center gap-3 shrink-0">
          <LanguageSwitcher current={lang} label={dict.language} />
          <Link
            href={`/${lang}/contact`}
            className="bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm px-5 py-2.5 rounded-md shadow-sm whitespace-nowrap"
          >
            {dict.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
