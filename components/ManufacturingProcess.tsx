import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary["manufacturingProcess"] };

export default function ManufacturingProcess({ dict }: Props) {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2 sm:mb-3">{dict.kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-3 sm:mb-4 tracking-tight">{dict.title}</h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">{dict.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {dict.steps.map((step, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  quality={85}
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.num}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
