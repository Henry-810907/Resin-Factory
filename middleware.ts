import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n/settings";

/**
 * 多语言重定向 middleware:
 *  - 如果请求路径已带语言段(/en, /de, ...),放行
 *  - 否则根据浏览器 Accept-Language 头猜最合适的语言
 *    猜不到就用 defaultLocale (en)
 *  - 跳过 /sitemap.xml /robots.txt /og-image.jpg /api 等
 *
 * 路由规则配置在 config.matcher 里,只对 HTML 页面生效。
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 已经带 locale 段(/en/xxx)就直接放行
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // 从 Accept-Language 头推断最合适的语言
  const accept = request.headers.get("accept-language") ?? "";
  const preferred = accept
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase())
    .map((tag) => tag.split("-")[0]);

  const matched = preferred.find((p) => (locales as readonly string[]).includes(p));
  const lang = matched ?? defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // 跳过:静态资源 / Next 内部 / favicon / sitemap / robots / og-image
    "/((?!_next|api|favicon\\.ico|robots\\.txt|sitemap\\.xml|og-image\\.jpg|.*\\..*).*)",
  ],
};
