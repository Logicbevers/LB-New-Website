import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LogicBevers | Managed IT Services for Small Business",
    template: "%s | LogicBevers",
  },
  description:
    "Expert managed IT services, cybersecurity, and cloud solutions for small businesses. 24/7 support, AI automation, zero-trust security. Trusted by 150+ companies globally.",
  keywords: [
    "managed IT services",
    "cybersecurity for small business",
    "cloud solutions",
    "AI automation",
    "24/7 IT support",
    "multi-cloud management",
    "digital transformation",
  ],
  metadataBase: new URL("https://logicbevers.com"),
  alternates: {
    canonical: "https://logicbevers.com",
    languages: {
      "en": "https://logicbevers.com",
      "x-default": "https://logicbevers.com",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://logicbevers.com",
    siteName: "LogicBevers",
    title: "LogicBevers | Managed IT Services for Small Business",
    description:
      "Expert managed IT services, cybersecurity, and cloud solutions for small businesses. 24/7 support, AI automation. Trusted globally.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LogicBevers | Managed IT Services for Small Business",
    description:
      "Expert managed IT services, cybersecurity & cloud solutions for small businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LogicBevers",
  url: "https://logicbevers.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://logicbevers.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LogicBevers",
  url: "https://logicbevers.com",
  logo: "https://logicbevers.com/logo.png",
  image: "https://logicbevers.com/logo.png",
  description: "Expert managed IT services, cybersecurity, AI automation, and cloud solutions for small businesses worldwide.",
  telephone: "+91-86994-61996",
  email: "contact@logicbevers.com",
  foundingDate: "2020",
  priceRange: "$$",
  areaServed: ["US", "IN", "GB", "EU", "Global"],
  serviceType: [
    "Managed IT Services",
    "Cybersecurity",
    "Cloud Solutions",
    "AI Automation",
    "Zero Trust Security",
    "Compliance Audits",
  ],
  sameAs: [
    "https://linkedin.com/company/logic-bevers",
    "https://x.com/Logic_Bevers",
    "https://t.me/logicBevers",
  ],
  openingHours: "Mo-Fr 09:00-18:00",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-86994-61996",
    contactType: "customer service",
    email: "contact@logicbevers.com",
    availableLanguage: "English",
    contactOption: "TollFree",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LogicBevers",
  url: "https://logicbevers.com",
  logo: "https://logicbevers.com/logo.png",
  description:
    "Managed IT services, cybersecurity, and cloud solutions for small businesses globally.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-86994-61996",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://linkedin.com/company/logic-bevers",
    "https://x.com/Logic_Bevers",
    "https://t.me/logicBevers",
  ],
  areaServed: ["US", "IN", "GB", "EU"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
