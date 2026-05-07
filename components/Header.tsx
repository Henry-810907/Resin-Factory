import Link from "next/link";

const NAV: { label: string; href: string }[] = [
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Our Values", href: "/values" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/**
 * 常规 B2B Header:
 *  - 白底 + 底部细线分隔
 *  - 左:文字品牌(深色加粗)
 *  - 中:常规导航
 *  - 右:橙色实色 CTA 按钮
 */
export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* 文字品牌(深色) */}
        <Link href="/" aria-label="Resin Factory · 回到首页" className="flex items-center gap-2">
          <span className="w-8 h-8 bg-brand-orange rounded-md flex items-center justify-center text-white font-bold text-sm">
            R
          </span>
          <span className="font-bold text-xl text-brand-dark tracking-tight">
            Resin Factory
          </span>
        </Link>

        {/* 中:常规导航 */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[15px] font-medium text-slate-700">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-brand-orange transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* 右:橙色实色 CTA */}
        <div className="flex items-center">
          <Link
            href="/contact"
            className="bg-brand-orange hover:bg-brand-orangeDark transition text-white font-semibold text-sm px-6 py-2.5 rounded-md shadow-sm"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
