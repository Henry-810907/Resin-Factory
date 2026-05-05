"use client";

import { useEffect, useState } from "react";
import Placeholder from "./Placeholder";

const SLIDES = [
  { label: "Hero 满屏图 1(产品场景)", w: 1920, h: 700 },
  { label: "Hero 满屏图 2(工厂车间)", w: 1920, h: 700 },
  { label: "Hero 满屏图 3(批量交付)", w: 1920, h: 700 },
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

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 轮播容器 */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {SLIDES.map((s) => (
          <div key={s.label} className="w-full h-full shrink-0">
            <Placeholder
              width={s.w}
              height={s.h}
              label={s.label}
              className="w-full h-full rounded-none"
            />
          </div>
        ))}
      </div>

      {/* 左右切换按钮 */}
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
    </div>
  );
}
