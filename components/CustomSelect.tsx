"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  label: string;
  options: string[];
  defaultValue?: string;
  name?: string;
  required?: boolean;
};

/**
 * 站内统一样式的下拉框,替换原生 <select>:
 * - 触发按钮与其他 input 完全一致
 * - 展开菜单字号 = 触发按钮字号(不会比按钮"高")
 * - 用隐藏的 hidden input 把选中值同步给 form 提交
 * - 点击外部 / Esc 自动收起
 */
export default function CustomSelect({
  label,
  options,
  defaultValue,
  name,
  required,
}: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>(defaultValue ?? options[0] ?? "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label}
        {required && " *"}
      </label>

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="w-full px-4 py-3 text-sm text-left rounded-md border border-slate-300 bg-white hover:border-slate-400 focus:outline-none focus:border-brand-orange flex items-center justify-between text-slate-700"
      >
        <span className="truncate">{value}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 ml-2 transition-transform text-slate-400 ${
            open ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* 与表单其它字段同步的隐藏字段,提交时会作为该字段的值 */}
      <input type="hidden" name={name} value={value} />

      {open && (
        <ul
          role="listbox"
          className="absolute z-30 left-0 right-0 mt-1 bg-white border border-slate-200 rounded-md shadow-lg overflow-hidden"
        >
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <li key={opt} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    setValue(opt);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition ${
                    selected
                      ? "bg-brand-orange/10 text-brand-orangeDark font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {opt}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
