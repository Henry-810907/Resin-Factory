import Link from "next/link";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PEOPLE_COMMITMENTS = [
  {
    title: "Fair Pay, On Time",
    desc: "Wages above the local median. Overtime paid as overtime. Salaries hit the bank on the 10th of every month, every month.",
    imageLabel: "发薪场景(银行入账短信 / 工资条)",
  },
  {
    title: "Reasonable Hours",
    desc: "8-hour days. Overtime only if you say yes. Days off mean days off. We won't burn the team out to hit a deadline.",
    imageLabel: "下班场景(同事 6 点准时离开车间)",
  },
  {
    title: "A Workshop That's Nice to Be In",
    desc: "Air-con, decent lighting, chairs that don't wreck your back, machines that aren't loud. We spent money on the room before we spent it on the production line.",
    imageLabel: "明亮整洁的车间内景(横图)",
  },
  {
    title: "Non-Toxic Materials",
    desc: "Glues, dyes, fillings — all skin-safe and low-VOC. The kids hugging the plush are protected, and so are the people handling the materials all day.",
    imageLabel: "原料检测报告 / 低 VOC 认证标签",
  },
  {
    title: "Insurance, Done Properly",
    desc: "Social insurance, medical insurance, housing fund, yearly health check-ups. We follow the law to the letter — for everyone, every year.",
    imageLabel: "同事年度体检 / 社保资料",
  },
  {
    title: "Family Comes First",
    desc: "Leave on time. Take your annual leave. Make it to your kid's school play. The plush will still get made — probably better, actually.",
    imageLabel: "同事接孩子放学 / 带娃来车间",
  },
];

const VALUES = [
  {
    title: "Made by People",
    desc: "Every plush is sewn, stuffed and finished by hand. The little quirks you'll spot aren't bugs — they're how you know a person made it.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" {...stroke}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "No Middlemen",
    desc: "We make everything in our own factory. We'll send you photos from the floor whenever you ask. No trading-company runaround.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 21V10l5 3V10l5 3V7l8 4v10z" />
      </svg>
    ),
  },
  {
    title: "Safe Enough for Kids",
    desc: "CE / EN71 / ASTM materials, hypoallergenic stuffing, child-safe stitching. We test every batch — not once a year for a certificate.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Fewer, Better Orders",
    desc: "We don't chase every job. We pick clients we'd be happy to keep working with — and we end up with less waste because of it.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: "The Greener Option, by Default",
    desc: "Recycled polyester filling, recyclable boxes, no plastic mailers. The greener option is just the only one we stock.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" {...stroke}>
        <path d="M7 17a5 5 0 0 1 0-10h10a5 5 0 0 1 0 10z" />
        <path d="M11 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "10% Goes to Charity",
    desc: "Each year, 10% of our profit goes to the Han Hong Love Charity Foundation. Order from us and a slice of your invoice goes there too.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6z" />
        <path d="M12 8v4l3 1" />
      </svg>
    ),
  },
];

export default function ValuesPage() {
  return (
    <main>
      <PageHero
        title="What We Care About"
        subtitle="What we actually care about — and how it shows up in the day-to-day, not just on a poster in the lobby."
        imageLabel="Values 页 Banner 主图(横图)"
      />

      {/* 价值观矩阵 */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-green/10 text-brand-greenDark flex items-center justify-center mb-5">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{v.title}</h3>
              <p className="text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 同事/工人关怀:不是血汗工厂 */}
      <section className="bg-white py-10 md:py-14 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-green font-bold mb-3">
              Our People · Our Workshop
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-slate-800 leading-tight mb-4">
              Good plush starts with people who are doing OK.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Fair pay. Reasonable hours. A workshop that&apos;s safe, quiet
              and non-toxic. That&apos;s not a perk list — that&apos;s just the
              basics. If our team is doing well, your order tends to turn out
              well too.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {PEOPLE_COMMITMENTS.map((c) => (
              <div
                key={c.title}
                className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-green/40 hover:bg-white hover:shadow-md transition overflow-hidden flex flex-col"
              >
                <Placeholder
                  width={800}
                  height={500}
                  label={c.imageLabel}
                  className="w-full aspect-[16/10] rounded-none border-x-0 border-t-0 border-b border-dashed"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 强声明卡:不是血汗工厂 */}
          <div className="bg-slate-900 text-white rounded-2xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3 space-y-5">
              <h3 className="text-3xl md:text-4xl font-light leading-tight">
                We&apos;re not a sweatshop. We never will be.
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Our job is to help you make a great product — and to let the
                team go home in time to take care of theirs. When the people
                making your plush feel rested and respected, the stitches come
                out tighter, the QA catches more, and the small details
                actually survive into mass production.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                That&apos;s the deal we offer the team. It&apos;s also the
                quiet promise behind every order.
              </p>
            </div>
            <Placeholder
              width={1000}
              height={1100}
              label="同事在车间工作的环境照片"
              className="md:col-span-2 w-full aspect-[10/11] bg-slate-700 text-slate-200 border-slate-600"
            />
          </div>
        </div>
      </section>

      {/* 同事合影拼图 */}
      <section className="bg-amber-50 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-blue font-bold mb-3">
              Meet the Team
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-slate-800 leading-tight mb-3">
              The faces behind every plush.
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Designers, sewers, QA, packers. A small group looking after each
              other and your order at the same time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5 items-center">
            {/* Row 1 */}
            <div className="flex justify-center">
              <Placeholder
                width={500}
                height={500}
                label="同事头像 1"
                circle
                className="w-32 h-32 md:w-36 md:h-36 bg-white"
              />
            </div>
            <Placeholder
              width={600}
              height={800}
              label="同事工作中(竖图)"
              className="aspect-[3/4] w-full bg-white"
            />
            <Placeholder
              width={1200}
              height={900}
              label="团队合影(横图,跨 2 列)"
              className="aspect-[4/3] w-full md:col-span-2 bg-white"
            />
            <div className="flex justify-center">
              <Placeholder
                width={500}
                height={500}
                label="同事头像 2"
                circle
                className="w-32 h-32 md:w-36 md:h-36 bg-white"
              />
            </div>

            {/* Row 2 */}
            <div className="flex justify-center">
              <Placeholder
                width={500}
                height={500}
                label="同事头像 3"
                circle
                className="w-32 h-32 md:w-36 md:h-36 bg-white"
              />
            </div>
            <Placeholder
              width={1200}
              height={900}
              label="车间生日会(横图,跨 2 列)"
              className="aspect-[4/3] w-full md:col-span-2 bg-white"
            />
            <Placeholder
              width={600}
              height={800}
              label="同事缝制中(竖图)"
              className="aspect-[3/4] w-full bg-white"
            />
            <div className="flex justify-center">
              <Placeholder
                width={500}
                height={500}
                label="同事头像 4"
                circle
                className="w-32 h-32 md:w-36 md:h-36 bg-white"
              />
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 italic mt-10">
            Refreshed every quarter — the team grows, the wall grows.
          </p>
        </div>
      </section>

      {/* 公益承诺 */}
      <section className="bg-brand-lightBlue py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue leading-tight mb-4">
              Where 10% of our profit goes.
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Each year, <strong>10% of our profit</strong> goes to the Han
              Hong Love Charity Foundation (韩红爱心慈善基金会). They put it
              toward medical care, disaster relief, and helping families that
              need a hand.
            </p>
            <p className="text-sm text-slate-500">
              Donation receipts and an honest year-end report show up here
              every January.
            </p>
          </div>
          <Placeholder
            width={1200}
            height={750}
            label="公益承诺配图(横图)"
            className="w-full aspect-[16/10] min-h-[260px]"
          />
        </div>
      </section>

      <section className="py-10 text-center">
        <Link
          href="/contact"
          className="inline-block bg-brand-green hover:bg-brand-greenDark transition text-white font-bold tracking-wider px-8 py-4 rounded-md shadow-md"
        >
          WORK WITH US
        </Link>
      </section>
    </main>
  );
}
