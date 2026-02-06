import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light shimmer text-gray-900 mb-6">About ClinicalSim.ai</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Closing the gap between how physicians learn to communicate and what patients actually need.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-light text-gray-900">The Problem</h2>
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-6">
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Communication failures are now a factor in <strong className="font-medium">40% of all malpractice claims</strong>, linked to $1.7 billion in costs over five years. Yet the average resident receives just 2-4 formal communication simulation sessions across their entire training.
              </p>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                The conversations that matter most — telling a parent their child is dying, disclosing a medical error, guiding a family through goals of care — are low-frequency, high-stakes events. Residents may encounter only 1-3 real end-of-life conversations during training. Current methods can&apos;t close this gap: standardized patient encounters cost $150-300 each, require scheduling and sim center booking, and don&apos;t scale to meet demand.
              </p>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                The ACGME requires residents to demonstrate interpersonal and communication skills as a core competency, and explicitly acknowledges that on-the-job training without structured teaching is not sufficient. But most programs still rely on ad-hoc methods like observation and role-modeling.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-light text-gray-900">Our Approach</h2>
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-6">
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                ClinicalSim.ai uses AI voice simulation to let clinicians practice difficult conversations on-demand — real-time spoken dialogue with AI patients, not text-based chat. Practice from any device, anytime, without scheduling actors or booking a sim center.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-900">Scenario Library</h3>
                  <ul className="space-y-2 text-gray-700 font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                      Goals of care conversations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                      End-of-life discussions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                      Breaking bad news
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                      Medical error disclosure
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                      Organ donation discussions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                      Custom institution-specific scenarios
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-900">Platform Capabilities</h3>
                  <ul className="space-y-2 text-gray-700 font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                      Automated performance feedback
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                      Validated assessment frameworks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                      Full conversation transcripts
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                      Progress tracking over time
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                      Multi-language support
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                      24/7 access from any device
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Evidence */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-light text-gray-900">The Evidence</h2>
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-6">
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                ClinicalSim.ai is the only AI communication training platform with published randomized controlled trial data — placing it in the top tier of evidence quality for the entire medical education technology market.
              </p>
              <div className="bg-blue-50/80 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Pilot Study Design</h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  PICU fellows were randomized into two groups. All received didactic teaching. The intervention group practiced with the AI simulation before their standardized patient encounter; the control group received a standard reflection period. Groups then crossed over so all participants experienced the platform. All encounters were scored by blinded evaluators using validated checklist-style assessment tools.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Results</h3>
                <ul className="space-y-3 text-gray-700 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                    Clear increases in confidence and communication competence
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                    Improved scores on validated assessment tools scored by blinded evaluators
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                    Reduced social anxiety and cognitive load during practice
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1.5 text-xs">&#9679;</span>
                    High perceived utility and realism ratings from participants
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">What Learners Said</h3>
                <div className="space-y-4">
                  <blockquote className="border-l-4 border-blue-600 pl-4">
                    <p className="text-gray-700 font-light italic">
                      &ldquo;It was helpful to have time to think and reflect without feeling the pressure of a person across from you expecting a response.&rdquo;
                    </p>
                  </blockquote>
                  <blockquote className="border-l-4 border-blue-600 pl-4">
                    <p className="text-gray-700 font-light italic">
                      &ldquo;Helpful to practice responses... and choose phrasing of the responses.&rdquo;
                    </p>
                  </blockquote>
                  <blockquote className="border-l-4 border-blue-600 pl-4">
                    <p className="text-gray-700 font-light italic">
                      &ldquo;Practice/experience actually saying things.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Vision */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-light text-gray-900">Our Vision</h2>
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                We&apos;re working to make structured communication training the standard across all levels of medical education — from medical students to practicing physicians. By augmenting existing simulation programs with on-demand AI practice, we aim to ensure that every clinician enters their most difficult conversations prepared, not just hopeful. Better communication means better outcomes for patients, reduced risk for institutions, and greater confidence for the physicians who carry these conversations for the rest of their careers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/95 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-light text-gray-900 mb-4">Interested in a pilot program?</h2>
              <p className="text-lg text-gray-700 font-light mb-8">
                We&apos;re partnering with academic medical centers to bring structured, scalable communication training to residency and fellowship programs.
              </p>
              <Link href="https://form.typeform.com/to/Zve4CKk2" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 px-8 py-3 text-lg font-normal transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Join the Waitlist
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
