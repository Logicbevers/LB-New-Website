"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    challenge: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-gray-100">
        <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-brand-green" />
        </div>
        <h2 className="text-2xl font-bold text-brand-dark mb-3">
          Message received!
        </h2>
        <p className="text-slate-600 mb-2">
          We&apos;ll be in touch within 30 minutes during business hours.
        </p>
        <p className="text-slate-500 text-sm">
          Check your inbox for a confirmation email.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 space-y-5"
    >
      <h2 className="text-2xl font-bold text-brand-dark mb-1">
        Tell us about your IT needs
      </h2>
      <p className="text-slate-500 text-sm mb-6">
        Fill this in and we&apos;ll prepare a custom plan before our call.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green text-sm transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-1.5">
            Company Name *
          </label>
          <input
            type="text"
            required
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green text-sm transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="john@acmecorp.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green text-sm transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green text-sm transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1.5">
          What&apos;s your biggest IT challenge? *
        </label>
        <textarea
          required
          rows={4}
          value={form.challenge}
          onChange={(e) => setForm({ ...form, challenge: e.target.value })}
          placeholder="Describe your current IT situation, pain points, or what you'd like to improve..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green text-sm transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-green hover:bg-brand-light text-white font-semibold py-4 rounded-xl transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed text-base"
      >
        {loading ? "Sending..." : "Get In Touch →"}
      </button>

      <p className="text-center text-slate-400 text-xs">
        No spam. No commitment. We&apos;ll only reach out about your IT needs.
      </p>
    </form>
  );
}
