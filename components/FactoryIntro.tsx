import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary["factoryIntro"] };

export default function FactoryIntro({ dict }: Props) {
  return (
    <section className="bg-white w-full py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-center">
        <div className="space-y-3 sm:space-y-5 text-slate-700">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold">{dict.kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight">{dict.title}</h2>
          <p className="text-base sm:text-lg leading-relaxed">{dict.p1}</p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">{dict.p2}</p>
        </div>
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

      <div className="max-w-7xl mx-auto px-5 sm:px-6 mt-10 md:mt-20">
        <div className="text-center mb-6 md:mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark">{dict.peopleTitle}</h3>
          <p className="text-sm sm:text-base text-slate-500 mt-2 sm:mt-3">{dict.peopleSubtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-[1fr_2fr_1fr] gap-3 md:gap-4">
          {/* 方图1 */}
          <div className="relative w-full aspect-square rounded-lg overflow-hidden order-1 md:order-1">
            <Image src="/1-Art-Of-Sanding.jpg" alt={dict.peopleTitle} fill sizes="(max-width: 768px) 50vw, 25vw" quality={65} className="object-cover object-center" />
          </div>
          {/* 方图2 */}
          <div className="relative w-full aspect-square rounded-lg overflow-hidden order-2 md:order-3">
            <Image src="/2-Art-Of-Hand-Painted3.jpg" alt={dict.peopleTitle} fill sizes="(max-width: 768px) 50vw, 25vw" quality={65} className="object-cover object-center" />
          </div>
          {/* 横图1 */}
          <div className="relative w-full aspect-[2/1] col-span-2 md:col-span-1 rounded-lg overflow-hidden order-3 md:order-2">
            <Image src="/7-Art-Of-Hand-Painted.jpg" alt={dict.peopleTitle} fill sizes="100vw" quality={65} className="object-cover object-center" />
          </div>
          {/* 方图3 */}
          <div className="relative w-full aspect-square rounded-lg overflow-hidden order-4 md:order-4">
            <Image src="/4-Unfinished-Resin Casting.jpg" alt={dict.peopleTitle} fill sizes="(max-width: 768px) 50vw, 25vw" quality={65} className="object-cover object-center" />
          </div>
          {/* 方图4 */}
          <div className="relative w-full aspect-square rounded-lg overflow-hidden order-5 md:order-6">
            <Image src="/6-Art-Of-Hand-Painted1.jpg" alt={dict.peopleTitle} fill sizes="(max-width: 768px) 50vw, 25vw" quality={65} className="object-cover object-center" />
          </div>
          {/* 横图2 */}
          <div className="relative w-full aspect-[2/1] col-span-2 md:col-span-1 rounded-lg overflow-hidden order-6 md:order-5">
            <Image src="/8-Art-Of-Hand-Painted.jpg" alt={dict.peopleTitle} fill sizes="100vw" quality={65} className="object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
