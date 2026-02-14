import { getAudienceBySlug } from "@/lib/audiences"
import { AudiencePageLayout } from "@/components/audience-page-layout"
import { notFound } from "next/navigation"

export default function HealthSystemLeadersPage() {
  const audience = getAudienceBySlug("health-system-leaders")
  if (!audience) return notFound()

  return <AudiencePageLayout audience={audience} />
}
