import type { Metadata } from "next"
import { getSolutionBySlug } from "@/lib/solutions"
import { SolutionPageLayout } from "@/components/solution-page-layout"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Cognitive Assessment Training — CPT 99483 Simulation",
  description: "AI voice simulation for cognitive assessment and dementia diagnosis conversations. Medicare reimburses CPT 99483 at ~$282, yet over 50% of cognitive impairment cases in primary care go undiagnosed. Train the conversation providers avoid.",
  openGraph: {
    title: "Cognitive Assessment Simulation — ClinicalSim.ai",
    description: "Train providers to conduct cognitive assessments and deliver dementia diagnoses. CPT 99483 reimburses ~$282 per visit.",
    url: "https://clinicalsim.ai/solutions/cognitive-assessments",
  },
  twitter: {
    title: "Cognitive Assessment Simulation — ClinicalSim.ai",
    description: "AI simulation for cognitive assessment conversations. CPT 99483 training.",
  },
  alternates: {
    canonical: "https://clinicalsim.ai/solutions/cognitive-assessments",
  },
}

export default function CognitiveAssessmentsPage() {
  const solution = getSolutionBySlug("cognitive-assessments")
  if (!solution) return notFound()

  return <SolutionPageLayout solution={solution} />
}
