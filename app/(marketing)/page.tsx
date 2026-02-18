import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/feature-card"
import { StatHighlight } from "@/components/stat-highlight"
import { EvidenceShowcase } from "@/components/evidence-showcase"
import { AsymmetricGrid } from "@/components/asymmetric-grid"
import { SectionDivider } from "@/components/section-divider"
import { DemoVideoSection } from "@/components/demo-video-section"
import { AudienceCard } from "@/components/audience-card"
import { getAllAudiences } from "@/lib/audiences"
import { BookOpen, Heart, TrendingUp, Mic, Users, BarChart3, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Voice Simulation for Medical Communication Training",
  description: "ClinicalSim.ai is an AI-powered voice simulation platform for the medical conversations patients need but aren't getting — chronic care management, advance care planning, behavioral health, cognitive assessments. 95% of eligible patients don't receive coordinated care. The bottleneck is provider confidence.",
  openGraph: {
    title: "ClinicalSim.ai — Practice the Conversations That Matter Most",
    description: "AI voice simulation for conversations patients need most. 95% of eligible patients don't receive coordinated chronic care. The bottleneck is provider confidence — and the solution is practice.",
    url: "https://clinicalsim.ai",
  },
  twitter: {
    title: "ClinicalSim.ai — Practice the Conversations That Matter Most",
    description: "AI voice simulation for medical conversations patients need but aren't getting. Backed by a published RCT.",
  },
  alternates: {
    canonical: "https://clinicalsim.ai",
  },
}

export default function HomePage() {
  const audiences = getAllAudiences()

  const features = [
    {
      icon: Heart,
      title: "Better Conversations, Better Care",
      description: "Patients with documented goals-of-care conversations see 68% fewer ICU admissions and higher rates of goal-concordant care. Training is the bottleneck.",
      variant: "warm" as const,
    },
    {
      icon: TrendingUp,
      title: "Close the Care Gap — and Get Reimbursed",
      description: "Chronic care management, wellness visits, behavioral health, advance care planning — Medicare created billing codes to make these conversations happen. When providers are trained, patients get better care and health systems capture the value.",
      variant: "success" as const,
    },
    {
      icon: BookOpen,
      title: "Evidence-Based",
      description: "Among the first AI communication platforms backed by a randomized controlled trial with blinded evaluation using validated assessment tools (ACGME milestones, Calgary-Cambridge).",
      variant: "warm" as const,
    },
    {
      icon: Mic,
      title: "Voice-Based, Not Chat",
      description: "Real-time spoken conversations with AI patients — goals of care, diagnosis disclosure, family meetings — because the real thing isn't typed.",
      variant: "default" as const,
    },
    {
      icon: Users,
      title: "Scale Across Your System",
      description: "Deploy training across every department and provider level without scheduling, logistics, or linear cost scaling. From 10 providers to 1,000.",
      variant: "default" as const,
    },
    {
      icon: BarChart3,
      title: "Measurable Impact",
      description: "Track provider confidence, conversation quality, and billing patterns over time. Demonstrate ROI to leadership with structured data, not anecdotes.",
      variant: "default" as const,
    }
  ]

  const stats = [
    {
      value: "95%",
      label: "of patients who qualify for chronic care coordination aren't receiving it",
      source: "ASPE, 2019",
      variant: "warm" as const,
    },
    {
      value: "2.3%",
      label: "median utilization of Medicare prevention and care coordination services",
      source: "Agarwal et al., Annals of Internal Medicine, 2022",
      variant: "navy" as const,
    },
    {
      value: ">99%",
      label: "of patients eligible for behavioral health integration aren't getting it",
      source: "CMS utilization data, 2017-2018",
      variant: "warm" as const,
    },
    {
      value: "50%+",
      label: "of cognitive impairment cases in primary care go undiagnosed",
      source: "JPAD, 2024",
      variant: "success" as const,
    }
  ]

  return (
    <>
      {/* Hero Section - Enhanced with diagonal background and new CTA */}
      <section className="relative flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center">
        {/* Diagonal Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 -z-10" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light shimmer leading-loose pb-3 mb-6 md:mb-8">
            Practice the conversations that matter most.
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-4 max-w-3xl mx-auto">
            AI voice simulation for <span className="text-warm font-medium">conversations patients need most</span> — chronic care enrollment, advance care planning, behavioral health, cognitive assessments — on-demand, from any device.
          </p>

          <p className="text-base md:text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto">
            Built on research with PICU fellows. Designed for conversations clinicians face but rarely get to practice.
          </p>

          <div className="space-y-3">
            <Link href="https://form.typeform.com/to/Zve4CKk2" target="_blank" rel="noopener noreferrer">
              <Button
                variant="gradient-primary"
                size="xl"
              >
                Join the Waitlist
              </Button>
            </Link>
            <p className="text-sm text-gray-500 font-light">
              We&apos;re running pilot programs with academic medical centers.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal-down" color="white" />

      {/* Definition Block — GEO citation magnet */}
      <section className="px-6 py-10 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-warm pl-6 md:pl-8">
            <h2 className="text-xl md:text-2xl font-light text-navy mb-3">What is ClinicalSim.ai?</h2>
            <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed mb-3">
              ClinicalSim.ai is an AI-powered voice simulation platform for conversations patients need but aren&apos;t getting — chronic care enrollment, advance care planning, behavioral health screening, cognitive assessments — on-demand from any device. It is among the first AI communication training platforms backed by a published randomized controlled trial with blinded evaluation using validated assessment tools.
            </p>
            <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
              The platform addresses the <span className="text-warm font-medium">provider confidence gap</span>. Research shows the barrier to these conversations is not knowledge, not time, and not patient demand — it&apos;s that providers have never practiced them in a structured setting. When providers are trained, patients get the care they need and the system works the way it was designed to.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section - Full-width with stats */}
      <section className="px-6 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-navy mb-4">
              The confidence gap is <span className="text-warm font-medium">real</span>.
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Clinicians want to have these conversations well. They just never get to practice. The result is avoidable suffering, missed diagnoses, and revenue that never materializes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <StatHighlight
                key={index}
                value={stat.value}
                label={stat.label}
                source={stat.source}
                variant={stat.variant}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="slate" />

      {/* Demo Video Section */}
      <section className="px-6 py-12 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-5xl mx-auto">
          <DemoVideoSection
            title="See ClinicalSim.ai in Action"
            description="Watch how learners practice difficult conversations with AI-powered simulation"
            youtubeUrl="https://www.youtube.com/embed/HRFtR44QlQk?si=dwv7JdCHPUtWSQIL&amp;start=97"
          />
        </div>
      </section>

      <SectionDivider variant="diagonal-up" color="white" />

      {/* Features Section - Asymmetric Grid */}
      <section className="px-6 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Why ClinicalSim.ai
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Built for the conversations clinicians face but rarely get to practice.
            </p>
          </div>

          <AsymmetricGrid layout="staggered" gap="large">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variant={feature.variant}
                asymmetric
                expandOnHover
              />
            ))}
          </AsymmetricGrid>
        </div>
      </section>

      <SectionDivider variant="curve" color="blue" />

      {/* Evidence Section - Hidden until study is published
      <section className="px-6 py-12 md:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-navy mb-4">
              Backed by <span className="text-warm font-medium">rigorous evidence</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Among the first AI communication platforms with published, peer-reviewed research demonstrating effectiveness.
            </p>
          </div>

          <EvidenceShowcase
            studyTitle="AI-Powered Simulation for Pediatric Critical Care Communication Training"
            journal="Academic Pediatrics"
            year="2024"
            summary="Randomized controlled trial with PICU fellows demonstrating significant improvements in communication skills through AI voice simulation, with blinded evaluation using validated assessment tools (ACGME milestones, Calgary-Cambridge framework)."
            link="/insights/ai-simulation-rct-evidence"
          />
        </div>
      </section>
      */}

      <SectionDivider variant="diagonal-down" color="white" />

      {/* Testimonials Section - Pull-quote style (not cards) */}
      <section className="px-6 py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              What learners are saying
            </h2>
            <p className="text-base text-gray-500 font-light">From our pilot study with PICU fellows</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="relative">
              <div className="absolute -left-2 md:-left-4 -top-2 text-6xl text-warm/20 font-serif">&ldquo;</div>
              <blockquote className="relative pl-8 pt-4">
                <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-4">
                  It was helpful to have time to think and reflect without feeling the pressure of a person across from you expecting a response.
                </p>
                <cite className="text-base text-gray-600 font-normal not-italic border-l-4 border-warm pl-4">
                  PICU Fellow, Pilot Study Participant
                </cite>
              </blockquote>
            </div>

            <div className="relative">
              <div className="absolute -left-2 md:-left-4 -top-2 text-6xl text-warm/20 font-serif">&ldquo;</div>
              <blockquote className="relative pl-8 pt-4">
                <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-4">
                  Helpful to practice responses... and choose phrasing of the responses.
                </p>
                <cite className="text-base text-gray-600 font-normal not-italic border-l-4 border-warm pl-4">
                  PICU Fellow, Pilot Study Participant
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Selector */}
      <section className="px-6 py-12 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-navy mb-4">
              Built for how you think about <span className="text-warm font-medium">training</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Different roles. Different priorities. Same platform.
            </p>
          </div>

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

          <div className="text-center mt-8">
            <Link href="/solutions" className="inline-flex items-center text-blue-600 font-medium hover:text-warm transition-colors">
              View all clinical solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal-down" color="navy" />

      {/* Final CTA Section */}
      <section className="px-6 py-16 md:py-20 bg-gradient-to-br from-navy via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Ready to close the training gap?
          </h2>
          <p className="text-lg md:text-xl font-light mb-8 text-blue-100">
            Join academic medical centers piloting ClinicalSim.ai
          </p>
          <Link href="https://form.typeform.com/to/Zve4CKk2" target="_blank" rel="noopener noreferrer">
            <Button
              variant="warm-filled"
              size="xl"
            >
              Request Early Access
            </Button>
          </Link>
          <p className="mt-4 text-sm text-blue-200 font-light">
            Are you a researcher?{" "}
            <Link href="/research" className="text-warm hover:text-white font-medium transition-colors inline-flex items-center">
              Apply to collaborate
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
