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

// 12 个案例,统一 4 行 × 3 列对齐网格
const CASES = [
  { title: "Retail Mascot Statue — North Park", tag: "Brands", image: "/pictures/jpg/img_2727.jpg" },
  { title: "Indie Designer Toy Drop", tag: "Designer Toys", image: "/pictures/jpg/img_2716.jpg" },
  { title: "Anime IP 1/7 Statue — Studio S", tag: "IP / Animation", image: "/pictures/jpg/img_2729.jpg" },
  { title: "Coffee Chain Resin Promo", tag: "Brands", image: "/pictures/jpg/img_2725.jpg" },
  { title: "Hospital Donation Series", tag: "Charity", image: "/pictures/jpg/img_2747.jpg" },
  { title: "E-Sports Team Bobblehead", tag: "E-Sports", image: "/pictures/jpg/img_2730.jpg" },
  { title: "Toy Brand Blind Box SKU", tag: "Brands", image: "/pictures/jpg/img_2722.jpg" },
  { title: "Museum Gift-Shop Diorama", tag: "Museum & Galleries", image: "/pictures/jpg/img_2736.jpg" },
  { title: "Convention Resin Drop", tag: "IP / Animation", image: "/pictures/jpg/img_2723.jpg" },
  { title: "Gallery Limited Edition Statue", tag: "Museum & Galleries", image: "/pictures/jpg/img_2735.jpg" },
  { title: "Charity Auction Resin Set", tag: "Charity", image: "/pictures/jpg/img_2740.jpg" },
  { title: "Game Studio Collector Figure", tag: "E-Sports", image: "/pictures/jpg/img_2738.jpg" },
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {CASES.map((c) => (
              <div
                key={c.title}
                className="group rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition bg-white flex flex-col h-full"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[10px] uppercase tracking-wider text-brand-orange font-bold mb-0.5">
                    {c.tag}
                  </p>
                  <p className="text-sm font-semibold text-brand-dark leading-snug line-clamp-2">{c.title}</p>
                </div>
              </div>
            ))}
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
