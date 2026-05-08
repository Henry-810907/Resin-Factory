"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

const IMAGES = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

type Props = { dict: Dictionary["hero"]; lang: string };

export default function HeroCarousel({ dict, lang }: Props) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % dict.slides.length), 5000);
    return () => clearInterval(t);
  }, [dict.slides.length]);

  const prev = () => setIndex((i) => (i - 1 + dict.slides.length) % dict.slides.length);
  const next = () => setIndex((i) => (i + 1) % dict.slides.length);
  const slide = dict.slides[index];

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {dict.slides.map((s, i) => (
            <div key={i} className="relative w-full h-full shrink-0">
              <Image src={IMAGES[i] ?? IMAGES[0]} alt={s.alt} fill priority={i === 0} sizes="100vw" className="object-cover object-right" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full h-full pl-6 md:pl-16 lg:pl-24 pr-6 flex items-center">
        <div className="bg-brand-dark/85 backdrop-blur-sm rounded-lg px-8 md:px-12 py-12 md:py-16 shadow-2xl text-white max-w-xl">
          <div key={index} className="hero-fade">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 tracking-tight">{slide.title}</h1>
            <p className="text-base md:text-lg text-slate-200 mb-3">{slide.subtitle}</p>
            <p className="text-sm text-slate-300 mb-8">{slide.tag}</p>
          </div>
          <a href={`/${lang}/contact`} className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-base px-8 py-3.5 rounded-md shadow-md">
            {dict.cta}
          </a>
        </div>
      </div>

      <button aria-label={dict.prevAria} onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center shadow-md z-20 text-xl transition">‹</button>
      <button aria-label={dict.nextAria} onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center shadow-md z-20 text-xl transition">›</button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {dict.slides.map((_, i) => (
          <button key={i} aria-label={`${dict.dotAria} ${i + 1}`} onClick={() => setIndex(i)} className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>
    </>
  );
}
