import Placeholder from "./Placeholder";

const PRODUCTS = [
  "Statues",
  "Designer Toys",
  "Blind Box",
  "Bobbleheads",
  "Keychains",
  "Dioramas",
  "Bulk Production",
];

const BRANDS = ["Resin Atelier", "Studio Cast", "Polystone Pros"];

export default function OtherProducts() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-10 tracking-tight">
          Shop Our Other Products
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-20">
          {PRODUCTS.map((p) => (
            <div key={p} className="flex flex-col items-center gap-3">
              <Placeholder
                width={400}
                height={400}
                label={p}
                circle
                className="w-[140px] h-[140px] md:w-[160px] md:h-[160px]"
              />
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 tracking-tight">
          Shop Our Other Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRANDS.map((b) => (
            <Placeholder
              key={b}
              width={800}
              height={500}
              label={`其他品牌:${b}`}
              className="w-full aspect-[8/5]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
