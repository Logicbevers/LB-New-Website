export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  initials: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Chen",
    role: "CEO",
    company: "NovaTech Solutions",
    industry: "SaaS",
    quote:
      "LogicBevers completely transformed our IT operations. We went from constant outages to 99.99% uptime in just 3 months. The ROI was immediate and undeniable.",
    initials: "DC",
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Rachel Thompson",
    role: "CFO",
    company: "Meridian Accounting",
    industry: "Finance",
    quote:
      "We cut our IT costs by $38,000 in year one. LogicBevers identified waste we didn't even know existed and replaced it with a better, more secure solution.",
    initials: "RT",
    color: "bg-purple-600",
  },
  {
    id: 3,
    name: "Michael Osei",
    role: "Founder",
    company: "HealthFirst Clinics",
    industry: "Healthcare",
    quote:
      "HIPAA compliance used to give me nightmares. Now it's a non-issue. LogicBevers built our security framework so thoroughly, we passed our audit first try.",
    initials: "MO",
    color: "bg-brand-green",
  },
];
