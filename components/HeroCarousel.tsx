"use client";

import { useEffect, useState } from "react";
import Placeholder from "./Placeholder";

type Slide = {
  imageLabel: string;
  title: string;
  subtitle: string;
  tag: string;
};

const SLIDES: Slide[] = [
  {
    imageLabel: "Hero 满屏图 1(产品场景)",
    title: "Custom Plush Toys for Brands & Businesses",
    subtitle: "Your Designs, Manufactured at Scale.",
    tag: "Free Design · Worldwide Shipping · Low MOQ",
  },
  {
    imageLabel: "Hero 满屏图 2(工厂车间)",
    title: "Made in Our Own Factory.",
    subtitle: "Every stitch tracked. Every batch tested.",
    tag: "CE / EN71 Certified · No Middlemen · Real-Time Updates",
  },
  {
    imageLabel: "Hero 满屏图 3(批量交付)",
    title: "From 50 Pieces to 10,000.",
    subtitle: "Scale up without losing quality.",
    tag: "25-Day Turnaround · Free Sampling · Worldwide Shipping",
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
      {/* 满屏背景图轮播(1920×700) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((s) => (
            <div key={s.imageLabel} className="w-full h-full shrink-0">
              <Placeholder
                width={1920}
                height={700}
                label={s.imageLabel}
                className="w-full h-full rounded-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 左侧文案卡片(深蓝半透明)— 文字会跟随轮播切换 */}
      <div className="relative z-10 w-full h-full pl-6 md:pl-24 lg:pl-40 pr-6 flex items-center">
        <div className="bg-slate-900/50 backdrop-blur rounded-xl px-8 md:px-12 py-16 md:py-24 shadow-xl text-white max-w-xl">
          {/* key={index} 触发淡入动画 */}
          <div key={index} className="hero-fade">
            <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6 tracking-tight">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl font-semibold mb-2 opacity-95">
              {slide.subtitle}
            </p>
            <p className="text-sm md:text-base opacity-90 mb-8">{slide.tag}</p>
          </div>

          {/* 按钮固定不变 */}
          <a
            href="/contact"
            className="inline-block bg-brand-green hover:bg-brand-greenDark transition text-white font-bold tracking-wider text-sm md:text-base px-8 py-4 rounded-md shadow-md"
          >
            GET A QUOTE
          </a>
        </div>
      </div>

      {/* 左右切换 */}
      <button
        aria-label="上一张"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-slate-700 flex items-center justify-center shadow z-20 text-xl"
      >
        ‹
      </button>
      <button
        aria-label="下一张"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-slate-700 flex items-center justify-center shadow z-20 text-xl"
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
