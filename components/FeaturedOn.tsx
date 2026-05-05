import Placeholder from "./Placeholder";

const LOGOS = [
  "纽约时报 Logo",
  "BuzzFeed Logo",
  "Shark Tank Logo",
  "Today Show Logo",
  "Us Weekly Logo",
  "Autism Parenting Logo",
];

export default function FeaturedOn() {
  return (
    <section className="bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-slate-700 mb-8 tracking-wider">
          Featured On:
        </p>
        {/* 仅一行,不允许换行;在小屏可横向滚动 */}
        <div className="flex flex-nowrap items-center justify-between gap-4 md:gap-8 overflow-x-auto">
          {LOGOS.map((name) => (
            <Placeholder
              key={name}
              width={160}
              height={80}
              label={name}
              className="shrink-0 w-[120px] h-[60px] md:w-[150px] md:h-[70px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
