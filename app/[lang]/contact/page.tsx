import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactLink from "@/components/ContactLink";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale, localeMeta, locales } from "@/i18n/settings";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/lib/jsonld";

// ISR: 每 24 小时重新验证
export const revalidate = 86400;

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
  whatsapp: <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor"><path d="M16.003 2.667c-7.36 0-13.336 5.973-13.336 13.333 0 2.347.61 4.64 1.776 6.667l-1.886 6.886 7.06-1.853a13.27 13.27 0 0 0 6.382 1.626h.005c7.357 0 13.333-5.972 13.333-13.333 0-3.561-1.386-6.91-3.901-9.426a13.244 13.244 0 0 0-9.433-3.9zm0 24.36h-.004a11.06 11.06 0 0 1-5.642-1.546l-.405-.241-4.19 1.099 1.118-4.084-.263-.42a11.072 11.072 0 0 1-1.696-5.835c0-6.122 4.984-11.105 11.085-11.105 2.962 0 5.745 1.155 7.835 3.249a10.998 10.998 0 0 1 3.244 7.84c0 6.123-4.984 11.043-11.082 11.043zm6.078-8.273c-.333-.166-1.969-.972-2.273-1.082-.305-.111-.527-.166-.749.166-.222.333-.86 1.082-1.054 1.305-.194.222-.388.249-.721.083-.333-.166-1.405-.518-2.677-1.65-.989-.881-1.659-1.97-1.853-2.303-.194-.333-.021-.513.146-.679.15-.149.333-.388.5-.582.166-.194.222-.333.333-.555.111-.222.056-.416-.027-.582-.083-.166-.749-1.806-1.026-2.475-.27-.65-.546-.562-.75-.572l-.638-.011c-.222 0-.582.083-.886.416-.305.333-1.165 1.139-1.165 2.776 0 1.638 1.193 3.221 1.359 3.443.166.222 2.347 3.583 5.685 5.024.794.343 1.413.547 1.896.7.797.253 1.522.218 2.094.132.639-.095 1.969-.805 2.247-1.583.277-.777.277-1.444.194-1.583-.083-.139-.305-.222-.638-.388z" /></svg>,
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
                {/* 邮箱 - 带转化追踪 */}
                <ContactLink
                  href="mailto:henry@resin-factory.com"
                  icon={ICONS.email}
                  title={c.labels.email}
                  value="henry@resin-factory.com"
                />
                
                {/* 电话 - 带转化追踪 */}
                <ContactLink
                  href={"tel:" + "+861" + "368269" + "2148"}
                  icon={ICONS.phone}
                  title={c.labels.phone}
                  value="+86 136 8269 2148"
                />
                
                {/* WhatsApp - 带转化追踪 */}
                <ContactLink
                  href={"https://wa.me/" + "861" + "368269" + "2148"}
                  icon={ICONS.whatsapp}
                  title="WhatsApp"
                  value="+86 136 8269 2148"
                />
                
                {/* 公司信息 - 无链接 */}
                <div className="flex gap-3 items-start">
                  <span className="w-9 h-9 rounded-full bg-white text-brand-orange flex items-center justify-center shrink-0 border border-slate-200">{ICONS.company}</span>
                  <div className="leading-tight">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{c.labels.company}</p>
                    <p className="text-sm text-brand-dark mt-0.5">Shenzhen Heli Toys Co., Ltd.</p>
                  </div>
                </div>
                
                {/* 地址 - 无链接 */}
                <div className="flex gap-3 items-start">
                  <span className="w-9 h-9 rounded-full bg-white text-brand-orange flex items-center justify-center shrink-0 border border-slate-200">{ICONS.address}</span>
                  <div className="leading-tight">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{c.labels.address}</p>
                    <p className="text-sm text-brand-dark mt-0.5">Room 318, Building 618, Bagua Ling Industrial Zone, Bagua 1st Road, Pengsheng Community, Yuanling Street, Futian District, Shenzhen, China</p>
                  </div>
                </div>
                
                {/* 营业时间 - 无链接 */}
                <div className="flex gap-3 items-start">
                  <span className="w-9 h-9 rounded-full bg-white text-brand-orange flex items-center justify-center shrink-0 border border-slate-200">{ICONS.hours}</span>
                  <div className="leading-tight">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{c.labels.hours}</p>
                    <p className="text-sm text-brand-dark mt-0.5">{c.hours}</p>
                  </div>
                </div>
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
