"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@/lib/product-data";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

interface ProductsGridProps {
  contactText: string;
  contactHref: string;
  filterLabels: {
    priceRange: string;
    moqRange: string;
    showing: string;
    of: string;
    products: string;
    all: string;
    priceLow: string;
    priceMedium: string;
    priceHigh: string;
    priceVeryHigh: string;
    moq1to100: string;
    moq100to1000: string;
    moq1000plus: string;
    disclaimer: string;
  };
  heroTitle: string;
  heroSubtitle: string;
  quickGuide: string;
  needAdvice: string;
  noMatchText: string;
  freeConsultation: string;
}

export default function ProductsGrid({ contactText, contactHref, filterLabels, heroTitle, heroSubtitle, quickGuide, needAdvice, noMatchText, freeConsultation }: ProductsGridProps) {
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedMoq, setSelectedMoq] = useState("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Price filter - exact match
      if (selectedPrice !== "all") {
        const priceMatch =
          (selectedPrice === "low" && product.price === "$ Low") ||
          (selectedPrice === "medium" && product.price === "$$ Medium") ||
          (selectedPrice === "high" && product.price === "$$$ High") ||
          (selectedPrice === "very-high" && product.price === "$$$$ Very High");
        if (!priceMatch) return false;
      }

      // MOQ filter - extract first number only
      if (selectedMoq !== "all") {
        const moqNum = parseInt(product.moq);
        const moqMatch =
          (selectedMoq === "1-100" && moqNum <= 100) ||
          (selectedMoq === "100-1000" && moqNum >= 100) ||
          (selectedMoq === "1000+" && moqNum >= 1000);
        if (!moqMatch) return false;
      }

      return true;
    });
  }, [selectedPrice, selectedMoq]);

  // 每6个卡片（2行×3列）后插入咨询提示
  const adviceInterval = 6;

  // 将产品分组，每组6个
  const groups = [];
  for (let i = 0; i < filteredProducts.length; i += adviceInterval) {
    groups.push(filteredProducts.slice(i, i + adviceInterval));
  }

  return (
    <>
      {/* Hero Section with Filter */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            {heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-2 leading-relaxed">
            {heroSubtitle}
          </p>
          <p className="text-sm text-slate-500 mb-4">
            💡 {quickGuide}
          </p>
          <Link
            href={contactHref}
            className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-2.5 rounded-full transition text-sm"
          >
            {contactText}
          </Link>
        </div>
        
        {/* Filter inside Hero */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4">
            <ProductFilter
              selectedPrice={selectedPrice}
              selectedMoq={selectedMoq}
              onPriceChange={setSelectedPrice}
              onMoqChange={setSelectedMoq}
              resultCount={filteredProducts.length}
              totalCount={products.length}
              labels={filterLabels}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-slate-600 text-lg mb-4">
                {noMatchText}
              </p>
              <a
                href={contactHref}
                className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-2.5 rounded-full transition text-sm"
              >
                {freeConsultation}
              </a>
            </div>
          ) : (
            <>
              {groups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  {/* 产品卡片网格 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                      />
                    ))}
                  </div>
                  
                  {/* 咨询提示（不在最后一组后面显示） */}
                  {groupIndex < groups.length - 1 && (
                    <div className="mt-8 mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                      <p className="text-lg text-blue-800">
                        💡 {needAdvice}{" "}
                        <a href={contactHref} className="font-bold text-brand-orange hover:underline underline">
                          {contactText} →
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
}

