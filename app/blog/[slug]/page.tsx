import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, User, Calendar } from "lucide-react";
import { blogPosts, getPostBySlug, getCategoryColor } from "@/lib/blogPosts";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://logicbevers.com/blog/${post.slug}`,
      siteName: "LogicBevers",
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: { canonical: `https://logicbevers.com/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "LogicBevers",
      url: "https://logicbevers.com",
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `https://logicbevers.com/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://logicbevers.com/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://logicbevers.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://logicbevers.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://logicbevers.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <span
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${getCategoryColor(post.category)}`}
          >
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-brand-green/20 rounded-full flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-brand-light" />
              </div>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article + Sidebar */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article body */}
            <article className="lg:col-span-2">
              <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium border-b border-black/8 pb-10">
                {post.excerpt}
              </p>
              <div
                className="prose prose-slate prose-lg max-w-none
                  prose-headings:font-black prose-headings:text-black prose-headings:tracking-tight
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-slate-600 prose-p:leading-relaxed
                  prose-li:text-slate-600
                  prose-strong:text-black
                  prose-a:text-brand-green prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                  prose-ul:my-4 prose-ol:my-4
                  prose-table:text-sm"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* CTA Box */}
              <div className="bg-brand-green rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-bold text-lg mb-2">
                  Ready to take action?
                </h3>
                <p className="text-green-100 text-sm mb-4">
                  Get a free IT audit and custom action plan for your business.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-brand-green font-semibold text-sm px-5 py-3 rounded-xl hover:bg-green-50 transition-colors w-full justify-center"
                >
                  Schedule Free Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related posts */}
              <div>
                <h3 className="font-bold text-brand-dark mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="block group"
                    >
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getCategoryColor(related.category)}`}
                      >
                        {related.category}
                      </span>
                      <p className="text-sm font-medium text-brand-dark mt-1 group-hover:text-brand-green transition-colors leading-snug">
                        {related.title}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        {related.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
