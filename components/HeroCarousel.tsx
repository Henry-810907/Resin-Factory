"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";

const IMAGES = ["/resin-figurines-collection.jpg", "/custom-resin-toys-showcase.jpg", "/resin-samples-factory.jpg"];

type Props = { dict: Dictionary["hero"]; lang: string };

export default function HeroCarousel({ dict, lang }: Props) {
  const [index, setIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  
  useEffect(() => {
    if (userInteracted) return; // 用户操作后停止自动播放
    const t = setInterval(() => setIndex((i) => (i + 1) % dict.slides.length), 5000);
    return () => clearInterval(t);
  }, [dict.slides.length, userInteracted]);

  const prev = () => {
    setUserInteracted(true);
    setIndex((i) => (i - 1 + dict.slides.length) % dict.slides.length);
  };
  const next = () => {
    setUserInteracted(true);
    setIndex((i) => (i + 1) % dict.slides.length);
  };
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
              <Image src={IMAGES[i] ?? IMAGES[0]} alt={s.alt} fill priority={i === 0} sizes="100vw" quality={65} className="object-cover object-center" />
            </div>
          ))}
        </div>
      </div>

      <button aria-label={dict.prevAria} onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center shadow-md z-20 text-xl transition">‹</button>
      <button aria-label={dict.nextAria} onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center shadow-md z-20 text-xl transition">›</button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {dict.slides.map((_, i) => (
          <button key={i} aria-label={`${dict.dotAria} ${i + 1}`} onClick={() => {
            setUserInteracted(true);
            setIndex(i);
          }} className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>
    </>
  );
}
