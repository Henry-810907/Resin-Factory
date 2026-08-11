import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/settings";

type Props = {
  dict: Dictionary["footer"];
  navDict: Dictionary["header"]["nav"];
  lang: Locale;
};

/**
 * 常规 B2B 深色 Footer(多语言版):
 *  - 链接前缀都加 /[lang]
 *  - 文本全部从字典读
 */
export default function Footer({ dict, navDict, lang }: Props) {
  const linksNav: { label: string; href: string }[] = [
    { label: navDict.products, href: `/${lang}/products` },
    { label: navDict.portfolio, href: `/${lang}/portfolio` },
    { label: navDict.about, href: `/${lang}/about` },
    { label: navDict.values, href: `/${lang}/values` },
    { label: navDict.blog, href: `/${lang}/blog` },
    { label: navDict.contact, href: `/${lang}/contact` },
  ];

  const prefixed = (href: string) => `/${lang}${href}`;

  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-10 md:pt-16 pb-8 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {/* 第 1 列:品牌 + 联系方式(移动端跨 2 列) */}
          <div className="col-span-2 md:col-span-1">
            <Link href={`/${lang}`} className="flex items-center gap-2 mb-5">
              <Image src="/resin-factory-logo.png" alt="Resin Factory Logo" width={32} height={32} className="rounded-md" />
              <span className="font-bold text-xl text-white tracking-tight">
                Resin Factory
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              {dict.tagline}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Shenzhen Heli Toys Co., Ltd.</span>
              <br />
              Room 318, Building 618, Bagua Ling Industrial Zone,
              <br />
              Futian District, Shenzhen, China
              <br />
              <a href="mailto:henry@resin-factory.com" className="hover:text-brand-orange transition">henry@resin-factory.com</a>
              <br />
              <a href="tel:+8613682692148" className="hover:text-brand-orange transition">+86 136 8269 2148</a>
            </p>
          </div>

          {/* 第 2 列:Quick Links */}
          <div>
            <h4 className="font-semibold text-white tracking-wide mb-4">{dict.quickLinks}</h4>
            <ul className="space-y-2.5 text-sm">
              {linksNav.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-brand-orange transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 第 3 列:Services */}
          <div>
            <h4 className="font-semibold text-white tracking-wide mb-4">{dict.services}</h4>
            <ul className="space-y-2.5 text-sm">
              {dict.linksServices.map((l) => (
                <li key={l.label}>
                  <Link href={prefixed(l.href)} className="hover:text-brand-orange transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 第 4 列:More */}
          <div>
            <h4 className="font-semibold text-white tracking-wide mb-4">{dict.more}</h4>
            <ul className="space-y-2.5 text-sm">
              {dict.linksMore.map((l) => (
                <li key={l.label}>
                  <Link href={prefixed(l.href)} className="hover:text-brand-orange transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部 CTA 条 */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-700 flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/henry-law-353683426" target="_blank" rel="noopener noreferrer" className="text-slate-400 cursor-pointer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <Link
              href={`/${lang}/contact`}
              className="bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm px-6 py-2.5 rounded-md shadow-sm"
            >
              {dict.ctaButton}
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 text-center py-3 text-slate-500 text-xs">
        © {new Date().getFullYear()} Shenzhen Heli Toys Co., Ltd. {dict.rights}
      </div>
    </footer>
  );
}
