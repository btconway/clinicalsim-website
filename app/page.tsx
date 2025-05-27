import Link from "next/link"
import Image from "next/image"
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
      <header className="flex items-center justify-between px-6 py-6 md:px-12 bg-white/80 backdrop-blur-sm border-b border-white/20">
        <Link href="/" className="flex items-center">
          <Image
            src="/ClinicalSim.ai-logo.png"
            alt="ClinicalSim.ai"
            width={200}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        <nav className="flex gap-6 md:gap-8">
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
        <section className="relative flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center min-h-[80vh]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Pioneering the future of medical communication simulation with research-driven AI solutions.
            </h1>

            <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <p className="text-lg md:text-xl text-blue-600 font-medium">We are currently accepting applications</p>
              <p className="text-lg md:text-xl text-blue-600 font-medium">to trial our AI-Powered Communication</p>
              <p className="text-lg md:text-xl text-blue-600 font-medium">Simulation Platform.</p>
            </div>

            <p className="text-lg md:text-xl text-blue-600 font-medium mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">Join the waitlist below.</p>

            <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 px-8 py-3 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Join the Waitlist
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Medical Communication Training
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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
