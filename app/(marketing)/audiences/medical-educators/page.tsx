import type { Metadata } from "next"
import { getAudienceBySlug } from "@/lib/audiences"
import { AudiencePageLayout } from "@/components/audience-page-layout"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "For Medical Educators — Meet ACGME Communication Requirements at Scale",
  description: "ClinicalSim.ai helps medical educators meet ACGME communication competency requirements at scale. The only AI platform backed by a published RCT with blinded evaluation using validated assessment tools.",
  openGraph: {
    title: "ClinicalSim.ai for Medical Educators",
    description: "Meet ACGME communication competency requirements at scale with evidence-based AI simulation.",
    url: "https://clinicalsim.ai/audiences/medical-educators",
  },
  twitter: {
    title: "ClinicalSim.ai for Medical Educators",
    description: "ACGME-aligned communication training at scale. Backed by a published RCT.",
  },
  alternates: {
    canonical: "https://clinicalsim.ai/audiences/medical-educators",
  },
}

export default function MedicalEducatorsPage() {
  const audience = getAudienceBySlug("medical-educators")
  if (!audience) return notFound()

  return <AudiencePageLayout audience={audience} />
}
