"use client";

import { useEffect } from "react";
import { localeMeta, type Locale } from "@/i18n/settings";

/**
 * 客户端组件：语言切换时动态更新 <html> 的 dir 和 lang 属性。
 * Next.js 客户端路由不会重新渲染 <html> 标签，需要手动同步。
 */
export default function DirUpdater({ lang }: { lang: Locale }) {
  useEffect(() => {
    const meta = localeMeta[lang];
    document.documentElement.dir = meta.dir;
    document.documentElement.lang = meta.htmlLang;
  }, [lang]);

  return null;
}
