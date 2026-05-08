import Hero from "@/components/Hero";
import FactoryIntro from "@/components/FactoryIntro";
import MagicalMemories from "@/components/MagicalMemories";
import BestSellers from "@/components/BestSellers";
import MagicalCreations from "@/components/MagicalCreations";
import WhyChooseUs from "@/components/WhyChooseUs";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/settings";
import { notFound } from "next/navigation";

type Props = { params: { lang: string } };

export default async function HomePage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  return (
    <>
      <Hero dict={dict.hero} lang={lang} />
      <FactoryIntro dict={dict.factoryIntro} />
      <MagicalMemories dict={dict.magicalMemories} />
      <BestSellers dict={dict.bestSellers} customers={dict.customers} />
      <MagicalCreations dict={dict.magicalCreations} lang={lang} />
      <WhyChooseUs dict={dict.whyChooseUs} />
    </>
  );
}
