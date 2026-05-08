import type { Dictionary } from "@/i18n/get-dictionary";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS = [
  // Low MOQ
  (<svg width="32" height="32" viewBox="0 0 24 24" {...stroke} key="i1"><path d="M3 7h18l-1 12H4z" /><path d="M8 7V5a4 4 0 0 1 8 0v2" /></svg>),
  // Free 3D Sculpting
  (<svg width="32" height="32" viewBox="0 0 24 24" {...stroke} key="i2"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" /><circle cx="6" cy="6" r="1" fill="currentColor" /></svg>),
  // CE/EN71/ASTM
  (<svg width="32" height="32" viewBox="0 0 24 24" {...stroke} key="i3"><path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6z" /><path d="m9 12 2 2 4-4" /></svg>),
  // Own Factory
  (<svg width="32" height="32" viewBox="0 0 24 24" {...stroke} key="i4"><path d="M3 21V10l5 3V10l5 3V7l8 4v10z" /><path d="M9 21v-4h2v4M14 21v-4h2v4" /></svg>),
  // On-Time
  (<svg width="32" height="32" viewBox="0 0 24 24" {...stroke} key="i5"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>),
  // Flexible Payment
  (<svg width="32" height="32" viewBox="0 0 24 24" {...stroke} key="i6"><rect x="2" y="6" width="20" height="13" rx="2" /><path d="M2 10h20" /><path d="M6 15h4" /></svg>),
];

type Props = { dict: Dictionary["whyChooseUs"] };

export default function WhyChooseUs({ dict }: Props) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-3">{dict.kicker}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 tracking-tight">{dict.title}</h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">{dict.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.features.map((f, i) => (
            <div key={f.title} className="bg-white rounded-xl p-7 shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition">
              <div className="w-12 h-12 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-5">
                {ICONS[i] ?? ICONS[0]}
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
