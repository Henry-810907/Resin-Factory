import Placeholder from "./Placeholder";

export default function FactoryIntro() {
  return (
    <section className="bg-white w-full py-12 md:py-16">
      {/* 上半部分:左文右图,横屏满屏 */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-6 text-slate-700">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-green font-bold">
            Inside Our Workshop
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-blue leading-tight">
            Where every plush gets made.
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            We don&apos;t outsource a single stitch. Every plush you order is
            cut, sewn, stuffed and finished in our own workshop — by people
            we&apos;ve worked with for years.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600">
            Climate-controlled rooms, ergonomic seating, low-noise machines,
            non-toxic materials. We invested in the room before we ever
            invested in the production line.
          </p>
        </div>

        {/* 右侧大图 */}
        <Placeholder
          width={1600}
          height={1100}
          label="工厂主图(车间全景,横图)"
          className="w-full aspect-[16/11] min-h-[400px] md:min-h-[500px]"
        />
      </div>

      {/* 下半部分:同事拼图 + 文案(收窄宽度,缩短高度) */}
      <div className="w-full max-w-7xl mx-auto px-6 mt-10 md:mt-14">
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-3xl font-light text-slate-800 leading-tight max-w-2xl mx-auto">
            Made by people who love their work.
          </h3>
          <p className="text-sm md:text-base text-slate-500 mt-3 max-w-xl mx-auto">
            It shows in every stitch.
          </p>
        </div>

        {/* 4 列,正方形 + 2 列横图,行高统一更紧凑 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <Placeholder
            width={600}
            height={600}
            label="同事工作 1(缝制中)"
            className="w-full aspect-square"
          />
          <Placeholder
            width={1200}
            height={600}
            label="同事合影(横图,跨 2 列)"
            className="w-full aspect-[2/1] md:col-span-2"
          />
          <Placeholder
            width={600}
            height={600}
            label="同事工作 2(QA 检查)"
            className="w-full aspect-square"
          />

          <Placeholder
            width={600}
            height={600}
            label="车间下午茶"
            className="w-full aspect-square"
          />
          <Placeholder
            width={600}
            height={600}
            label="同事打包发货"
            className="w-full aspect-square"
          />
          <Placeholder
            width={1200}
            height={600}
            label="车间生日会(横图,跨 2 列)"
            className="w-full aspect-[2/1] md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
