import type { Metadata } from "next"
import { getSolutionBySlug } from "@/lib/solutions"
import { SolutionPageLayout } from "@/components/solution-page-layout"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Chronic Care Management Training — CCM Enrollment Simulation",
  description: "AI voice simulation for chronic care management enrollment conversations. 67% of Medicare beneficiaries qualify for CCM but only 3-5% are enrolled (ASPE, 2019). Train providers to confidently enroll patients in coordinated care — CPT 99490, 99491, 99437, 99439.",
  openGraph: {
    title: "Chronic Care Management Simulation — ClinicalSim.ai",
    description: "67% of Medicare beneficiaries qualify for chronic care coordination. Only 3-5% receive it. Train providers to have the enrollment conversation that changes that.",
    url: "https://clinicalsim.ai/solutions/chronic-care-management",
  },
  twitter: {
    title: "Chronic Care Management Simulation — ClinicalSim.ai",
    description: "AI voice simulation for CCM enrollment conversations. 67% qualify, 3-5% enrolled. The gap is the conversation.",
  },
  alternates: {
    canonical: "https://clinicalsim.ai/solutions/chronic-care-management",
  },
}

export default function ChronicCareManagementPage() {
  const solution = getSolutionBySlug("chronic-care-management")
  if (!solution) return notFound()

  return <SolutionPageLayout solution={solution} />
}
