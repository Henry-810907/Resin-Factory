"use client";

import React from "react";

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  value: string;
}

export default function ContactLink({ href, icon, title, value }: ContactLinkProps) {
  return (
    <div className="flex gap-3 items-start">
      <span className="w-9 h-9 rounded-full bg-white text-brand-orange flex items-center justify-center shrink-0 border border-slate-200">{icon}</span>
      <div className="leading-tight">
        <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{title}</p>
        <a
          href={href}
          className="text-sm text-brand-dark mt-0.5 hover:text-brand-orange transition underline"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
