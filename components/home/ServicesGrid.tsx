import Link from "next/link";
import {
  ShieldCheck, Lock, AlertTriangle, Bot, Sparkles,
  DollarSign, Zap, Layers, Eye, Compass, ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck, Lock, AlertTriangle, Bot, Sparkles,
  DollarSign, Zap, Layers, Eye, Compass,
};

// 6 featured services for homepage bento
const featured = [
  {
    slug: "ai-llm-integration",
    name: "AI & LLM Integration",
    shortDesc: "ChatGPT, Claude, and LLM APIs embedded into your existing workflows and systems.",
    icon: "Bot",
    span: "lg:col-span-2",
    dark: true,
    stat: "40–60% operational cost reduction",
  },
  {
    slug: "compliance-audits",
    name: "Compliance Audits",
    shortDesc: "SOC2 Type II, ISO 27001, HIPAA, PCI-DSS — we handle the full audit cycle.",
    icon: "ShieldCheck",
    span: "lg:col-span-1",
    dark: false,
    stat: "Pass first try",
  },
  {
    slug: "zero-trust-security",
    name: "Zero-Trust Security",
    shortDesc: "Passwordless auth, micro-segmentation, and FIDO2 — eliminate credential attacks.",
    icon: "Lock",
    span: "lg:col-span-1",
    dark: false,
    stat: "80% breach risk reduction",
  },
  {
    slug: "custom-ai-development",
    name: "Custom Generative AI",
    shortDesc: "Fine-tuned AI models built on your proprietary data — on-premise deployments available.",
    icon: "Sparkles",
    span: "lg:col-span-2",
    dark: true,
    stat: "Domain-specific accuracy",
  },
  {
    slug: "cloud-finops",
    name: "Cloud Cost Optimisation",
    shortDesc: "25–35% cloud bill reduction across AWS, Azure, and GCP. Typical ROI in under 60 days.",
    icon: "DollarSign",
    span: "lg:col-span-2",
    dark: false,
    accent: true,
    stat: "$200K–$2M+ savings per client",
  },
  {
    slug: "managed-soc",
    name: "Managed SOC",
    shortDesc: "24/7 threat detection and response without the $3M cost of building your own SOC.",
    icon: "Eye",
    span: "lg:col-span-1",
    dark: true,
    stat: "11-min avg. detection time",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24 border-t border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-3">
              What We Do
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-black leading-none tracking-tight">
              11 services.<br />One team.
            </h2>
          </div>
          <div className="flex flex-col gap-2 items-start md:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-black font-bold px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors flex-shrink-0"
            >
              Get Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-slate-400 text-xs">6 featured · 11 total services</span>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8 border border-black/8">
          {featured.map((service) => {
            const Icon = iconMap[service.icon] || ShieldCheck;
            const bg = service.dark
              ? "bg-black text-white"
              : service.accent
              ? "bg-brand-green text-white"
              : "bg-white text-black";

            return (
              <div
                key={service.slug}
                className={`${service.span} ${bg} bento-card p-8 flex flex-col justify-between min-h-[260px] group`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    service.dark || service.accent ? "bg-white/10" : "bg-black/5"
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      service.dark || service.accent ? "text-white" : "text-black"
                    }`} />
                  </div>
                  <h3 className="text-xl font-black mb-2 leading-tight">{service.name}</h3>
                  <p className={`text-sm leading-relaxed ${
                    service.dark || service.accent ? "text-white/60" : "text-slate-500"
                  }`}>
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-end justify-between mt-6 pt-6 border-t border-current/10">
                  <span className={`text-xs font-bold ${
                    service.dark || service.accent ? "text-white/40" : "text-slate-400"
                  }`}>
                    {service.stat}
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className={`inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all ${
                      service.dark || service.accent ? "text-white" : "text-black hover:text-brand-green"
                    }`}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all services */}
        <div className="mt-6 border border-black/8 bg-brand-gray p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-black text-black">
              See all 11 services →
            </p>
            <p className="text-slate-500 text-sm mt-0.5">
              Incident Response · Web3 & Blockchain · API Security · Multi-Cloud · Digital Transformation
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black hover:bg-brand-green text-white font-bold px-6 py-3 text-sm transition-colors flex-shrink-0"
          >
            Discuss Your Needs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
