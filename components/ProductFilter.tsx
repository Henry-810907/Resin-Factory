"use client";

interface ProductFilterProps {
  selectedPrice: string;
  selectedMoq: string;
  onPriceChange: (price: string) => void;
  onMoqChange: (moq: string) => void;
  resultCount: number;
  totalCount: number;
  labels: {
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
}

export default function ProductFilter({
  selectedPrice,
  selectedMoq,
  onPriceChange,
  onMoqChange,
  resultCount,
  totalCount,
  labels,
}: ProductFilterProps) {
  const priceOptions = [
    { value: "all", label: labels.all },
    { value: "low", label: labels.priceLow },
    { value: "medium", label: labels.priceMedium },
    { value: "high", label: labels.priceHigh },
    { value: "very-high", label: labels.priceVeryHigh },
  ];

  const moqOptions = [
    { value: "all", label: labels.all },
    { value: "1-100", label: labels.moq1to100 },
    { value: "100-1000", label: labels.moq100to1000 },
    { value: "1000+", label: labels.moq1000plus },
  ];

  return (
    <div className="bg-slate-50 py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Price Filter */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              {labels.priceRange}
            </label>
            <div className="flex flex-wrap gap-2">
              {priceOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onPriceChange(option.value)}
                  className={`px-3 py-1.5 text-sm border rounded-md transition ${
                    selectedPrice === option.value
                      ? "bg-brand-orange text-white border-brand-orange"
                      : "bg-white text-slate-700 border-slate-300 hover:border-brand-orange"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* MOQ Filter */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              {labels.moqRange}
            </label>
            <div className="flex flex-wrap gap-2">
              {moqOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onMoqChange(option.value)}
                  className={`px-3 py-1.5 text-sm border rounded-md transition ${
                    selectedMoq === option.value
                      ? "bg-brand-orange text-white border-brand-orange"
                      : "bg-white text-slate-700 border-slate-300 hover:border-brand-orange"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result Count */}
        <div className="text-center text-sm font-semibold text-brand-orange">
          {labels.showing} {resultCount} {labels.of} {totalCount} {labels.products}
        </div>
        {/* Copyright Disclaimer */}
        <div className="text-center text-xs text-slate-500 mt-2">
          ℹ️ {labels.disclaimer}
        </div>
      </div>
    </div>
  );
}
