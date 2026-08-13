import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale, locales, localeMeta } from "@/i18n/settings";
import { BLOG_POSTS, getPostBySlug, type BlogImageBlock } from "@/lib/blog-posts";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/lib/jsonld";

// ISR: 每 15 分钟重新验证
export const revalidate = 900;

const SITE_URL = "https://resin-factory.com";

/** 渲染正文内嵌图片块 */
function ImageBlockRenderer({ block }: { block: BlogImageBlock }) {
  const { images } = block;
  const count = images.length;
  
  // 根据图片数量决定布局
  let gridClass = "";
  if (count === 1) {
    gridClass = "grid grid-cols-1";
  } else if (count === 2) {
    gridClass = "grid grid-cols-1 sm:grid-cols-2 gap-4";
  } else if (count === 3) {
    gridClass = "grid grid-cols-1 sm:grid-cols-3 gap-4";
  } else {
    // 4张或更多: 2x2 网格
    gridClass = "grid grid-cols-2 gap-4";
  }
  
  return (
    <div className={`my-6 ${gridClass}`}>
      {images.map((img, idx) => (
        <figure key={idx} className="m-0">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          {img.caption && (
            <figcaption className="text-xs sm:text-sm text-slate-500 text-center mt-2 italic">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

type Props = { params: { lang: string; slug: string } };

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const post of BLOG_POSTS) {
      params.push({ lang, slug: post.slug });
    }
  }
  return params;
}

/** 拿这篇 post 的标题/副标题/日期(从字典) */
async function getPostMeta(lang: Locale, slug: string) {
  const post = getPostBySlug(slug);
  if (!post) return null;
  const dict = await getDictionary(lang);
  const b = dict.blog;
  if (post.dictKey === "featured") {
    return {
      post,
      title: b.featured.title,
      excerpt: b.featured.excerpt,
      date: b.featured.date,
      read: b.featured.read,
      tag: b.featured.tag,
    };
  }
  const p = b.posts[post.dictKey];
  return {
    post,
    title: p.title,
    excerpt: post.intro,
    date: p.date,
    read: p.read,
    tag: p.tag,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const meta = await getPostMeta(params.lang as Locale, params.slug);
  if (!meta) return { title: "Post not found" };
  const dict = await getDictionary(params.lang as Locale);

  // 全语言版本的 hreflang
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeMeta[l].htmlLang] = `${SITE_URL}/${l}/blog/${params.slug}`;
  }
  languages["x-default"] = `${SITE_URL}/en/blog/${params.slug}`;

  return {
    title: meta.title,
    description: meta.excerpt,
    alternates: {
      canonical: `${SITE_URL}/${params.lang}/blog/${params.slug}`,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      url: `${SITE_URL}/${params.lang}/blog/${params.slug}`,
      type: "article",
      images: [{ url: meta.post.image, width: 1200, height: 630, alt: meta.title }],
      siteName: dict.meta.siteName,
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.excerpt, images: [meta.post.image] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const maybeMeta = await getPostMeta(lang, params.slug);
  if (!maybeMeta) notFound();
  const meta = maybeMeta!;
  const dict = await getDictionary(lang);
  const b = dict.blog;

  // 推荐文章：优先显示指定的两篇，然后显示其他文章
  const prioritySlugs = ["sample-development-process", "small-stone-statues-weathering-texture"];
  const priorityPosts = prioritySlugs
    .map(slug => BLOG_POSTS.find(p => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined && p.slug !== params.slug);
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== params.slug && !prioritySlugs.includes(p.slug));
  const others = [...priorityPosts, ...otherPosts].slice(0, 3);

  // ISO 日期(从英文 "May 4, 2026" 解析,fallback 用 today)
  const isoDate = (() => {
    const parsed = Date.parse(meta.date);
    return isNaN(parsed) ? new Date().toISOString().slice(0, 10) : new Date(parsed).toISOString().slice(0, 10);
  })();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.header.nav.home ?? "Home", url: `/${lang}` },
          { name: dict.header.nav.blog, url: `/${lang}/blog` },
          { name: meta.title, url: `/${lang}/blog/${params.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={meta.title}
        description={meta.excerpt}
        image={meta.post.image}
        url={`${SITE_URL}/${lang}/blog/${params.slug}`}
        datePublished={isoDate}
        authorName="Resin Factory"
        lang={localeMeta[lang].htmlLang}
      />

      {/* Article header — 大标题 + 元信息 + 主图 */}
      <article>
        <header className="bg-white pt-8 md:pt-16 pb-6 md:pb-10">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <nav className="text-xs text-slate-500 mb-4 sm:mb-6 flex items-center gap-2">
              <Link href={`/${lang}/blog`} className="hover:text-brand-orange">{dict.header.nav.blog}</Link>
              <span>›</span>
              <span className="text-slate-700">{meta.tag}</span>
            </nav>
            <p className="text-xs uppercase tracking-wider text-brand-orange font-bold mb-3">{meta.tag}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight">{meta.title}</h1>
            <p className="text-sm text-slate-500 mt-4 sm:mt-5">{meta.date} · Resin Factory</p>
          </div>
        </header>

        {/* Article body — 英文正文,标 lang="en" 让搜索引擎知道实际语言 */}
        <section className="bg-white py-8 md:py-14">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            {lang !== "en" && (
              <p className="text-xs text-slate-500 italic mb-6 pb-4 border-b border-slate-200">
                {b.englishOnlyNotice}
              </p>
            )}
            <div lang="en" className="prose prose-slate max-w-none space-y-5">
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">{meta.post.intro}</p>
              {meta.post.paragraphs.map((para, i) => {
                const paraIndex = i + 1; // 1-based
                const imageBlock = meta.post.imageBlocks?.find(block => block.afterParagraph === paraIndex);
                
                return (
                  <div key={i}>
                    <p className="text-base sm:text-[17px] text-slate-700 leading-[1.8]">{para}</p>
                    {imageBlock && <ImageBlockRenderer block={imageBlock} />}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA — 联系我们 */}
        <section className="bg-brand-bgAlt py-10 md:py-16 border-y border-slate-200">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-3 sm:mb-4 tracking-tight">{b.contactCtaTitle}</h2>
            <p className="text-slate-600 mb-5 sm:mb-7 text-sm sm:text-base md:text-lg">{b.contactCtaSubtitle}</p>
            <Link href={`/${lang}/contact`} className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm sm:text-base px-7 sm:px-8 py-3 sm:py-3.5 rounded-md shadow-sm">{b.contactCtaButton}</Link>
          </div>
        </section>
      </article>

      {/* 相关阅读 */}
      <section className="bg-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-5 sm:mb-8 tracking-tight">{b.relatedTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {others.map((p) => {
              const dictPost = p.dictKey === "featured" ? b.featured : b.posts[p.dictKey];
              return (
                <Link key={p.slug} href={`/${lang}/blog/${p.slug}`} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition overflow-hidden flex flex-col group">
                  <div className="relative w-full aspect-[8/5] overflow-hidden">
                    <Image src={p.image} alt={dictPost.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-brand-orange font-bold mb-1.5 sm:mb-2">{dictPost.tag}</span>
                    <h3 className="font-bold text-brand-dark text-sm sm:text-base mb-2 sm:mb-3 leading-snug group-hover:text-brand-orange transition">{dictPost.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-auto">{dictPost.date}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
