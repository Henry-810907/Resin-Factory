import "server-only";
import type { Locale } from "./settings";

/**
 * 字典加载器(server-side only,build 时 inline 进 server bundle)
 *  - 每种语言一个 JSON 文件,放在 i18n/dictionaries/
 *  - 用 dynamic import,Next.js 会按需 code-split
 */
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  de: () => import("./dictionaries/de.json").then((m) => m.default),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
  ja: () => import("./dictionaries/ja.json").then((m) => m.default),
  ko: () => import("./dictionaries/ko.json").then((m) => m.default),
  ar: () => import("./dictionaries/ar.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<typeof dictionaries.en>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const loader = dictionaries[locale] ?? dictionaries.en;
  return loader();
};
