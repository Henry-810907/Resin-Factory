import type { Config } from "tailwindcss";

/**
 * Resin Factory — 常规 B2B 工厂网站色板
 * 主色:工业暖橙(替代毛绒站的草绿,主色调与毛绒站做明显区分)
 *   - orange:    工业橙(主 CTA / 链接)
 *   - orangeDark: hover
 *   - dark:      深蓝灰(主文字 / 反差段背景)
 *   - darkSoft:  次级深色文字
 *   - bg:        页面底色(白)
 *   - bgAlt:     交替段(slate-50 风)
 *   - line:      细线
 *
 * 旧的 brand-green / brand-blue / brand-yellow / brand-pink / brand-lightBlue
 * 全部映射到新色,残留 className 不会再出现毛绒站的颜色。
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // 新主色板
          orange: "#E65A1F",
          orangeDark: "#C44A18",
          dark: "#0F172A",       // slate-900
          darkSoft: "#334155",   // slate-700
          bg: "#FFFFFF",
          bgAlt: "#F8FAFC",       // slate-50
          line: "#E2E8F0",        // slate-200

          // 兼容旧 className
          green: "#E65A1F",       // → orange
          greenDark: "#C44A18",
          blue: "#0F172A",        // → dark
          yellow: "#F8FAFC",      // → bgAlt
          pink: "#E65A1F",        // → orange
          lightBlue: "#F8FAFC",   // → bgAlt

          // 兼容上一轮编辑型配色
          paper: "#FFFFFF",
          cream: "#F8FAFC",
          ink: "#0F172A",
          inkSoft: "#334155",
          rust: "#E65A1F",
          rustDark: "#C44A18",
        },
      },
      fontFamily: {
        // 全场 Inter,常规无衬线
        sans: ["var(--font-body)", "Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        chunky: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
