import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { JsonLd } from "@/components/json-ld"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ClinicalSim.ai",
            url: "https://clinicalsim.ai",
            logo: "https://clinicalsim.ai/logo.svg",
            description:
              "AI-powered voice simulation platform for practicing high-stakes medical conversations. Among the first AI communication training platforms backed by a published randomized controlled trial.",
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ClinicalSim.ai",
            url: "https://clinicalsim.ai",
            description:
              "Practice the conversations that matter most. AI voice simulation for goals of care, advance care planning, cognitive assessments, and menopause care conversations.",
          },
        ]}
      />
      <SiteHeader />
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="relative">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
