import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-blue-600">
          ClinicalSim.ai
        </Link>
        <nav className="flex gap-6 md:gap-8">
          <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium border-b-2 border-blue-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
            Contact
          </Link>
        </nav>
      </header>

      {/* About Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About ClinicalSim.ai</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transforming medical education through innovative AI-powered communication simulation technology.
            </p>
          </div>

          {/* About Section */}
          <section className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              ClinicalSim.ai leverages AI-driven just-in-time simulation to democratize access to high-stakes clinical training, enabling clinicians to practice complex conversations—such as end-of-life discussions and challenging disclosures—on-demand and without the logistical constraints of traditional standardized patient programs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              In a randomized pilot study with pediatric critical care fellows, participants who practiced with our AI chatbot demonstrated clear increases in confidence, communication competence, and perceived utility of simulation training compared to standard reflection alone, while reporting reduced social anxiety and cognitive load.
            </p>
          </section>

          {/* Team Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our multidisciplinary team combines leading experts in pediatric critical care, simulation education, and palliative care:
            </p>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <Image
                  src="/vinod_havalad.jpeg"
                  alt="Dr. Vinod Havalad"
                  width={80}
                  height={80}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Dr. Vinod Havalad, MD</h3>
                  <p className="text-gray-700">
                    Program Director of the Pediatric Critical Care Fellowship and Director of the Pediatric Simulation Program at Advocate Children's Hospital Park Ridge; board certified in Pediatrics and Pediatric Critical Care Medicine, faculty since 2012
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Image
                  src="/Gillian_brennan.jpg"
                  alt="Dr. Gillian Brennan"
                  width={80}
                  height={80}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Dr. Gillian Brennan, MBChB</h3>
                  <p className="text-gray-700">
                    Assistant Professor of Pediatrics and Neonatology at University of Chicago Comer Children's Hospital; board certified in Pediatrics and Neonatal–Perinatal Medicine, with a research focus on simulation-based medical education
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Image
                  src="/rissman lauren.jpeg"
                  alt="Dr. Lauren Rissman"
                  width={80}
                  height={80}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Dr. Lauren Rissman, MD</h3>
                  <p className="text-gray-700">
                    Pediatric Critical Care and Palliative Care physician at Advocate Children's Hospital; contributor of narrative medicine essays in JAMA exploring clinician communication and resilience; board certified in Pediatics, Pediatric Critical Care Medicine, and Palliative Care Medicine
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              By integrating ClinicalSim.ai into undergraduate, graduate, and continuing professional development curricula, we aim to elevate patient care outcomes, strengthen clinician competence, and foster well-being across the healthcare workforce.
            </p>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Medical Communication?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join our waitlist to be among the first to experience the future of medical communication training.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}
