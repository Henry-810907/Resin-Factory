import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary["productCategories"] };

const IMAGES = [
  "/pictures/ip-based-resin-figurines.jpg",
  "/pictures/cultural-tourism-souvenirs.jpg",
  "/pictures/large-sculpture-replicas.jpg",
  "/pictures/product-parts-accessories.jpg",
  "/pictures/mascot-promotional-items.jpg",
  "/pictures/home-decor-figurines.jpg",
  "/pictures/car-dashboard-figurines.jpg",
  "/pictures/blind-box-series.jpg",
  "/pictures/resin-keychains.jpg",
];

export default function ProductCategories({ dict }: Props) {
  return (
    <section className="bg-slate-50 py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2 sm:mb-3">{dict.kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-3 sm:mb-4 tracking-tight">{dict.title}</h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">{dict.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {dict.categories.map((cat, i) => (
            <div key={cat.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition">
              <div className="relative w-full aspect-square">
                <Image
                  src={IMAGES[i]}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  quality={85}
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2">{cat.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
