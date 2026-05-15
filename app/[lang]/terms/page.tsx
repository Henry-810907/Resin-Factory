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
    title: dict.legal.terms.title,
    description: dict.legal.terms.intro,
    alternates: { canonical: `/${params.lang}/terms` },
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const t = dict.legal.terms;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.header.nav.home ?? "Home", url: `/${lang}` },
          { name: t.title, url: `/${lang}/terms` },
        ]}
      />
      <LegalPage
        title={t.title}
        intro={t.intro}
        lastUpdated={t.lastUpdated}
        sections={t.sections}
        contactCta={dict.legal.contactCta}
        contactCtaButton={dict.legal.contactCtaButton}
        lang={lang}
      />
    </>
  );
}
