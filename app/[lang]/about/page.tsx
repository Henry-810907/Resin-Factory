import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/settings";
import { notFound } from "next/navigation";

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const dict = await getDictionary(params.lang as Locale);
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    alternates: { canonical: `/${params.lang}/about` },
  };
}

export default async function AboutPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const a = dict.about;

  return (
    <main>
      <PageHero title={a.heroTitle} subtitle={a.heroSubtitle} image="/factory.jpg" />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="relative w-full aspect-[4/3] min-h-[340px] rounded-lg overflow-hidden shadow-md">
            <Image src="/1200-900-1.jpg" alt={a.storyTitle} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
          </div>
          <div className="space-y-5 text-slate-700">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold">{a.storyKicker}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight tracking-tight">{a.storyTitle}</h2>
            <p className="text-lg leading-relaxed">{a.storyP1}</p>
            <p className="text-base leading-relaxed text-slate-600">{a.storyP2}</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-bgAlt py-12 md:py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {a.stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl md:text-5xl font-extrabold text-brand-orange mb-2">{s.num}</p>
              <p className="text-slate-600 uppercase tracking-wider text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">{a.workshopTitle}</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-base md:text-lg">{a.workshopSubtitle}</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2629.jpg" alt={a.workshopTitle} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-[3/2] md:col-span-2 rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2576.jpg" alt={a.workshopTitle} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-[3/2] md:col-span-2 rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2645.jpg" alt={a.workshopTitle} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2655.jpg" alt={a.workshopTitle} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover object-center" />
          </div>
        </div>
      </section>

      <section className="bg-brand-bgAlt py-14 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-10 tracking-tight">{a.teamTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {a.team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full bg-slate-200 border-2 border-dashed border-slate-300" aria-label={m.name} role="img" />
                <p className="font-bold text-brand-dark">{m.name}</p>
                <p className="text-sm text-slate-500 mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 text-center bg-white">
        <Link href={`/${lang}/contact`} className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-base px-8 py-3.5 rounded-md shadow-md">{a.ctaButton}</Link>
      </section>
    </main>
  );
}
