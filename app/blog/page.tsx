import Image from "next/image";
import PageHero from "@/components/PageHero";

const CATEGORIES = ["All", "How-To", "Behind the Scenes", "Brand Stories", "Materials", "Sustainability"];

const FEATURED = {
  title: "From Sketch to Master: A Day Inside Our Sculpting Studio",
  excerpt:
    "Take a walk through the seven steps that turn a back-of-napkin drawing into a production-ready resin master — including how we pick the resin, dial in the airbrush palette, and prep the silicone mold for casting.",
  date: "May 4, 2026",
  read: "8 min read",
  tag: "Behind the Scenes",
  image: "/pictures/jpg/IMG_2629.jpg",
};

const POSTS = [
  { title: "Why Low MOQ Matters for Indie Designer-Toy Artists", date: "Apr 28, 2026", read: "5 min", tag: "How-To", image: "/pictures/jpg/img_2722.jpg" },
  { title: "Choosing the Right Resin: Polyurethane vs. Polystone", date: "Apr 14, 2026", read: "6 min", tag: "Materials", image: "/pictures/jpg/IMG_2592.jpg" },
  { title: "Behind a Statue Launch: The North Park Mascot Story", date: "Apr 02, 2026", read: "7 min", tag: "Brand Stories", image: "/pictures/jpg/img_2727.jpg" },
  { title: "Recycled Resin, Real Results: Our 2025 Numbers", date: "Mar 21, 2026", read: "4 min", tag: "Sustainability", image: "/pictures/jpg/IMG_2580.jpg" },
  { title: "Airbrush vs. Hand Brush: When to Use What", date: "Mar 09, 2026", read: "5 min", tag: "Materials", image: "/pictures/jpg/IMG_2616.jpg" },
  { title: "How E-Sports Teams Use Custom Resin Figures in Drops", date: "Feb 24, 2026", read: "6 min", tag: "Brand Stories", image: "/pictures/jpg/img_2738.jpg" },
];

export default function BlogPage() {
  return (
    <main>
      <PageHero
        title="The Resin Journal"
        subtitle="Stories from our sculpting studio, our casting floor, and the brands we make for. Plus the occasional how-to for first-time resin-figure buyers."
        image="/pictures/jpg/IMG_2599.jpg"
      />

      {/* 分类筛选 */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((c, i) => (
            <button
              key={c}
              className={`shrink-0 px-4 py-2 text-sm font-medium rounded-full border transition ${
                i === 0
                  ? "bg-brand-dark text-white border-brand-dark"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* 置顶文章 */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-wider text-brand-orange font-bold mb-5">
            Featured
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 relative w-full aspect-[16/10] min-h-[280px] rounded-lg overflow-hidden">
              <Image
                src={FEATURED.image}
                alt={FEATURED.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <span className="text-xs uppercase tracking-wider text-brand-orange font-bold">
                {FEATURED.tag}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight tracking-tight">
                {FEATURED.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {FEATURED.excerpt}
              </p>
              <p className="text-sm text-slate-500">
                {FEATURED.date} · {FEATURED.read}
              </p>
              <button className="bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm px-6 py-3 rounded-md shadow-sm">
                Read Full Post
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 列表 */}
      <section className="bg-brand-bgAlt py-14 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 tracking-tight">
            More Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((p) => (
              <article
                key={p.title}
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-[8/5]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-brand-orange font-bold mb-2">
                    {p.tag}
                  </span>
                  <h3 className="font-bold text-brand-dark mb-3 leading-snug">
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
            <button className="bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-sm px-8 py-3 rounded-md transition">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* 订阅 */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3 tracking-tight">
            Get the next post in your inbox.
          </h2>
          <p className="text-slate-500 mb-6 text-base md:text-lg">
            One short email a month. No promos, just stories.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange"
            />
            <button
              type="submit"
              className="bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm px-6 py-3 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
