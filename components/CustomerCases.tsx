import Image from "next/image";
import { Star } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

const IMAGES = [
  "/pictures/case-01.jpg",
  "/pictures/case-02.jpg",
  "/pictures/case-03.jpg",
  "/pictures/case-04.jpg",
  "/pictures/case-05.jpg",
  "/pictures/case-06.jpg",
];

type Props = { dict: Dictionary["customerCases"] };

export default function CustomerCases({ dict }: Props) {
  return (
    <section className="bg-white py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-5 md:mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2 sm:mb-3">{dict.kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-3 sm:mb-4 tracking-tight">{dict.title}</h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">{dict.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {dict.cases.map((c, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={IMAGES[i]}
                  alt={`${c.author} - ${c.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-slate-600">Customer Rating</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#FACC15" stroke="#CA8A04" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed text-base mb-4 italic">"{c.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="font-bold text-brand-dark text-sm">{c.author}</div>
                  <span className="text-slate-400">·</span>
                  <div className="text-slate-500 text-sm">{c.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
