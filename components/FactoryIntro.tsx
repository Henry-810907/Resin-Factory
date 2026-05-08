import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary["factoryIntro"] };

export default function FactoryIntro({ dict }: Props) {
  return (
    <section className="bg-white w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="space-y-5 text-slate-700">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold">{dict.kicker}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight">{dict.title}</h2>
          <p className="text-lg leading-relaxed">{dict.p1}</p>
          <p className="text-base leading-relaxed text-slate-600">{dict.p2}</p>
        </div>
        <div className="relative w-full aspect-[4/3] min-h-[360px] rounded-lg overflow-hidden shadow-md">
          <Image src="/factory.jpg" alt={dict.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-14 md:mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark">{dict.peopleTitle}</h3>
          <p className="text-base text-slate-500 mt-3">{dict.peopleSubtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image src="/600-600.jpg" alt={dict.peopleTitle} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-[2/1] md:col-span-2 rounded-lg overflow-hidden">
            <Image src="/1200-600.jpg" alt={dict.peopleTitle} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image src="/600-600-2.jpg" alt={dict.peopleTitle} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image src="/600-600-3.jpg" alt={dict.peopleTitle} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2625.jpg" alt={dict.peopleTitle} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-[2/1] md:col-span-2 rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2602.jpg" alt={dict.peopleTitle} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
