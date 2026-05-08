import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  showImage?: boolean;
  image?: string;
  imageAlt?: string;
};

export default function PageHero({ title, subtitle, showImage = true, image = "/factory.jpg", imageAlt }: PageHeroProps) {
  return (
    <section className="bg-brand-bgAlt border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-4 tracking-tight">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">{subtitle}</p>}
        </div>
        {showImage && (
          <div className="relative w-full aspect-[8/5] min-h-[280px] rounded-lg overflow-hidden shadow-md">
            <Image src={image} alt={imageAlt ?? title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
          </div>
        )}
      </div>
    </section>
  );
}
