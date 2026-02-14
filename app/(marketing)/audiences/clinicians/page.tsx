import { getAudienceBySlug } from "@/lib/audiences"
import { AudiencePageLayout } from "@/components/audience-page-layout"
import { notFound } from "next/navigation"

export default function CliniciansPage() {
  const audience = getAudienceBySlug("clinicians")
  if (!audience) return notFound()

  return <AudiencePageLayout audience={audience} />
}
