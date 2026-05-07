import HeroCarousel from "./HeroCarousel";

/**
 * 常规 Hero:700px 全屏背景图轮播 + 左侧文案卡。
 */
export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <HeroCarousel />
    </section>
  );
}
