import { getSolutionBySlug } from "@/lib/solutions"
import { SolutionPageLayout } from "@/components/solution-page-layout"
import { notFound } from "next/navigation"

export default function GoalsOfCarePage() {
  const solution = getSolutionBySlug("goals-of-care")
  if (!solution) return notFound()

  return <SolutionPageLayout solution={solution} />
}
