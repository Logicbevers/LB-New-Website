"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/faq";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-black/8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left — sticky heading */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 self-start">
            <p className="text-brand-green font-bold text-xs uppercase tracking-[0.15em] mb-4">
              FAQ
            </p>
            <h2 className="text-5xl font-black text-black leading-none tracking-tight mb-6">
              Common<br />questions.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Everything you need to know before making a decision. Can&apos;t
              find your answer?{" "}
              <a href="/contact" className="text-brand-green font-bold hover:underline">
                Ask us directly →
              </a>
            </p>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 divide-y divide-black/8 border-y border-black/8">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={open === i}
                >
                  <span className={`font-bold text-base pr-8 transition-colors ${open === i ? "text-brand-green" : "text-black group-hover:text-brand-green"}`}>
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 border border-black/15 flex items-center justify-center">
                    {open === i
                      ? <Minus className="w-3.5 h-3.5 text-brand-green" />
                      : <Plus className="w-3.5 h-3.5 text-black" />
                    }
                  </span>
                </button>
                {open === i && (
                  <div className="pb-6">
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
