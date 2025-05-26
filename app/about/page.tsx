import Link from "next/link"

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

          {/* Mission Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At ClinicalSim.ai, we believe that effective communication is the cornerstone of exceptional healthcare.
              Our mission is to revolutionize medical education by providing cutting-edge AI-powered simulation
              platforms that enable healthcare professionals to practice, refine, and master their communication skills
              in a safe, controlled environment.
            </p>
          </section>

          {/* Technology Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Technology</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our platform leverages advanced artificial intelligence and machine learning algorithms to create
              realistic, interactive patient scenarios. These simulations are grounded in extensive research and
              clinical best practices, ensuring that healthcare professionals receive training that directly translates
              to improved patient outcomes.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">AI-Powered Scenarios</h3>
                <p className="text-gray-700">
                  Dynamic patient interactions that adapt to user responses, providing personalized learning
                  experiences.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">Research-Driven Content</h3>
                <p className="text-gray-700">
                  All scenarios are developed based on peer-reviewed research and evidence-based communication
                  strategies.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">Real-Time Feedback</h3>
                <p className="text-gray-700">
                  Immediate, actionable feedback helps users identify areas for improvement and track their progress.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">Scalable Platform</h3>
                <p className="text-gray-700">
                  Designed to serve individual practitioners, medical schools, and large healthcare organizations.
                </p>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a future where every healthcare professional has access to world-class communication training,
              regardless of their location or resources. By democratizing access to high-quality simulation technology,
              we aim to improve patient care outcomes globally and build stronger, more empathetic healthcare
              communities.
            </p>
          </section>

          {/* Team Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ClinicalSim.ai is built by a diverse team of healthcare professionals, AI researchers, educational
              technologists, and software engineers. Our multidisciplinary approach ensures that our platform meets the
              real-world needs of healthcare providers while leveraging the latest advances in artificial intelligence
              and simulation technology.
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
