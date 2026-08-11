import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale, localeMeta, locales } from "@/i18n/settings";
import { notFound } from "next/navigation";
import { BLOG_POSTS, FEATURED_SLUG } from "@/lib/blog-posts";

const SITE_URL = "https://resin-factory.com";

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const title = dict.meta.blog.title;
  const desc = dict.meta.blog.description;
  const url = `${SITE_URL}/${lang}/blog`;

  return {
    title,
    description: desc,
    alternates: { canonical: `/${lang}/blog` },
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

export default async function BlogPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const b = dict.blog;
  const featuredPost = BLOG_POSTS.find(p => p.slug === FEATURED_SLUG)!;

  return (
    <>
      <PageHero title={b.heroTitle} subtitle={b.heroSubtitle} image="/pictures/jpg/blog-hero.jpg" priority={true} />

      {/* 类目标签(纯展示) */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3 md:py-4 flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
          {b.categories.map((c, i) => (
            <span key={c} className={`shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full border ${i === 0 ? "bg-brand-dark text-white border-brand-dark" : "bg-white text-slate-700 border-slate-200"}`}>{c}</span>
          ))}
        </div>
      </section>

      <section className="bg-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <p className="text-xs uppercase tracking-wider text-brand-orange font-bold mb-3 sm:mb-5">{b.featuredKicker}</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-8 items-center">
            <Link href={`/${lang}/blog/${FEATURED_SLUG}`} className="md:col-span-3 relative w-full aspect-[16/10] min-h-[200px] md:min-h-[280px] rounded-lg overflow-hidden block group">
              <Image src={featuredPost.image} alt={b.featured.title} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover object-center group-hover:scale-105 transition duration-500" priority={true} />
            </Link>
            <div className="md:col-span-2 space-y-3 sm:space-y-4">
              <span className="text-xs uppercase tracking-wider text-brand-orange font-bold">{b.featured.tag}</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark leading-tight tracking-tight">
                <Link href={`/${lang}/blog/${FEATURED_SLUG}`} className="hover:text-brand-orange transition">{b.featured.title}</Link>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{b.featured.excerpt}</p>
              <p className="text-xs sm:text-sm text-slate-500">{b.featured.date}</p>
              <Link href={`/${lang}/blog/${FEATURED_SLUG}`} className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-md shadow-sm">{b.readMore}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-bgAlt py-10 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-5 sm:mb-8 tracking-tight">{b.moreTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[...BLOG_POSTS]
              .filter((p) => p.dictKey !== "featured")
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((post) => {
                const dictPost = b.posts[post.dictKey as number];
                if (!dictPost) return null;
                return (
                  <Link
                    key={post.slug}
                    href={`/${lang}/blog/${post.slug}`}
                    className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition overflow-hidden flex flex-col group"
                  >
                    <article className="flex flex-col h-full">
                      <div className="relative w-full aspect-[8/5] overflow-hidden">
                        <Image src={post.image} alt={dictPost.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center group-hover:scale-105 transition duration-500" />
                      </div>
                      <div className="p-4 sm:p-5 flex-1 flex flex-col">
                        <span className="text-xs uppercase tracking-wider text-brand-orange font-bold mb-1.5 sm:mb-2">{dictPost.tag}</span>
                        <h3 className="font-bold text-brand-dark text-sm sm:text-base mb-2 sm:mb-3 leading-snug group-hover:text-brand-orange transition">{dictPost.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-auto">{dictPost.date}</p>
                      </div>
                    </article>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-2 sm:mb-3 tracking-tight">{b.contactCtaTitle}</h2>
          <p className="text-slate-500 mb-5 sm:mb-6 text-sm sm:text-base md:text-lg">{b.contactCtaSubtitle}</p>
          <Link href={`/${lang}/contact`} className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm px-6 py-3 rounded-md">{b.contactCtaButton}</Link>
        </div>
      </section>
    </>
  );
}
