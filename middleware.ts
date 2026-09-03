import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n/settings";

/**
 * 多语言重定向 + 注入 x-pathname 头(供 root layout 设置 <html lang dir>)
 *
 *  - www 重定向到非 www (301)
 *  - 已带语言段 → 放行,但仍要写 x-pathname
 *  - 未带语言段 → 301 永久跳转到 /<lang>/...
 *  - 跳过 /sitemap.xml /robots.txt /og-image.jpg /api 等
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // 从 Accept-Language 头推断最合适的语言
  const accept = request.headers.get("accept-language") ?? "";
  const preferred = accept
    .split(",")
    .map((part: string) => part.split(";")[0].trim().toLowerCase())
    .map((tag: string) => tag.split("-")[0]);

  const matched = preferred.find((p: string) => (locales as readonly string[]).includes(p));
  const lang = matched ?? defaultLocale;

  // www 重定向到非 www (301)，直接跳到带语言的首页
  if (hostname.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.hostname = "resin-factory.com";
    url.port = "";
    
    // 检查 pathname 是否已经包含语言前缀
    const hasLocaleInPath = locales.some(
      (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
    );
    
    if (hasLocaleInPath) {
      // 已经有语言前缀，直接使用
      url.pathname = pathname;
    } else {
      // 没有语言前缀，添加默认语言
      url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
    }
    
    return NextResponse.redirect(url, 301);
  }

  // 把当前路径写到自定义请求头,root layout 用 headers() 读出来,
  // SSR 阶段就能算出正确的 lang/dir,避免 FOUC
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  // 已经带 locale 段(/en/xxx)就放行
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const url = request.nextUrl.clone();
  // 如果路径是单段且不是有效的语言码（如 /zh, /cn），重定向到首页
  const isInvalidLocale = /^\/[^/]+$/.test(pathname) && !locales.includes(pathname.slice(1) as any);
  url.pathname = isInvalidLocale ? `/${lang}` : `/${lang}${pathname === "/" ? "" : pathname}`;
  url.port = "";
  
  // 直接使用硬编码域名，避免生产环境从 headers 获取到内部地址
  url.hostname = "resin-factory.com";
  
  // 301 = Permanent Redirect。让搜索引擎把权重转过去。
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    // 跳过:静态资源 / Next 内部 / favicon / sitemap / robots / og-image / icon / apple
    "/((?!_next|api|favicon\\.ico|robots\\.txt|sitemap\\.xml|og-image\\.jpg|icon\\.png|apple-touch-icon\\.png|.*\\..*).*)",
  ],
};
