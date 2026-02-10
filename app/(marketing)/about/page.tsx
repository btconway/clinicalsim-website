import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StatHighlight } from "@/components/stat-highlight"
import { EvidenceShowcase } from "@/components/evidence-showcase"
import { SectionDivider } from "@/components/section-divider"
import { CheckIcon } from "@/components/icons"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-center px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 -z-10" />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light shimmer mb-6">About ClinicalSim.ai</h1>
          <p className="text-xl text-gray-700 font-light leading-relaxed">
            Closing the gap between how physicians learn to communicate and what <span className="text-warm font-medium">patients actually need</span>.
          </p>
        </div>
      </section>

      <SectionDivider variant="diagonal-down" color="white" />

      {/* The Problem - Stats Highlight */}
      <section className="px-6 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-8 text-center">The Problem</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatHighlight
              value="40%"
              label="of malpractice claims involve communication failures"
              variant="warm"
            />
            <StatHighlight
              value="2-4"
              label="formal communication sessions across entire residency"
              variant="navy"
            />
            <StatHighlight
              value="$1.7B"
              label="in costs linked to communication breakdowns"
              variant="warm"
            />
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 space-y-6 shadow-lg">
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              The conversations that matter most — telling a parent their child is dying, disclosing a medical error, guiding a family through goals of care — are <span className="text-navy font-medium">low-frequency, high-stakes events</span>. Residents may encounter only 1-3 real end-of-life conversations during training.
            </p>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              Current methods can&apos;t close this gap: standardized patient encounters cost <span className="font-mono text-warm font-medium">$150-300</span> each, require scheduling and sim center booking, and don&apos;t scale to meet demand.
            </p>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              The ACGME requires residents to demonstrate interpersonal and communication skills as a core competency, and explicitly acknowledges that <span className="text-navy font-medium">on-the-job training without structured teaching is not sufficient</span>. But most programs still rely on ad-hoc methods like observation and role-modeling.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="blue" />

      {/* Our Approach */}
      <section className="px-6 py-12 md:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-8 text-center">Our Approach</h2>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl mb-8">
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-8">
              ClinicalSim.ai uses <span className="text-warm font-medium">AI voice simulation</span> to let clinicians practice difficult conversations on-demand — real-time spoken dialogue with AI patients, not text-based chat. Practice from any device, anytime, without scheduling actors or booking a sim center.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-navy flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-warm flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </span>
                  Scenario Library
                </h3>
                <ul className="space-y-3 text-gray-700 font-light pl-10">
                  <li className="flex items-start gap-3">
                    <span className="text-warm mt-1 text-sm">●</span>
                    Goals of care conversations
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm mt-1 text-sm">●</span>
                    End-of-life discussions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm mt-1 text-sm">●</span>
                    Breaking bad news
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm mt-1 text-sm">●</span>
                    Medical error disclosure
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm mt-1 text-sm">●</span>
                    Organ donation discussions
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
                    <CheckIcon className="w-5 h-5 text-white" />
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
                  <CheckIcon className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  Increased confidence and communication competence
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  Improved scores on validated assessment tools
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  Blinded evaluators confirmed skill improvements
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-medium text-navy mb-4">Learner Experience</h3>
              <ul className="space-y-3 text-gray-700 font-light">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  Reduced social anxiety during practice
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  High perceived utility and realism ratings
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
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
          </div>
        </div>
      </section>

      <SectionDivider variant="curve" color="slate" />

      {/* Our Vision */}
      <section className="px-6 py-12 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-8 text-center">Our Vision</h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl">
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
              We&apos;re working to make structured communication training the standard across all levels of medical education — from medical students to practicing physicians. By augmenting existing simulation programs with on-demand AI practice, we aim to ensure that <span className="text-warm font-medium">every clinician enters their most difficult conversations prepared, not just hopeful</span>. Better communication means better outcomes for patients, reduced risk for institutions, and greater confidence for the physicians who carry these conversations for the rest of their careers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 md:py-20 bg-gradient-to-br from-navy via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Interested in a pilot program?</h2>
          <p className="text-lg md:text-xl font-light mb-8 text-blue-100">
            We&apos;re partnering with academic medical centers to bring structured, scalable communication training to residency and fellowship programs.
          </p>
          <Link href="https://form.typeform.com/to/Zve4CKk2" target="_blank" rel="noopener noreferrer">
            <Button
              variant="warm-filled"
              size="xl"
            >
              Join the Waitlist
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
