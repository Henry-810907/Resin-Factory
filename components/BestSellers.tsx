import CustomersCarousel from "./CustomersCarousel";

export default function BestSellers() {
  return (
    <section className="bg-white py-10 md:py-14">
      {/* 标题保持居中容器 */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700">
          Shared by Our Happy Customers
        </h2>
        <p className="text-slate-500 mt-3">
          Real stories from brands and families we&apos;ve worked with.
        </p>
      </div>

      {/* 轮播宽度撑满整屏 */}
      <CustomersCarousel />
    </section>
  );
}
