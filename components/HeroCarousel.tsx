"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = {
  /** public/ 下的图片路径 */
  image: string;
  /** 图片 alt(也用作图片说明) */
  alt: string;
  title: string;
  subtitle: string;
  tag: string;
};

const SLIDES: Slide[] = [
  {
    image: "/hero1.jpg",
    alt: "树脂公仔成品场景 1",
    title: "Custom Resin Figurines for Brands & IP",
    subtitle: "From concept sketch to hand-painted collectible.",
    tag: "Free 3D Sculpting · Worldwide Shipping · Low MOQ",
  },
  {
    image: "/hero2.jpg",
    alt: "树脂公仔成品场景 2",
    title: "Sculpted, Cast & Painted in Our Own Factory",
    subtitle: "Every master sculpt approved. Every batch QC tested.",
    tag: "CE / EN71 / ASTM Certified · No Middlemen · Real-Time Updates",
  },
  {
    image: "/hero3.jpg",
    alt: "树脂公仔成品场景 3",
    title: "From 100 Pieces to 10,000",
    subtitle: "Scale up without losing the hand-painted detail.",
    tag: "35-Day Turnaround · Free Resin Sampling · Worldwide Shipping",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);

  const slide = SLIDES[index];

  return (
    <>
      {/* 满屏背景图轮播 */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <div key={s.image} className="relative w-full h-full shrink-0">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover object-right"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 左侧文案卡(深色半透明) */}
      <div className="relative z-10 w-full h-full pl-6 md:pl-16 lg:pl-24 pr-6 flex items-center">
        <div className="bg-brand-dark/85 backdrop-blur-sm rounded-lg px-8 md:px-12 py-12 md:py-16 shadow-2xl text-white max-w-xl">
          <div key={index} className="hero-fade">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 tracking-tight">
              {slide.title}
            </h1>
            <p className="text-base md:text-lg text-slate-200 mb-3">
              {slide.subtitle}
            </p>
            <p className="text-sm text-slate-300 mb-8">{slide.tag}</p>
          </div>

          <a
            href="/contact"
            className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-base px-8 py-3.5 rounded-md shadow-md"
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* 左右切换 */}
      <button
        aria-label="上一张"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center shadow-md z-20 text-xl transition"
      >
        ‹
      </button>
      <button
        aria-label="下一张"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center shadow-md z-20 text-xl transition"
      >
        ›
      </button>

      {/* 圆点指示器 */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`切到第 ${i + 1} 张`}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </>
  );
}
