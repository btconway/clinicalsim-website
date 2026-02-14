import type { Metadata } from "next"
import { getAudienceBySlug } from "@/lib/audiences"
import { AudiencePageLayout } from "@/components/audience-page-layout"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "For Health System Leaders — Communication Training ROI",
  description: "ClinicalSim.ai helps health system leaders capture revenue from billable conversations, reduce $1.7B in communication-driven malpractice costs, and improve HCAHPS scores tied to Medicare reimbursement.",
  openGraph: {
    title: "ClinicalSim.ai for Health System Leaders",
    description: "Turn communication training into measurable ROI. Capture billable conversations, reduce malpractice exposure, improve HCAHPS scores.",
    url: "https://clinicalsim.ai/audiences/health-system-leaders",
  },
  twitter: {
    title: "ClinicalSim.ai for Health System Leaders",
    description: "Communication training ROI: revenue capture, malpractice reduction, HCAHPS improvement.",
  },
  alternates: {
    canonical: "https://clinicalsim.ai/audiences/health-system-leaders",
  },
}

export default function HealthSystemLeadersPage() {
  const audience = getAudienceBySlug("health-system-leaders")
  if (!audience) return notFound()

  return <AudiencePageLayout audience={audience} />
}
