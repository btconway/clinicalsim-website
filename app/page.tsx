import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Shield, Zap, BookOpen, Target } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Simulations",
      description: "Advanced artificial intelligence creates realistic medical communication scenarios"
    },
    {
      icon: Users,
      title: "Interactive Training",
      description: "Practice with virtual patients in safe, controlled environments"
    },
    {
      icon: BookOpen,
      title: "Evidence-Based Learning",
      description: "Research-driven methodologies backed by clinical studies"
    },
    {
      icon: Target,
      title: "Precision Feedback",
      description: "Real-time analysis and personalized improvement recommendations"
    },
    {
      icon: Shield,
      title: "Research-Validated Training",
      description: "Evidence-based methodology proven to increase confidence and preparedness"
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "Cloud-based platform accessible anytime, anywhere"
    }
  ]

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
          <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <section className="relative flex flex-col items-center justify-center px-6 py-12 md:py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-light shimmer leading-tight mb-8 md:mb-12">
              Pioneering the future of medical communication simulation with research-driven AI solutions.
            </h1>

            <div className="mb-8">
              <p className="text-lg md:text-xl text-blue-600 font-light mb-6">
                We are currently accepting applications to trial our AI-Powered Communication Simulation Platform.
              </p>
              <p className="text-lg md:text-xl text-blue-600 font-light">Join the waitlist below.</p>
            </div>

            <div>
              <Link href="https://form.typeform.com/to/Zve4CKk2" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 px-8 py-3 text-lg font-normal transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Join the Waitlist
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative px-6 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Advanced Medical Communication Training
              </h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                Experience the next generation of medical education with our cutting-edge AI simulation platform
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
      </main>
    </div>
  )
}
