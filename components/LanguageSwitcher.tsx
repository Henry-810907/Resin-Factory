"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeMeta, type Locale } from "@/i18n/settings";

type Props = {
  current: Locale;
  label: string;
};

/**
 * 语言切换 dropdown:
 *  - 显示当前语言国旗 + 短码
 *  - 点击展开 7 种语言列表(国旗 + 本地名)
 *  - 切换时保持当前路径,只换 lang 段
 */
export default function LanguageSwitcher({ current, label }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // 把当前路径里的 lang 段换成目标 lang。例:/en/about → /de/about
  const switchPath = (target: Locale) => {
    if (!pathname) return `/${target}`;
    const segments = pathname.split("/");
    if (segments.length >= 2) segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  const meta = localeMeta[current];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-2.5 py-2 text-sm font-medium text-slate-700 hover:text-brand-orange hover:bg-slate-50 rounded-md transition"
      >
        <span aria-hidden="true">{meta.flag}</span>
        <span className="hidden sm:inline">{meta.label}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-1 w-48 bg-white border border-slate-200 rounded-md shadow-lg overflow-hidden z-50"
        >
          {locales.map((loc) => {
            const m = localeMeta[loc];
            const selected = loc === current;
            return (
              <li key={loc} role="option" aria-selected={selected}>
                <Link
                  href={switchPath(loc)}
                  hrefLang={m.htmlLang}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-2 text-sm transition ${
                    selected
                      ? "bg-brand-orange/10 text-brand-orangeDark font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span aria-hidden="true" className="text-base">{m.flag}</span>
                  <span>{m.native}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
