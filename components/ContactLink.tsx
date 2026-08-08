"use client";

import React from "react";

// 声明 gtag 类型
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  value: string;
}

export default function ContactLink({ href, icon, title, value }: ContactLinkProps) {
  const handleClick = () => {
    // 触发 Google Ads 转化事件
    if (typeof window !== "undefined") {
      window.gtag = window.gtag || function() { (window.dataLayer = window.dataLayer || []).push(arguments); };
      window.gtag("event", "conversion", {
        send_to: "AW-18376214280/yk_mC061kt4cEIiOu7pE",
      });
    }
  };

  return (
    <div className="flex gap-3 items-start">
      <span className="w-9 h-9 rounded-full bg-white text-brand-orange flex items-center justify-center shrink-0 border border-slate-200">{icon}</span>
      <div className="leading-tight">
        <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{title}</p>
        <a
          href={href}
          onClick={handleClick}
          className="text-sm text-brand-dark mt-0.5 hover:text-brand-orange transition underline"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
