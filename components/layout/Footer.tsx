import Link from "next/link";

import { ExternalLink, Share2, Mail, Phone } from "lucide-react";

const serviceLinks = [
  { name: "Compliance Audits", href: "/services/compliance-audits" },
  { name: "Zero-Trust Security", href: "/services/zero-trust-security" },
  { name: "Incident Response", href: "/services/incident-response" },
  { name: "AI & LLM Integration", href: "/services/ai-llm-integration" },
  { name: "Custom Generative AI", href: "/services/custom-ai-development" },
  { name: "Cloud FinOps", href: "/services/cloud-finops" },
  { name: "Web3 & Blockchain", href: "/services/web3-blockchain" },
  { name: "Multi-Cloud", href: "/services/multi-cloud" },
  { name: "API Security", href: "/services/api-security" },
  { name: "Managed SOC", href: "/services/managed-soc" },
  { name: "Digital Transformation", href: "/services/digital-transformation" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const resourceLinks = [
  { name: "IT Security Checklist", href: "/blog" },
  { name: "Cloud Migration Guide", href: "/blog" },
  { name: "AI Automation Guide", href: "/blog" },
  { name: "Free IT Audit", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="LogicBevers"
                style={{ height: '40px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Unlocking Logic and Empowering Ventures. Expert managed IT services
              for small businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="Twitter / X"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@logicbevers.com"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-brand-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-brand-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4 mt-8">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-brand-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-brand-light flex-shrink-0" />
                <a
                  href="mailto:hello@logicbevers.com"
                  className="hover:text-brand-light transition-colors"
                >
                  hello@logicbevers.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-brand-light flex-shrink-0" />
                <a
                  href="tel:+1-555-000-0000"
                  className="hover:text-brand-light transition-colors"
                >
                  +1 (555) 000-0000
                </a>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-brand-green hover:bg-brand-light text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Schedule Free Audit →
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} LogicBevers. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
