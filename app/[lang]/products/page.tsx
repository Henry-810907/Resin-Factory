import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale, localeMeta } from "@/i18n/settings";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, ProductListJsonLd, FaqJsonLd } from "@/lib/jsonld";

const PRODUCT_IMAGES = [
  "/pictures/jpg/img_2729.jpg",
  "/pictures/jpg/img_2716.jpg",
  "/pictures/jpg/img_2727.jpg",
  "/pictures/jpg/img_2722.jpg",
  "/pictures/jpg/img_2725.jpg",
  "/pictures/jpg/img_2738.jpg",
  "/pictures/jpg/img_2735.jpg",
  "/pictures/jpg/IMG_2680.jpg",
];

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const dict = await getDictionary(params.lang as Locale);
  return {
    title: dict.meta.products.title,
    description: dict.meta.products.description,
    alternates: { canonical: `/${params.lang}/products` },
  };
}

export default async function ProductsPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const p = dict.products;
  const homeName = dict.header.nav.home ?? "Home";
  const productsName = dict.header.nav.products;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: homeName, url: `/${lang}` },
          { name: productsName, url: `/${lang}/products` },
        ]}
      />
      <ProductListJsonLd
        items={p.items.map((it, i) => ({
          name: it.title,
          description: it.desc,
          image: PRODUCT_IMAGES[i] ?? PRODUCT_IMAGES[0],
        }))}
        lang={localeMeta[lang].htmlLang}
      />
      <FaqJsonLd items={p.faq.items.map((i) => ({ q: i.q, a: i.a }))} />

      <PageHero title={p.heroTitle} subtitle={p.heroSubtitle} image="/pictures/jpg/img_2736.jpg" />

      <section className="bg-white py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {p.items.map((it, i) => (
              <div key={it.title} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition flex flex-col">
                <div className="relative w-full aspect-square">
                  <Image src={PRODUCT_IMAGES[i] ?? PRODUCT_IMAGES[0]} alt={`${it.title} — custom resin figurine sample by Resin Factory`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-center" />
                </div>
                <div className="p-3 sm:p-5">
                  <h3 className="font-bold text-brand-dark mb-1 sm:mb-2 text-sm sm:text-base">{it.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section — 同时填 FAQPage schema 也填 SEO + 用户教育 */}
      <section className="bg-brand-bgAlt py-10 md:py-20 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-6 md:mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2 sm:mb-3">{p.faq.kicker}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">{p.faq.title}</h2>
          </div>
          <div className="space-y-3">
            {p.faq.items.map((it) => (
              <details key={it.q} className="group bg-white border border-slate-200 rounded-lg p-4 sm:p-5 open:shadow-md transition">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-brand-dark text-sm sm:text-base">
                  <span className="pr-4">{it.q}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <p className="text-sm sm:text-[15px] text-slate-600 mt-3 leading-relaxed">{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark text-white py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">{p.ctaTitle}</h2>
          <p className="text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">{p.ctaText}</p>
          <Link href={`/${lang}/contact`} className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm sm:text-base px-7 sm:px-8 py-3 sm:py-3.5 rounded-md shadow-md">{p.ctaButton}</Link>
        </div>
      </section>
    </>
  );
}
