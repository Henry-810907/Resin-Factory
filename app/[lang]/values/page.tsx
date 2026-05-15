import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/settings";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/lib/jsonld";

const COMMITMENT_IMAGES = [
  "/pictures/jpg/IMG_2602.jpg",
  "/pictures/jpg/IMG_2566.jpg",
  "/pictures/jpg/IMG_2599.jpg",
  "/pictures/jpg/IMG_2580.jpg",
  "/pictures/jpg/IMG_2645.jpg",
  "/pictures/jpg/IMG_2680.jpg",
];

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const dict = await getDictionary(params.lang as Locale);
  return {
    title: dict.meta.values.title,
    description: dict.meta.values.description,
    alternates: { canonical: `/${params.lang}/values` },
  };
}

export default async function ValuesPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const v = dict.values;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.header.nav.home ?? "Home", url: `/${lang}` },
          { name: dict.header.nav.values, url: `/${lang}/values` },
        ]}
      />
      <PageHero title={v.heroTitle} subtitle={v.heroSubtitle} image="/pictures/jpg/IMG_2602.jpg" />

      <section className="bg-white py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2 sm:mb-3">{v.principlesKicker}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">{v.principlesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {v.principles.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-5 sm:p-7 shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition">
                <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-[15px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bgAlt py-10 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2 sm:mb-3">{v.peopleKicker}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-3 sm:mb-4 tracking-tight">{v.peopleTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">{v.peopleIntro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-14">
            {v.commitments.map((c, i) => (
              <div key={c.title} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[16/10]">
                  <Image src={COMMITMENT_IMAGES[i] ?? COMMITMENT_IMAGES[0]} alt={c.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2">{c.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-[15px]">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-dark text-white rounded-2xl p-6 sm:p-10 md:p-14 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 items-center">
            <div className="md:col-span-3 space-y-3 sm:space-y-5">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">{v.manifestoTitle}</h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{v.manifestoP1}</p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{v.manifestoP2}</p>
            </div>
            <div className="md:col-span-2 relative w-full aspect-[10/11] rounded-lg overflow-hidden">
              <Image src="/pictures/jpg/IMG_2629.jpg" alt={v.manifestoTitle} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2 sm:mb-3">{v.teamKicker}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight mb-2 sm:mb-3">{v.teamTitle}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">{v.teamSubtitle}</p>
          </div>
          <p className="text-center text-xs sm:text-sm text-slate-500 italic mt-6 sm:mt-10">{v.teamCaption}</p>
        </div>
      </section>

      <section className="py-10 md:py-14 text-center bg-white">
        <Link href={`/${lang}/contact`} className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-base px-8 py-3.5 rounded-md shadow-md">{v.ctaButton}</Link>
      </section>
    </>
  );
}
