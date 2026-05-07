import Image from "next/image";
import Placeholder from "./Placeholder";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  /** 是否显示右侧装饰占位图(默认显示) */
  showImage?: boolean;
  /** 占位图标签(中文用途说明) — 没传 image 时显示 */
  imageLabel?: string;
  /** 真实图片路径(public/ 下) — 传了就用 next/image,否则用 Placeholder */
  image?: string;
  /** 兼容旧调用,不再使用 */
  chapter?: string;
  kicker?: string;
};

/**
 * 子页面通用 Banner(常规风格):
 *  - 浅灰底
 *  - 左:大粗体标题 + 副标
 *  - 右:常规装饰图(传 image 用真图,否则占位)
 */
export default function PageHero({
  title,
  subtitle,
  showImage = true,
  imageLabel = "页面 Banner 装饰图",
  image,
}: PageHeroProps) {
  return (
    <section className="bg-brand-bgAlt border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-4 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
        {showImage &&
          (image ? (
            <div className="relative w-full aspect-[8/5] min-h-[280px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          ) : (
            <Placeholder
              width={1200}
              height={750}
              label={imageLabel}
              className="w-full aspect-[8/5] min-h-[280px]"
            />
          ))}
      </div>
    </section>
  );
}
