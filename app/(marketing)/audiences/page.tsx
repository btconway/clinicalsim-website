import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AudienceCard } from "@/components/audience-card"
import { SectionDivider } from "@/components/section-divider"
import { getAllAudiences } from "@/lib/audiences"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Who We Serve — Health Systems, Clinicians & Medical Educators",
  description: "ClinicalSim.ai serves health system leaders seeking ROI from communication training, clinicians building confidence in difficult conversations, and medical educators meeting ACGME requirements at scale.",
  openGraph: {
    title: "Who ClinicalSim.ai Serves",
    description: "AI communication training for health system leaders, clinicians, and medical educators.",
    url: "https://clinicalsim.ai/audiences",
  },
  twitter: {
    title: "Who ClinicalSim.ai Serves",
    description: "AI communication training for health systems, clinicians, and educators.",
  },
  alternates: {
    canonical: "https://clinicalsim.ai/audiences",
  },
}

export default function AudiencesPage() {
  const audiences = getAllAudiences()

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 -z-10" />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light shimmer leading-loose pb-3 mb-6 md:mb-8">
            Built for How You Think About Training
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-4 max-w-3xl mx-auto">
            Different roles. Different priorities. <span className="text-warm font-medium">Same platform.</span>
          </p>
          <p className="text-base md:text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto">
            Whether you&apos;re focused on ROI, clinical confidence, or accreditation compliance — ClinicalSim delivers measurable results for your specific goals.
          </p>
        </div>
      </section>

      <SectionDivider variant="diagonal-down" color="white" />

      {/* Audience Cards */}
      <section className="px-6 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {audiences.map((audience) => (
              <AudienceCard
                key={audience.slug}
                icon={audience.icon}
                title={audience.title}
                subtitle={audience.subtitle}
                bullets={audience.cardBullets}
                href={`/audiences/${audience.slug}`}
                variant={audience.colorVariant}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="slate" />

      {/* Solutions Bridge */}
      <section className="px-6 py-12 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-4">
            Explore our clinical <span className="text-warm font-medium">solutions</span>
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            See the specific conversations ClinicalSim trains — each with dedicated billing codes, proven outcomes, and measurable impact.
          </p>
          <Link href="/solutions">
            <Button variant="warm-accent" size="lg">
              View Solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 md:py-20 bg-gradient-to-br from-navy via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Ready to see ClinicalSim in action?
          </h2>
          <p className="text-lg md:text-xl font-light mb-8 text-blue-100">
            Join academic medical centers piloting ClinicalSim.ai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="warm-filled" size="xl">
                Request a Pilot
              </Button>
            </Link>
            <Link href="https://form.typeform.com/to/Zve4CKk2" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-white/30 text-white bg-transparent hover:bg-white/10">
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
