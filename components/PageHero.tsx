import Placeholder from "./Placeholder";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  /** 是否显示右侧装饰占位图(默认显示) */
  showImage?: boolean;
  /** 占位图标签(中文用途说明) */
  imageLabel?: string;
};

export default function PageHero({
  title,
  subtitle,
  showImage = true,
  imageLabel = "页面 Banner 装饰图",
}: PageHeroProps) {
  return (
    <section className="bg-brand-lightBlue">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
        {showImage && (
          <Placeholder
            width={1200}
            height={750}
            label={imageLabel}
            className="w-full aspect-[8/5] min-h-[260px]"
          />
        )}
      </div>
    </section>
  );
}
