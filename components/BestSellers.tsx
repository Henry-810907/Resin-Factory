import CustomersCarousel from "./CustomersCarousel";

/**
 * 客户作品轮播:常规居中标题区
 */
export default function BestSellers() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-3">
          Selected Studio Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3 tracking-tight">
          Shared by our happy customers
        </h2>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
          Real stories from brands, IP studios and indie designers we&apos;ve worked with.
        </p>
      </div>

      <CustomersCarousel />
    </section>
  );
}
