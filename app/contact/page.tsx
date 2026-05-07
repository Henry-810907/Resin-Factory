import CustomSelect from "@/components/CustomSelect";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PRODUCT_TYPES = [
  "Mascot Figurine",
  "Designer Toy / Art Toy",
  "Statue / GK Kit",
  "Blind Box Series",
  "Bobblehead",
  "Resin Keychain",
  "Diorama / Display Base",
  "Other",
];

const QUANTITIES = [
  "100 – 300",
  "300 – 1,000",
  "1,000 – 5,000",
  "5,000 – 10,000",
  "10,000+ (let's discuss)",
  "Not sure yet",
];

const CONTACTS = [
  {
    title: "Email",
    value: "hello@resin-factory.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 6 10 7L22 6" />
      </svg>
    ),
  },
  {
    title: "Phone / WhatsApp",
    value: "+86 18924330727",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Address",
    value: "Yiwu, Zhejiang, China",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Hours",
    value: "Mon–Fri  09:00 – 18:00 (UTC+8)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-3 tracking-tight">
              Get a Quote
            </h1>
            <p className="text-base md:text-lg text-slate-600">
              Reply with a free 3D mock-up &amp; quote within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 表单 */}
            <form className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-7 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Full name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Work email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <CustomSelect
                  label="Product type"
                  name="productType"
                  options={PRODUCT_TYPES}
                />
                <CustomSelect
                  label="Estimated quantity"
                  name="quantity"
                  options={QUANTITIES}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Tell us about your project *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-stretch gap-3">
                <label className="flex-1 flex items-center justify-center text-sm text-slate-500 border border-dashed border-slate-300 rounded-md px-4 py-3 text-center cursor-pointer hover:border-brand-orange hover:text-brand-orange transition">
                  📎 Attach reference files (PNG · JPG · PDF · AI · STL · ZTL)
                </label>
                <button
                  type="submit"
                  className="bg-brand-orange hover:bg-brand-orangeDark transition text-white text-sm font-semibold px-8 py-3 rounded-md shadow-sm whitespace-nowrap"
                >
                  Send Inquiry
                </button>
              </div>
            </form>

            {/* 联系方式 */}
            <aside className="bg-brand-bgAlt rounded-xl p-6 md:p-7 flex flex-col border border-slate-200">
              <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-5">
                Other ways to reach us
              </h3>
              <div className="space-y-4">
                {CONTACTS.map((c) => (
                  <div key={c.title} className="flex gap-3 items-start">
                    <span className="w-9 h-9 rounded-full bg-white text-brand-orange flex items-center justify-center shrink-0 border border-slate-200">
                      {c.icon}
                    </span>
                    <div className="leading-tight">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                        {c.title}
                      </p>
                      <p className="text-sm text-brand-dark mt-0.5">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 谷歌地图嵌入 */}
              <div className="flex-1 min-h-[280px] mt-6 rounded-md overflow-hidden bg-white border border-slate-200">
                <iframe
                  title="Resin Factory 工厂位置 — Yiwu, Zhejiang, China"
                  src="https://www.google.com/maps?q=Yiwu+Zhejiang+China&z=10&output=embed&hl=en&gl=us"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </aside>
          </div>

          <p className="text-[11px] text-center text-slate-400 mt-5">
            By submitting you agree to our Privacy Policy. We never share your contact details with third parties.
          </p>
        </div>
      </section>
    </main>
  );
}
