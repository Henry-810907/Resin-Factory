import Link from "next/link";
import type { Locale } from "@/i18n/settings";

type Section = { title: string; body: string[] };

type Props = {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: Section[];
  contactCta: string;
  contactCtaButton: string;
  lang: Locale;
};

/**
 * 通用法律页布局(Privacy / Terms / Shipping 共用):
 *  - 标题 + 副标题 + Last updated
 *  - section.title 渲染为 h2,body 段落渲染
 *  - 末尾联系 CTA
 */
export default function LegalPage({ title, intro, lastUpdated, sections, contactCta, contactCtaButton, lang }: Props) {
  return (
    <>
      <section className="bg-brand-bgAlt border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 py-10 md:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight">{title}</h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed">{intro}</p>
          <p className="text-xs text-slate-500 mt-4">{lastUpdated}</p>
        </div>
      </section>

      <article className="bg-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 space-y-8 md:space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-3 sm:mb-4 tracking-tight">{s.title}</h2>
              {s.body.map((para, i) => (
                <p key={i} className="text-sm sm:text-base text-slate-700 leading-[1.8] mb-3">{para}</p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <section className="bg-brand-bgAlt py-10 md:py-14 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-base sm:text-lg text-slate-700 mb-5">{contactCta}</p>
          <Link href={`/${lang}/contact`} className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm sm:text-base px-7 sm:px-8 py-3 sm:py-3.5 rounded-md shadow-sm">{contactCtaButton}</Link>
        </div>
      </section>
    </>
  );
}
