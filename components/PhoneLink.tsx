"use client";

import React from "react";

// 声明 gtag 类型
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function PhoneLink() {
  const phoneHref = "tel:" + "+861" + "368269" + "2148";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Google Ads 转化追踪（点击方式）
    const callback = function () {
      window.location.href = phoneHref;
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
      href={phoneHref}
      onClick={handleClick}
      className="hover:text-brand-orange transition flex items-center gap-1.5 underline"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
      <span>{"+86 136 8269 2148"}</span>
    </a>
  );
}
