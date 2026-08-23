import Image from "next/image";
import { Eye, GitCompare, Search, AlertTriangle } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Eye,
  GitCompare,
  Search,
  AlertTriangle,
};

type Challenge = {
  icon: string;
  question: string;
  causes: string[];
  image: string;
  imageAlt: string;
};

type Props = {
  kicker: string;
  title: string;
  challenges: Challenge[];
};

export default function TechnicalChallenges({ kicker, title, challenges }: Props) {
  return (
    <section className="bg-brand-bgAlt py-10 md:py-16 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2">{kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {challenges.map((c, i) => {
            const Icon = iconMap[c.icon] || AlertTriangle;
            return (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-dark leading-tight">
                      {c.question}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {c.causes.map((cause, j) => (
                      <li key={j} className="text-sm sm:text-base text-slate-600 leading-relaxed flex gap-2">
                        <span className="text-brand-orange font-bold flex-shrink-0">•</span>
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full max-w-[470px] mx-auto mt-4 rounded-lg overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.imageAlt}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
