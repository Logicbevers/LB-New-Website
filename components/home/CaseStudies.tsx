import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";

export default function CaseStudies() {
  return (
    <section className="py-24 bg-brand-gray border-t border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-3">
              Case Studies
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-black leading-none tracking-tight">
              Results that<br />speak.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-brand-green transition-colors self-start md:self-auto"
          >
            Get similar results <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8 border border-black/8">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.id}
              className={`bento-card flex flex-col justify-between p-8 min-h-[320px] ${
                i === 1 ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-4 inline-block ${cs.tagColor}`}>
                  {cs.tag}
                </span>
                <div className="mt-3 mb-5">
                  <p className={`text-6xl font-black leading-none ${i === 1 ? "text-brand-light" : "text-brand-green"}`}>
                    {cs.metric}
                  </p>
                  <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${i === 1 ? "text-white/40" : "text-slate-400"}`}>
                    {cs.metricLabel}
                  </p>
                </div>
                <h3 className={`font-black text-lg mb-1 ${i === 1 ? "text-white" : "text-black"}`}>
                  {cs.company}
                </h3>
                <p className={`text-xs mb-4 ${i === 1 ? "text-white/40" : "text-slate-400"}`}>
                  {cs.industry}
                </p>
                <p className={`text-sm leading-relaxed ${i === 1 ? "text-white/60" : "text-slate-500"}`}>
                  {cs.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
