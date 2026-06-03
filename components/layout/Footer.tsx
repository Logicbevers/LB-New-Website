import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import ObfuscatedEmail from "@/components/shared/ObfuscatedEmail";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

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
  { name: "Get In Touch", href: "/contact" },
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
              Your dedicated IT partner for cybersecurity, cloud, and AI solutions that actually deliver results.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/logic-bevers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com/Logic_Bevers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="Twitter / X"
              >
                <XIcon />
              </a>
              <a
                href="https://t.me/logicBevers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="Telegram"
              >
                <TelegramIcon />
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
                <ObfuscatedEmail className="hover:text-brand-light transition-colors" />
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-brand-light flex-shrink-0" />
                <a
                  href="tel:+918699461996"
                  className="hover:text-brand-light transition-colors"
                >
                  +91 86994 61996
                </a>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-brand-green hover:bg-brand-light text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Get In Touch →
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
