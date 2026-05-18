"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Compliance Audits & Certifications", href: "/services/compliance-audits" },
  { name: "Zero-Trust Security", href: "/services/zero-trust-security" },
  { name: "24/7 Incident Response", href: "/services/incident-response" },
  { name: "AI & LLM Integration", href: "/services/ai-llm-integration" },
  { name: "Custom Generative AI", href: "/services/custom-ai-development" },
  { name: "Cloud Cost Optimisation (FinOps)", href: "/services/cloud-finops" },
  { name: "Web3 & Blockchain", href: "/services/web3-blockchain" },
  { name: "Multi-Cloud Management", href: "/services/multi-cloud" },
  { name: "API Security & Gateway", href: "/services/api-security" },
  { name: "Managed SOC", href: "/services/managed-soc" },
  { name: "Digital Transformation", href: "/services/digital-transformation" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-200 ${scrolled ? "border-b border-black/10 shadow-sm" : "border-b border-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="LogicBevers"
              style={{ height: '44px', width: 'auto', mixBlendMode: 'multiply' }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-black/70 hover:text-black font-medium text-sm transition-colors">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-black/10 shadow-xl py-1 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-black/70 hover:text-black hover:bg-brand-gray transition-colors font-medium"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {[
              { name: "About", href: "/about" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black/70 hover:text-black font-medium text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-black hover:bg-brand-green text-white text-sm font-bold px-5 py-2.5 transition-colors"
            >
              Free Audit →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-black"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-white px-4 py-4 space-y-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">Services</p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-2 text-sm font-medium text-black/70 hover:text-black transition-colors"
            >
              {s.name}
            </Link>
          ))}
          <div className="border-t border-black/8 my-3" />
          {[
            { name: "About", href: "/about" },
            { name: "Blog", href: "/blog" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-2 text-sm font-medium text-black/70 hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 bg-black text-white text-center text-sm font-bold px-4 py-3 hover:bg-brand-green transition-colors"
          >
            Free IT Audit →
          </Link>
        </div>
      )}
    </header>
  );
}
