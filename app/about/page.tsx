import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 md:px-12 md:py-6 bg-white/80 backdrop-blur-sm border-b border-white/20">
        <Link href="/" className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-light text-slate-800">
            ClinicalSim<span className="text-blue-600 shimmer">.ai</span>
          </span>
        </Link>
        <nav className="flex gap-4 md:gap-8">
          <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium border-b-2 border-blue-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* About Content */}
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-light shimmer text-gray-900 mb-6">About ClinicalSim.ai</h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Transforming medical education through innovative AI-powered communication simulation technology.
              </p>
            </div>

          {/* About Section */}
          <section>
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  ClinicalSim.ai leverages AI-driven just-in-time simulation to democratize access to high-stakes clinical training, enabling clinicians to practice complex conversations—such as end-of-life discussions and challenging disclosures—on-demand and without the logistical constraints of traditional standardized patient programs.
                </p>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  In a randomized pilot study with pediatric critical care fellows, participants who practiced with our AI chatbot demonstrated clear increases in confidence, communication competence, and perceived utility of simulation training compared to standard reflection alone, while reporting reduced social anxiety and cognitive load.
                </p>
              </CardContent>
            </Card>
          </section>


          {/* Vision Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-light text-gray-900">Our Vision</h2>
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  By integrating ClinicalSim.ai into undergraduate, graduate, and continuing professional development curricula, we aim to elevate patient care outcomes, strengthen clinician competence, and foster well-being across the healthcare workforce.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/95 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-light text-gray-900 mb-4">Ready to Transform Medical Communication?</h2>
                <p className="text-lg text-gray-700 font-light mb-8">
                  Join our waitlist to be among the first to experience the future of medical communication training.
                </p>
                <Link href="https://form.typeform.com/to/Zve4CKk2" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 px-8 py-3 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Started Today
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>
          </div>
        </div>
      </main>
    </div>
  )
}
