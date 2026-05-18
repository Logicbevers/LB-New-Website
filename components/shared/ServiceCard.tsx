import Link from "next/link";
import {
  ShieldCheck, Lock, AlertTriangle, Bot, Sparkles,
  DollarSign, Zap, Layers, Eye, Activity, Compass, ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck, Lock, AlertTriangle, Bot, Sparkles,
  DollarSign, Zap, Layers, Eye, Activity, Compass,
};

interface ServiceCardProps {
  icon: string;
  name: string;
  shortDesc: string;
  slug: string;
}

export default function ServiceCard({ icon, name, shortDesc, slug }: ServiceCardProps) {
  const Icon = iconMap[icon] || ShieldCheck;

  return (
    <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300">
      <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-colors">
        <Icon className="w-6 h-6 text-brand-green" />
      </div>
      <h3 className="text-lg font-semibold text-brand-dark mb-2">{name}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{shortDesc}</p>
      <Link
        href={`/services/${slug}`}
        className="inline-flex items-center gap-1 text-brand-green font-medium text-sm hover:gap-2 transition-all"
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
