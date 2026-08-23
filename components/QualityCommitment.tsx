import { Eye, CheckCircle, Shield, Calendar, RefreshCw, Palette } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Eye,
  CheckCircle,
  Shield,
  Calendar,
  RefreshCw,
  Palette,
};

type Commitment = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  kicker: string;
  title: string;
  subtitle: string;
  commitments: Commitment[];
};

export default function QualityCommitment({ kicker, title, subtitle, commitments }: Props) {
  return (
    <section className="bg-brand-bgAlt py-10 md:py-16 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2">{kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight mb-3">{title}</h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {commitments.map((c, i) => {
            const Icon = iconMap[c.icon] || CheckCircle;
            return (
              <div key={i} className="bg-white rounded-lg p-5 sm:p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-2">{c.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{c.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
