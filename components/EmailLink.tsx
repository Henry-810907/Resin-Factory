"use client";

import React from "react";

export default function EmailLink() {
  const email = "henry@resin-factory.com";
  const href = `mailto:${email}`;

  return (
    <a
      href={href}
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
