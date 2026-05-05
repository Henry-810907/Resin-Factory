type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const FEATURES: Feature[] = [
  {
    title: "Low MOQ",
    desc: "Start small — orders from as few as 50 units. No giant minimums, no inflated risk.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 7h18l-1 12H4z" />
        <path d="M8 7V5a4 4 0 0 1 8 0v2" />
      </svg>
    ),
  },
  {
    title: "Free Design Service",
    desc: "Send us a sketch, photo or brief — our in-house artists turn it into a production-ready design at no cost.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "CE / EN71 Certified",
    desc: "Every plush is tested to international toy safety standards (CE, EN71, ASTM F963) — ready for global retail.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Our Own Factory",
    desc: "We don't outsource. End-to-end production in our own workshop means tighter QA and faster turnarounds.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 21V10l5 3V10l5 3V7l8 4v10z" />
        <path d="M9 21v-4h2v4M14 21v-4h2v4" />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    desc: "Average 25-day production from approved sample. Tracked timelines and milestones the whole way.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Flexible Payment",
    desc: "30% deposit, 70% before shipment. Trade Assurance & wire transfer accepted — easy on your cash flow.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" {...stroke}>
        <rect x="2" y="6" width="20" height="13" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h4" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-light text-slate-700 mb-4">
            Why Brands Choose Us
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From a single mascot to a worldwide retail run — we make custom
            plush production simple, safe, and on-time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-green/10 text-brand-greenDark flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {f.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
