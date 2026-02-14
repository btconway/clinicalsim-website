import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SolutionCard } from "@/components/solution-card"
import { StatHighlight } from "@/components/stat-highlight"
import { FeatureCard } from "@/components/feature-card"
import { SectionDivider } from "@/components/section-divider"
import { getAllSolutions } from "@/lib/solutions"
import { BookOpen, TrendingUp, BarChart3 } from "lucide-react"

export default function SolutionsPage() {
  const solutions = getAllSolutions()

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 -z-10" />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light shimmer leading-loose pb-3 mb-6 md:mb-8">
            Close the Gap Between Training and Practice
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-4 max-w-3xl mx-auto">
            Critical clinical conversations — with <span className="text-warm font-medium">dedicated billing codes and proven outcomes</span> — aren&apos;t happening at scale because providers lack the training and confidence to initiate them.
          </p>
          <p className="text-base md:text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto">
            ClinicalSim solves the bottleneck. The bottleneck is training. The product is training.
          </p>
        </div>
      </section>

      <SectionDivider variant="diagonal-down" color="white" />

      {/* The Argument */}
      <section className="px-6 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-6">
            The <span className="text-warm font-medium">untrained conversation</span> problem
          </h2>
          <div className="space-y-4 text-lg text-gray-600 font-light leading-relaxed mb-12">
            <p>
              There are clinical conversations that hospitals should be having — conversations with dedicated CPT codes, clear reimbursement pathways, and proven outcome improvements — that simply aren&apos;t happening at scale.
            </p>
            <p>
              The reason isn&apos;t lack of time or patient demand. It&apos;s that providers have never practiced these conversations. They lack the confidence and skill to initiate, navigate, and bill for them consistently.
            </p>
            <p>
              The conversations below are just a starting point — each represents a conversation where better preparation drives better outcomes <span className="text-warm font-medium">and measurable financial impact</span>. ClinicalSim&apos;s platform is built to scale across every evidence-based clinical conversation where training is the bottleneck.
            </p>
          </div>

          {/* Aggregate revenue projection */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-warm/20 p-8 text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
              Combined annual opportunity — initial areas alone
            </p>
            <div className="font-mono font-bold text-4xl md:text-5xl lg:text-6xl text-warm mb-3">
              $1.5M+
            </div>
            <p className="text-lg text-gray-700 font-light max-w-lg mx-auto">
              in annual value from conversations that should already be happening — including cost savings, avoided ICU days, and reimbursable care — for a 75-PCP health system
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <StatHighlight
              value="40%"
              label="of malpractice claims driven by communication failures"
              source="CRICO/Candello"
              variant="warm"
            />
            <StatHighlight
              value="$1.7B"
              label="annual malpractice costs from communication breakdowns"
              source="CRICO/Harvard"
              variant="navy"
            />
            <StatHighlight
              value="<2hrs"
              label="of formal communication training in most residency programs"
              source="Medical education surveys"
              variant="warm"
            />
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="slate" />

      {/* Solution Cards */}
      <section className="px-6 py-12 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Starting with the conversations that <span className="text-warm font-medium">matter most</span>.
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              There are hundreds of clinical conversations where better training drives better outcomes. These are where we&apos;re starting — high-value conversations with clear evidence gaps and measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.slug}
                icon={solution.icon}
                title={solution.shortTitle}
                description={solution.description}
                keyStat={solution.revenueStats[0].value}
                keyStatLabel={solution.revenueStats[0].label}
                href={`/solutions/${solution.slug}`}
                variant={solution.colorVariant}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal-up" color="white" />

      {/* Cross-cutting Value */}
      <section className="px-6 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Why ClinicalSim
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={BookOpen}
              title="Evidence-Based"
              description="The only AI communication platform backed by a published randomized controlled trial with blinded evaluation using validated assessment tools."
              variant="warm"
              expandOnHover
            />
            <FeatureCard
              icon={TrendingUp}
              title="Scalable"
              description="No scheduling, no actors, no sim center booking. Deploy training across every department from a single platform — without scaling costs."
              variant="default"
              expandOnHover
            />
            <FeatureCard
              icon={BarChart3}
              title="Measurable"
              description="Structured feedback using validated frameworks. Track provider progress, identify gaps, and demonstrate ROI to hospital leadership."
              variant="navy"
              expandOnHover
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 md:py-20 bg-gradient-to-br from-navy via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Ready to close the training gap?
          </h2>
          <p className="text-lg md:text-xl font-light mb-8 text-blue-100">
            See how ClinicalSim helps your providers master the conversations that improve patient outcomes — and your bottom line.
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
