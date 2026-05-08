"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

const IMAGES = [
  "/pictures/jpg/img_2738.jpg",
  "/pictures/jpg/img_2740.jpg",
  "/pictures/jpg/img_2735.jpg",
  "/pictures/jpg/img_2736.jpg",
  "/pictures/jpg/img_2747.jpg",
  "/pictures/jpg/img_2723.jpg",
  "/pictures/jpg/img_2724.jpg",
  "/pictures/jpg/img_2731.jpg",
];

const AUTOPLAY_MS = 3500;

type Props = { customers: Dictionary["customers"] };

export default function CustomersCarousel({ customers }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [paused, setPaused] = useState(false);

  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return 0;
    return card.offsetWidth + 24;
  };

  const scrollByPage = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * getStep(), behavior: "smooth" });
  };

  useEffect(() => {
    if (paused) return;
    const track = trackRef.current;
    if (!track) return;
    const id = setInterval(() => {
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollBy({ left: getStep(), behavior: "smooth" });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

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

  const cardWidth =
    "w-full sm:w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4.5rem)/4)] xl:w-[calc((100%-6rem)/5)]";

  return (
    <div className="relative w-full px-6 overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div ref={trackRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
        {customers.map((it, i) => (
          <div key={i} data-card className={`snap-start shrink-0 ${cardWidth} bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden flex flex-col border border-slate-200`}>
            <div className="relative w-full aspect-square">
              <Image src={IMAGES[i] ?? IMAGES[0]} alt={`Customer work — ${it.name}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw" className="object-cover object-center" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <p className="font-bold text-brand-dark">{it.name}</p>
              <p className="text-sm text-slate-500 mt-1">{it.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <button aria-label="Previous" disabled={!canPrev} onClick={() => scrollByPage(-1)} className={`absolute left-4 md:left-8 top-[40%] -translate-y-1/2 text-slate-700 hover:text-brand-orange transition z-10 ${canPrev ? "opacity-100" : "opacity-30 cursor-not-allowed"}`}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-[60px] md:h-[60px]"><polyline points="15 6 9 12 15 18" /></svg>
      </button>
      <button aria-label="Next" disabled={!canNext} onClick={() => scrollByPage(1)} className={`absolute right-4 md:right-8 top-[40%] -translate-y-1/2 text-slate-700 hover:text-brand-orange transition z-10 ${canNext ? "opacity-100" : "opacity-30 cursor-not-allowed"}`}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-[60px] md:h-[60px]"><polyline points="9 6 15 12 9 18" /></svg>
      </button>
    </div>
  );
}
