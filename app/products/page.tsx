import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

const PRODUCTS = [
  {
    title: "Mascot Figurines",
    desc: "Bring your brand mascot to life as a hand-painted resin figure — perfect for retail, sports teams, IP licensing.",
    image: "/pictures/jpg/img_2729.jpg",
  },
  {
    title: "Designer Toys / Art Toys",
    desc: "Limited-run designer toys for galleries, conventions and indie artist drops.",
    image: "/pictures/jpg/img_2716.jpg",
  },
  {
    title: "Statues & GK Kits",
    desc: "1/8 to 1/4 scale resin statues, polystone display pieces and unpainted GK kits for collectors.",
    image: "/pictures/jpg/img_2727.jpg",
  },
  {
    title: "Blind Box Series",
    desc: "Full blind-box series production — sculpting, mold, casting, painting, packaging and inner-tray.",
    image: "/pictures/jpg/img_2722.jpg",
  },
  {
    title: "Bobbleheads",
    desc: "Custom bobbleheads from a photo or sketch — corporate gifting, sports promos, fan merch.",
    image: "/pictures/jpg/img_2725.jpg",
  },
  {
    title: "Resin Keychains",
    desc: "Mini resin charms and keychains for retail blind packs, brand campaigns and event giveaways.",
    image: "/pictures/jpg/img_2738.jpg",
  },
  {
    title: "Dioramas & Display Bases",
    desc: "Themed dioramas, display bases and environment props that lift any figure from good to gallery-worthy.",
    image: "/pictures/jpg/img_2735.jpg",
  },
  {
    title: "Bulk Production",
    desc: "Multi-thousand-unit runs with full QA, packaging and worldwide shipping.",
    image: "/pictures/jpg/IMG_2680.jpg",
  },
];

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        title="What We Make"
        subtitle="From single-unit prototypes to multi-thousand retail runs — we sculpt, cast and hand-paint every kind of custom resin figurine you can imagine."
        image="/pictures/jpg/img_2736.jpg"
      />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition flex flex-col"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-brand-dark mb-2">{p.title}</h3>
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
      <section className="bg-brand-dark text-white py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Have something specific in mind?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-base md:text-lg">
            Send us your concept and our sculptors will reply with a free 3D mock-up and quote within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-base px-8 py-3.5 rounded-md shadow-md"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
