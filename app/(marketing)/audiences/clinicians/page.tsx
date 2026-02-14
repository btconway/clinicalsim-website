import type { Metadata } from "next"
import { getAudienceBySlug } from "@/lib/audiences"
import { AudiencePageLayout } from "@/components/audience-page-layout"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "For Clinicians — Practice Difficult Conversations On-Demand",
  description: "Fewer than half of residents report confidence in goals-of-care conversations. ClinicalSim.ai provides unlimited, private, voice-based practice with AI patients — on your schedule, from any device.",
  openGraph: {
    title: "ClinicalSim.ai for Clinicians",
    description: "Practice difficult conversations on-demand. Voice-based AI simulation, private and available 24/7.",
    url: "https://clinicalsim.ai/audiences/clinicians",
  },
  twitter: {
    title: "ClinicalSim.ai for Clinicians",
    description: "Practice difficult conversations on-demand with AI voice simulation.",
  },
  alternates: {
    canonical: "https://clinicalsim.ai/audiences/clinicians",
  },
}

export default function CliniciansPage() {
  const audience = getAudienceBySlug("clinicians")
  if (!audience) return notFound()

  return <AudiencePageLayout audience={audience} />
}
