"use client";

import React from "react";

// 声明 gtag 类型
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function WhatsAppLink() {
  const whatsappUrl = "https://wa.me/" + "861" + "368269" + "2148";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Google Ads 转化追踪（点击方式）
    const callback = function () {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
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
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="hover:text-brand-orange transition flex items-center gap-1.5 underline"
    >
      <svg width="12" height="12" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16.003 2.667c-7.36 0-13.336 5.973-13.336 13.333 0 2.347.61 4.64 1.776 6.667l-1.886 6.886 7.06-1.853a13.27 13.27 0 0 0 6.382 1.626h.005c7.357 0 13.333-5.972 13.333-13.333 0-3.561-1.386-6.91-3.901-9.426a13.244 13.244 0 0 0-9.433-3.9zm0 24.36h-.004a11.06 11.06 0 0 1-5.642-1.546l-.405-.241-4.19 1.099 1.118-4.084-.263-.42a11.072 11.072 0 0 1-1.696-5.835c0-6.122 4.984-11.105 11.085-11.105 2.962 0 5.745 1.155 7.835 3.249a10.998 10.998 0 0 1 3.244 7.84c0 6.123-4.984 11.043-11.082 11.043zm6.078-8.273c-.333-.166-1.969-.972-2.273-1.082-.305-.111-.527-.166-.749.166-.222.333-.86 1.082-1.054 1.305-.194.222-.388.249-.721.083-.333-.166-1.405-.518-2.677-1.65-.989-.881-1.659-1.97-1.853-2.303-.194-.333-.021-.513.146-.679.15-.149.333-.388.5-.582.166-.194.222-.333.333-.555.111-.222.056-.416-.027-.582-.083-.166-.749-1.806-1.026-2.475-.27-.65-.546-.562-.75-.572l-.638-.011c-.222 0-.582.083-.886.416-.305.333-1.165 1.139-1.165 2.776 0 1.638 1.193 3.221 1.359 3.443.166.222 2.347 3.583 5.685 5.024.794.343 1.413.547 1.896.7.797.253 1.522.218 2.094.132.639-.095 1.969-.805 2.247-1.583.277-.777.277-1.444.194-1.583-.083-.139-.305-.222-.638-.388z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
