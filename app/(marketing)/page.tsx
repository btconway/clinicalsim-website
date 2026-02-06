import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, GraduationCap, Mic, Clock, BarChart3, DollarSign } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: "Published Research",
      description: "The only AI communication platform backed by a randomized controlled trial with PICU fellows, with blinded evaluation using validated assessment tools."
    },
    {
      icon: GraduationCap,
      title: "ACGME Aligned",
      description: "Directly addresses Interpersonal and Communication Skills milestones required across every specialty, with structured assessment and progress tracking."
    },
    {
      icon: Mic,
      title: "Realistic Voice Practice",
      description: "Real-time spoken conversations with AI patients for goals of care, difficult disclosures, breaking bad news, and family meetings — not text-based chat."
    },
    {
      icon: Clock,
      title: "On-Demand, 24/7",
      description: "No scheduling, no actors, no sim center booking. Practice from any device, anytime — including right before a real conversation."
    },
    {
      icon: BarChart3,
      title: "Structured Feedback",
      description: "Automated assessment scoring empathy, language sensitivity, and information delivery. Full transcripts and progress tracking using validated frameworks."
    },
    {
      icon: DollarSign,
      title: "Scalable & Cost-Effective",
      description: "Traditional SP encounters cost $150-300 each. Scale communication training across your entire program without scaling costs."
    }
  ]

  const stats = [
    {
      value: "40%",
      label: "of malpractice claims involve communication failures",
      source: "CRICO/Candello 2025"
    },
    {
      value: "$1.7B",
      label: "in malpractice costs linked to communication breakdowns",
      source: "CRICO/Harvard"
    },
    {
      value: "2-4",
      label: "typical SP sessions a resident gets across their entire training",
      source: "Program survey data"
    },
    {
      value: "$150-300",
      label: "cost per traditional standardized patient encounter",
      source: "Industry benchmark"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light shimmer leading-tight mb-6 md:mb-8">
            Practice the conversations that matter most.
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-4 max-w-3xl mx-auto">
            AI voice simulation for high-stakes medical conversations — goals of care, end-of-life discussions, difficult disclosures — on-demand, from any device.
          </p>

          <p className="text-base md:text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto">
            Backed by a published randomized controlled trial. The only platform of its kind with peer-reviewed evidence.
          </p>

          <div className="space-y-3">
            <Link href="https://form.typeform.com/to/Zve4CKk2" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 px-8 py-3 text-lg font-normal transition-all duration-300 shadow-lg hover:shadow-xl"
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

      {/* Features Section */}
      <section className="px-6 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Why ClinicalSim.ai
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Built for the conversations physicians face but rarely get to practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              The training gap is measurable.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/95 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl md:text-5xl font-light text-blue-600 mb-3">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-700 font-light leading-relaxed mb-2">
                    {stat.label}
                  </p>
                  <p className="text-xs text-gray-400 font-light">
                    {stat.source}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
                  What learners are saying
                </h2>
                <p className="text-sm text-gray-500 font-light">From our pilot study with PICU fellows</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <blockquote className="border-l-4 border-blue-600 pl-6">
                  <p className="text-lg text-gray-700 font-light italic leading-relaxed mb-3">
                    &ldquo;It was helpful to have time to think and reflect without feeling the pressure of a person across from you expecting a response.&rdquo;
                  </p>
                  <cite className="text-sm text-gray-500 font-light not-italic">
                    &mdash; PICU Fellow, Pilot Study Participant
                  </cite>
                </blockquote>
                <blockquote className="border-l-4 border-blue-600 pl-6">
                  <p className="text-lg text-gray-700 font-light italic leading-relaxed mb-3">
                    &ldquo;Helpful to practice responses... and choose phrasing of the responses.&rdquo;
                  </p>
                  <cite className="text-sm text-gray-500 font-light not-italic">
                    &mdash; PICU Fellow, Pilot Study Participant
                  </cite>
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
