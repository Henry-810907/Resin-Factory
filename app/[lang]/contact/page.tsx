import type { Metadata } from "next";
import CustomSelect from "@/components/CustomSelect";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/settings";
import { notFound } from "next/navigation";

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
  const dict = await getDictionary(params.lang as Locale);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    alternates: { canonical: `/${params.lang}/contact` },
  };
}

export default async function ContactPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const dict = await getDictionary(params.lang as Locale);
  const c = dict.contact;
  const f = c.form;

  const CONTACTS: { title: string; value: string; icon: React.ReactNode }[] = [
    { title: c.labels.email, value: "hello@resin-factory.com", icon: ICONS.email },
    { title: c.labels.phone, value: "+86 136 8269 2148", icon: ICONS.phone },
    { title: c.labels.company, value: "Shenzhen Heli Toys Co., Ltd.", icon: ICONS.company },
    { title: c.labels.address, value: "Room 318, Building 618, Bagua Ling Industrial Zone, Bagua 1st Road, Pengsheng Community, Yuanling Street, Futian District, Shenzhen, China", icon: ICONS.address },
    { title: c.labels.hours, value: c.hours, icon: ICONS.hours },
  ];

  return (
    <main>
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-3 tracking-tight">{c.title}</h1>
            <p className="text-base md:text-lg text-slate-600">{c.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <form className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-7 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">{f.fullName} {f.required}</label>
                  <input type="text" required className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">{f.company} {f.required}</label>
                  <input type="text" required className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">{f.email} {f.required}</label>
                  <input type="email" required className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">{f.phone}</label>
                  <input type="tel" className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange" />
                </div>
                <CustomSelect label={f.productType} name="productType" options={c.productTypes} />
                <CustomSelect label={f.quantity} name="quantity" options={c.quantities} />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">{f.project} {f.required}</label>
                <textarea required rows={4} className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange resize-none" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-stretch gap-3">
                <label className="flex-1 flex items-center justify-center text-sm text-slate-500 border border-dashed border-slate-300 rounded-md px-4 py-3 text-center cursor-pointer hover:border-brand-orange hover:text-brand-orange transition">
                  📎 {f.attach}
                </label>
                <button type="submit" className="bg-brand-orange hover:bg-brand-orangeDark transition text-white text-sm font-semibold px-8 py-3 rounded-md shadow-sm whitespace-nowrap">{f.submit}</button>
              </div>
            </form>

            <aside className="bg-brand-bgAlt rounded-xl p-6 md:p-7 flex flex-col border border-slate-200">
              <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-5">{c.asideTitle}</h3>
              <div className="space-y-4">
                {CONTACTS.map((cc) => (
                  <div key={cc.title} className="flex gap-3 items-start">
                    <span className="w-9 h-9 rounded-full bg-white text-brand-orange flex items-center justify-center shrink-0 border border-slate-200">{cc.icon}</span>
                    <div className="leading-tight">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{cc.title}</p>
                      <p className="text-sm text-brand-dark mt-0.5">{cc.value}</p>
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
    </main>
  );
}
