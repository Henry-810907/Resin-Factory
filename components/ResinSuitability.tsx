import Link from "next/link";

interface ResinSuitabilityProps {
  title: string;
  question: string;
  options: {
    label: string;
    recommendation: string;
    isResin?: boolean;
  }[];
  bottomText: string;
  contactText: string;
  contactHref: string;
}

export default function ResinSuitability({
  title,
  question,
  options,
  bottomText,
  contactText,
  contactHref,
}: ResinSuitabilityProps) {
  return (
    <section className="bg-white py-6 md:py-12">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-brand-dark mb-5 md:mb-8">
          {title}
        </h2>

        <div className="bg-slate-50 rounded-xl p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-brand-dark mb-6">
            {question}
          </h3>

          <div className="space-y-4">
            {options.map((option, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  option.isResin
                    ? "border-green-500 bg-green-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="font-medium text-slate-700">
                    {option.label}
                  </span>
                  <span
                    className={`text-sm ${
                      option.isResin
                        ? "text-green-700 font-bold"
                        : "text-slate-600"
                    }`}
                  >
                    → {option.recommendation}
                    {option.isResin && " ✓"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4">{bottomText}</p>
            <Link
              href={contactHref}
              className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              {contactText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
