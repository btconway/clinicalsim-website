import type { Metadata } from "next"
import { getSolutionBySlug } from "@/lib/solutions"
import { SolutionPageLayout } from "@/components/solution-page-layout"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Advance Care Planning Training — CPT 99497/99498 Simulation",
  description: "AI voice simulation for advance care planning conversations. Medicare reimburses ACP at $87 per conversation (CPT 99497) with no annual cap, yet fewer than 5% of eligible patients receive one. Train providers to bill confidently.",
  openGraph: {
    title: "Advance Care Planning Simulation — ClinicalSim.ai",
    description: "Train providers to confidently initiate and bill for ACP conversations. Medicare reimburses $87 per conversation with no annual cap.",
    url: "https://clinicalsim.ai/solutions/advance-care-planning",
  },
  twitter: {
    title: "Advance Care Planning Simulation — ClinicalSim.ai",
    description: "AI voice simulation for ACP conversations. CPT 99497/99498 training.",
  },
  alternates: {
    canonical: "https://clinicalsim.ai/solutions/advance-care-planning",
  },
}

export default function AdvanceCarePlanningPage() {
  const solution = getSolutionBySlug("advance-care-planning")
  if (!solution) return notFound()

  return <SolutionPageLayout solution={solution} />
}
