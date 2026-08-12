import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary["magicalMemories"] };

export default function MagicalMemories({ dict }: Props) {
  return (
    <section className="bg-brand-bgAlt w-full py-10 md:py-20 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-center">
        <div className="space-y-3 sm:space-y-5 text-slate-700">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold">{dict.kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight">{dict.title}</h2>
          <p className="text-base sm:text-lg leading-relaxed">{dict.p1}</p>
          <p className="text-base sm:text-lg leading-relaxed">{dict.p2}</p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">{dict.p3}</p>
        </div>
        <div className="relative w-full aspect-[4/3] min-h-[220px] md:min-h-[360px] rounded-lg overflow-hidden shadow-md">
          <Image src="/1200-900.jpg" alt={dict.title} fill sizes="(max-width: 768px) 100vw, 50vw" quality={65} loading="lazy" className="object-cover object-center" />
        </div>
      </div>
    </section>
  );
}
