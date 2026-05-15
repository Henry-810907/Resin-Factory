import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/settings";
import { BreadcrumbJsonLd } from "@/lib/jsonld";

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const dict = await getDictionary(params.lang as Locale);
  return {
    title: dict.legal.shipping.title,
    description: dict.legal.shipping.intro,
    alternates: { canonical: `/${params.lang}/shipping` },
    robots: { index: true, follow: true },
  };
}

export default async function ShippingPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const s = dict.legal.shipping;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.header.nav.home ?? "Home", url: `/${lang}` },
          { name: s.title, url: `/${lang}/shipping` },
        ]}
      />
      <LegalPage
        title={s.title}
        intro={s.intro}
        lastUpdated={s.lastUpdated}
        sections={s.sections}
        contactCta={dict.legal.contactCta}
        contactCtaButton={dict.legal.contactCtaButton}
        lang={lang}
      />
    </>
  );
}
