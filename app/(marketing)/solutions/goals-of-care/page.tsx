import type { Metadata } from "next"
import { getSolutionBySlug } from "@/lib/solutions"
import { SolutionPageLayout } from "@/components/solution-page-layout"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Goals-of-Care & Serious Illness Conversation Training",
  description: "AI voice simulation for goals-of-care and serious illness conversations. Communication failures drive 66% of sentinel events and $1.7B in annual malpractice costs. Train the conversation that determines every downstream decision.",
  openGraph: {
    title: "Goals-of-Care Conversation Simulation — ClinicalSim.ai",
    description: "Train serious illness conversations that reduce ICU costs by $4,908 per admission and lower malpractice exposure.",
    url: "https://clinicalsim.ai/solutions/goals-of-care",
  },
  twitter: {
    title: "Goals-of-Care Conversation Simulation — ClinicalSim.ai",
    description: "AI simulation for serious illness conversations. Reduce ICU costs and malpractice risk.",
  },
  alternates: {
    canonical: "https://clinicalsim.ai/solutions/goals-of-care",
  },
}

export default function GoalsOfCarePage() {
  const solution = getSolutionBySlug("goals-of-care")
  if (!solution) return notFound()

  return <SolutionPageLayout solution={solution} />
}
