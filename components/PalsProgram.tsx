import Placeholder from "./Placeholder";

export default function PalsProgram() {
  return (
    <section className="bg-white py-12 md:py-16">
      {/* 标题区:适度居中,可读性优先 */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-light text-slate-700 mb-4">
          Our Giving Back Promise
        </h2>
        <p className="text-lg md:text-xl font-bold text-slate-700">
          10% of every year&apos;s profits — donated to the Han Hong Love
          Charity Foundation (韩红爱心慈善基金会).
        </p>
      </div>

      {/* 主体两栏:横屏满屏,左文右横图 */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-5 text-slate-600 text-lg md:text-xl leading-relaxed">
          <p>
            We believe every plush we make can carry a little more love. That
            is why we publicly pledge to donate{" "}
            <strong>10% of our annual profits</strong> to the Han Hong Love
            Charity Foundation each year — supporting medical aid, disaster
            relief, and care for children and families in need across China.
          </p>
          <p>
            When you order from us, you are not just getting a custom plush —
            you are helping us help others. Together we can turn small moments
            of joy into real, measurable impact.
          </p>
          <p className="text-sm text-slate-500">
            Donation receipts and yearly impact reports are published on our
            website every January.
          </p>
          <button className="bg-brand-green hover:bg-brand-greenDark transition text-white font-bold tracking-wide px-8 py-4 rounded-md shadow-md mt-2">
            READ OUR PLEDGE
          </button>
        </div>

        {/* 右侧拼图占位:横图 */}
        <Placeholder
          width={1600}
          height={1000}
          label="韩红基金会公益现场拼图(横图)"
          className="w-full aspect-[16/10] min-h-[400px] md:min-h-[480px]"
        />
      </div>
    </section>
  );
}
