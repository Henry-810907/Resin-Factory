"use client";

import React from "react";

// 声明 gtag 类型
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function EmailLink() {
  const email = "henry@resin-factory.com";
  const href = `mailto:${email}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Google Ads 转化追踪（点击方式）
    const callback = function () {
      window.location.href = href;
    };
    
    if (typeof window !== "undefined") {
      window.gtag = window.gtag || function() { (window.dataLayer = window.dataLayer || []).push(arguments); };
      window.gtag("event", "conversion", {
        send_to: "AW-18376214280/yk_mCO61kt4cEIiOu7pE",
        event_callback: callback,
      });
    } else {
      callback();
    }
    
    return false;
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-xs text-slate-300 hover:text-brand-orange transition flex items-center gap-1.5 underline"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 6 10 7L22 6" />
      </svg>
      <span>henry@resin-factory.com</span>
    </a>
  );
}
