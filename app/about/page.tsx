import Link from "next/link";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";

const STATS = [
  { num: "12+", label: "Years in Business" },
  { num: "211,000+", label: "Plush Delivered" },
  { num: "40+", label: "Countries Shipped" },
  { num: "300+", label: "Brands Served" },
];

const TEAM = [
  { name: "Jesse Wong", role: "Founder & CEO", label: "团队头像 1" },
  { name: "Emily Lin", role: "Head of Design", label: "团队头像 2" },
  { name: "Marco Chen", role: "Production Director", label: "团队头像 3" },
  { name: "Sara Patel", role: "Client Success Lead", label: "团队头像 4" },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Us"
        subtitle="A team of designers, makers and storytellers — turning ideas into huggable, lovable plush at scale since 2013."
        imageLabel="About 页 Banner 主图(团队/工厂横图)"
      />

      {/* 公司故事 */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Placeholder
            width={1200}
            height={900}
            label="创始故事插图(创始人或工厂老照片)"
            className="w-full aspect-[4/3] min-h-[320px]"
          />
          <div className="space-y-5 text-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue leading-tight">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed">
              We started in 2013 with one sewing machine and a stack of
              children&apos;s drawings on a coffee table. What began as a way
              to turn one kid&apos;s sketch into a real plush has grown into a
              full-service custom plush manufacturer working with brands all
              over the world.
            </p>
            <p className="text-lg leading-relaxed">
              We still hand-finish every plush. We still treat every order —
              one piece or ten thousand — like the most important order of the
              day. Because for someone, somewhere, it is.
            </p>
          </div>
        </div>
      </section>

      {/* 数据条 */}
      <section className="bg-brand-lightBlue py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-4xl md:text-5xl font-bold text-brand-blue mb-2">
                {s.num}
              </p>
              <p className="text-slate-600 uppercase tracking-wider text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 工厂展示 */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800">
            Inside Our Workshop
          </h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            We don&apos;t outsource. Every step happens in our own facility —
            so we can stand behind every stitch.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <Placeholder width={800} height={1000} label="工厂照片 1(裁剪车间)" className="w-full aspect-[4/5]" />
          <Placeholder width={1200} height={800} label="工厂照片 2(缝纫车间,横图)" className="w-full aspect-[3/2] md:col-span-2" />
          <Placeholder width={1200} height={800} label="工厂照片 3(QC 车间,横图)" className="w-full aspect-[3/2] md:col-span-2" />
          <Placeholder width={800} height={1000} label="工厂照片 4(包装车间)" className="w-full aspect-[4/5]" />
        </div>
      </section>

      {/* 核心团队 */}
      <section className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 text-center mb-10">
            The People Behind the Plush
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="text-center">
                <Placeholder
                  width={500}
                  height={500}
                  label={m.label}
                  circle
                  className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4"
                />
                <p className="font-bold text-slate-800">{m.name}</p>
                <p className="text-sm text-slate-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 text-center">
        <Link
          href="/contact"
          className="inline-block bg-brand-green hover:bg-brand-greenDark transition text-white font-bold tracking-wider px-8 py-4 rounded-md shadow-md"
        >
          WORK WITH US
        </Link>
      </section>
    </main>
  );
}
