import Placeholder from "./Placeholder";

const POSTS = [
  { user: "pikminfan25", time: "1 WEEK AGO" },
  { user: "kain_with_me", time: "1 WEEK AGO" },
  { user: "happy_customer", time: "1 WEEK AGO" },
  { user: "plush_lover22", time: "2 WEEKS AGO" },
  { user: "art_to_toy", time: "2 WEEKS AGO" },
  { user: "kid_artist", time: "3 WEEKS AGO" },
  { user: "brand_studio", time: "3 WEEKS AGO" },
  { user: "petsies_fan", time: "1 MONTH AGO" },
];

export default function MagicalCreations() {
  return (
    <section className="bg-brand-yellow py-10">
      {/* 标题保持居中 */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-3">
          80,000+ Magical Creations
        </h2>
        <p className="text-2xl text-amber-500 mb-2">4.8/5 ★★★★★</p>
        <p className="text-brand-pink font-bold">
          We are so thankful for all the love! Share your favorites by tagging
          @Budsies #Budsies
        </p>
      </div>

      {/* 卡片网格:撑满整个屏宽,左右仅留小留白 */}
      <div className="w-full px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {POSTS.map((p) => (
            <div
              key={p.user}
              className="bg-white rounded-md shadow-sm flex flex-col p-4"
            >
              <Placeholder
                width={600}
                height={600}
                label="用户作品图"
                className="w-full aspect-square rounded-md"
              />
              <div className="pt-3 flex items-center justify-between text-sm text-slate-600">
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-slate-700">{p.user}</span>
                  <span className="text-[11px]">{p.time}</span>
                </div>
                <span>📷</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部 CTA 居中 */}
      <div className="max-w-7xl mx-auto px-6 text-center mt-10">
        <button className="bg-brand-green hover:bg-brand-greenDark transition text-white font-bold tracking-wide px-8 py-4 rounded-md shadow-md">
          MORE CUSTOMER EXAMPLES
        </button>
      </div>
    </section>
  );
}
