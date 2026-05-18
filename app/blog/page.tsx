import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "IT Insights Blog | LogicBevers",
  description:
    "Expert IT insights, cybersecurity tips, cloud guides, and AI automation strategies for small businesses. Updated weekly by the LogicBevers team.",
  alternates: { canonical: "https://logicbevers.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-light font-semibold text-sm uppercase tracking-widest mb-3">
            IT Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expert IT Knowledge for Small Business
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Practical guides, security tips, and industry insights from our team
            of IT experts. Published weekly.
          </p>
        </div>
      </section>

      {/* Newsletter bar */}
      <div className="bg-brand-green py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-medium text-sm">
            Get weekly IT insights in your inbox →
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-2 rounded-lg text-sm border-0 focus:outline-none focus:ring-2 focus:ring-white/50 w-48"
            />
            <button className="bg-white text-brand-green font-medium text-sm px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Blog grid */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">
            Ready to put these insights into action?
          </h2>
          <p className="text-slate-600 mb-6">
            Schedule a free IT audit and we&apos;ll show you exactly what to
            prioritize for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-light text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Schedule Free Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
