import Link from "next/link";
import { headers } from "next/headers";
import { locales, defaultLocale, type Locale } from "@/i18n/settings";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * 自定义 404 页(被 [lang]/layout 包裹,带 Header/Footer)。
 * 从 x-pathname 推断当前语言,显示本地化的"找不到页面"。
 */
export default async function NotFound() {
  const h = headers();
  const path = h.get("x-pathname") ?? "";
  const seg = path.split("/")[1] ?? "";
  const lang = ((locales as readonly string[]).includes(seg) ? seg : defaultLocale) as Locale;
  const dict = await getDictionary(lang);
  const nf = dict.notFound;

  return (
    <section className="bg-white py-16 md:py-28 min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <p className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-brand-orange mb-3 sm:mb-5 tracking-tight">404</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-3 sm:mb-4 tracking-tight">{nf.title}</h1>
        <p className="text-base sm:text-lg text-slate-600 mb-7 sm:mb-9 max-w-xl mx-auto leading-relaxed">{nf.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={`/${lang}`} className="bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm sm:text-base px-7 py-3 sm:py-3.5 rounded-md shadow-sm">
            {nf.homeButton}
          </Link>
          <Link href={`/${lang}/contact`} className="bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-sm sm:text-base px-7 py-3 sm:py-3.5 rounded-md transition">
            {nf.contactButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
