"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary["homepageFaq"] };

export default function FAQ({ dict }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-10 md:py-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2 sm:mb-3">{dict.kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-3 sm:mb-4 tracking-tight">{dict.title}</h2>
        </div>

        <div className="space-y-3">
          {dict.items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition"
              >
                <span className="font-bold text-brand-dark text-sm sm:text-base pr-4">{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-brand-orange flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-slate-600 leading-relaxed text-sm">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
