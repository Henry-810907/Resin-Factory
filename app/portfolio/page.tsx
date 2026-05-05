import Link from "next/link";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";

const FILTERS = [
  "All",
  "Brands",
  "IP / Animation",
  "Schools",
  "Charity",
  "E-Sports",
  "F&B Mascots",
];

// 12 个示例案例,部分用 col-span-2 形成瀑布流的视觉节奏
const CASES = [
  { title: "Retail Mascot — North Park", tag: "Brands", span: "md:col-span-2" },
  { title: "School Reading Buddy", tag: "Schools", span: "" },
  { title: "Anime IP — Studio S", tag: "IP / Animation", span: "" },
  { title: "Coffee Chain Plush Drop", tag: "F&B Mascots", span: "" },
  { title: "Hospital Donation Series", tag: "Charity", span: "md:col-span-2" },
  { title: "E-Sports Team Mascot", tag: "E-Sports", span: "" },
  { title: "Toy Brand Holiday SKU", tag: "Brands", span: "" },
  { title: "Children's Book Companion", tag: "Schools", span: "md:col-span-2" },
  { title: "Convention Plush Run", tag: "IP / Animation", span: "" },
  { title: "Pet Food Mascot", tag: "F&B Mascots", span: "" },
  { title: "Charity Auction Plush", tag: "Charity", span: "" },
  { title: "Game Studio Promo", tag: "E-Sports", span: "" },
];

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        title="Portfolio"
        subtitle="Selected work for global brands, IP licensors, schools, and charities — every plush handcrafted in our own factory."
        imageLabel="Portfolio 页 Banner 主图(横图)"
      />

      {/* 筛选器(占位,纯展示) */}
      <section className="border-b border-slate-100 sticky top-[72px] bg-white/95 backdrop-blur z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto scrollbar-hide">
          {FILTERS.map((f, i) => (
            <button
              key={f}
              className={`shrink-0 px-4 py-2 text-sm rounded-full border transition ${
                i === 0
                  ? "bg-slate-800 text-white border-slate-800"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* 案例网格 */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CASES.map((c) => (
              <div
                key={c.title}
                className={`group rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition ${c.span}`}
              >
                <Placeholder
                  width={c.span ? 1200 : 800}
                  height={800}
                  label={`案例:${c.title}`}
                  className="w-full aspect-[4/3]"
                />
                <div className="p-4 bg-white">
                  <p className="text-xs uppercase tracking-wider text-brand-green font-bold mb-1">
                    {c.tag}
                  </p>
                  <p className="font-bold text-slate-800">{c.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-brand-green hover:bg-brand-greenDark transition text-white font-bold tracking-wider px-8 py-4 rounded-md shadow-md">
              LOAD MORE
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Want to be our next case study?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-brand-green hover:bg-brand-greenDark transition text-white font-bold tracking-wider px-8 py-4 rounded-md shadow-md"
          >
            START A PROJECT
          </Link>
        </div>
      </section>
    </main>
  );
}
