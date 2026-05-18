import type { Metadata } from "next";
import { Mail, Phone, Clock, CheckCircle, Globe, Share2, Send } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact LogicBevers | Get In Touch",
  description:
    "Get in touch with LogicBevers. Reach us via email, phone, LinkedIn, Twitter or Telegram. We respond within 30 minutes during business hours.",
  alternates: { canonical: "https://logicbevers.com/contact" },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@logicbevers.com",
    href: "mailto:contact@logicbevers.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 86994 61996",
    href: "tel:+918699461996",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 30 minutes (business hours)",
    href: null,
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/company/logic-bevers",
    href: "https://linkedin.com/company/logic-bevers",
  },
  {
    icon: Share2,
    label: "Twitter / X",
    value: "@Logic_Bevers",
    href: "https://x.com/Logic_Bevers",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "t.me/logicBevers",
    href: "https://t.me/logicBevers",
  },
];

const guarantees = [
  "Quick response within 30 minutes",
  "No commitment required",
  "Custom IT action plan",
  "Expert advice, not a sales pitch",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-light font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Schedule Your Free IT Audit
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tell us about your IT challenges. We&apos;ll give you a free
            assessment and a custom action plan in your first call.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-4">
                  What to expect
                </h2>
                <div className="space-y-3">
                  {guarantees.map((g) => (
                    <div key={g} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{g}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-brand-dark font-medium text-sm hover:text-brand-green transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-brand-dark font-medium text-sm">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-dark rounded-2xl p-6 text-white">
                <p className="font-semibold mb-2">Prefer to book directly?</p>
                <p className="text-slate-400 text-sm mb-4">
                  Use our calendar to pick a time that works for you.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-green hover:bg-brand-light text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                >
                  Open Calendar →
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
