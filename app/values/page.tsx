import Link from "next/link";
import Image from "next/image";
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
    image: "/pictures/jpg/IMG_2602.jpg",
  },
  {
    title: "Reasonable Hours",
    desc: "8-hour days. Overtime only if you say yes. Days off mean days off. We won't burn the team out to hit a deadline.",
    image: "/pictures/jpg/IMG_2566.jpg",
  },
  {
    title: "A Workshop That's Nice to Be In",
    desc: "Air-con, decent lighting, chairs that don't wreck your back, machines that aren't loud. We spent money on the room before we spent it on the production line.",
    image: "/pictures/jpg/IMG_2599.jpg",
  },
  {
    title: "Non-Toxic Materials",
    desc: "Resins, paints, primers and packaging — all skin-safe and low-VOC. The collectors handling the figures are protected, and so are the people casting and painting them all day.",
    image: "/pictures/jpg/IMG_2580.jpg",
  },
  {
    title: "Insurance, Done Properly",
    desc: "Social insurance, medical insurance, housing fund, yearly health check-ups. We follow the law to the letter — for everyone, every year.",
    image: "/pictures/jpg/IMG_2645.jpg",
  },
  {
    title: "Family Comes First",
    desc: "Leave on time. Take your annual leave. Make it to your kid's school play. The figures will still get made — probably better, actually.",
    image: "/pictures/jpg/IMG_2680.jpg",
  },
];

const VALUES = [
  {
    title: "Made by People",
    desc: "Every figure is cast, hand-painted and finished by a person. The tiny brushstroke quirks you'll spot aren't bugs — they're how you know a human made it.",
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
    desc: "CE / EN71 / ASTM resin, low-VOC paint, REACH-compliant primers, child-safe edges. We test every batch — not once a year for a certificate.",
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
    desc: "Reusable silicone molds, recyclable inner trays, FSC paper boxes, no plastic mailers. The greener option is just the only one we stock.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" {...stroke}>
        <path d="M7 17a5 5 0 0 1 0-10h10a5 5 0 0 1 0 10z" />
        <path d="M11 13l2 2 4-4" />
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
        image="/pictures/jpg/IMG_2602.jpg"
      />

      {/* 价值观矩阵:5 张图标卡片 */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-3">
              Studio Principles
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Five things we always do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-7 shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 同事/工人关怀 */}
      <section className="bg-brand-bgAlt py-14 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-3">
              Our People · Our Workshop
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-4 tracking-tight">
              Good figures start with people who are doing OK
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Fair pay. Reasonable hours. A workshop that&apos;s safe, quiet and non-toxic. That&apos;s not a perk list — that&apos;s the basics. If our team is doing well, your order tends to turn out well too.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {PEOPLE_COMMITMENTS.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-dark mb-2">
                    {c.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 强声明 — 深色反差段 */}
          <div className="bg-brand-dark text-white rounded-2xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3 space-y-5">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                We&apos;re not a sweatshop. We never will be.
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Our job is to help you make a great product — and to let the team go home in time to take care of theirs. When the people sculpting and painting your figures feel rested and respected, the seams sit cleaner, QA catches more, and the tiny details actually survive into mass production.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                That&apos;s the deal we offer the team. It&apos;s also the quiet promise behind every order.
              </p>
            </div>
            <div className="md:col-span-2 relative w-full aspect-[10/11] rounded-lg overflow-hidden">
              <Image
                src="/pictures/jpg/IMG_2629.jpg"
                alt="A worker hand-painting in our workshop"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 团队拼图 */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-3">
              Meet the Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight mb-3">
              The faces behind every figure
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
              Sculptors, mould-makers, casters, painters, QA, packers. A small group looking after each other and your order at the same time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5 items-center">
            <div className="flex justify-center">
              <Placeholder width={500} height={500} label="同事头像 1" circle className="w-32 h-32 md:w-36 md:h-36" />
            </div>
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
              <Image src="/pictures/jpg/IMG_2615.jpg" alt="同事工作中" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover object-center" />
            </div>
            <div className="relative aspect-[4/3] w-full md:col-span-2 rounded-lg overflow-hidden">
              <Image src="/pictures/jpg/IMG_2602.jpg" alt="团队合影" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-center" />
            </div>
            <div className="flex justify-center">
              <Placeholder width={500} height={500} label="同事头像 2" circle className="w-32 h-32 md:w-36 md:h-36" />
            </div>

            <div className="flex justify-center">
              <Placeholder width={500} height={500} label="同事头像 3" circle className="w-32 h-32 md:w-36 md:h-36" />
            </div>
            <div className="relative aspect-[4/3] w-full md:col-span-2 rounded-lg overflow-hidden">
              <Image src="/pictures/jpg/IMG_2645.jpg" alt="车间日常" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-center" />
            </div>
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
              <Image src="/pictures/jpg/IMG_2629.jpg" alt="同事手绘上色中" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover object-center" />
            </div>
            <div className="flex justify-center">
              <Placeholder width={500} height={500} label="同事头像 4" circle className="w-32 h-32 md:w-36 md:h-36" />
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 italic mt-10">
            Refreshed every quarter — the team grows, the wall grows.
          </p>
        </div>
      </section>

      <section className="py-14 text-center bg-white">
        <Link
          href="/contact"
          className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-base px-8 py-3.5 rounded-md shadow-md"
        >
          Work With Us
        </Link>
      </section>
    </main>
  );
}
