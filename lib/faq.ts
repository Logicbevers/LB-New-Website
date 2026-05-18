export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What's included in managed IT services?",
    answer:
      "Our managed IT services include 24/7 infrastructure monitoring, helpdesk support (phone, email, and chat), patch management, software updates, network management, backup and disaster recovery, vendor management, and monthly performance reports. Every plan is customized to your business size and needs.",
  },
  {
    question: "How fast is your response time?",
    answer:
      "We guarantee a 15-minute initial response time for all support tickets, 24 hours a day, 7 days a week. Critical issues are escalated immediately to senior engineers. Our average resolution time for standard issues is under 2 hours.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer:
      "Yes — our support team is available 24/7/365. You can reach us via phone, email, live chat, or our ticketing portal at any time. We operate across multiple time zones to ensure immediate coverage regardless of where your team is located.",
  },
  {
    question: "How do you handle cybersecurity for small businesses?",
    answer:
      "We implement a layered security approach including zero-trust architecture, endpoint detection and response (EDR), multi-factor authentication, email security, security awareness training, and continuous monitoring. We also help with compliance requirements like HIPAA, GDPR, and SOC 2.",
  },
  {
    question: "Can you help with cloud migration?",
    answer:
      "Absolutely. We manage end-to-end cloud migrations to AWS, Azure, and GCP. Our process includes a cloud readiness assessment, detailed migration planning, zero-downtime deployment, and post-migration optimization to reduce your cloud costs.",
  },
  {
    question: "How much does managed IT services cost?",
    answer:
      "Our pricing is customized based on your company size, the number of users and devices, and the services you need. Most small businesses (10–50 employees) see costs significantly lower than hiring in-house IT staff, with the added benefit of enterprise-grade expertise. Contact us for a free quote.",
  },
];
