import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale, localeMeta, locales } from "@/i18n/settings";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/lib/jsonld";

const SITE_URL = "https://resin-factory.com";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS = {
  email: <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7L22 6" /></svg>,
  phone: <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" /></svg>,
  company: <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M3 21V8l9-5 9 5v13" /><path d="M9 21v-6h6v6" /></svg>,
  address: <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  hours: <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
};

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const title = dict.meta.contact.title;
  const desc = dict.meta.contact.description;
  const url = `${SITE_URL}/${lang}/contact`;

  return {
    title,
    description: desc,
    alternates: { canonical: `/${lang}/contact` },
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

export default async function ContactPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);
  const c = dict.contact;

  const CONTACTS: { title: string; value: string; icon: React.ReactNode; href?: string }[] = [
    { title: c.labels.email, value: "henry@resin-factory.com", icon: ICONS.email, href: "mailto:henry@resin-factory.com" },
    { title: c.labels.phone, value: "+86 136 8269 2148", icon: ICONS.phone, href: "tel:+8613682692148" },
    { title: c.labels.company, value: "Shenzhen Heli Toys Co., Ltd.", icon: ICONS.company },
    { title: c.labels.address, value: "Room 318, Building 618, Bagua Ling Industrial Zone, Bagua 1st Road, Pengsheng Community, Yuanling Street, Futian District, Shenzhen, China", icon: ICONS.address },
    { title: c.labels.hours, value: c.hours, icon: ICONS.hours },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.header.nav.home ?? "Home", url: `/${lang}` },
          { name: dict.header.nav.contact, url: `/${lang}/contact` },
        ]}
      />
      <section className="bg-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-6 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-2 sm:mb-3 tracking-tight">{c.title}</h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">{c.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/*
              表单 = ContactForm 客户端组件,提交到 /api/contact:
                - Hostinger SMTP 从 henry@ 发邮件给 henry@(发件人即收件人)
                - 客户邮箱填到 Reply-To,你点回复就回到客户
                - 不发自动回执(避免假邮箱 bounce 反弹)
                - 蜜罐 + IP 限流(每 IP 10min/3 次)
                - 全程无第三方
            */}
            <ContactForm dict={c} lang={lang} />

            <aside className="bg-brand-bgAlt rounded-xl p-5 sm:p-6 md:p-7 flex flex-col border border-slate-200">
              <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-5">{c.asideTitle}</h3>
              <div className="space-y-4">
                {CONTACTS.map((cc) => (
                  <div key={cc.title} className="flex gap-3 items-start">
                    <span className="w-9 h-9 rounded-full bg-white text-brand-orange flex items-center justify-center shrink-0 border border-slate-200">{cc.icon}</span>
                    <div className="leading-tight">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{cc.title}</p>
                      {cc.href ? (
                        <a href={cc.href} className="text-sm text-brand-dark mt-0.5 hover:text-brand-orange transition">{cc.value}</a>
                      ) : (
                        <p className="text-sm text-brand-dark mt-0.5">{cc.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-1 min-h-[280px] mt-6 rounded-md overflow-hidden bg-white border border-slate-200">
                <iframe
                  title="Shenzhen Heli Toys Co., Ltd."
                  src="https://www.google.com/maps?q=Bagua+Ling+Industrial+Zone+Futian+Shenzhen+China&z=15&output=embed&hl=en&gl=us"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </aside>
          </div>

          <p className="text-[11px] text-center text-slate-400 mt-5">{c.privacy}</p>
        </div>
      </section>
    </>
  );
}
