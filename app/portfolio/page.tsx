import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

const FILTERS = [
  "All",
  "Brands",
  "IP / Animation",
  "Designer Toys",
  "Charity",
  "E-Sports",
  "Museum & Galleries",
];

// 12 个示例案例,部分用 col-span-2 形成瀑布流的视觉节奏
const CASES = [
  { title: "Retail Mascot Statue — North Park", tag: "Brands", span: "md:col-span-2", image: "/pictures/jpg/img_2727.jpg" },
  { title: "Indie Designer Toy Drop", tag: "Designer Toys", span: "", image: "/pictures/jpg/img_2716.jpg" },
  { title: "Anime IP 1/7 Statue — Studio S", tag: "IP / Animation", span: "", image: "/pictures/jpg/img_2729.jpg" },
  { title: "Coffee Chain Resin Promo", tag: "Brands", span: "", image: "/pictures/jpg/img_2725.jpg" },
  { title: "Hospital Donation Series", tag: "Charity", span: "md:col-span-2", image: "/pictures/jpg/img_2747.jpg" },
  { title: "E-Sports Team Bobblehead", tag: "E-Sports", span: "", image: "/pictures/jpg/img_2730.jpg" },
  { title: "Toy Brand Blind Box SKU", tag: "Brands", span: "", image: "/pictures/jpg/img_2722.jpg" },
  { title: "Museum Gift-Shop Diorama", tag: "Museum & Galleries", span: "md:col-span-2", image: "/pictures/jpg/img_2736.jpg" },
  { title: "Convention Resin Drop", tag: "IP / Animation", span: "", image: "/pictures/jpg/img_2723.jpg" },
  { title: "Gallery Limited Edition Statue", tag: "Museum & Galleries", span: "", image: "/pictures/jpg/img_2735.jpg" },
  { title: "Charity Auction Resin Set", tag: "Charity", span: "", image: "/pictures/jpg/img_2740.jpg" },
  { title: "Game Studio Collector Figure", tag: "E-Sports", span: "", image: "/pictures/jpg/img_2738.jpg" },
];

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        title="Portfolio"
        subtitle="Selected work for global brands, IP licensors, designer-toy artists, museums and charities — every figure sculpted, cast and hand-painted in our own factory."
        image="/pictures/jpg/img_2727.jpg"
      />

      {/* 筛选器 */}
      <section className="border-b border-slate-200 sticky top-[72px] bg-white/95 backdrop-blur z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto scrollbar-hide">
          {FILTERS.map((f, i) => (
            <button
              key={f}
              className={`shrink-0 px-4 py-2 text-sm font-medium rounded-full border transition ${
                i === 0
                  ? "bg-brand-dark text-white border-brand-dark"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* 案例网格 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES.map((c) => (
              <div
                key={c.title}
                className={`group rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition bg-white ${c.span}`}
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes={c.span ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-wider text-brand-orange font-bold mb-1">
                    {c.tag}
                  </p>
                  <p className="font-bold text-brand-dark">{c.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-base px-8 py-3 rounded-md shadow-sm">
              Load More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-brand-bgAlt py-12 md:py-14">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-5 tracking-tight">
            Want to be our next case study?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-base px-8 py-3.5 rounded-md shadow-sm"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}
