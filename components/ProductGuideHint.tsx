import Link from "next/link";

interface ProductGuideHintProps {
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
}

export default function ProductGuideHint({ title, subtitle, buttonText, href }: ProductGuideHintProps) {
  return (
    <section className="bg-brand-orange/5 py-6 md:py-8">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3">
          {title}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mb-5 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          href={href}
          className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-3 rounded-full transition text-base"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
