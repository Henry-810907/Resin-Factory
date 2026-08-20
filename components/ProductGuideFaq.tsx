"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ProductGuideFaqProps {
  title: string;
  items: {
    q: string;
    a: string;
  }[];
}

export default function ProductGuideFaq({ title, items }: ProductGuideFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-brand-dark mb-8 md:mb-10">
          {title}
        </h2>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition"
              >
                <span className="font-bold text-brand-dark text-sm sm:text-base pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-brand-orange flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
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
