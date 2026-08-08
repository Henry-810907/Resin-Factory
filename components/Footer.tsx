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
              <Image src="/logo.jpg" alt="Resin Factory Logo" width={32} height={32} className="rounded-md" />
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
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center md:justify-between gap-4 text-center md:text-left">
          <p className="text-sm md:text-base text-slate-300">
            {dict.ctaText}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm px-6 py-2.5 rounded-md shadow-sm"
          >
            {dict.ctaButton}
          </Link>
        </div>
      </div>

      <div className="bg-slate-950 text-center py-3 text-slate-500 text-xs">
        © {new Date().getFullYear()} Shenzhen Heli Toys Co., Ltd. {dict.rights}
      </div>
    </footer>
  );
}
