import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("incident-response");

export const metadata: Metadata = {
  title: service?.metaTitle,
  description: service?.metaDesc,
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDesc,
    type: "website",
    url: `https://logicbevers.com/services/${service?.slug}`,
    siteName: "LogicBevers",
    images: [
      {
        url: `https://logicbevers.com/api/og?name=${encodeURIComponent(service?.name ?? "")}&desc=${encodeURIComponent(service?.shortDesc ?? "")}&category=${encodeURIComponent(service?.name ?? "")}`,
        width: 1200,
        height: 630,
        alt: service?.metaTitle ?? "LogicBevers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: service?.metaTitle,
    description: service?.metaDesc,
  },
  alternates: { canonical: `https://logicbevers.com/services/incident-response` },
};

export default function IncidentResponsePage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
