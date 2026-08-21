import HeroCarousel from "./HeroCarousel";
import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary["hero"]; lang: string };

export default function Hero({ dict, lang }: Props) {
  return (
    <section className="relative w-full h-[300px] sm:h-[560px] md:h-[700px] min-h-[300px] sm:min-h-[560px] md:min-h-[700px] overflow-hidden">
      <HeroCarousel dict={dict} lang={lang} />
      
      {/* Bottom overlay content */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center text-white z-30 px-4 pb-3 md:pb-4">
        <Link
          href={`/${lang}/contact`}
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition shadow-lg mb-2"
        >
          {dict.cta}
        </Link>
        
        {/* 3 Stats */}
        <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-2xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-1.5">
            <div className="text-sm md:text-lg font-bold">100</div>
            <div className="text-xs md:text-sm">{dict.stat1Label}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-1.5">
            <div className="text-sm md:text-lg font-bold">25+</div>
            <div className="text-xs md:text-sm">{dict.stat2Label}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-1.5">
            <div className="text-sm md:text-lg font-bold">150+</div>
            <div className="text-xs md:text-sm">{dict.stat3Label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
