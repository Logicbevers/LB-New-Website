export interface PainPoint {
  title: string;
  desc: string;
}

export interface Step {
  number: string;
  title: string;
  desc: string;
}

export interface CaseStudy {
  company: string;
  industry: string;
  metric: string;
  desc: string;
}

export interface ServiceTestimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  heroSubtitle: string;
  icon: string;
  painPoints: PainPoint[];
  steps: Step[];
  features: string[];
  industries: string[];
  caseStudy: CaseStudy;
  testimonial: ServiceTestimonial;
  metaTitle: string;
  metaDesc: string;
}

export const services: Service[] = [
  {
    slug: "compliance-audits",
    name: "Compliance Audits & Certifications",
    shortDesc: "SOC2, ISO 27001, HIPAA, PCI-DSS & GDPR audit preparation and certification support.",
    heroSubtitle:
      "Win enterprise contracts, satisfy regulators, and earn customer trust. We prepare, coordinate, and guide you through every major compliance certification.",
    icon: "ShieldCheck",
    painPoints: [
      {
        title: "Enterprise Deals Blocked by SOC2",
        desc: "Large customers won't sign without a SOC2 report — and building it in-house takes 12+ months.",
      },
      {
        title: "Overwhelming Audit Requirements",
        desc: "HIPAA, ISO 27001, PCI-DSS — the documentation and evidence burden is paralyzing without expert guidance.",
      },
      {
        title: "Post-Audit Remediation Gaps",
        desc: "Failing an audit or getting a qualified opinion damages reputation and costs far more to fix reactively.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Gap Assessment",
        desc: "We benchmark your current controls against the target framework and document every gap.",
      },
      {
        number: "02",
        title: "Remediation Plan",
        desc: "Prioritized roadmap to close gaps, with timelines, ownership, and evidence requirements.",
      },
      {
        number: "03",
        title: "Audit Coordination",
        desc: "We manage the auditor relationship, evidence collection, and documentation on your behalf.",
      },
      {
        number: "04",
        title: "Ongoing Compliance",
        desc: "Continuous monitoring and maintenance to keep certifications current year-round.",
      },
    ],
    features: [
      "SOC2 Type II audit coordination and preparation",
      "ISO 27001 certification support and remediation",
      "HIPAA compliance assessments and gap analysis",
      "PCI-DSS validation and implementation guidance",
      "GDPR readiness audits and data protection reviews",
      "Continuous compliance monitoring and maintenance",
      "Documentation and evidence collection support",
      "Audit findings remediation planning",
      "Post-audit compliance reporting",
      "Board-level governance reporting",
    ],
    industries: ["SaaS", "Healthcare", "Fintech", "Insurance", "Government Contractors", "Payment Processing"],
    caseStudy: {
      company: "PulseHealth Tech",
      industry: "Health Tech / SaaS",
      metric: "SOC2 Type II in 4 months",
      desc: "A 35-person health tech startup unlocked two $500K+ enterprise contracts after achieving SOC2 Type II certification in just 4 months — half the industry average.",
    },
    testimonial: {
      name: "Jordan K.",
      role: "CEO",
      company: "PulseHealth Tech",
      quote: "LogicBevers turned what felt like an impossible mountain into a managed process. We passed first try and closed two enterprise deals the same quarter.",
    },
    metaTitle: "Compliance Audits & Certifications | SOC2, ISO 27001, HIPAA, PCI-DSS",
    metaDesc: "Expert compliance audit preparation for SOC2 Type II, ISO 27001, HIPAA, PCI-DSS, and GDPR. Win enterprise contracts and satisfy regulators.",
  },
  {
    slug: "zero-trust-security",
    name: "Zero-Trust Security & Passwordless Auth",
    shortDesc: "Zero-trust architecture design, implementation, and passwordless authentication deployment.",
    heroSubtitle:
      "80% of breaches exploit stolen credentials. Zero-trust eliminates that attack surface entirely — while passwordless auth makes security invisible to your users.",
    icon: "Lock",
    painPoints: [
      {
        title: "Credential-Based Breaches",
        desc: "Phishing and password theft cause 80% of all enterprise breaches. Traditional perimeter security can't stop them.",
      },
      {
        title: "Complex Legacy Access Control",
        desc: "VPNs, on-premise AD, and legacy MFA create friction without real security — the worst of both worlds.",
      },
      {
        title: "NIST & CISA Mandate Pressure",
        desc: "Zero-trust is now mandated for government contractors and increasingly expected by enterprise customers.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Architecture Assessment",
        desc: "Map your identity, devices, network, and application landscape to design a zero-trust blueprint.",
      },
      {
        number: "02",
        title: "Identity & Device Strategy",
        desc: "Design IAM, MFA, and device trust policies across all users and endpoints.",
      },
      {
        number: "03",
        title: "Implementation",
        desc: "Deploy FIDO2/WebAuthn, Windows Hello, Okta or Azure AD with conditional access policies.",
      },
      {
        number: "04",
        title: "Monitor & Optimize",
        desc: "Continuous device verification, access log monitoring, and policy refinement.",
      },
    ],
    features: [
      "Zero-trust architecture assessment and design",
      "Network segmentation and micro-segmentation",
      "Windows Hello for Business implementation",
      "FIDO2 and WebAuthn (passwordless) deployment",
      "MFA strategy, management, and enforcement",
      "Continuous device verification and monitoring",
      "Conditional access policy configuration",
      "Okta and Azure AD integration",
      "Identity and access management (IAM) strategy",
      "Security awareness training",
    ],
    industries: ["Technology", "Finance & Banking", "Healthcare", "Government", "Manufacturing", "Professional Services"],
    caseStudy: {
      company: "Meridian Capital",
      industry: "Financial Services",
      metric: "80% breach risk reduction",
      desc: "A 120-person investment firm eliminated password-based attack vectors entirely, reducing breach risk by 80% while improving employee login experience across all devices.",
    },
    testimonial: {
      name: "Sophia L.",
      role: "CISO",
      company: "Meridian Capital",
      quote: "Our employees actually love the new passwordless experience. Security improved dramatically and helpdesk calls about passwords dropped to zero.",
    },
    metaTitle: "Zero-Trust Security & Passwordless Authentication | LogicBevers",
    metaDesc: "Zero-trust architecture design and passwordless authentication deployment. Reduce breach risk by 80% with FIDO2, WebAuthn, and Okta/Azure AD integration.",
  },
  {
    slug: "incident-response",
    name: "24/7 Incident Response & Cyber Resilience",
    shortDesc: "Dedicated round-the-clock breach response, ransomware recovery, and cyber resilience planning.",
    heroSubtitle:
      "When a breach happens, every minute costs money. Our dedicated IR team responds in minutes — containing damage, preserving evidence, and getting you back online fast.",
    icon: "AlertTriangle",
    painPoints: [
      {
        title: "No Plan When a Breach Hits",
        desc: "Most SMBs have no incident response plan. When ransomware strikes, the scramble makes everything worse.",
      },
      {
        title: "Regulatory Breach Notification Deadlines",
        desc: "GDPR requires 72-hour notification. HIPAA has similar rules. Missing deadlines multiplies fines.",
      },
      {
        title: "Average Breach Cost: $4.5M",
        desc: "The average cost of a data breach is now $4.5M. A proper IR plan and retainer reduces this catastrophically.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Retainer & Onboarding",
        desc: "We document your environment, define escalation paths, and build your incident playbooks.",
      },
      {
        number: "02",
        title: "Detection & Triage",
        desc: "24/7 monitoring alerts our team. We triage within minutes and classify severity immediately.",
      },
      {
        number: "03",
        title: "Containment & Recovery",
        desc: "Rapid isolation, forensic evidence preservation, malware removal, and system restoration.",
      },
      {
        number: "04",
        title: "Post-Incident & Resilience",
        desc: "Root cause analysis, regulatory support, and hardening to prevent recurrence.",
      },
    ],
    features: [
      "Dedicated incident response team (24/7/365)",
      "Rapid breach notification and containment",
      "Digital forensics and investigation",
      "Evidence preservation and chain of custody",
      "Ransomware detection and recovery",
      "Malware analysis and removal",
      "Regulatory notification support (GDPR, HIPAA)",
      "Tabletop exercises and simulations (quarterly)",
      "Business continuity planning and testing",
      "Post-incident analysis and hardening",
    ],
    industries: ["All Enterprises", "Healthcare", "Financial Institutions", "Retail", "Manufacturing", "Technology"],
    caseStudy: {
      company: "CrestWave Manufacturing",
      industry: "Manufacturing",
      metric: "4-hour ransomware recovery",
      desc: "A manufacturing plant hit by ransomware was back online in 4 hours instead of the industry-average 21 days — because LogicBevers had their IR plan, backups, and playbooks ready.",
    },
    testimonial: {
      name: "Derek T.",
      role: "VP Operations",
      company: "CrestWave Manufacturing",
      quote: "We were hit on a Friday night. LogicBevers had us contained in 20 minutes and fully operational by Saturday morning. Without them, we'd have lost weeks of production.",
    },
    metaTitle: "24/7 Incident Response & Cyber Resilience | LogicBevers",
    metaDesc: "24/7 incident response, ransomware recovery, and cyber resilience planning. Rapid breach containment with digital forensics and regulatory support.",
  },
  {
    slug: "ai-llm-integration",
    name: "AI Optimization & LLM Integration",
    shortDesc: "ChatGPT, Claude, and LLM API integrations into your existing systems and workflows.",
    heroSubtitle:
      "Stop paying people to do what AI can do in seconds. We identify the highest-value automation opportunities in your business and build LLM-powered workflows that run themselves.",
    icon: "Bot",
    painPoints: [
      {
        title: "Manual Processes Eating Bandwidth",
        desc: "Your team spends hours on document processing, summarisation, and data entry that LLMs can handle in milliseconds.",
      },
      {
        title: "No Clear AI Strategy",
        desc: "Everyone knows AI matters but nobody knows where to start — or how to avoid expensive failed pilots.",
      },
      {
        title: "Data Privacy Concerns Blocking Adoption",
        desc: "Fear of sending sensitive data to AI providers paralyses implementation without proper architecture.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "AI Opportunity Audit",
        desc: "Map your workflows to identify the highest-ROI AI automation opportunities.",
      },
      {
        number: "02",
        title: "Architecture & Compliance Design",
        desc: "Design a secure LLM integration architecture with data privacy controls and cost guardrails.",
      },
      {
        number: "03",
        title: "Build & Integrate",
        desc: "Develop RAG systems, automation agents, and LLM integrations connected to your existing tools.",
      },
      {
        number: "04",
        title: "Monitor & Optimise",
        desc: "Track performance, optimise prompts, control costs, and improve models continuously.",
      },
    ],
    features: [
      "AI strategy and use case identification",
      "ChatGPT and Claude API integration",
      "Retrieval-Augmented Generation (RAG) systems",
      "AI automation agent development",
      "Workflow automation with AI",
      "Custom prompt engineering",
      "Compliance and data privacy controls",
      "LLM cost optimisation and monitoring",
      "Integration with existing business systems",
      "Model evaluation and A/B testing",
    ],
    industries: ["All Industries", "Financial Services", "Healthcare", "Legal Services", "Professional Services", "Customer Service"],
    caseStudy: {
      company: "LexPro Associates",
      industry: "Legal Services",
      metric: "60% reduction in document review time",
      desc: "A 50-person law firm integrated Claude API into their document review workflow, cutting contract review time by 60% and enabling associates to handle 2x the caseload.",
    },
    testimonial: {
      name: "Priya N.",
      role: "Managing Partner",
      company: "LexPro Associates",
      quote: "The AI integration LogicBevers built has fundamentally changed how we work. Our associates are faster, our margins are better, and our clients are happier.",
    },
    metaTitle: "AI Optimization & LLM Integration Services | ChatGPT, Claude API",
    metaDesc: "LLM integration services using ChatGPT, Claude, and other AI APIs. RAG systems, workflow automation, and AI agents. 40-60% operational cost reduction.",
  },
  {
    slug: "custom-ai-development",
    name: "Custom Generative AI Development",
    shortDesc: "Industry-specific generative AI solutions built on your proprietary data.",
    heroSubtitle:
      "Generic AI gives generic results. We build custom generative AI solutions fine-tuned on your data — giving you AI that understands your industry, your language, and your business.",
    icon: "Sparkles",
    painPoints: [
      {
        title: "Off-the-Shelf AI Doesn't Fit Your Domain",
        desc: "General-purpose LLMs hallucinate on industry-specific tasks and lack the domain expertise your business requires.",
      },
      {
        title: "Proprietary Data Can't Go to the Cloud",
        desc: "Regulated industries can't send patient records, financial data, or IP to third-party AI providers.",
      },
      {
        title: "Competitors Are Building AI Moats",
        desc: "Custom AI trained on proprietary data creates sustainable competitive advantages that off-the-shelf tools can't replicate.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Use Case Definition",
        desc: "Identify the highest-value, domain-specific problem your custom AI will solve.",
      },
      {
        number: "02",
        title: "Data Preparation",
        desc: "Collect, clean, and structure your proprietary training data with full security controls.",
      },
      {
        number: "03",
        title: "Model Development",
        desc: "Fine-tune foundation models on your data or build RAG systems for your knowledge base.",
      },
      {
        number: "04",
        title: "Deploy & Improve",
        desc: "Production deployment with monitoring, retraining pipelines, and continuous improvement.",
      },
    ],
    features: [
      "Industry-specific AI solution development",
      "Custom model fine-tuning on proprietary data",
      "Domain-specific training data preparation",
      "Custom AI chatbot development",
      "Healthcare: diagnosis assistance, record summarisation",
      "Finance: risk analysis, fraud detection, report generation",
      "Legal: contract review, legal research automation",
      "On-premise deployment for regulated industries",
      "Confidential data handling and security",
      "Ongoing model retraining and improvement",
    ],
    industries: ["Healthcare", "Financial Services", "Legal", "Manufacturing", "Insurance", "Pharmaceutical", "Retail"],
    caseStudy: {
      company: "RegionCare Health",
      industry: "Healthcare",
      metric: "73% faster clinical documentation",
      desc: "A regional hospital network deployed a HIPAA-compliant, on-premise clinical AI that summarises patient notes 73% faster — freeing physicians for 2 additional patient consultations daily.",
    },
    testimonial: {
      name: "Dr. Alan W.",
      role: "Chief Medical Officer",
      company: "RegionCare Health",
      quote: "Our physicians spend less time on documentation and more time with patients. The AI LogicBevers built understands medical context in a way no generic tool ever could.",
    },
    metaTitle: "Custom Generative AI Development | Industry-Specific AI Solutions",
    metaDesc: "Custom generative AI development with fine-tuned models on proprietary data. On-premise deployment for healthcare, finance, legal, and manufacturing.",
  },
  {
    slug: "cloud-finops",
    name: "Cloud Cost Optimisation (FinOps)",
    shortDesc: "25–35% cloud cost reduction through intelligent FinOps across AWS, Azure, and GCP.",
    heroSubtitle:
      "The average company wastes 32% of its cloud budget. We find every dollar of waste across AWS, Azure, and GCP — and eliminate it without touching performance.",
    icon: "DollarSign",
    painPoints: [
      {
        title: "Cloud Bills Growing Faster Than Revenue",
        desc: "Uncontrolled cloud sprawl means costs scale faster than value — with no visibility into what's driving the spend.",
      },
      {
        title: "No FinOps Process or Ownership",
        desc: "Cloud spending has no clear owner. Engineering teams overprovision; finance teams can't decode the bills.",
      },
      {
        title: "Reserved Instances Not Optimised",
        desc: "Most companies buy reserved instances wrong, missing 30-60% of available savings.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Cloud Cost Audit",
        desc: "Complete spending analysis across all cloud accounts, services, and regions.",
      },
      {
        number: "02",
        title: "Waste Identification",
        desc: "Identify idle resources, over-provisioning, storage waste, and commitment gaps.",
      },
      {
        number: "03",
        title: "Optimisation Execution",
        desc: "Implement right-sizing, reserved instances, spot strategies, and automated cleanup.",
      },
      {
        number: "04",
        title: "FinOps Governance",
        desc: "Dashboards, cost allocation tagging, budget alerts, and monthly optimisation reviews.",
      },
    ],
    features: [
      "Complete cloud cost audit (AWS, Azure, GCP)",
      "Reserved instance strategy and optimisation",
      "Spot instance and savings plan recommendations",
      "Workload right-sizing and analysis",
      "Idle resource identification and elimination",
      "Storage optimisation (data tiering, compression)",
      "Cost monitoring dashboards and alerting",
      "FinOps governance framework implementation",
      "Cloud vendor negotiation support",
      "Database and network cost optimisation",
    ],
    industries: ["SaaS", "Technology", "Financial Services", "Media & Entertainment", "E-commerce", "Startups", "Enterprise"],
    caseStudy: {
      company: "StreamCore Media",
      industry: "Media & Entertainment",
      metric: "$340K annual cloud savings",
      desc: "A media streaming company burning $1.1M/year on AWS reduced cloud costs by $340K annually — a 31% reduction achieved in 60 days with zero performance impact.",
    },
    testimonial: {
      name: "Tyler M.",
      role: "VP Engineering",
      company: "StreamCore Media",
      quote: "LogicBevers found waste in our cloud that our own engineers had missed for two years. The audit paid for itself in the first month.",
    },
    metaTitle: "Cloud Cost Optimisation & FinOps | AWS, Azure, GCP | LogicBevers",
    metaDesc: "Cloud FinOps services delivering 25-35% cost reduction on AWS, Azure, and GCP. Reserved instance optimisation, right-sizing, and ongoing cost governance.",
  },
  {
    slug: "web3-blockchain",
    name: "Web3 & Blockchain Solutions",
    shortDesc: "Enterprise blockchain for supply chain, smart contracts, asset tokenisation, and digital identity.",
    heroSubtitle:
      "From supply chain transparency to asset tokenisation — we design and build enterprise blockchain solutions that solve real operational problems, not hypothetical ones.",
    icon: "Zap",
    painPoints: [
      {
        title: "Supply Chain Opacity and Fraud",
        desc: "Without immutable tracking, counterfeiting, fraud, and compliance failures are impossible to prevent at scale.",
      },
      {
        title: "Slow, Expensive Settlement Processes",
        desc: "Manual settlement, escrow, and payment processes cost time and money that smart contracts eliminate.",
      },
      {
        title: "Fractional Asset Ownership Barriers",
        desc: "Real estate, art, and commodity markets are locked to high-minimum investors without tokenisation infrastructure.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Use Case Scoping",
        desc: "Define the specific business problem blockchain solves and which implementation fits best.",
      },
      {
        number: "02",
        title: "Architecture Design",
        desc: "Select the right chain, consensus mechanism, and integration strategy for your use case.",
      },
      {
        number: "03",
        title: "Development & Audit",
        desc: "Build and security-audit smart contracts, deploy nodes, and integrate with business systems.",
      },
      {
        number: "04",
        title: "Launch & Operate",
        desc: "Production deployment with 99.9% uptime node management and ongoing monitoring.",
      },
    ],
    features: [
      "Blockchain-based supply chain tracking and provenance",
      "Custom smart contract development (Solidity)",
      "Smart contract security audits",
      "Asset tokenisation (real estate, art, commodities)",
      "Token issuance and management",
      "Self-sovereign identity (SSI) implementation",
      "KYC/AML automation",
      "DeFi treasury optimisation strategies",
      "Blockchain node deployment and management (99.9% uptime)",
      "Counterfeit prevention systems",
    ],
    industries: ["Supply Chain", "Retail & Consumer Goods", "Pharmaceuticals", "Real Estate", "Finance & Insurance", "Healthcare", "Energy"],
    caseStudy: {
      company: "NovaMed Pharma",
      industry: "Pharmaceuticals",
      metric: "100% drug authentication coverage",
      desc: "A pharmaceutical distributor implemented blockchain-based drug provenance tracking across 12 distribution centres, achieving 100% authentication coverage and eliminating counterfeit incidents.",
    },
    testimonial: {
      name: "Maria S.",
      role: "Head of Supply Chain",
      company: "NovaMed Pharma",
      quote: "We can now trace any product from manufacturer to patient in under 3 seconds. Counterfeiting is no longer a risk we manage — it's a problem we've solved.",
    },
    metaTitle: "Web3 & Blockchain Solutions | Smart Contracts, Tokenisation | LogicBevers",
    metaDesc: "Enterprise blockchain solutions for supply chain, smart contracts, asset tokenisation, and digital identity. Solidity development and blockchain node management.",
  },
  {
    slug: "multi-cloud",
    name: "Multi-Cloud Management & Orchestration",
    shortDesc: "Unified management of AWS, Azure, and GCP — zero vendor lock-in, full visibility.",
    heroSubtitle:
      "Running workloads across multiple clouds shouldn't mean multiple headaches. We unify your multi-cloud environment with single-pane governance, cost control, and disaster resilience.",
    icon: "Layers",
    painPoints: [
      {
        title: "Fragmented Visibility Across Clouds",
        desc: "AWS, Azure, and GCP each have separate consoles, billing, and security tools — creating dangerous blind spots.",
      },
      {
        title: "Vendor Lock-In Risk",
        desc: "Proprietary cloud services make migration impossible, giving vendors unlimited leverage on pricing.",
      },
      {
        title: "Inconsistent Security Policies",
        desc: "Different teams manage different clouds with different standards — creating compliance and security gaps.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Multi-Cloud Audit",
        desc: "Map all cloud accounts, workloads, and spend across every provider.",
      },
      {
        number: "02",
        title: "Unified Architecture",
        desc: "Design consistent governance, security, and cost policies across all clouds.",
      },
      {
        number: "03",
        title: "Orchestration Deployment",
        desc: "Deploy Kubernetes orchestration, GitOps, and single-pane monitoring with full automation.",
      },
      {
        number: "04",
        title: "Ongoing Optimisation",
        desc: "Continuous cost and performance optimisation, with cross-cloud disaster recovery testing.",
      },
    ],
    features: [
      "Multi-cloud architecture design (AWS + Azure + GCP)",
      "Kubernetes orchestration and management",
      "Container deployment automation",
      "Workload portability and migration",
      "Cross-cloud disaster recovery and failover",
      "GitOps and infrastructure-as-code (IaC)",
      "CI/CD pipeline configuration",
      "Unified monitoring and observability",
      "Security and compliance across all clouds",
      "Cloud vendor negotiation support",
    ],
    industries: ["Technology", "Financial Services", "Healthcare", "Government", "Fortune 500", "E-commerce", "Manufacturing"],
    caseStudy: {
      company: "MediaFlow Studios",
      industry: "Media",
      metric: "$82K annual cloud savings",
      desc: "A media company running workloads across 3 clouds reduced total spend by $82K/year through unified governance and automated rightsizing across all providers.",
    },
    testimonial: {
      name: "Carlos V.",
      role: "VP Engineering",
      company: "MediaFlow Studios",
      quote: "We had no idea how much we were wasting across our clouds. LogicBevers found the waste and eliminated it in 60 days.",
    },
    metaTitle: "Multi-Cloud Management & Orchestration | AWS, Azure, GCP | LogicBevers",
    metaDesc: "Unified multi-cloud management for AWS, Azure, and GCP. Kubernetes orchestration, GitOps, cross-cloud DR, and cost optimisation. Zero vendor lock-in.",
  },
  {
    slug: "api-security",
    name: "API Security & Gateway Management",
    shortDesc: "API gateway deployment, OAuth 2.0, rate limiting, DDoS protection, and full API governance.",
    heroSubtitle:
      "APIs are now the #1 attack vector. We secure every endpoint with enterprise-grade gateway management, zero-trust API access, and 24/7 anomaly detection.",
    icon: "Lock",
    painPoints: [
      {
        title: "APIs Are Your Largest Attack Surface",
        desc: "91% of companies experienced an API security incident last year. Most don't know their API inventory.",
      },
      {
        title: "No Visibility Into API Usage",
        desc: "Without an API gateway, you can't see who's calling what, how often, or whether it's malicious.",
      },
      {
        title: "Rate Limiting and DDoS Gaps",
        desc: "Unprotected APIs can be overwhelmed by bots, scrapers, and DDoS attacks with no defence in place.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "API Discovery & Inventory",
        desc: "Discover all APIs across your environment, document them, and assess current security posture.",
      },
      {
        number: "02",
        title: "Gateway Selection & Design",
        desc: "Select and architect the right API gateway (Kong, AWS API Gateway, Tyk) for your stack.",
      },
      {
        number: "03",
        title: "Security Implementation",
        desc: "Deploy OAuth 2.0/OIDC, rate limiting, DDoS protection, and anomaly detection.",
      },
      {
        number: "04",
        title: "Govern & Monitor",
        desc: "Ongoing API lifecycle management, threat monitoring, and developer portal maintenance.",
      },
    ],
    features: [
      "API gateway deployment (Kong, AWS API Gateway, Tyk)",
      "OAuth 2.0 and OpenID Connect implementation",
      "API authentication and authorisation",
      "Rate limiting and throttling",
      "DDoS protection for APIs",
      "API monitoring and anomaly detection",
      "Zero-trust API access control",
      "API lifecycle management and versioning",
      "Developer portal setup",
      "Request/response validation and compliance mapping",
    ],
    industries: ["Technology & SaaS", "Financial Services", "Healthcare", "E-commerce", "Fintech", "Enterprise Software"],
    caseStudy: {
      company: "Finova Payments",
      industry: "Fintech",
      metric: "Zero API breaches post-deployment",
      desc: "A payments fintech with 200M+ API calls/month deployed LogicBevers' API gateway solution — blocking 14,000+ malicious requests in the first week and achieving zero API breaches since.",
    },
    testimonial: {
      name: "Raj P.",
      role: "CTO",
      company: "Finova Payments",
      quote: "Before LogicBevers, we were flying blind on our API security. Now we have complete visibility and automatic protection. It's a completely different level of confidence.",
    },
    metaTitle: "API Security & Gateway Management | OAuth 2.0, Rate Limiting | LogicBevers",
    metaDesc: "Complete API security with gateway deployment, OAuth 2.0, rate limiting, and DDoS protection. Protect every endpoint with zero-trust API access control.",
  },
  {
    slug: "managed-soc",
    name: "Managed Security Operations Center (SOC)",
    shortDesc: "24/7 security monitoring, threat detection, and rapid incident response — no internal team needed.",
    heroSubtitle:
      "A world-class SOC used to cost $3M+/year to build. Ours delivers the same 24/7 threat detection and response at a fraction of the cost — already tuned and ready on day one.",
    icon: "Eye",
    painPoints: [
      {
        title: "Security Threats Never Sleep",
        desc: "Most breaches happen outside business hours. Without 24/7 monitoring, attackers have all night to work.",
      },
      {
        title: "Internal SOC Is Prohibitively Expensive",
        desc: "Building an internal SOC requires $2–5M in tools, headcount, and training — before it catches a single alert.",
      },
      {
        title: "Alert Fatigue Hiding Real Threats",
        desc: "Untuned SIEM tools generate thousands of false positives, causing analysts to miss genuine attacks.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Environment Onboarding",
        desc: "Integrate your systems, networks, and endpoints into our SIEM and monitoring platform.",
      },
      {
        number: "02",
        title: "Baseline & Tune",
        desc: "Establish normal behaviour baselines and tune detection rules to minimise false positives.",
      },
      {
        number: "03",
        title: "Monitor & Hunt",
        desc: "24/7/365 analyst monitoring, proactive threat hunting, and real-time alert investigation.",
      },
      {
        number: "04",
        title: "Respond & Report",
        desc: "Rapid incident response, containment actions, and monthly KPI reporting to stakeholders.",
      },
    ],
    features: [
      "24/7/365 security monitoring and alerting",
      "Threat detection and investigation",
      "Incident response and containment",
      "Proactive threat hunting",
      "Security event analysis and correlation (SIEM)",
      "Endpoint protection monitoring (EDR)",
      "Network security monitoring",
      "Vulnerability scanning and tracking",
      "Compliance monitoring and reporting",
      "Monthly security metrics and board reporting",
    ],
    industries: ["All Enterprises", "Financial Services", "Healthcare", "Government & Defence", "Critical Infrastructure", "Regulated Industries"],
    caseStudy: {
      company: "NorthBridge Credit Union",
      industry: "Financial Services",
      metric: "11-minute average threat detection",
      desc: "A regional credit union with no security team achieved 11-minute average threat detection time and passed their regulatory security audit with zero findings — powered entirely by LogicBevers' managed SOC.",
    },
    testimonial: {
      name: "Christine H.",
      role: "CIO",
      company: "NorthBridge Credit Union",
      quote: "We went from having no security monitoring to having a world-class SOC overnight. Our regulators were impressed. Our board finally sleeps at night.",
    },
    metaTitle: "Managed SOC Services | 24/7 Security Monitoring & Threat Detection",
    metaDesc: "Managed Security Operations Center with 24/7 threat detection, SIEM monitoring, and rapid incident response. Enterprise-grade security without the enterprise price tag.",
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation Consulting",
    shortDesc: "Strategic roadmaps to modernise your technology stack, optimise processes, and accelerate digital adoption.",
    heroSubtitle:
      "Digital transformation fails 70% of the time without the right strategy. We build the roadmap, align your executives, manage the change, and measure every outcome.",
    icon: "Compass",
    painPoints: [
      {
        title: "No Clear Digital Roadmap",
        desc: "Technology initiatives happen in silos without a coherent strategy, wasting budget and creating fragmentation.",
      },
      {
        title: "Legacy Systems Blocking Growth",
        desc: "Outdated infrastructure and applications prevent adoption of modern tools and competitive capabilities.",
      },
      {
        title: "Change Management Failures",
        desc: "70% of digital transformation initiatives fail due to poor change management and executive misalignment.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Current State Assessment",
        desc: "Evaluate your technology landscape, business processes, and competitive position.",
      },
      {
        number: "02",
        title: "Strategy & Roadmap",
        desc: "Build a phased digital transformation roadmap aligned to business outcomes, not just technology.",
      },
      {
        number: "03",
        title: "Implementation Governance",
        desc: "Oversee execution, manage vendors, and ensure delivery against KPIs across every initiative.",
      },
      {
        number: "04",
        title: "Change & Adoption",
        desc: "Manage organisational change, training, and adoption to ensure technology delivers its value.",
      },
    ],
    features: [
      "Digital strategy and roadmap development",
      "Business process assessment and optimisation",
      "Legacy system modernisation planning",
      "Cloud migration strategy",
      "AI and automation opportunity identification",
      "Technology vendor evaluation and selection",
      "Organisational change management",
      "Training and adoption programmes",
      "Implementation governance and oversight",
      "Competitive analysis and benchmarking",
    ],
    industries: ["Traditional & Legacy Businesses", "Financial Services", "Manufacturing", "Government", "Healthcare", "Mid-Market Growth Companies"],
    caseStudy: {
      company: "Cascade Manufacturing",
      industry: "Manufacturing",
      metric: "35% productivity increase in 18 months",
      desc: "A 400-person manufacturer replaced 3 legacy ERPs, migrated to cloud, and implemented AI-powered quality control — achieving a 35% productivity increase across their 3 plants in 18 months.",
    },
    testimonial: {
      name: "Robert F.",
      role: "CEO",
      company: "Cascade Manufacturing",
      quote: "LogicBevers gave us a roadmap that made sense — business outcomes first, technology second. We knew exactly what we were building and why at every stage.",
    },
    metaTitle: "Digital Transformation Consulting | Technology Modernisation | LogicBevers",
    metaDesc: "Strategic digital transformation consulting. Technology roadmaps, legacy modernisation, cloud migration, AI adoption, and change management for SMBs.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
