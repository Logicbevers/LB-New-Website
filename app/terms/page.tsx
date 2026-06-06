import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | LogicBevers",
  description: "LogicBevers Terms of Service — the terms and conditions governing your use of our services.",
  alternates: { canonical: "https://logicbevers.com/terms" },
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing our website or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and clients of LogicBevers.",
  },
  {
    title: "Description of Services",
    content: "LogicBevers provides managed IT services, cybersecurity consulting, cloud solutions, AI integration, and related technology services to businesses. The specific scope, deliverables, and pricing for services are defined in individual service agreements or statements of work agreed upon with each client.",
  },
  {
    title: "Client Responsibilities",
    content: "Clients are responsible for providing accurate information necessary for service delivery, maintaining appropriate access credentials, promptly communicating any changes that may affect service delivery, and ensuring their use of our services complies with all applicable laws and regulations.",
  },
  {
    title: "Confidentiality",
    content: "Both parties agree to maintain the confidentiality of proprietary information shared during the course of the service relationship. LogicBevers will not disclose client information to third parties without consent, except as required by law or necessary to deliver contracted services.",
  },
  {
    title: "Intellectual Property",
    content: "Client data and systems remain the property of the client. LogicBevers retains ownership of its proprietary tools, methodologies, and frameworks. Custom work product developed specifically for a client will be assigned to that client upon full payment, as specified in the service agreement.",
  },
  {
    title: "Limitation of Liability",
    content: "LogicBevers liability is limited to the fees paid for the specific service giving rise to the claim in the three months preceding the claim. We are not liable for indirect, incidental, or consequential damages. This limitation does not apply to gross negligence, willful misconduct, or breaches of confidentiality obligations.",
  },
  {
    title: "Service Level Agreements",
    content: "Specific uptime guarantees, response times, and service levels are defined in individual service agreements. LogicBevers will use commercially reasonable efforts to meet agreed service levels. Credits or remedies for service level failures are defined in the applicable service agreement.",
  },
  {
    title: "Payment Terms",
    content: "Payment terms are specified in individual service agreements. Invoices are due within 30 days of issue unless otherwise agreed. Late payments may incur interest at 1.5% per month. LogicBevers reserves the right to suspend services for accounts overdue by more than 60 days.",
  },
  {
    title: "Termination",
    content: "Either party may terminate services with 30 days written notice unless otherwise specified in the service agreement. LogicBevers may terminate immediately for non-payment, breach of these terms, or illegal use of our services. Upon termination, client data will be returned or securely deleted per the data handling policy.",
  },
  {
    title: "Governing Law",
    content: "These terms are governed by applicable commercial law. Any disputes will be resolved through binding arbitration before resorting to litigation. Both parties agree to attempt good-faith resolution of any disputes before initiating formal proceedings.",
  },
  {
    title: "Changes to Terms",
    content: "We may update these Terms of Service with reasonable notice. Continued use of our services after changes take effect constitutes acceptance of the updated terms. Material changes will be communicated via email to active clients.",
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">Legal</p>
          <h1 className="text-5xl font-black text-white leading-tight mb-4">Terms of Service</h1>
          <p className="text-white/50 text-sm">Effective date: January 1, 2025 · Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 text-lg leading-relaxed mb-12 pb-12 border-b border-black/8">
            These Terms of Service govern your use of LogicBevers&apos; website and services. Please read them carefully before engaging our services. By using our services, you enter into a binding agreement with LogicBevers.
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
            <p className="text-slate-500 text-sm">Questions about our terms?</p>
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
