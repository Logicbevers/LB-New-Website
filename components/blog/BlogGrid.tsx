"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogPosts, getCategoryColor } from "@/lib/blogPosts";

const categories = ["All", "Managed IT", "Cybersecurity", "Cloud Solutions", "AI & Automation"];

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-brand-green text-white"
                : "bg-white text-slate-600 hover:bg-brand-green/10 border border-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
          >
            {/* Cover image */}
            <div className="h-48 overflow-hidden bg-brand-dark relative">
              <Image
                src={`/api/og?name=${encodeURIComponent(post.title)}&desc=${encodeURIComponent(post.excerpt)}&category=${encodeURIComponent(post.category)}`}
                alt={post.title}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getCategoryColor(post.category)}`}
                >
                  {post.category}
                </span>
                <span>·</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </div>
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

      {filtered.length === 0 && (
        <p className="text-slate-500 text-center py-20">
          No posts in this category yet. Check back soon.
        </p>
      )}
    </>
  );
}
