import { getSolutionBySlug } from "@/lib/solutions"
import { SolutionPageLayout } from "@/components/solution-page-layout"
import { notFound } from "next/navigation"

export default function CognitiveAssessmentsPage() {
  const solution = getSolutionBySlug("cognitive-assessments")
  if (!solution) return notFound()

  return <SolutionPageLayout solution={solution} />
}
