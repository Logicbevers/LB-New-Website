import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProblemSolution from "@/components/home/ProblemSolution";
import ServicesGrid from "@/components/home/ServicesGrid";
import MetricsStrip from "@/components/home/MetricsStrip";
import Testimonials from "@/components/home/Testimonials";
import CaseStudies from "@/components/home/CaseStudies";
import CTABanner from "@/components/home/CTABanner";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "LogicBevers | Expert IT Services, Cloud & Security Solutions",
  description:
    "Expert managed IT services, cybersecurity & cloud solutions for Growing Businesses. 24/7 support, AI automation, zero-trust security. Save avg. $45K/year.",
  alternates: { canonical: "https://logicbevers.com" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
<ProblemSolution />
      <ServicesGrid />
      <MetricsStrip />
      <Testimonials />
      <CaseStudies />
      <CTABanner />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
