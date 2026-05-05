import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      {/* 图片背景 + 左侧文案 + 控件,全部由 HeroCarousel 管理 */}
      <HeroCarousel />
    </section>
  );
}
