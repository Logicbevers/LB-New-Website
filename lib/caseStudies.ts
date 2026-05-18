export interface CaseStudy {
  id: number;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  metric: string;
  metricLabel: string;
  tag: string;
  tagColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    company: "GreenPath Retail",
    industry: "E-commerce",
    challenge:
      "Frequent system outages during peak sales periods were costing thousands per hour in lost revenue.",
    solution:
      "Implemented managed IT with proactive monitoring, auto-failover, and a 24/7 support tier.",
    metric: "47%",
    metricLabel: "IT Cost Reduction",
    tag: "Managed IT",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    company: "MedCore Clinics",
    industry: "Healthcare",
    challenge:
      "Multiple clinics sharing patient data across unsecured systems, risking HIPAA violations.",
    solution:
      "Deployed zero-trust architecture, encrypted all data channels, and achieved full HIPAA compliance.",
    metric: "0",
    metricLabel: "Security Breaches in 3 Years",
    tag: "Cybersecurity",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    id: 3,
    company: "Apex Finance Group",
    industry: "Financial Services",
    challenge:
      "Legacy on-premise servers with unpredictable maintenance costs and limited scalability.",
    solution:
      "Full cloud migration to AWS with cost optimization, auto-scaling, and disaster recovery.",
    metric: "62%",
    metricLabel: "Cloud Cost Reduction",
    tag: "Cloud Solutions",
    tagColor: "bg-green-100 text-green-700",
  },
];
