import { getSolutionBySlug } from "@/lib/solutions"
import { SolutionPageLayout } from "@/components/solution-page-layout"
import { notFound } from "next/navigation"

export default function AdvanceCarePlanningPage() {
  const solution = getSolutionBySlug("advance-care-planning")
  if (!solution) return notFound()

  return <SolutionPageLayout solution={solution} />
}
