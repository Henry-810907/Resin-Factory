import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale, localeMeta, locales } from "@/i18n/settings";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/lib/jsonld";

const SITE_URL = "https://resin-factory.com";

const CASE_IMAGES = [
  "/pictures/jpg/img_2727.jpg",
  "/pictures/jpg/img_2716.jpg",
  "/pictures/jpg/img_2729.jpg",
  "/pictures/jpg/img_2725.jpg",
  "/pictures/jpg/img_2747.jpg",
  "/pictures/jpg/img_2730.jpg",
  "/pictures/jpg/img_2722.jpg",
  "/pictures/jpg/img_2736.jpg",
  "/pictures/jpg/img_2723.jpg",
  "/pictures/jpg/img_2735.jpg",
  "/pictures/jpg/img_2740.jpg",
  "/pictures/jpg/img_2738.jpg",
];

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const title = dict.meta.portfolio.title;
  const desc = dict.meta.portfolio.description;
  const url = `${SITE_URL}/${lang}/portfolio`;

  return {
    title,
    description: desc,
    alternates: { canonical: `/${lang}/portfolio` },
    openGraph: {
      type: "website",
      locale: localeMeta[lang].ogLocale,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeMeta[l].ogLocale),
      url,
      siteName: dict.meta.siteName,
      title,
      description: desc,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function PortfolioPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const p = dict.portfolio;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.header.nav.home ?? "Home", url: `/${lang}` },
          { name: dict.header.nav.portfolio, url: `/${lang}/portfolio` },
        ]}
      />
      <PageHero title={p.heroTitle} subtitle={p.heroSubtitle} image="/pictures/jpg/img_2727.jpg" />

      {/* 类目标签(纯展示,非按钮)— 客户一眼看出我们做的是什么类目 */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3 md:py-4 flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
          {p.filters.map((f, i) => (
            <span key={f} className={`shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full border ${i === 0 ? "bg-brand-dark text-white border-brand-dark" : "bg-white text-slate-700 border-slate-200"}`}>{f}</span>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {p.cases.map((c, i) => (
              <div key={c.title} className="group rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition bg-white flex flex-col h-full">
                <div className="relative w-full aspect-square">
                  <Image src={CASE_IMAGES[i] ?? CASE_IMAGES[0]} alt={c.title} fill sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw" className="object-cover object-center" />
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[10px] uppercase tracking-wider text-brand-orange font-bold mb-0.5">{c.tag}</p>
                  <p className="text-sm font-semibold text-brand-dark leading-snug line-clamp-2">{c.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bgAlt py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4 sm:mb-5 tracking-tight">{p.ctaTitle}</h2>
          <Link href={`/${lang}/contact`} className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm sm:text-base px-7 sm:px-8 py-3 sm:py-3.5 rounded-md shadow-sm">{p.ctaButton}</Link>
        </div>
      </section>
    </>
  );
}
