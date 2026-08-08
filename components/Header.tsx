import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/settings";
import LanguageSwitcher from "./LanguageSwitcher";
import EmailLink from "./EmailLink";
import WhatsAppLink from "./WhatsAppLink";
import PhoneLink from "./PhoneLink";

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
      {/* 顶部品牌条 + 联系信息条 */}
      <div className="bg-brand-dark text-slate-300">
        {/* 第一行：LOGO + 标语 + Get a Quote */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-center gap-3">
          <Image src="/logo.jpg" alt="Resin Factory" width={28} height={28} className="rounded" />
          <span className="text-sm font-medium text-white">Custom Resin Figurine Factory</span>
          <Link
            href={`/${lang}/contact#form`}
            className="text-xs font-semibold text-brand-orange hover:text-white transition ml-2"
          >
            Get a Quote →
          </Link>
        </div>
        {/* 第二行：联系方式 */}
        <div className="text-xs py-1.5 border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <EmailLink />
            <WhatsAppLink />
            <PhoneLink />
          </div>
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
