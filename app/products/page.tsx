import Link from "next/link";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";

const PRODUCTS = [
  {
    title: "Mascot Plush",
    desc: "Bring your brand mascot to life — perfect for retail, sports teams, IP licensing.",
    label: "Mascot Plush 实物图",
  },
  {
    title: "Brand Giveaways",
    desc: "Bulk plush production for trade shows, events and customer gifting.",
    label: "品牌赠品 实物图",
  },
  {
    title: "Drawing-to-Plush",
    desc: "Turn a sketch, child's drawing, or concept art into a 3D plush companion.",
    label: "画作转毛绒 实物图",
  },
  {
    title: "Custom Pillows",
    desc: "Throw pillows, shaped pillows, photo pillows — printed and stitched.",
    label: "定制抱枕 实物图",
  },
  {
    title: "Plush Keychains",
    desc: "Mini plush keychains for retail packs, fan merch, and corporate giveaways.",
    label: "毛绒钥匙扣 实物图",
  },
  {
    title: "Hand Puppets",
    desc: "Educator-friendly hand puppets for schools, museums, and youth media.",
    label: "手偶玩偶 实物图",
  },
  {
    title: "Bobbleheads & Figurines",
    desc: "Hybrid plush + sculpted figurines for collectibles and brand drops.",
    label: "玩偶/手办 实物图",
  },
  {
    title: "Bulk Production",
    desc: "Multi-thousand-unit runs with full QA, packaging and worldwide shipping.",
    label: "批量生产 实物图",
  },
];

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        title="What We Make"
        subtitle="From single-unit prototypes to multi-thousand retail runs — we manufacture every kind of custom plush you can imagine."
        imageLabel="Products 页 Banner 主图(横图)"
      />

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition flex flex-col"
              >
                <Placeholder
                  width={600}
                  height={600}
                  label={p.label}
                  className="w-full aspect-square rounded-none"
                />
                <div className="p-5">
                  <h3 className="font-bold text-slate-800 mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Have something specific in mind?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Send us your concept, and our designers will reply with a free
            mock-up and quote within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-green hover:bg-brand-greenDark transition text-white font-bold tracking-wider px-8 py-4 rounded-md shadow-md"
          >
            GET A QUOTE
          </Link>
        </div>
      </section>
    </main>
  );
}
