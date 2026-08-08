import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale, localeMeta, locales } from "@/i18n/settings";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/lib/jsonld";

const SITE_URL = "https://resin-factory.com";

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const title = dict.meta.about.title;
  const desc = dict.meta.about.description;
  const url = `${SITE_URL}/${lang}/about`;

  return {
    title,
    description: desc,
    alternates: { canonical: `/${lang}/about` },
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

export default async function AboutPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const a = dict.about;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.header.nav.home ?? "Home", url: `/${lang}` },
          { name: dict.header.nav.about, url: `/${lang}/about` },
        ]}
      />
      <PageHero title={a.heroTitle} subtitle={a.heroSubtitle} image="/OurFactory.jpg" />

      <section className="bg-white py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-center">
          <div className="relative w-full aspect-[4/3] min-h-[220px] md:min-h-[340px] rounded-lg overflow-hidden shadow-md">
            <Image src="/1200-900-1.jpg" alt={a.storyTitle} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
          </div>
          <div className="space-y-3 sm:space-y-5 text-slate-700">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold">{a.storyKicker}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark leading-tight tracking-tight">{a.storyTitle}</h2>
            <p className="text-base sm:text-lg leading-relaxed">{a.storyP1}</p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">{a.storyP2}</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-bgAlt py-8 md:py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center">
          {a.stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-orange mb-1 sm:mb-2">{s.num}</p>
              <p className="text-slate-600 uppercase tracking-wider text-xs sm:text-sm font-medium leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">{a.workshopTitle}</h2>
          <p className="text-slate-500 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">{a.workshopSubtitle}</p>
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <div className="relative w-full aspect-[4/3] md:aspect-[4/5] rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2629.jpg" alt={a.workshopTitle} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-[4/3] md:aspect-[3/2] md:col-span-2 rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2576.jpg" alt={a.workshopTitle} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-[4/3] md:aspect-[3/2] md:col-span-2 rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2645.jpg" alt={a.workshopTitle} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-[4/3] md:aspect-[4/5] rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2655.jpg" alt={a.workshopTitle} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover object-center" />
          </div>
        </div>
      </section>

      <section className="bg-brand-bgAlt py-10 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark text-center mb-2 sm:mb-3 tracking-tight">{a.teamTitle}</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-6 sm:mb-10 text-sm sm:text-base">{a.teamSubtitle}</p>
          {/* 团队岗位卡(无虚拟头像;岗位 + 人数,真实可信) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {a.team.map((m) => (
              <div key={m.role} className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 text-center hover:shadow-md transition">
                <p className="text-3xl sm:text-4xl font-extrabold text-brand-orange mb-1 sm:mb-2">{m.count}</p>
                <p className="font-bold text-brand-dark text-sm sm:text-base">{m.role}</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 text-center bg-white">
        <Link href={`/${lang}/contact`} className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-base px-8 py-3.5 rounded-md shadow-md">{a.ctaButton}</Link>
      </section>
    </>
  );
}
