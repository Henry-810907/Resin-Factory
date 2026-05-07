import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "About Us — Shenzhen Heli Toys (Resin Factory)",
  description:
    "A 50-person workshop of sculptors, mould-makers, casters, painters and QA in Shenzhen — turning ideas into hand-painted resin figures since 2013. Shipping for brands across 25+ countries.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About Resin Factory · Shenzhen Heli Toys Co., Ltd.",
    description:
      "A 50-person Shenzhen workshop turning ideas into hand-painted resin figures since 2013. Brands across 25+ countries.",
    images: ["/og-image.jpg"],
  },
};

const STATS = [
  { num: "50+", label: "Team Members" },
  { num: "1,200㎡", label: "Workshop Floor" },
  { num: "50,000+", label: "Resin Figures Delivered" },
  { num: "150+", label: "Brands Across 25+ Countries" },
];

const TEAM = [
  { name: "Jesse Wong", role: "Founder & CEO", label: "团队头像 1(创始人)" },
  { name: "Emily Lin", role: "Head Sculptor", label: "团队头像 2(原型师主管)" },
  { name: "Marco Chen", role: "Production Director", label: "团队头像 3(生产总监)" },
  { name: "Sara Patel", role: "Client Success Lead", label: "团队头像 4(客户成功)" },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Us"
        subtitle="A 50-person workshop of sculptors, mould-makers, casters, painters and QA — turning ideas into hand-painted resin figures since 2013."
        image="/factory.jpg"
      />

      {/* 公司故事 */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="relative w-full aspect-[4/3] min-h-[340px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/1200-900-1.jpg"
              alt="Twelve years, one workshop — our story"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-5 text-slate-700">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight tracking-tight">
              Twelve years. One workshop.
            </h2>
            <p className="text-lg leading-relaxed">
              We started in 2013 with one silicone mould, a single airbrush, and a stack of concept sketches on a coffee table. Twelve years later, we&apos;re still small — about 50 people in a 1,200㎡ workshop — but we now ship for brands across 25+ countries.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              We hand-paint every figure. We treat every order — 100 pieces or 10,000 — like the most important order of the day. Because for someone, somewhere, it is.
            </p>
          </div>
        </div>
      </section>

      {/* 数据条 */}
      <section className="bg-brand-bgAlt py-12 md:py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-4xl md:text-5xl font-extrabold text-brand-orange mb-2">
                {s.num}
              </p>
              <p className="text-slate-600 uppercase tracking-wider text-sm font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 工厂展示 */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
            Inside Our Workshop
          </h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-base md:text-lg">
            We don&apos;t outsource. Every step happens in our own facility — so we can stand behind every brushstroke.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2629.jpg" alt="Sculpting / 原型车间" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-[3/2] md:col-span-2 rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2576.jpg" alt="Casting / 开模注模车间" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-[3/2] md:col-span-2 rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2645.jpg" alt="Hand Painting / 手绘上色车间" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-center" />
          </div>
          <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
            <Image src="/pictures/jpg/IMG_2655.jpg" alt="QC + Packing / 检验包装车间" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover object-center" />
          </div>
        </div>
      </section>

      {/* 核心团队 */}
      <section className="bg-brand-bgAlt py-14 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-10 tracking-tight">
            The People Behind the Figures
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="text-center">
                <Placeholder
                  width={500}
                  height={500}
                  label={m.label}
                  circle
                  className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4"
                />
                <p className="font-bold text-brand-dark">{m.name}</p>
                <p className="text-sm text-slate-500 mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
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
