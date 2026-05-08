import CustomersCarousel from "./CustomersCarousel";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary["bestSellers"]; customers: Dictionary["customers"] };

export default function BestSellers({ dict, customers }: Props) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-3">{dict.kicker}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3 tracking-tight">{dict.title}</h2>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">{dict.subtitle}</p>
      </div>
      <CustomersCarousel customers={customers} />
    </section>
  );
}
