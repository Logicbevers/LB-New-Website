"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const statTiles = [
  { value: "$45K", label: "Avg. Annual Savings", bg: "bg-brand-green", text: "text-white", labelColor: "text-green-200" },
  { value: "99.99%", label: "Uptime SLA", bg: "bg-black", text: "text-white", labelColor: "text-slate-400" },
  { value: "150+", label: "Companies Served", bg: "bg-white", text: "text-black", labelColor: "text-slate-500", border: true },
  { value: "0", label: "Security Breaches", bg: "bg-brand-gray", text: "text-black", labelColor: "text-slate-500", border: true },
];

const marqueeItems = [
  "Managed IT Services", "★", "Cybersecurity", "★", "Cloud Migration",
  "★", "AI Automation", "★", "24/7 Support", "★", "Multi-Cloud",
  "★", "Zero-Trust Security", "★", "Digital Transformation", "★",
];

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      {/* Main hero grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 min-h-[88vh] items-center gap-0 border-b border-black/10">

          {/* Left — giant copy (2/3) */}
          <motion.div
            className="lg:col-span-2 py-16 lg:py-0 lg:pr-16 lg:border-r border-black/10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 border border-black/15 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-8 text-slate-500">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
              Global IT Services · Est. 2020
            </div>

            <h1 className="text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.92] tracking-tighter text-black mb-8">
              Smart IT.<br />
              <span className="text-brand-green">Scaled</span><br />
              Right.
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-md leading-relaxed mb-10">
              Managed IT, cybersecurity &amp; cloud for small businesses.
              24/7 support, AI automation, zero downtime — at a flat rate.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black hover:bg-brand-green text-white font-bold px-7 py-4 text-base transition-colors duration-200"
              >
                Free IT Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/compliance-audits"
                className="inline-flex items-center gap-2 border-2 border-black text-black font-bold px-7 py-4 text-base hover:bg-black hover:text-white transition-colors duration-200"
              >
                Explore Services
              </Link>
            </div>

            <p className="text-slate-400 text-sm mt-5">
              15-min call · No commitment · Custom action plan included
            </p>
          </motion.div>

          {/* Right — bento stat tiles (1/3) */}
          <motion.div
            className="hidden lg:grid grid-rows-4 h-full border-l border-black/10 divide-y divide-black/10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {statTiles.map((tile) => (
              <div
                key={tile.label}
                className={`${tile.bg} ${tile.border ? "border-0" : ""} flex flex-col justify-between p-8`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-[0.15em] ${tile.labelColor}`}>
                  {tile.label}
                </span>
                <span className={`text-5xl font-black ${tile.text} leading-none mt-4`}>
                  {tile.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="bg-brand-green border-y border-brand-green/20 py-3 overflow-hidden">
        <div className="flex w-max animate-marquee gap-0">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-white/90 text-xs font-bold uppercase tracking-widest whitespace-nowrap px-6"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
