import Image from "next/image";
import Placeholder from "./Placeholder";

/**
 * 常规工厂介绍:
 *  - 上半:左文 + 右大图
 *  - 下半:6 张同事拼图(2 横 + 4 方)
 */
export default function FactoryIntro() {
  return (
    <section className="bg-white w-full py-16 md:py-20">
      {/* 上半部分:左文右图 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="space-y-5 text-slate-700">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold">
            Inside Our Workshop
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight">
            Where every figure gets made
          </h2>
          <p className="text-lg leading-relaxed">
            We don&apos;t outsource a single step. Every resin figurine is
            sculpted, moulded, cast, hand-painted and packed in our own
            workshop — by sculptors and painters we&apos;ve worked with for
            years.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            Ventilated casting rooms, dust-controlled paint booths, calibrated
            airbrush stations, low-VOC resins. We invested in the room before
            we ever invested in the production line.
          </p>
        </div>

        <div className="relative w-full aspect-[4/3] min-h-[360px] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/factory.jpg"
            alt="Resin figurine workshop — every figure sculpted, cast and painted in-house"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* 下半部分:同事拼图 */}
      <div className="max-w-7xl mx-auto px-6 mt-14 md:mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark">
            Made by people who love their craft
          </h3>
          <p className="text-base text-slate-500 mt-3">
            It shows in every brushstroke.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src="/600-600.jpg"
              alt="师傅工作 1 — 原型雕刻 / Sculpting"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative w-full aspect-[2/1] md:col-span-2 rounded-lg overflow-hidden">
            <Image
              src="/1200-600.jpg"
              alt="Factory team group photo — Resin Factory workshop"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src="/600-600-2.jpg"
              alt="师傅工作 2 — 注模脱模 / Casting"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center"
            />
          </div>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src="/600-600-3.jpg"
              alt="师傅工作 3 — 手绘上色 / Hand Painting"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src="/pictures/jpg/IMG_2625.jpg"
              alt="师傅工作 4 — QC / 喷涂检查"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative w-full aspect-[2/1] md:col-span-2 rounded-lg overflow-hidden">
            <Image
              src="/pictures/jpg/IMG_2602.jpg"
              alt="车间日常 — 长桌涂装"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
