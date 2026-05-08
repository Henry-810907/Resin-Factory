"use client";

import { useEffect } from "react";
import { localeMeta, type Locale } from "@/i18n/settings";

type Props = { lang: Locale };

/**
 * 在 [lang]/layout 里渲染,负责把当前语言写到 <html lang dir> 上。
 *  - 让 SR / 翻译插件 / 浏览器知道页面真实语言
 *  - 阿拉伯语自动 dir="rtl"
 */
export default function HtmlLangSetter({ lang }: Props) {
  useEffect(() => {
    const meta = localeMeta[lang];
    if (typeof document !== "undefined") {
      document.documentElement.lang = meta.htmlLang;
      document.documentElement.dir = meta.dir;
    }
  }, [lang]);
  return null;
}
