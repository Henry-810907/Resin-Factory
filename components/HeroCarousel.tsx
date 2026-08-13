"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";

const IMAGES = [
  "/resin-figurines-collection.jpg",
  "/custom-resin-toys-showcase.jpg",
  "/resin-samples-factory.jpg"
];

type Props = { dict: Dictionary["hero"]; lang: string };

export default function HeroCarousel({ dict, lang }: Props) {
  const [index, setIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // 实际 slides 数量（不包括克隆）
  const slideCount = dict.slides.length;
  
  // 渲染的 slides：[克隆尾] + [真实slides] + [克隆头]
  // 索引：0(克隆尾) + 1~slideCount(真实) + slideCount+1(克隆头)
  const renderIndex = index + 1;

  useEffect(() => {
    if (userInteracted) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slideCount);
    }, 5000);
    return () => clearInterval(t);
  }, [slideCount, userInteracted]);

  const handleTransitionEnd = () => {
    // 当到达克隆图片时，瞬间跳转到真实图片
    if (index === -1) {
      // 从克隆尾跳到真实尾
      setIsTransitioning(false);
      setIndex(slideCount - 1);
    } else if (index === slideCount) {
      // 从克隆头跳到真实头
      setIsTransitioning(false);
      setIndex(0);
    }
  };

  // 当 isTransitioning 变为 false 时，立即恢复为 true（用于下一次动画）
  useEffect(() => {
    if (!isTransitioning) {
      // 强制重绘后恢复 transition
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  const prev = () => {
    setUserInteracted(true);
    if (index === 0) {
      // 从第一张向左切换到克隆尾
      setIndex(-1);
    } else {
      setIndex((i) => i - 1);
    }
  };

  const next = () => {
    setUserInteracted(true);
    if (index === slideCount - 1) {
      // 从最后一张向右切换到克隆头
      setIndex(slideCount);
    } else {
      setIndex((i) => i + 1);
    }
  };

  const goToSlide = (i: number) => {
    setUserInteracted(true);
    setIndex(i);
  };

  const slide = dict.slides[index >= 0 && index < slideCount ? index : 0];

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={trackRef}
          className={`absolute inset-0 flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${renderIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {/* 克隆尾（最后一张的副本） */}
          <div className="relative w-full h-full shrink-0">
            <Image src={IMAGES[slideCount - 1]} alt={dict.slides[slideCount - 1].alt} fill sizes="(max-width: 768px) 100vw, 100vw" quality={85} className="object-cover object-center" />
          </div>
          {/* 真实 slides */}
          {dict.slides.map((s, i) => (
            <div key={i} className="relative w-full h-full shrink-0">
              <Image src={IMAGES[i] ?? IMAGES[0]} alt={s.alt} fill priority={i === 0} sizes="(max-width: 768px) 100vw, 100vw" quality={85} className="object-cover object-center" />
            </div>
          ))}
          {/* 克隆头（第一张的副本） */}
          <div className="relative w-full h-full shrink-0">
            <Image src={IMAGES[0]} alt={dict.slides[0].alt} fill sizes="(max-width: 768px) 100vw, 100vw" quality={85} className="object-cover object-center" />
          </div>
        </div>
      </div>

      <button aria-label={dict.prevAria} onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center shadow-md z-20 text-xl transition">‹</button>
      <button aria-label={dict.nextAria} onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center shadow-md z-20 text-xl transition">›</button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {dict.slides.map((_, i) => (
          <button key={i} aria-label={`${dict.dotAria} ${i + 1}`} onClick={() => goToSlide(i)} className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>
    </>
  );
}
