import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle, Shield, Lightbulb,
  Handshake, Eye, Zap, BarChart3,
  ShieldCheck, Bot, Globe, Users, Award, Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About LogicBevers | Managed IT & Cybersecurity Experts",
  description:
    "LogicBevers is a global IT services firm delivering enterprise-grade cybersecurity, AI integration, and cloud solutions to small and mid-sized businesses worldwide.",
  alternates: { canonical: "https://logicbevers.com/about" },
  openGraph: {
    title: "About LogicBevers | Managed IT & Cybersecurity Experts",
    description: "LogicBevers is a global IT services firm delivering enterprise-grade cybersecurity, AI integration, and cloud solutions to small and mid-sized businesses worldwide.",
    url: "https://logicbevers.com/about",
    siteName: "LogicBevers",
    images: [{ url: "https://logicbevers.com/api/og?name=About+LogicBevers&desc=Enterprise-grade+IT+%26+cybersecurity+for+SMBs+worldwide&category=About", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About LogicBevers | Managed IT & Cybersecurity Experts",
    description: "LogicBevers is a global IT services firm delivering enterprise-grade cybersecurity, AI integration, and cloud solutions.",
  },
};

const values = [
  {
    icon: Award,
    title: "Expertise First",
    desc: "We invest in continuous learning and certification. Our recommendations are grounded in deep technical knowledge, not sales incentives.",
  },
  {
    icon: BarChart3,
    title: "Business-First",
    desc: "Technology serves your business goals — not the other way around. Every solution we propose must deliver measurable business value.",
  },
  {
    icon: Handshake,
    title: "Partnership Mentality",
    desc: "We think long-term. Your success is our success, and we build relationships designed to grow alongside your business.",
  },
  {
    icon: Shield,
    title: "Security & Compliance Always",
    desc: "Security is never an afterthought. We embed best practices into every solution we deliver, regardless of the service.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We actively evaluate emerging technologies — AI, blockchain, zero-trust architectures — and deploy them when they create real advantages.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear communication. Honest assessments. No hidden fees. We tell clients what they need to hear, even when it's not what they want to hear.",
  },
];

const differentiators = [
  "Vendor-agnostic approach — we recommend what's right, not what's profitable",
  "Integrated security across all service areas",
  "Deep expertise in both legacy modernisation and cutting-edge technologies",
  "Proven methodologies refined across hundreds of client engagements",
  "Global delivery capability with local market understanding",
  "Fixed-price engagements and transparent billing",
];

const expertiseAreas = [
  {
    category: "Foundation",
    icon: Shield,
    services: ["Cybersecurity & Compliance", "Incident Response & SOC", "Zero-Trust Architecture", "API Security"],
    dark: false,
  },
  {
    category: "Innovation",
    icon: Bot,
    services: ["AI & LLM Integration", "Custom Generative AI", "Workflow Automation", "ML Model Development"],
    dark: true,
  },
  {
    category: "Emerging Tech",
    icon: Code2,
    services: ["Web3 & Blockchain", "Smart Contract Development", "Token Economics", "DeFi Architecture"],
    dark: false,
    accent: true,
  },
  {
    category: "Strategic",
    icon: Globe,
    services: ["Cloud FinOps", "Multi-Cloud Management", "Digital Transformation", "IT Strategy"],
    dark: false,
  },
];

const industries = [
  {
    name: "Financial Services",
    detail: "Fintech startups, investment firms, and credit unions — PCI-DSS, SOX compliance, and fraud prevention.",
  },
  {
    name: "Healthcare & Life Sciences",
    detail: "HIPAA compliance, medical device security, telehealth platforms, and clinical data protection.",
  },
  {
    name: "E-Commerce & Retail",
    detail: "Payment security, multi-cloud storefronts, inventory automation, and customer data privacy.",
  },
  {
    name: "Professional Services",
    detail: "Legal, accounting, and consulting firms requiring confidential data handling and productivity automation.",
  },
  {
    name: "Technology & SaaS",
    detail: "Startups and scale-ups needing cloud architecture, DevSecOps, and SOC 2 compliance.",
  },
  {
    name: "Manufacturing & Logistics",
    detail: "OT/IT convergence, supply-chain digitisation, and IoT security for operational technology.",
  },
  {
    name: "Non-Profit & Education",
    detail: "Cost-effective cloud solutions, data governance, and cyber awareness for mission-driven organisations.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We audit your current IT environment, identify gaps, and understand your business objectives before recommending anything.",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "We develop a phased roadmap aligned to your priorities and budget — no one-size-fits-all solutions.",
  },
  {
    number: "03",
    title: "Implementation",
    desc: "Our engineers execute with precision, minimising disruption to your operations and keeping you informed every step.",
  },
  {
    number: "04",
    title: "Optimisation",
    desc: "Post-deployment, we tune, monitor, and continuously improve to ensure you're getting maximum value.",
  },
  {
    number: "05",
    title: "Partnership",
    desc: "We become your long-term IT partner — adapting as your business grows, pivots, or scales.",
  },
];

const certifications = [
  "CISSP", "AWS Solutions Architect", "Azure Administrator",
  "GCP Professional", "CISM", "ISO 27001 Lead Auditor",
  "CCSP", "OSCP", "Certified Ethical Hacker",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — Bento Bold */}
      <section className="bg-white border-b border-black/8 pt-16 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-end">
            <div className="pb-16">
              <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">
                Who We Are
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-black leading-none tracking-tight mb-6">
                Unlocking Logic.<br />
                <span className="text-brand-green">Empowering</span><br />
                Ventures.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg mb-8">
                LogicBevers is a global IT services firm that partners with small and
                mid-sized businesses to design, secure, and scale their technology
                infrastructure — from compliance to AI transformation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black hover:bg-brand-green text-white font-bold px-6 py-3 text-sm transition-colors"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-px bg-black/8 border-l border-black/8 self-stretch">
              {[
                { value: "150+", label: "Companies Served", dark: true },
                { value: "$2M+", label: "Client Savings", dark: false },
                { value: "99.99%", label: "Avg Uptime", dark: false },
                { value: "0", label: "Security Breaches", dark: true },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`p-8 flex flex-col justify-center ${s.dark ? "bg-black text-white" : "bg-white text-black"}`}
                >
                  <p className={`text-5xl font-black mb-1 ${s.dark ? "text-brand-green" : "text-black"}`}>
                    {s.value}
                  </p>
                  <p className={`text-xs font-bold uppercase tracking-wider ${s.dark ? "text-white/50" : "text-slate-400"}`}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 bg-brand-gray border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-px bg-black/8 border border-black/8">
            <div className="bg-white p-10">
              <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">
                Mission
              </p>
              <h2 className="text-3xl font-black text-black mb-4 leading-tight">
                Technology that works as hard as you do.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                To make enterprise-grade IT accessible, affordable, and effective for businesses
                that power the real economy. We bridge the gap between the technology advantages
                available to large enterprises and what small and mid-sized businesses can
                realistically deploy and sustain.
              </p>
            </div>
            <div className="bg-black p-10 text-white">
              <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">
                Vision
              </p>
              <h2 className="text-3xl font-black text-white mb-4 leading-tight">
                A world where size never limits ambition.
              </h2>
              <p className="text-white/60 leading-relaxed">
                A world where every business — regardless of size — has access to the technology
                infrastructure, security posture, and digital capabilities needed to compete,
                grow, and thrive in the modern economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-3">
              Core Values
            </p>
            <h2 className="text-5xl font-black text-black leading-none tracking-tight">
              What we stand for.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8 border border-black/8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 group hover:bg-black transition-colors duration-200">
                <div className="w-10 h-10 bg-black/5 group-hover:bg-white/10 flex items-center justify-center mb-5 transition-colors">
                  <v.icon className="w-5 h-5 text-black group-hover:text-brand-green transition-colors" />
                </div>
                <h3 className="font-black text-black group-hover:text-white text-lg mb-2 transition-colors">
                  {v.title}
                </h3>
                <p className="text-slate-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">
                What Sets Us Apart
              </p>
              <h2 className="text-5xl font-black text-white leading-none tracking-tight mb-6">
                Different by design.
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                We don&apos;t just deliver technology — we deliver outcomes. Our vendor-agnostic,
                business-first approach ensures every recommendation serves your goals, not ours.
              </p>
            </div>
            <div className="space-y-4">
              {differentiators.map((d, i) => (
                <div key={i} className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-3">
              Service Expertise
            </p>
            <h2 className="text-5xl font-black text-black leading-none tracking-tight">
              11 services.<br />4 capability areas.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8 border border-black/8">
            {expertiseAreas.map((area) => {
              const Icon = area.icon;
              const bg = area.dark ? "bg-black text-white" : area.accent ? "bg-brand-green text-white" : "bg-white text-black";
              return (
                <div key={area.category} className={`${bg} p-8`}>
                  <div className={`w-10 h-10 flex items-center justify-center mb-5 ${area.dark || area.accent ? "bg-white/10" : "bg-black/5"}`}>
                    <Icon className={`w-5 h-5 ${area.dark || area.accent ? "text-white" : "text-black"}`} />
                  </div>
                  <p className={`font-bold text-xs uppercase tracking-[0.15em] mb-4 ${area.dark || area.accent ? "text-white/40" : "text-slate-400"}`}>
                    {area.category}
                  </p>
                  <ul className="space-y-2">
                    {area.services.map((s) => (
                      <li key={s} className={`text-sm font-medium ${area.dark || area.accent ? "text-white/80" : "text-slate-700"}`}>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-brand-gray border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-3">
              Industries We Serve
            </p>
            <h2 className="text-5xl font-black text-black leading-none tracking-tight">
              Deep vertical knowledge.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8 border border-black/8">
            {industries.map((ind, i) => (
              <div
                key={i}
                className={`bg-white p-8 ${i === 6 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                  <h3 className="font-black text-black text-base">{ind.name}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{ind.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-3">
              Our Approach
            </p>
            <h2 className="text-5xl font-black text-black leading-none tracking-tight">
              How we work.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-black/8 border border-black/8">
            {approachSteps.map((step, i) => (
              <div key={i} className={`p-8 ${i % 2 === 0 ? "bg-black text-white" : "bg-white text-black"}`}>
                <p className={`text-5xl font-black mb-4 ${i % 2 === 0 ? "text-brand-green" : "text-black/10"}`}>
                  {step.number}
                </p>
                <h3 className={`font-black text-lg mb-2 ${i % 2 === 0 ? "text-white" : "text-black"}`}>
                  {step.title}
                </h3>
                <p className={`text-sm leading-relaxed ${i % 2 === 0 ? "text-white/60" : "text-slate-500"}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Certifications */}
      <section className="py-20 bg-brand-gray border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">
                Our Team
              </p>
              <h2 className="text-4xl font-black text-black leading-tight mb-6">
                Senior engineers.<br />Real specialists.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our team consists exclusively of senior-level engineers and consultants —
                no juniors learning on the job at your expense. Every engagement is led by
                specialists with 8+ years of hands-on experience in their domain.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We maintain a lean, focused team rather than growing headcount for its own sake.
                This means tighter quality control, better communication, and real accountability
                on every project.
              </p>
            </div>
            <div>
              <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">
                Certifications & Credentials
              </p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="bg-white border border-black/10 text-black text-xs font-bold px-3 py-2 uppercase tracking-wider"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <p className="text-slate-500 text-sm mt-6">
                Plus ongoing certifications in AWS, Azure, GCP, and emerging AI/ML platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-20 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-0 border border-black/8">
            <div className="lg:col-span-2 bg-black text-white p-10 flex flex-col justify-between">
              <div>
                <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">
                  Why Clients Choose Us
                </p>
                <h2 className="text-4xl font-black text-white leading-tight mb-6">
                  The things clients say matter most.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:bg-white hover:text-black text-white font-bold px-5 py-3 text-sm transition-colors"
              >
                Work with us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 divide-y divide-black/8">
              {[
                { label: "We speak business, not just tech", desc: "Our recommendations always tie back to business outcomes — ROI, risk reduction, efficiency gains." },
                { label: "We're proactive, not reactive", desc: "We identify and address issues before they become incidents. You shouldn't have to chase your IT partner." },
                { label: "We don't lock you in", desc: "Open standards, documented architectures, and clean handoffs. You always own your systems and your data." },
                { label: "We scale with you", desc: "From 5-person startups to 500-person enterprises — our solutions are designed to grow without a rip-and-replace." },
              ].map((item, i) => (
                <div key={i} className="p-8">
                  <h3 className="font-black text-black mb-2">{item.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-20 bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">
              Looking Forward
            </p>
            <h2 className="text-5xl font-black text-white leading-tight mb-6">
              The future of IT is intelligent, secure, and distributed.
            </h2>
            <p className="text-white/60 leading-relaxed text-lg mb-6">
              We&apos;re investing heavily in AI-augmented service delivery, zero-trust security
              frameworks, and multi-cloud automation. As these technologies mature, our clients
              will be the first to benefit — without the risk of being early adopters.
            </p>
            <p className="text-white/60 leading-relaxed text-lg">
              We&apos;re committed to remaining at the forefront of what&apos;s possible, so
              that the businesses we serve can focus on what they do best.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl font-black text-white leading-tight mb-3">
                Ready to work together?
              </h2>
              <p className="text-green-100 text-lg">
                Schedule a free 15-minute discovery call — no pitch, no pressure.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-brand-green font-black px-8 py-4 hover:bg-green-50 transition-colors text-base"
            >
              Schedule Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
