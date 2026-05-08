/**
 * 全站支持的语言与默认语言
 *  - en: English (默认 / fallback)
 *  - de: Deutsch
 *  - fr: Français
 *  - es: Español
 *  - ja: 日本語
 *  - ko: 한국어
 *  - ar: العربية (RTL)
 */
export const locales = ["en", "de", "fr", "es", "ja", "ko", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** 显示用的语言信息(国旗 + 名称 + dir) */
export const localeMeta: Record<
  Locale,
  { label: string; flag: string; native: string; dir: "ltr" | "rtl"; htmlLang: string; ogLocale: string }
> = {
  en: { label: "EN", flag: "🇬🇧", native: "English", dir: "ltr", htmlLang: "en", ogLocale: "en_US" },
  de: { label: "DE", flag: "🇩🇪", native: "Deutsch", dir: "ltr", htmlLang: "de", ogLocale: "de_DE" },
  fr: { label: "FR", flag: "🇫🇷", native: "Français", dir: "ltr", htmlLang: "fr", ogLocale: "fr_FR" },
  es: { label: "ES", flag: "🇪🇸", native: "Español", dir: "ltr", htmlLang: "es", ogLocale: "es_ES" },
  ja: { label: "日本語", flag: "🇯🇵", native: "日本語", dir: "ltr", htmlLang: "ja", ogLocale: "ja_JP" },
  ko: { label: "한국어", flag: "🇰🇷", native: "한국어", dir: "ltr", htmlLang: "ko", ogLocale: "ko_KR" },
  ar: { label: "العربية", flag: "🇸🇦", native: "العربية", dir: "rtl", htmlLang: "ar", ogLocale: "ar_AR" },
};

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}
