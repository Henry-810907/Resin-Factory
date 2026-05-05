import Link from "next/link";
import Placeholder from "./Placeholder";

const NAV: { label: string; href: string }[] = [
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Our Values", href: "/values" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo 占位:点击回首页 */}
        <Link href="/" aria-label="回到首页">
          <Placeholder
            width={200}
            height={60}
            label="Logo"
            className="w-[150px] h-[50px] text-[10px]"
          />
        </Link>

        {/* 导航:圆润字体(Nunito) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 font-chunky font-bold text-base tracking-wide text-slate-700">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-brand-green transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* 右侧:Get a Quote(B端 CTA) */}
        <div className="flex items-center">
          <Link
            href="/contact"
            className="bg-brand-green hover:bg-brand-greenDark transition text-white font-chunky font-bold tracking-wider text-sm px-6 py-3 rounded-md shadow-sm"
          >
            GET A QUOTE
          </Link>
        </div>
      </div>
    </header>
  );
}
