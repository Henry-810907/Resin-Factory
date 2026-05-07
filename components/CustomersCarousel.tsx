"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ITEMS = [
  { name: "Sarah", caption: "Turned our concept art into a 1/7 scale resin statue.", image: "/pictures/jpg/img_2738.jpg" },
  { name: "Michael", caption: "Designer toy series for our convention drop.", image: "/pictures/jpg/img_2740.jpg" },
  { name: "Lily", caption: "Brand mascot resin figure — color-matched perfectly.", image: "/pictures/jpg/img_2735.jpg" },
  { name: "James", caption: "Limited-run blind box for our retail launch.", image: "/pictures/jpg/img_2736.jpg" },
  { name: "Anna", caption: "Hand-painted GK kit for our IP collaboration.", image: "/pictures/jpg/img_2747.jpg" },
  { name: "David", caption: "OC chibi figure for an anime studio booth.", image: "/pictures/jpg/img_2723.jpg" },
  { name: "Emily", caption: "Bobblehead run for a corporate gifting campaign.", image: "/pictures/jpg/img_2724.jpg" },
  { name: "Tom", caption: "Bulk production for a museum gift-shop SKU.", image: "/pictures/jpg/img_2731.jpg" },
];

const AUTOPLAY_MS = 3500;

export default function CustomersCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [paused, setPaused] = useState(false);

  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return 0;
    return card.offsetWidth + 24; // gap-6 = 24px
  };

  const scrollByPage = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * getStep(), behavior: "smooth" });
  };

  // 自动循环:每隔一段时间向右滚一张;滚到末尾就回到起点
  useEffect(() => {
    if (paused) return;
    const track = trackRef.current;
    if (!track) return;

    const id = setInterval(() => {
      const atEnd =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: getStep(), behavior: "smooth" });
      }
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [paused]);

  // 边界控制(按钮可点状态)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      setCanPrev(track.scrollLeft > 4);
      setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  /**
   * 卡片宽度按"父容器宽度"精确切分:width = (100% - (N-1)*gap) / N
   *   sm  ≥ 640px  → 2 张  (100% - 1.5rem) / 2
   *   md  ≥ 768px  → 3 张  (100% - 3rem) / 3
   *   lg  ≥ 1024px → 4 张  (100% - 4.5rem) / 4
   *   xl  ≥ 1280px → 5 张  (100% - 6rem) / 5
   *   base         → 1 张  100%
   */
  const cardWidth =
    "w-full " +
    "sm:w-[calc((100%-1.5rem)/2)] " +
    "md:w-[calc((100%-3rem)/3)] " +
    "lg:w-[calc((100%-4.5rem)/4)] " +
    "xl:w-[calc((100%-6rem)/5)]";

  return (
    /* 鼠标悬停时暂停自动播放,移开恢复 */
    <div
      className="relative w-full px-6 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {ITEMS.map((it) => (
          <div
            key={it.image}
            data-card
            className={`snap-start shrink-0 ${cardWidth} bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden flex flex-col border border-slate-200`}
          >
            <div className="relative w-full aspect-square">
              <Image
                src={it.image}
                alt={`Customer work — ${it.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-center"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <p className="font-bold text-brand-dark">{it.name}</p>
              <p className="text-sm text-slate-500 mt-1">{it.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 切换按钮:仅箭头(圆角线条),无背景 */}
      <button
        aria-label="上一组"
        disabled={!canPrev}
        onClick={() => scrollByPage(-1)}
        className={`absolute left-4 md:left-8 top-[40%] -translate-y-1/2 text-slate-700 hover:text-brand-orange transition z-10 ${
          canPrev ? "opacity-100" : "opacity-30 cursor-not-allowed"
        }`}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="md:w-[60px] md:h-[60px]"
        >
          <polyline points="15 6 9 12 15 18" />
        </svg>
      </button>
      <button
        aria-label="下一组"
        disabled={!canNext}
        onClick={() => scrollByPage(1)}
        className={`absolute right-4 md:right-8 top-[40%] -translate-y-1/2 text-slate-700 hover:text-brand-orange transition z-10 ${
          canNext ? "opacity-100" : "opacity-30 cursor-not-allowed"
        }`}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="md:w-[60px] md:h-[60px]"
        >
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>
    </div>
  );
}
