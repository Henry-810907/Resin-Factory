import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/settings";

const IMAGES = [
  "/new/64f82e9b41f558668b59d745b1087779.jpg",
  "/new/820b8c436ce4391b00207dcac1f99384.jpg",
  "/new/82d3a1952cba9eac0ef6583bdb5c5664.jpg",
  "/new/a077b10cce8f68f537117504ff6920c2.jpg",
  "/new/a656d250d3f04109d182b538a38a583a.jpg",
  "/new/c106f304449404509cd6972232c70442.jpg",
  "/new/d1d78a1f5855b91587857b70ca936c01.jpg",
  "/pictures/jpg/img_2747.jpg",
];

const POSTS = [
  { user: "@resin_collector_88", time: "1w" },
  { user: "@studio_kain", time: "1w" },
  { user: "@designer_toys_co", time: "1w" },
  { user: "@gk_painter22", time: "2w" },
  { user: "@art_to_figure", time: "2w" },
  { user: "@indie_sculptor", time: "3w" },
  { user: "@brand_studio_x", time: "3w" },
  { user: "@blindbox_fan", time: "1m" },
] as const;

type Props = { dict: Dictionary["magicalCreations"]; lang: Locale };

export default function MagicalCreations({ dict, lang }: Props) {
  return (
    <section className="bg-brand-bgAlt py-10 md:py-20 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-6 md:mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2 sm:mb-3">{dict.kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-2 sm:mb-3 tracking-tight">{dict.title}</h2>
          <p className="text-xl sm:text-2xl text-amber-500 mb-1 sm:mb-2">{dict.rating}</p>
          <p className="text-sm sm:text-base text-slate-600">{dict.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {POSTS.map((p, i) => (
            <div key={p.user} className="bg-white rounded-lg shadow-sm hover:shadow-md transition border border-slate-200 flex flex-col p-3 sm:p-4">
              <div className="relative w-full aspect-square rounded-md overflow-hidden">
                <Image src={IMAGES[i] ?? IMAGES[0]} alt={`Customer post — ${p.user}`} fill sizes="(max-width: 768px) 50vw, 25vw" quality={65} loading="lazy" className="object-cover object-center" />
              </div>
              <div className="pt-3 flex items-center justify-between text-sm text-slate-600">
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-brand-dark">{p.user}</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">{dict.timeLabels[p.time as keyof typeof dict.timeLabels]}</span>
                </div>
                <span>📷</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-10">
          <Link href={`/${lang}/portfolio`} className="inline-block bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-md shadow-sm">
            {dict.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
