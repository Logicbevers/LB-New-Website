import type { Metadata } from "next";
import { Mail, Phone, Clock, CheckCircle } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact LogicBevers | Get In Touch",
  description:
    "Get in touch with LogicBevers. Reach us via email, phone, LinkedIn, Twitter or Telegram. We respond within 30 minutes during business hours.",
  alternates: { canonical: "https://logicbevers.com/contact" },
  openGraph: {
    title: "Contact LogicBevers | Get In Touch",
    description: "Reach us via email, phone, LinkedIn, Twitter or Telegram. We respond within 30 minutes during business hours.",
    url: "https://logicbevers.com/contact",
    siteName: "LogicBevers",
    images: [{ url: "https://logicbevers.com/api/og?name=Contact+LogicBevers&desc=Get+expert+IT+support+within+30+minutes&category=Contact", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact LogicBevers | Get In Touch",
    description: "Reach us via email, phone, LinkedIn or Telegram. 30-minute response during business hours.",
  },
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
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/logic-bevers",
    value: "linkedin.com/company/logic-bevers",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/Logic_Bevers",
    value: "@Logic_Bevers",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/logicBevers",
    value: "t.me/logicBevers",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
];

const guarantees = [
  "Quick response within 30 minutes",
  "No commitment required",
  "Custom IT action plan",
  "Expert advice, not a sales pitch",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://logicbevers.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://logicbevers.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-light font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Reach out via any channel below. We&apos;ll get back to you within 30 minutes during business hours.
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

              {/* Contact details */}
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-brand-dark font-medium text-sm hover:text-brand-green transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-brand-dark font-medium text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-3">Find us on</p>
                <div className="space-y-3">
                  {socialLinks.map(({ label, href, value, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium mb-0.5">{label}</p>
                        <p className="text-brand-dark font-medium text-sm group-hover:text-brand-green transition-colors">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
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
