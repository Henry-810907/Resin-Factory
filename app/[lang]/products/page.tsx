import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale, localeMeta } from "@/i18n/settings";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/jsonld";
import ProductsGrid from "@/components/ProductsGrid";
import ProductGuideFaq from "@/components/ProductGuideFaq";
import BlogShowcase from "@/components/BlogShowcase";
export const revalidate = 1800;

const SITE_URL = "https://resin-factory.com";

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const title = dict.productGuide.meta.title;
  const desc = dict.productGuide.meta.description;
  const url = `${SITE_URL}/${lang}/products`;

  return {
    title,
    description: desc,
    alternates: { canonical: `/${lang}/products` },
    openGraph: {
      type: "website",
      locale: localeMeta[lang].ogLocale,
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
  const pg = dict.productGuide;
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
      <FaqJsonLd items={pg.faq.items.map((i) => ({ q: i.q, a: i.a }))} />

      {/* Products Grid with Hero and Filter */}
      <ProductsGrid
        contactText={pg.hero.cta}
        contactHref={`/${lang}/contact`}
        filterLabels={pg.filter}
        heroTitle={pg.hero.title}
        heroSubtitle={pg.hero.subtitle}
        quickGuide={pg.quickGuide}
        needAdvice={pg.needAdvice}
        noMatchText={pg.noMatchText}
        freeConsultation={pg.hero.cta}
      />

      {/* FAQ Section */}
      <ProductGuideFaq
        title={pg.faq.title}
        items={pg.faq.items}
      />

      {/* Blog Showcase */}
      <BlogShowcase dict={dict.blogShowcase} blogDict={dict.blog} lang={lang} />

      {/* CTA Section */}
      <section className="bg-brand-dark text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {pg.cta.title}
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            {pg.cta.subtitle}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-2.5 rounded-full transition text-sm"
          >
            {pg.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
