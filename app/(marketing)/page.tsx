import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/feature-card"
import { StatHighlight } from "@/components/stat-highlight"
import { EvidenceShowcase } from "@/components/evidence-showcase"
import { AsymmetricGrid } from "@/components/asymmetric-grid"
import { SectionDivider } from "@/components/section-divider"
import { DemoVideoSection } from "@/components/demo-video-section"
import { BookOpenIcon, GraduationCapIcon, MicIcon, ClockIcon, BarChartIcon, DollarSignIcon } from "@/components/icons"

export default function HomePage() {
  const features = [
    {
      icon: BookOpenIcon,
      title: "Published Research",
      description: "The only AI communication platform backed by a randomized controlled trial with PICU fellows, with blinded evaluation using validated assessment tools.",
      variant: "warm" as const,
    },
    {
      icon: GraduationCapIcon,
      title: "ACGME Aligned",
      description: "Directly addresses Interpersonal and Communication Skills milestones required across every specialty, with structured assessment and progress tracking.",
      variant: "default" as const,
    },
    {
      icon: MicIcon,
      title: "Realistic Voice Practice",
      description: "Real-time spoken conversations with AI patients for goals of care, difficult disclosures, breaking bad news, and family meetings — not text-based chat.",
      variant: "default" as const,
    },
    {
      icon: ClockIcon,
      title: "On-Demand, 24/7",
      description: "No scheduling, no actors, no sim center booking. Practice from any device, anytime — including right before a real conversation.",
      variant: "default" as const,
    },
    {
      icon: BarChartIcon,
      title: "Structured Feedback",
      description: "Automated assessment scoring empathy, language sensitivity, and information delivery. Full transcripts and progress tracking using validated frameworks.",
      variant: "default" as const,
    },
    {
      icon: DollarSignIcon,
      title: "Scalable & Cost-Effective",
      description: "Traditional SP encounters cost $150-300 each. Scale communication training across your entire program without scaling costs.",
      variant: "success" as const,
    }
  ]

  const stats = [
    {
      value: "40%",
      label: "of malpractice claims involve communication failures",
      source: "CRICO/Candello 2025",
      variant: "warm" as const,
    },
    {
      value: "$1.7B",
      label: "in malpractice costs linked to communication breakdowns",
      source: "CRICO/Harvard",
      variant: "warm" as const,
    },
    {
      value: "2-4",
      label: "typical SP sessions a resident gets across their entire training",
      source: "Program survey data",
      variant: "navy" as const,
    },
    {
      value: "$150-300",
      label: "cost per traditional standardized patient encounter",
      source: "Industry benchmark",
      variant: "navy" as const,
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light shimmer leading-tight mb-6 md:mb-8">
            Practice the conversations that matter most.
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-4 max-w-3xl mx-auto">
            AI voice simulation for <span className="text-warm font-medium">high-stakes medical conversations</span> — goals of care, end-of-life discussions, difficult disclosures — on-demand, from any device.
          </p>

          <p className="text-base md:text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto">
            Backed by a published randomized controlled trial. The only platform of its kind with peer-reviewed evidence.
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

      {/* Problem Statement Section - Full-width with stats */}
      <section className="px-6 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-navy mb-4">
              The training gap is <span className="text-warm font-medium">measurable</span>.
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Communication failures drive malpractice claims, yet residents get minimal practice with the conversations that matter most.
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
              Built for the conversations physicians face but rarely get to practice.
            </p>
          </div>

          <AsymmetricGrid layout="mixed" gap="large">
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

      {/* Evidence Section - New prominent section */}
      <section className="px-6 py-12 md:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-navy mb-4">
              Backed by <span className="text-warm font-medium">rigorous evidence</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              The only AI communication platform with published, peer-reviewed research demonstrating effectiveness.
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
              <div className="absolute -left-4 -top-2 text-6xl text-warm/20 font-serif">&ldquo;</div>
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
              <div className="absolute -left-4 -top-2 text-6xl text-warm/20 font-serif">&ldquo;</div>
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

      {/* Final CTA Section */}
      <section className="px-6 py-16 md:py-20 bg-gradient-to-br from-navy via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Ready to transform communication training?
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
        </div>
      </section>
    </>
  )
}
