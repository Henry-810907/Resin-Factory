"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/product-data";

interface ProductCardProps {
  product: Product;
}

// 厘米转英寸
function cmToInches(cm: string): string {
  // 解析尺寸字符串，如 "5-50 cm" 或 "100-3000 cm"
  const match = cm.match(/(\d+)-(\d+)\s*cm/);
  if (match) {
    const minCm = parseInt(match[1]);
    const maxCm = parseInt(match[2]);
    const minInches = Math.round(minCm / 2.54);
    const maxInches = Math.round(maxCm / 2.54);
    return `${minInches}-${maxInches}"`;
  }
  return cm;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col">
      {/* Product Image */}
      <div className="relative w-full aspect-square bg-gray-50">
        <Image
          src={product.image}
          alt={`${product.name} — custom product by Resin Factory`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Summary Info */}
        <div className="space-y-1.5 text-sm">
          <p className="font-bold text-brand-dark text-base">🏷️ Type: {product.name}</p>
          <p className="text-slate-600">🧱 Material: {product.material}</p>
          <p className="text-slate-600">📏 Economic Size: {product.size} ({cmToInches(product.size)})</p>
          <p className="text-slate-600">📦 MOQ: {product.moq}</p>
          <p className="text-slate-600">💰 Price: {product.price}</p>
        </div>

        {/* Expanded Details */}
        {expanded && (
          <div className="mt-4 space-y-4 text-sm border-t border-slate-100 pt-4">
            {/* Key Features */}
            <div>
              <p className="font-semibold text-brand-dark mb-1">✨ Key Features:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Application Scenarios */}
            <div>
              <p className="font-semibold text-brand-dark mb-1">🎯 Application Scenarios:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                {product.applications.map((app, i) => (
                  <li key={i}>{app}</li>
                ))}
              </ul>
            </div>

            {/* Considerations */}
            <div>
              <p className="font-semibold text-brand-dark mb-1">⚠️ Considerations:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                {product.considerations.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 w-full py-2 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md text-sm font-medium text-slate-700 transition"
        >
          {expanded ? "Collapse Details ▲" : "View Details ▼"}
        </button>
      </div>
    </div>
  );
}

