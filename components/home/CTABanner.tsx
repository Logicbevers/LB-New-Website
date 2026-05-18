import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-brand-green py-20 border-y border-brand-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div>
            <p className="text-green-200 text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Get Started
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
              Reduce costs.<br />
              Increase security.<br />
              <span className="text-green-200">Start today.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-black px-8 py-4 text-lg hover:bg-black hover:text-white transition-colors"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
