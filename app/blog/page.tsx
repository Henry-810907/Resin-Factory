import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";

const CATEGORIES = ["All", "How-To", "Behind the Scenes", "Brand Stories", "Materials", "Sustainability"];

const FEATURED = {
  title: "From Sketch to Sample: A Day Inside Our Design Studio",
  excerpt:
    "Take a walk through the seven steps that turn a back-of-napkin drawing into a production-ready plush prototype — including how we pick fabrics, finalize embroidery, and prep for sampling.",
  date: "May 4, 2026",
  read: "8 min read",
  tag: "Behind the Scenes",
};

const POSTS = [
  { title: "Why Low MOQ Matters for Indie Brands", date: "Apr 28, 2026", read: "5 min", tag: "How-To" },
  { title: "Choosing the Right Plush Fabric: A Buyer's Guide", date: "Apr 14, 2026", read: "6 min", tag: "Materials" },
  { title: "Behind a Mascot Launch: The North Park Story", date: "Apr 02, 2026", read: "7 min", tag: "Brand Stories" },
  { title: "Recycled Filling, Real Results: Our 2025 Numbers", date: "Mar 21, 2026", read: "4 min", tag: "Sustainability" },
  { title: "Embroidery vs. Sublimation: When to Use What", date: "Mar 09, 2026", read: "5 min", tag: "Materials" },
  { title: "How E-Sports Teams Use Custom Plush in Drops", date: "Feb 24, 2026", read: "6 min", tag: "Brand Stories" },
];

export default function BlogPage() {
  return (
    <main>
      <PageHero
        title="The Plush Journal"
        subtitle="Stories from our studio, our factory, and the brands we make for. Plus the occasional how-to for first-time plush buyers."
        imageLabel="Blog 页 Banner 主图(横图)"
      />

      {/* 分类筛选 */}
      <section className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((c, i) => (
            <button
              key={c}
              className={`shrink-0 px-4 py-2 text-sm rounded-full border transition ${
                i === 0
                  ? "bg-slate-800 text-white border-slate-800"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* 置顶文章 */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-wider text-brand-green font-bold mb-4">
            Featured
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <Placeholder
              width={1600}
              height={1000}
              label={`置顶文章封面图(横图):${FEATURED.title}`}
              className="md:col-span-3 w-full aspect-[16/10] min-h-[280px]"
            />
            <div className="md:col-span-2 space-y-4">
              <span className="text-xs uppercase tracking-wider text-brand-green font-bold">
                {FEATURED.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-slate-800 leading-tight">
                {FEATURED.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {FEATURED.excerpt}
              </p>
              <p className="text-sm text-slate-500">
                {FEATURED.date} · {FEATURED.read}
              </p>
              <button className="bg-brand-green hover:bg-brand-greenDark transition text-white font-bold tracking-wider px-6 py-3 rounded-md shadow-sm">
                READ FULL POST
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 列表 */}
      <section className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
            More Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((p) => (
              <article
                key={p.title}
                className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
              >
                <Placeholder
                  width={800}
                  height={500}
                  label={`文章封面:${p.title}`}
                  className="w-full aspect-[8/5]"
                />
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-brand-green font-bold mb-2">
                    {p.tag}
                  </span>
                  <h3 className="font-bold text-slate-800 mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-auto">
                    {p.date} · {p.read}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-white border border-slate-200 hover:border-slate-400 text-slate-700 font-bold tracking-wider px-8 py-3 rounded-md transition">
              LOAD MORE
            </button>
          </div>
        </div>
      </section>

      {/* 订阅 */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-slate-800 mb-3">
            Get the next post in your inbox.
          </h2>
          <p className="text-slate-500 mb-6">
            One short email a month. No promos, just stories.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:border-brand-green"
            />
            <button
              type="submit"
              className="bg-brand-green hover:bg-brand-greenDark transition text-white font-bold tracking-wider px-6 py-3 rounded-md"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
