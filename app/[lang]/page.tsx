import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/settings";
import { notFound } from "next/navigation";

// ISR: 每 1 小时重新验证
export const revalidate = 3600;

const FactoryIntro = dynamic(() => import("@/components/FactoryIntro"));
const ProductCategories = dynamic(() => import("@/components/ProductCategories"));
const ProductGuideHint = dynamic(() => import("@/components/ProductGuideHint"));
const ManufacturingProcess = dynamic(() => import("@/components/ManufacturingProcess"));
const OrderProcess = dynamic(() => import("@/components/OrderProcess"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const CustomerCases = dynamic(() => import("@/components/CustomerCases"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const BlogShowcase = dynamic(() => import("@/components/BlogShowcase"));

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
      <ProductCategories dict={dict.productCategories} />
      <ProductGuideHint
        title={dict.productGuideHint.title}
        subtitle={dict.productGuideHint.subtitle}
        buttonText={dict.productGuideHint.buttonText}
        href={`/${lang}/products`}
      />
      <ManufacturingProcess dict={dict.manufacturingProcess} />
      <OrderProcess dict={dict.orderProcess} />
      <WhyChooseUs dict={dict.whyChooseUs} />
      <CustomerCases dict={dict.customerCases} />
      <FAQ dict={dict.homepageFaq} />
        <BlogShowcase dict={dict.blogShowcase} blogDict={dict.blog} lang={lang} />
    </>
  );
}
