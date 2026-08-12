import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/settings";
import { notFound } from "next/navigation";

// ISR: 每 1 小时重新验证
export const revalidate = 3600;

const FactoryIntro = dynamic(() => import("@/components/FactoryIntro"));
const MagicalMemories = dynamic(() => import("@/components/MagicalMemories"));
const BestSellers = dynamic(() => import("@/components/BestSellers"));
const MagicalCreations = dynamic(() => import("@/components/MagicalCreations"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));

type Props = { params: { lang: string } };

export default async function HomePage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  return (
    <>
      <h1 className="sr-only">{dict.hero.h1}</h1>
      <Hero dict={dict.hero} lang={lang} />
      <FactoryIntro dict={dict.factoryIntro} />
      <MagicalMemories dict={dict.magicalMemories} />
      <BestSellers dict={dict.bestSellers} customers={dict.customers} />
      <MagicalCreations dict={dict.magicalCreations} lang={lang} />
      <WhyChooseUs dict={dict.whyChooseUs} />
    </>
  );
}
