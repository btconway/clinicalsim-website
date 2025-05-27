import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 md:px-12 md:py-6 bg-white/80 backdrop-blur-sm border-b border-white/20">
        <Link href="/" className="flex items-center">
          <Image
            src="/ClinicalSim.ai-logo.webp"
            alt="ClinicalSim.ai"
            width={200}
            height={60}
            className="h-8 md:h-12 w-auto"
            priority
          />
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
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1 className="text-4xl md:text-5xl font-light shimmer text-gray-900 mb-6">About ClinicalSim.ai</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforming medical education through innovative AI-powered communication simulation technology.
              </p>
            </div>

          {/* About Section */}
          <section className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  ClinicalSim.ai leverages AI-driven just-in-time simulation to democratize access to high-stakes clinical training, enabling clinicians to practice complex conversations—such as end-of-life discussions and challenging disclosures—on-demand and without the logistical constraints of traditional standardized patient programs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In a randomized pilot study with pediatric critical care fellows, participants who practiced with our AI chatbot demonstrated clear increases in confidence, communication competence, and perceived utility of simulation training compared to standard reflection alone, while reporting reduced social anxiety and cognitive load.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Team Section */}
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <h2 className="text-3xl font-light text-gray-900">Our Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our multidisciplinary team combines leading experts in pediatric critical care, simulation education, and palliative care:
            </p>
            <div className="space-y-6">
              <Card className="group bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-6 items-start">
                    <Image
                      src="/vinod_havalad.webp"
                      alt="Dr. Vinod Havalad"
                      width={80}
                      height={80}
                      className="rounded-full object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-blue-600 group-hover:text-indigo-600 transition-colors">Dr. Vinod Havalad, MD</h3>
                      <p className="text-gray-700">
                        Program Director of the Pediatric Critical Care Fellowship and Director of the Pediatric Simulation Program at Advocate Children's Hospital Park Ridge; board certified in Pediatrics and Pediatric Critical Care Medicine, faculty since 2012
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-6 items-start">
                    <Image
                      src="/Gillian_brennan.webp"
                      alt="Dr. Gillian Brennan"
                      width={80}
                      height={80}
                      className="rounded-full object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-blue-600 group-hover:text-indigo-600 transition-colors">Dr. Gillian Brennan, MBChB</h3>
                      <p className="text-gray-700">
                        Assistant Professor of Pediatrics and Neonatology at University of Chicago Comer Children's Hospital; board certified in Pediatrics and Neonatal–Perinatal Medicine, with a research focus on simulation-based medical education
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-6 items-start">
                    <Image
                      src="/rissman lauren.webp"
                      alt="Dr. Lauren Rissman"
                      width={80}
                      height={80}
                      className="rounded-full object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-blue-600 group-hover:text-indigo-600 transition-colors">Dr. Lauren Rissman, MD</h3>
                      <p className="text-gray-700">
                        Pediatric Critical Care and Palliative Care physician at Advocate Children's Hospital; contributor of narrative medicine essays in JAMA exploring clinician communication and resilience; board certified in Pediatics, Pediatric Critical Care Medicine, and Palliative Care Medicine
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Vision Section */}
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
            <h2 className="text-3xl font-light text-gray-900">Our Vision</h2>
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  By integrating ClinicalSim.ai into undergraduate, graduate, and continuing professional development curricula, we aim to elevate patient care outcomes, strengthen clinician competence, and foster well-being across the healthcare workforce.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-1000">
            <Card className="bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/95 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-light text-gray-900 mb-4">Ready to Transform Medical Communication?</h2>
                <p className="text-lg text-gray-700 mb-8">
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
