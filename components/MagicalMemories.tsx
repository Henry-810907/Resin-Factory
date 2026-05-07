import Image from "next/image";

/**
 * 常规品牌叙事段:浅灰底,左文右图
 */
export default function MagicalMemories() {
  return (
    <section className="bg-brand-bgAlt w-full py-16 md:py-20 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* 左侧文案 */}
        <div className="space-y-5 text-slate-700">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold">
            Studio Promise
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight">
            Bringing characters to life
          </h2>
          <p className="text-lg leading-relaxed">
            Every figure begins with a story. A concept sketch. A beloved IP. A character your fans want to hold in their hands.
          </p>
          <p className="text-lg leading-relaxed">
            We sculpt those moments into reality. Every silhouette shaped by hand, every brushstroke guided by individual artistry.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            Our creations are more than toys — they are collectibles, keepsakes, and the physical form of the worlds your audience already loves.
          </p>
        </div>

        {/* 右侧插画 */}
        <div className="relative w-full aspect-[4/3] min-h-[360px] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/1200-900.jpg"
            alt="主题插画 — 草图 → 雕刻 → 上色 → 树脂公仔示意"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
