import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary["factoryIntro"] };

export default function FactoryIntro({ dict }: Props) {
  return (
    <section className="bg-white w-full py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-center">
        <div className="space-y-3 sm:space-y-5 text-slate-700">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold">{dict.kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight">{dict.title}</h2>
          <p className="text-base sm:text-lg leading-relaxed">{dict.description}</p>
          
          {/* 4 Key Points */}
          <div className="grid grid-cols-1 gap-3 mt-6">
            {dict.points.map((point, i) => (
              <div key={i} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* YouTube Video */}
        <div className="relative w-full aspect-video min-h-[220px] md:min-h-[360px] rounded-lg overflow-hidden shadow-md bg-black">
          <iframe
            src="https://www.youtube.com/embed/XLu1iPuZ_EA?rel=0&modestbranding=1"
            title={dict.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>

      {/* 3 Images as cards */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition">
          <div className="p-[2px]">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/pictures/factory-exterior.jpg" alt="Factory Exterior" fill sizes="(max-width: 768px) 100vw, 33vw" quality={85} className="object-cover" />
            </div>
          </div>
          <div className="px-3 pb-3 text-center">
            <h3 className="text-base font-bold text-brand-dark">{dict.factoryExterior}</h3>
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition">
          <div className="p-[2px]">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/pictures/production-line.jpg" alt="Production Line" fill sizes="(max-width: 768px) 100vw, 33vw" quality={85} className="object-cover" />
            </div>
          </div>
          <div className="px-3 pb-3 text-center">
            <h3 className="text-base font-bold text-brand-dark">{dict.productionLine}</h3>
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition">
          <div className="p-[2px]">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/pictures/product-exhibition.jpg" alt="Product Exhibition" fill sizes="(max-width: 768px) 100vw, 33vw" quality={85} className="object-cover" />
            </div>
          </div>
          <div className="px-3 pb-3 text-center">
            <h3 className="text-base font-bold text-brand-dark">{dict.productExhibition}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
