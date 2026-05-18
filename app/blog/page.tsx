import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogPosts, getCategoryColor } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "IT Insights Blog | LogicBevers",
  description:
    "Expert IT insights, cybersecurity tips, cloud guides, and AI automation strategies for small businesses. Updated weekly by the LogicBevers team.",
  alternates: { canonical: "https://logicbevers.com/blog" },
};

const categories = ["All", "Managed IT", "Cybersecurity", "Cloud Solutions", "AI & Automation"];

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
          {/* Category filter (static — can be made interactive later) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-brand-green text-white"
                    : "bg-white text-slate-600 hover:bg-brand-gray-dark border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
              >
                {/* Placeholder image */}
                <div className="h-48 bg-gradient-to-br from-brand-dark to-brand-navy flex items-center justify-center">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(post.category)}`}
                  >
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>

                  <h2 className="font-bold text-brand-dark text-base leading-snug mb-3 flex-1">
                    {post.title}
                  </h2>

                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-brand-green/10 rounded-full flex items-center justify-center">
                        <User className="w-3.5 h-3.5 text-brand-green" />
                      </div>
                      <span className="text-xs text-slate-500">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-brand-green text-sm font-medium hover:gap-2 transition-all"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
