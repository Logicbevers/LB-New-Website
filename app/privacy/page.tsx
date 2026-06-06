import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | LogicBevers",
  description: "LogicBevers Privacy Policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://logicbevers.com/privacy" },
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly to us, such as your name, company name, email address, and phone number when you contact us or request a free audit. We also collect usage data when you visit our website, including IP address, browser type, pages visited, and time spent on pages.",
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to respond to your inquiries, provide our IT services, send you relevant communications about our services, improve our website and service offerings, and comply with legal obligations. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Security",
    content: "We implement industry-standard security measures to protect your personal information, including encryption in transit (TLS), access controls, and regular security audits. As a cybersecurity company, data protection is core to everything we do.",
  },
  {
    title: "Cookies",
    content: "We use cookies and similar tracking technologies to improve your browsing experience on our website. You can control cookie settings through your browser preferences. We use analytics cookies to understand how visitors interact with our site.",
  },
  {
    title: "Third-Party Services",
    content: "We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services. These parties are contractually obligated to keep your information confidential and use it only for the services they provide to us.",
  },
  {
    title: "Your Rights",
    content: "Depending on your location, you may have rights to access, correct, or delete your personal information. You may also have the right to opt out of certain communications. To exercise these rights, please contact us at contact@logicbevers.com.",
  },
  {
    title: "Data Retention",
    content: "We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When information is no longer needed, we securely delete or anonymize it.",
  },
  {
    title: "Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated effective date. Your continued use of our website after changes constitutes acceptance of the updated policy.",
  },
  {
    title: "Contact Us",
    content: "If you have questions about this Privacy Policy or our data practices, please contact us at contact@logicbevers.com or via our contact form.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">Legal</p>
          <h1 className="text-5xl font-black text-white leading-tight mb-4">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Effective date: January 1, 2025 · Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 text-lg leading-relaxed mb-12 pb-12 border-b border-black/8">
            LogicBevers (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i} className="pb-10 border-b border-black/8 last:border-0">
                <h2 className="text-xl font-black text-black mb-3">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-black/8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-slate-500 text-sm">Questions? We&apos;re happy to help.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black hover:bg-brand-green text-white font-bold px-6 py-3 text-sm transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
