import type { Metadata } from "next"
import { getSolutionBySlug } from "@/lib/solutions"
import { SolutionPageLayout } from "@/components/solution-page-layout"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Menopause Care Training — AI Simulation for Women's Health Conversations",
  description: "AI voice simulation for menopause and midlife women's health conversations. Fewer than 1% of US physicians are certified menopause practitioners, and 69% of OB/GYN residencies have no menopause curriculum.",
  openGraph: {
    title: "Menopause Care Simulation — ClinicalSim.ai",
    description: "Train providers in menopause conversations. ~54M US women in menopause, fewer than 1% of providers certified to help.",
    url: "https://clinicalsim.ai/solutions/menopause-care",
  },
  twitter: {
    title: "Menopause Care Simulation — ClinicalSim.ai",
    description: "AI simulation for menopause care conversations. Close the training gap.",
  },
  alternates: {
    canonical: "https://clinicalsim.ai/solutions/menopause-care",
  },
}

export default function MenopauseCarePage() {
  const solution = getSolutionBySlug("menopause-care")
  if (!solution) return notFound()

  return <SolutionPageLayout solution={solution} />
}
