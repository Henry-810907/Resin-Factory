import { MessageCircle, FileText, DollarSign, Box, CreditCard, Factory, Video, Wallet, Truck } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

const ICONS = [
  MessageCircle,  // 01 - Share Your Requirements
  FileText,       // 02 - Get Free Quote
  DollarSign,     // 03 - Pay Sample Fee
  Box,            // 04 - 3D Modeling & Sampling
  CreditCard,     // 05 - Pay Deposit
  Factory,        // 06 - Mass Production
  Video,          // 07 - Video Confirmation
  Wallet,         // 08 - Pay Balance
  Truck,          // 09 - Delivery
];

type Props = { dict: Dictionary["orderProcess"] };

export default function OrderProcess({ dict }: Props) {
  return (
    <section className="bg-slate-50 py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-5 md:mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2 sm:mb-3">{dict.kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-3 sm:mb-4 tracking-tight">{dict.title}</h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">{dict.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {dict.steps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <div key={step.title} className="bg-white rounded-xl p-5 sm:p-7 shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
