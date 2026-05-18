"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-0">
          {/* Left — label + controls */}
          <div className="flex flex-col justify-between py-4 pr-12 border-r border-white/10 mb-12 lg:mb-0">
            <div>
              <p className="text-brand-light font-bold text-xs uppercase tracking-[0.15em] mb-4">
                Client Stories
              </p>
              <h2 className="text-4xl font-black text-white leading-tight">
                Real words from<br />real clients.
              </h2>
            </div>

            <div className="flex items-center gap-3 mt-10 lg:mt-0">
              <button
                onClick={() => setCurrent(c => c === 0 ? testimonials.length - 1 : c - 1)}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrent(c => c === testimonials.length - 1 ? 0 : c + 1)}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-white/30 text-sm ml-2 font-mono">
                {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right — big quote */}
          <div className="lg:col-span-2 lg:pl-14">
            <p className="text-5xl md:text-6xl font-black text-white leading-tight mb-10">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-white/40 text-sm">{t.role}, {t.company}</p>
              </div>
              <span className="ml-auto text-xs font-bold text-brand-light border border-brand-light/30 px-3 py-1">
                {t.industry}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
