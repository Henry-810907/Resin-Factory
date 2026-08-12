import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/settings";
import { BreadcrumbJsonLd } from "@/lib/jsonld";

// ISR: 每 7 天重新验证
export const revalidate = 604800;

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const dict = await getDictionary(params.lang as Locale);
  return {
    title: dict.legal.privacy.title,
    description: dict.legal.privacy.intro,
    alternates: { canonical: `/${params.lang}/privacy` },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const p = dict.legal.privacy;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.header.nav.home ?? "Home", url: `/${lang}` },
          { name: p.title, url: `/${lang}/privacy` },
        ]}
      />
      <LegalPage
        title={p.title}
        intro={p.intro}
        lastUpdated={p.lastUpdated}
        sections={p.sections}
        contactCta={dict.legal.contactCta}
        contactCtaButton={dict.legal.contactCtaButton}
        lang={lang}
      />
    </>
  );
}
