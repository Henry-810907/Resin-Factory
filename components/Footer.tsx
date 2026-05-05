import Placeholder from "./Placeholder";

const LINKS_1 = [
  "Products",
  "Portfolio",
  "About Us",
  "Our Values",
  "Blog",
  "Contact",
];

const LINKS_2 = [
  "Free Design",
  "Process",
  "Materials",
  "Certifications",
  "FAQ's",
  "Bulk Production",
];

const LINKS_3 = [
  "Terms of Service",
  "Privacy Policy",
  "Shipping",
  "Newsletter",
];

// 社交平台占位:每个用一个首字母,后续可换成真实纯色 SVG
const SOCIAL = [
  { name: "Facebook", letter: "f" },
  { name: "Instagram", letter: "Ig" },
  { name: "Twitter", letter: "X" },
  { name: "LinkedIn", letter: "in" },
  { name: "TikTok", letter: "Tk" },
];

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* 行业奖项 */}
          <div>
            <h4 className="font-bold tracking-wider mb-4">INDUSTRY AWARDS</h4>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <Placeholder
                  key={i}
                  width={200}
                  height={200}
                  label={`奖项 ${i}`}
                  className="w-full aspect-square bg-white/80 text-slate-600"
                />
              ))}
            </div>
          </div>

          {/* 链接列 1 */}
          <div>
            <h4 className="font-bold tracking-wider mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              {LINKS_1.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 链接列 2 */}
          <div>
            <h4 className="font-bold tracking-wider mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm">
              {LINKS_2.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 第 4 列:其它链接 + Newsletter,下方放社媒图标 */}
          <div>
            <h4 className="font-bold tracking-wider mb-4">MORE</h4>
            <ul className="space-y-2 text-sm">
              {LINKS_3.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>

            {/* 社媒纯色图标(占位):放在 Newsletter 下面 */}
            <div className="mt-5 flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  title={s.name}
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full bg-white text-green-700 flex items-center justify-center font-bold text-sm hover:bg-slate-100 transition"
                >
                  {s.letter}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="mt-10 pt-6 border-t border-white/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-bold tracking-wider">
            HAVE QUESTIONS? GIVE US A SHOUT!
          </p>
          <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold tracking-wider px-7 py-2.5 rounded-md">
            CONTACT US
          </button>
        </div>
      </div>

      <div className="bg-green-700 text-center py-3 text-white text-xs">
        © {new Date().getFullYear()} Custom Plush. All rights reserved.
      </div>
    </footer>
  );
}
