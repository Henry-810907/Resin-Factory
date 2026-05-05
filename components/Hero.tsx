import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      {/* 满屏背景轮播图(1920×700) */}
      <HeroCarousel />

      {/* 左侧浮层文案卡片:深蓝 50% 半透明底 */}
      <div className="relative z-10 w-full h-full pl-6 md:pl-24 lg:pl-40 pr-6 flex items-center">
        <div className="bg-slate-900/50 backdrop-blur rounded-xl px-8 md:px-12 py-16 md:py-24 shadow-xl text-white max-w-xl">
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6 tracking-tight">
            Custom Plush Toys for Brands &amp; Businesses
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-2 opacity-95">
            Your Designs, Manufactured at Scale.
          </p>
          <p className="text-sm md:text-base opacity-90 mb-8">
            Worldwide Shipping · Low MOQ · Full-Service Production
          </p>
          <button className="bg-brand-green hover:bg-brand-greenDark transition text-white font-bold tracking-wider text-sm md:text-base px-8 py-4 rounded-md shadow-md">
            GET A QUOTE
          </button>
        </div>
      </div>
    </section>
  );
}
