"use client";

import { AlertTriangle, DollarSign, Package } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary["pricingGuide"] };

export default function PricingGuide({ dict }: Props) {
  return (
    <section className="bg-white py-6 md:py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-5 md:mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2 sm:mb-3">{dict.kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-3 sm:mb-4 tracking-tight">{dict.title}</h2>
          <p className="text-sm sm:text-base text-slate-600 mb-4">{dict.subtitle}</p>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 md:mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">{dict.disclaimer}</p>
          </div>
        </div>

        {/* Two Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          {/* One-Time Fees Card */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 md:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <DollarSign className="text-brand-orange" size={24} />
              {dict.oneTimeFees.title}
            </h3>
            <ul className="space-y-3">
              {dict.oneTimeFees.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <div className="flex-1 flex justify-between items-start gap-3">
                    <span className="text-sm sm:text-base text-slate-700 font-medium">{item.label}</span>
                    <span className="text-sm sm:text-base text-brand-orange whitespace-nowrap">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Unit Price Card */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 md:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <Package className="text-brand-orange" size={24} />
              {dict.unitPrice.title}
            </h3>
            
            {/* Price Table */}
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-300 bg-slate-100">
                    <th className="text-left py-2 px-2 text-slate-700 font-semibold border-r border-slate-200">{dict.unitPrice.tableHeaders.quantity}</th>
                    <th className="text-center py-2 px-2 text-slate-700 font-semibold border-r border-slate-200">{dict.unitPrice.tableHeaders.size10cm}</th>
                    <th className="text-center py-2 px-2 text-slate-700 font-semibold border-r border-slate-200">{dict.unitPrice.tableHeaders.size15cm}</th>
                    <th className="text-center py-2 px-2 text-slate-700 font-semibold">{dict.unitPrice.tableHeaders.size30cm}</th>
                  </tr>
                </thead>
                <tbody>
                  {dict.unitPrice.priceRows.map((row, i) => (
                    <tr key={i} className="border-b border-slate-200">
                      <td className="py-2 px-2 text-slate-700 font-medium border-r border-slate-200">{row.quantity}</td>
                      <td className="py-2 px-2 text-center text-brand-orange border-r border-slate-200">{row.size10cm}</td>
                      <td className="py-2 px-2 text-center text-brand-orange border-r border-slate-200">{row.size15cm}</td>
                      <td className="py-2 px-2 text-center text-brand-orange">{row.size30cm}</td>
                    </tr>
                  ))}
                  {/* Packaging Row */}
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="py-2 px-2 text-slate-700 font-medium border-r border-slate-200">{dict.unitPrice.packagingLabel}</td>
                    <td className="py-2 px-2 text-center text-brand-orange border-r border-slate-200">$0.62</td>
                    <td className="py-2 px-2 text-center text-brand-orange border-r border-slate-200">$0.77</td>
                    <td className="py-2 px-2 text-center text-brand-orange">$0.92</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Shipping Info */}
            <div className="text-xs sm:text-sm">
              <p className="text-slate-600">
                <span className="font-semibold text-slate-700">{dict.unitPrice.shippingLabel}:</span>{" "}
                {dict.unitPrice.shippingValue}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/en/contact"
            className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm whitespace-nowrap"
          >
            {dict.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
