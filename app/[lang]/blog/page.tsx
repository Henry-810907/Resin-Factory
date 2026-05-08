import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/settings";
import { notFound } from "next/navigation";

const POST_IMAGES = [
  "/pictures/jpg/img_2722.jpg",
  "/pictures/jpg/IMG_2592.jpg",
  "/pictures/jpg/img_2727.jpg",
  "/pictures/jpg/IMG_2580.jpg",
  "/pictures/jpg/IMG_2616.jpg",
  "/pictures/jpg/img_2738.jpg",
];

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const dict = await getDictionary(params.lang as Locale);
  return {
    title: dict.meta.blog.title,
    description: dict.meta.blog.description,
    alternates: { canonical: `/${params.lang}/blog` },
  };
}

export default async function BlogPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const b = dict.blog;

  return (
    <main>
      <PageHero title={b.heroTitle} subtitle={b.heroSubtitle} image="/pictures/jpg/IMG_2599.jpg" />

      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto scrollbar-hide">
          {b.categories.map((c, i) => (
            <button key={c} className={`shrink-0 px-4 py-2 text-sm font-medium rounded-full border transition ${i === 0 ? "bg-brand-dark text-white border-brand-dark" : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"}`}>{c}</button>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-wider text-brand-orange font-bold mb-5">{b.featuredKicker}</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 relative w-full aspect-[16/10] min-h-[280px] rounded-lg overflow-hidden">
              <Image src="/pictures/jpg/IMG_2629.jpg" alt={b.featured.title} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover object-center" />
            </div>
            <div className="md:col-span-2 space-y-4">
              <span className="text-xs uppercase tracking-wider text-brand-orange font-bold">{b.featured.tag}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight tracking-tight">{b.featured.title}</h2>
              <p className="text-slate-600 leading-relaxed">{b.featured.excerpt}</p>
              <p className="text-sm text-slate-500">{b.featured.date} · {b.featured.read}</p>
              <button className="bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm px-6 py-3 rounded-md shadow-sm">{b.readMore}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-bgAlt py-14 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 tracking-tight">{b.moreTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {b.posts.map((p, i) => (
              <article key={p.title} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[8/5]">
                  <Image src={POST_IMAGES[i] ?? POST_IMAGES[0]} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-brand-orange font-bold mb-2">{p.tag}</span>
                  <h3 className="font-bold text-brand-dark mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm text-slate-500 mt-auto">{p.date} · {p.read}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-sm px-8 py-3 rounded-md transition">{b.loadMore}</button>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3 tracking-tight">{b.newsletterTitle}</h2>
          <p className="text-slate-500 mb-6 text-base md:text-lg">{b.newsletterSubtitle}</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder={b.newsletterPlaceholder} className="flex-1 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange" />
            <button type="submit" className="bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm px-6 py-3 rounded-md">{b.newsletterButton}</button>
          </form>
        </div>
      </section>
    </main>
  );
}
