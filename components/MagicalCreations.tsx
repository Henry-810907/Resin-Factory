import Link from "next/link";
import Image from "next/image";

const POSTS = [
  { user: "@resin_collector_88", time: "1 WEEK AGO", image: "/new/64f82e9b41f558668b59d745b1087779.jpg" },
  { user: "@studio_kain", time: "1 WEEK AGO", image: "/new/820b8c436ce4391b00207dcac1f99384.jpg" },
  { user: "@designer_toys_co", time: "1 WEEK AGO", image: "/new/82d3a1952cba9eac0ef6583bdb5c5664.jpg" },
  { user: "@gk_painter22", time: "2 WEEKS AGO", image: "/new/a077b10cce8f68f537117504ff6920c2.jpg" },
  { user: "@art_to_figure", time: "2 WEEKS AGO", image: "/new/a656d250d3f04109d182b538a38a583a.jpg" },
  { user: "@indie_sculptor", time: "3 WEEKS AGO", image: "/new/c106f304449404509cd6972232c70442.jpg" },
  { user: "@brand_studio_x", time: "3 WEEKS AGO", image: "/new/d1d78a1f5855b91587857b70ca936c01.jpg" },
  { user: "@blindbox_fan", time: "1 MONTH AGO", image: "/pictures/jpg/img_2747.jpg" },
];

/**
 * 用户作品墙:常规浅灰底 + 居中标题 + 4×2 卡片网格
 */
export default function MagicalCreations() {
  return (
    <section className="bg-brand-bgAlt py-16 md:py-20 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-3">
            From the Collectors
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3 tracking-tight">
            50,000+ resin figures shipped
          </h2>
          <p className="text-2xl text-amber-500 mb-2">★★★★★ 4.9 / 5</p>
          <p className="text-base text-slate-600">
            We are so thankful for all the love from collectors and brands around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {POSTS.map((p) => (
            <div
              key={p.user}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition border border-slate-200 flex flex-col p-4"
            >
              <div className="relative w-full aspect-square rounded-md overflow-hidden">
                <Image
                  src={p.image}
                  alt={`Customer post — ${p.user}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="pt-3 flex items-center justify-between text-sm text-slate-600">
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-brand-dark">{p.user}</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">{p.time}</span>
                </div>
                <span>📷</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-base px-7 py-3 rounded-md shadow-sm"
          >
            More Customer Examples
          </Link>
        </div>
      </div>
    </section>
  );
}
