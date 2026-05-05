import Placeholder from "./Placeholder";

export default function MagicalMemories() {
  return (
    <section className="bg-brand-lightBlue w-full py-12 md:py-16">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* 左侧文案 */}
        <div className="space-y-6 text-slate-700">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-blue leading-tight">
            Creating Magical Memories!
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            Every plush begins with a story. A child&apos;s drawing. A beloved face. A memory worth holding onto.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed">
            We take those moments and bring them to life. Every detail is shaped by hand with care, every stitch guided by individual artistry.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed">
            Our creations are more than toys. They are companions, keepsakes, and reminders of life&apos;s most precious moments!
          </p>
        </div>

        {/* 右侧插画占位:横图 */}
        <Placeholder
          width={1600}
          height={1000}
          label="主题插画(画作变毛绒玩具示意,横图)"
          className="w-full aspect-[16/10] min-h-[400px] md:min-h-[480px]"
        />
      </div>
    </section>
  );
}
