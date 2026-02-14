import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StatHighlight } from "@/components/stat-highlight"
import { EvidenceShowcase } from "@/components/evidence-showcase"
import { SectionDivider } from "@/components/section-divider"
import { AudienceCard } from "@/components/audience-card"
import { getAllAudiences } from "@/lib/audiences"
import { Check, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About ClinicalSim.ai — AI Medical Communication Training",
  description: "ClinicalSim.ai is an AI-powered voice simulation platform for high-stakes medical conversations. Built on research with PICU fellows, backed by a published randomized controlled trial.",
  openGraph: {
    title: "About ClinicalSim.ai",
    description: "AI-powered voice simulation for high-stakes medical conversations. Built on research, backed by a published RCT.",
    url: "https://clinicalsim.ai/about",
  },
  twitter: {
    title: "About ClinicalSim.ai",
    description: "AI-powered voice simulation for high-stakes medical conversations. Built on research, backed by a published RCT.",
  },
  alternates: {
    canonical: "https://clinicalsim.ai/about",
  },
}

export default function AboutPage() {
  const audiences = getAllAudiences()

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-center px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 -z-10" />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light shimmer mb-6">About ClinicalSim.ai</h1>
          <p className="text-xl text-gray-700 font-light leading-relaxed">
            Better patient outcomes. Lower institutional risk. New revenue from conversations that aren&apos;t happening yet. The gap between how clinicians learn to communicate and what the healthcare system needs has never been wider. <span className="text-warm font-medium">ClinicalSim closes that gap.</span>
          </p>
        </div>
      </section>

      <SectionDivider variant="diagonal-down" color="white" />

      {/* The Problem - Stats Highlight */}
      <section className="px-6 py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-8 text-center">The Problem</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatHighlight
              value="90%"
              label="of physicians lack confidence in goals-of-care conversations"
              variant="warm"
            />
            <StatHighlight
              value="<2hrs"
              label="of formal communication training across entire residency"
              variant="navy"
            />
            <StatHighlight
              value="40%"
              label="of malpractice claims involve communication failures"
              variant="warm"
            />
            <StatHighlight
              value="$1.5M+"
              label="in annual revenue opportunity from unbilled conversations"
              variant="success"
            />
          </div>

          <div className="bg-white/70 border border-gray-200 rounded-2xl p-8 space-y-6 shadow-lg">
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              Billable clinical conversations — advance care planning, cognitive assessments, goals of care — go unheld every day because providers lack the confidence to initiate them. Medicare reimburses ACP at <span className="font-mono text-warm font-medium">$87 per conversation</span> with no annual cap, yet fewer than 5% of eligible patients receive one. The gap isn&apos;t patient need. It&apos;s <span className="text-navy font-medium">provider readiness</span>.
            </p>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              The bottleneck is training. The average resident receives fewer than two hours of formal communication instruction across their entire residency. Standardized patient programs cost <span className="font-mono text-warm font-medium">$150-300</span> per encounter and can&apos;t scale to meet demand. Most programs still rely on ad-hoc observation and role-modeling — an approach the ACGME explicitly acknowledges <span className="text-navy font-medium">is not sufficient</span>.
            </p>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              The cost is concrete: communication failures drive 40% of malpractice claims, drag down HCAHPS scores tied to Medicare reimbursement, and leave <span className="font-mono text-warm font-medium">$1.5M+</span> in billable revenue on the table annually for a mid-size system. These aren&apos;t soft skills — they&apos;re <span className="text-navy font-medium">operational, financial, and clinical imperatives</span>.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="blue" />

      {/* Our Approach */}
      <section className="px-6 py-12 md:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-8 text-center">Our Approach</h2>

          <div className="bg-white/90 rounded-2xl p-8 md:p-10 shadow-xl mb-8">
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-4">
              ClinicalSim.ai uses <span className="text-warm font-medium">AI voice simulation</span> to let clinicians practice difficult conversations on-demand — real-time spoken dialogue with AI patients, not text-based chat. Practice from any device, anytime, without scheduling actors or booking a sim center.
            </p>
            <p className="text-lg text-navy font-medium mb-8">
              The bottleneck is training. The product is training.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-navy flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-warm flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </span>
                  Scenario Library
                </h3>
                <ul className="space-y-3 text-gray-700 font-light pl-10">
                  <li className="flex items-start gap-3">
                    <span className="text-warm mt-1 text-sm">●</span>
                    Advance care planning
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm mt-1 text-sm">●</span>
                    Goals of care conversations
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm mt-1 text-sm">●</span>
                    Cognitive assessments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm mt-1 text-sm">●</span>
                    Breaking bad news
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm mt-1 text-sm">●</span>
                    Menopause care
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm mt-1 text-sm">●</span>
                    Medical error disclosure
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm mt-1 text-sm">●</span>
                    Custom institution-specific scenarios
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-navy flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-success flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </span>
                  Platform Capabilities
                </h3>
                <ul className="space-y-3 text-gray-700 font-light pl-10">
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1 text-sm">●</span>
                    Automated performance feedback
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1 text-sm">●</span>
                    Validated assessment frameworks
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1 text-sm">●</span>
                    Full conversation transcripts
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1 text-sm">●</span>
                    Progress tracking over time
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1 text-sm">●</span>
                    Multi-language support
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1 text-sm">●</span>
                    24/7 access from any device
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal-up" color="white" />

      {/* The Evidence */}
      <section className="px-6 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-8 text-center">
            The <span className="text-warm">Evidence</span>
          </h2>

          <div className="mb-12">
            <EvidenceShowcase
              studyTitle="AI-Powered Simulation for Pediatric Critical Care Communication Training"
              journal="Academic Pediatrics"
              year="2024"
              summary="ClinicalSim.ai is the only AI communication training platform with published randomized controlled trial data — placing it in the top tier of evidence quality for the entire medical education technology market."
              link="/insights/pilot-study-results"
            />
          </div>

          {/* Results Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-success/10 to-emerald-50 border border-success/20 rounded-xl p-6">
              <h3 className="text-lg font-medium text-navy mb-4">Measured Improvements</h3>
              <ul className="space-y-3 text-gray-700 font-light">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  Increased confidence and communication competence
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  Improved scores on validated assessment tools
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  Blinded evaluators confirmed skill improvements
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-medium text-navy mb-4">Learner Experience</h3>
              <ul className="space-y-3 text-gray-700 font-light">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  Reduced social anxiety during practice
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  High perceived utility and realism ratings
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  Preferred for iterative practice
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonials - Pull-quote style */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light text-gray-900 text-center mb-8">What Learners Said</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <div className="absolute -left-4 -top-2 text-6xl text-warm/20 font-serif">&ldquo;</div>
                <blockquote className="relative pl-8 pt-4">
                  <p className="text-lg text-gray-800 font-light leading-relaxed mb-4">
                    It was helpful to have time to think and reflect without feeling the pressure of a person across from you expecting a response.
                  </p>
                  <cite className="text-sm text-gray-600 font-normal not-italic border-l-4 border-warm pl-4">
                    PICU Fellow
                  </cite>
                </blockquote>
              </div>

              <div className="relative">
                <div className="absolute -left-4 -top-2 text-6xl text-warm/20 font-serif">&ldquo;</div>
                <blockquote className="relative pl-8 pt-4">
                  <p className="text-lg text-gray-800 font-light leading-relaxed mb-4">
                    Helpful to practice responses... and choose phrasing of the responses.
                  </p>
                  <cite className="text-sm text-gray-600 font-normal not-italic border-l-4 border-warm pl-4">
                    PICU Fellow
                  </cite>
                </blockquote>
              </div>
            </div>

            <p className="text-center text-gray-600 font-light mt-8">
              Our pilot data comes from PICU fellows — and the platform is now expanding across specialties, from primary care to oncology, wherever difficult conversations happen.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="curve" color="blue" />

      {/* Who We Serve */}
      <section className="px-6 py-12 md:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-4 text-center">Who We Serve</h2>
          <p className="text-lg text-gray-600 font-light text-center mb-10 max-w-2xl mx-auto">
            ClinicalSim works for everyone involved in clinical communication — from the systems that deploy it, to the clinicians who use it, to the educators who build curricula around it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {audiences.map((audience) => (
              <AudienceCard
                key={audience.slug}
                icon={audience.icon}
                title={audience.shortTitle}
                subtitle={audience.subtitle}
                bullets={audience.cardBullets}
                href={`/audiences/${audience.slug}`}
                variant={audience.colorVariant}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/solutions"
              className="inline-flex items-center text-blue-600 font-medium hover:text-warm transition-colors group"
            >
              View our clinical solutions
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal-down" color="navy" />

      {/* CTA Section with Vision */}
      <section className="px-6 py-16 md:py-20 bg-gradient-to-br from-navy via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Ready to close the training gap?</h2>
          <p className="text-lg md:text-xl font-light mb-8 text-blue-100 max-w-3xl mx-auto">
            We&apos;re scaling structured communication training from PICU to every specialty — measurable impact for patients, institutions, and the clinicians who carry these conversations for the rest of their careers. <span className="text-warm font-medium">Every clinician enters their most difficult conversations prepared, not just hopeful.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                variant="warm-filled"
                size="xl"
              >
                Request a Pilot
              </Button>
            </Link>
            <Link href="https://form.typeform.com/to/Zve4CKk2" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="xl"
                className="border-white/40 text-white hover:bg-white/10"
              >
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
