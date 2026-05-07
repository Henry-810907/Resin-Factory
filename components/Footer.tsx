import Link from "next/link";

const LINKS_1: { label: string; href: string }[] = [
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Our Values", href: "/values" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const LINKS_2: { label: string; href: string }[] = [
  { label: "Free 3D Sculpting", href: "/products" },
  { label: "Process", href: "/products" },
  { label: "Materials", href: "/products" },
  { label: "Certifications", href: "/values" },
  { label: "FAQ", href: "/contact" },
  { label: "Bulk Production", href: "/products" },
];

const LINKS_3: { label: string; href: string }[] = [
  { label: "Terms of Service", href: "/contact" },
  { label: "Privacy Policy", href: "/contact" },
  { label: "Shipping", href: "/contact" },
  { label: "Newsletter", href: "/contact" },
];

/**
 * 常规 B2B 深色 Footer:
 *  - 深蓝灰底 + 白文字
 *  - 4 列布局:品牌+联系 / 导航 / 服务 / 法务
 */
export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-6 pt-14 md:pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* 第 1 列:品牌 + 联系方式 */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <span className="w-8 h-8 bg-brand-orange rounded-md flex items-center justify-center text-white font-bold text-sm">
                R
              </span>
              <span className="font-bold text-xl text-white tracking-tight">
                Resin Factory
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              B2B custom resin figurine manufacturer. Sculpt, mould, cast and
              hand-paint — all in our own factory.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Shenzhen Heli Toys Co., Ltd.</span>
              <br />
              Room 318, Building 618, Bagua Ling Industrial Zone,
              <br />
              Futian District, Shenzhen, China
              <br />
              hello@resin-factory.com
              <br />
              +86 136 8269 2148
            </p>
          </div>

          {/* 第 2 列:Quick Links */}
          <div>
            <h4 className="font-semibold text-white tracking-wide mb-4">QUICK LINKS</h4>
            <ul className="space-y-2.5 text-sm">
              {LINKS_1.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-brand-orange transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 第 3 列:Services */}
          <div>
            <h4 className="font-semibold text-white tracking-wide mb-4">SERVICES</h4>
            <ul className="space-y-2.5 text-sm">
              {LINKS_2.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-brand-orange transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 第 4 列:More + Social */}
          <div>
            <h4 className="font-semibold text-white tracking-wide mb-4">MORE</h4>
            <ul className="space-y-2.5 text-sm">
              {LINKS_3.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-brand-orange transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部 CTA 条 */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base text-slate-300">
            Have a project in mind? Get a free quote within 24 hours.
          </p>
          <Link
            href="/contact"
            className="bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm px-6 py-2.5 rounded-md shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="bg-slate-950 text-center py-3 text-slate-500 text-xs">
        © {new Date().getFullYear()} Shenzhen Heli Toys Co., Ltd. All rights reserved.
      </div>
    </footer>
  );
}
