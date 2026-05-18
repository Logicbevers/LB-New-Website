import Link from "next/link";
import {
  ArrowRight, CheckCircle,
  ShieldCheck, Lock, AlertTriangle, Bot, Sparkles,
  DollarSign, Zap, Layers, Eye, Activity, Compass,
} from "lucide-react";
import type { Service } from "@/lib/services";
import SectionHeading from "@/components/shared/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck, Lock, AlertTriangle, Bot, Sparkles,
  DollarSign, Zap, Layers, Eye, Activity, Compass,
};

interface ServicePageTemplateProps {
  service: Service;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const Icon = iconMap[service.icon] || ShieldCheck;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.heroSubtitle,
    provider: {
      "@type": "Organization",
      name: "LogicBevers",
      url: "https://logicbevers.com",
    },
    url: `https://logicbevers.com/services/${service.slug}`,
    serviceType: service.name,
    areaServed: {
      "@type": "Place",
      name: "Global",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.features.slice(0, 5).map((feature, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://logicbevers.com" },
      { "@type": "ListItem", position: 2, name: service.name, item: `https://logicbevers.com/services/${service.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-light text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Icon className="w-4 h-4" />
              {service.name}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {service.name} for{" "}
              <span className="text-brand-light">Small Business</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              {service.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-light text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg text-base"
              >
                Schedule Free Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-xl transition-all text-base"
              >
                Get Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Common Challenges"
            title="What this service solves"
            subtitle="These are the IT pain points we hear from businesses like yours every day."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.painPoints.map((p, i) => (
              <div
                key={i}
                className="bg-red-50 border border-red-100 rounded-2xl p-6"
              >
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How it works"
            subtitle="A proven 4-step process designed to get you results fast."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {service.steps.map((step, i) => (
              <div key={i} className="relative">
                {i < service.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-brand-green/20 z-0" />
                )}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative z-10">
                  <div className="text-3xl font-bold text-brand-green/20 mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-brand-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">
                What&apos;s Included
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Features &amp; capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-dark rounded-2xl p-8 text-white">
              <h3 className="font-semibold text-lg mb-6 text-brand-light">
                Industries We Serve
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {service.industries.map((industry) => (
                  <div
                    key={industry}
                    className="bg-white/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-200"
                  >
                    {industry}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-slate-400 text-sm mb-4">
                  Don&apos;t see your industry? We work with businesses in all
                  sectors.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand-light font-medium text-sm hover:underline"
                >
                  Contact us to discuss your needs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Study"
            title="Real results from a real client"
          />
          <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="h-2 bg-brand-green" />
            <div className="p-8">
              <div className="flex items-start justify-between gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-brand-dark text-xl">
                    {service.caseStudy.company}
                  </h3>
                  <p className="text-slate-500">{service.caseStudy.industry}</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-brand-green">
                    {service.caseStudy.metric}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.caseStudy.desc}
              </p>
              <blockquote className="border-l-4 border-brand-green pl-4 italic text-slate-600">
                &ldquo;{service.testimonial.quote}&rdquo;
                <footer className="mt-2 text-sm font-medium text-brand-dark not-italic">
                  — {service.testimonial.name}, {service.testimonial.role},{" "}
                  {service.testimonial.company}
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started with {service.name}?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free 15-minute audit. We&apos;ll assess your current
            setup and give you a custom action plan — no commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-green font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors shadow-lg text-lg"
          >
            Schedule Your Free Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
