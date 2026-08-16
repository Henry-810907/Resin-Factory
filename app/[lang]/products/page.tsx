import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale, localeMeta, locales } from "@/i18n/settings";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, ProductListJsonLd, FaqJsonLd } from "@/lib/jsonld";

// ISR: 每 30 分钟重新验证
export const revalidate = 1800;

const SITE_URL = "https://resin-factory.com";

const PRODUCT_IMAGES = [
  "/pictures/jpg/img_2729.jpg",
  "/pictures/jpg/hand-painted-resin-toys-showcase.jpg",
  "/pictures/jpg/custom-resin-figurines-collection.jpg",
  "/pictures/jpg/img_2722.jpg",
  "/pictures/jpg/img_2725.jpg",
  "/pictures/jpg/img_2738.jpg",
  "/pictures/jpg/img_2735.jpg",
  "/pictures/jpg/IMG_2680.jpg",
];

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const title = dict.meta.products.title;
  const desc = dict.meta.products.description;
  const url = `${SITE_URL}/${lang}/products`;

  return {
    title,
    description: desc,
    alternates: { canonical: `/${lang}/products` },
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
      <FaqJsonLd items={dict.homepageFaq.items.map((i) => ({ q: i.q, a: i.a }))} />

      <PageHero title={p.heroTitle} subtitle={p.heroSubtitle} image="/pictures/jpg/img_2736.jpg" priority={true} />

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

      {/* FAQ section — 使用首页FAQ组件，保持内容同步 */}
      <FAQ dict={dict.homepageFaq} />

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
