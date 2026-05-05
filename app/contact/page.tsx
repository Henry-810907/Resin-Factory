import CustomSelect from "@/components/CustomSelect";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PRODUCT_TYPES = [
  "Mascot Plush",
  "Brand Giveaway",
  "Drawing-to-Plush",
  "Custom Pillows",
  "Plush Keychains",
  "Hand Puppets",
  "Bobbleheads / Figurines",
  "Other",
];

const QUANTITIES = [
  "50 – 200",
  "200 – 1,000",
  "1,000 – 5,000",
  "5,000 – 10,000",
  "10,000+ (let's discuss)",
  "Not sure yet",
];

const CONTACTS = [
  {
    title: "Email",
    value: "hello@custom-plush.com",
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
      <section className="pt-4 md:pt-6 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-light text-slate-800 leading-tight mb-1">
              Get a Quote
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              Reply with a free mock-up &amp; quote within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 表单 */}
            <form className="lg:col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm p-7 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Full name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 text-sm rounded-md border border-slate-200 focus:outline-none focus:border-brand-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 text-sm rounded-md border border-slate-200 focus:outline-none focus:border-brand-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Work email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 text-sm rounded-md border border-slate-200 focus:outline-none focus:border-brand-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 text-sm rounded-md border border-slate-200 focus:outline-none focus:border-brand-green"
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
                  className="w-full px-4 py-3 text-sm rounded-md border border-slate-200 focus:outline-none focus:border-brand-green resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-stretch gap-3">
                <label className="flex-1 flex items-center justify-center text-sm text-slate-500 border border-dashed border-slate-300 rounded-md px-4 py-3 text-center cursor-pointer hover:border-brand-green hover:text-brand-greenDark transition">
                  📎 Attach reference files (PNG · JPG · PDF · AI)
                </label>
                <button
                  type="submit"
                  className="bg-brand-green hover:bg-brand-greenDark transition text-white text-sm font-bold tracking-wider px-8 py-3 rounded-md shadow-md whitespace-nowrap"
                >
                  SEND INQUIRY
                </button>
              </div>
            </form>

            {/* 联系方式 */}
            <aside className="bg-brand-lightBlue rounded-xl p-6 md:p-7 flex flex-col">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-5">
                Other ways to reach us
              </h3>
              <div className="space-y-4">
                {CONTACTS.map((c) => (
                  <div key={c.title} className="flex gap-3 items-start">
                    <span className="w-8 h-8 rounded-full bg-white text-brand-greenDark flex items-center justify-center shrink-0">
                      {c.icon}
                    </span>
                    <div className="leading-tight">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                        {c.title}
                      </p>
                      <p className="text-sm text-slate-800">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 谷歌地图嵌入:flex-1 + h-full 让其填满侧栏剩余高度 */}
              <div className="flex-1 min-h-[260px] mt-5 rounded-md overflow-hidden bg-white">
                <iframe
                  title="Custom Plush 工厂位置 — Yiwu, Zhejiang, China"
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
            By submitting you agree to our Privacy Policy. We never share your
            contact details with third parties.
          </p>
        </div>
      </section>
    </main>
  );
}
