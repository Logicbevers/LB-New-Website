import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
