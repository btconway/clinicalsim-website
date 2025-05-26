import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-blue-600">
          ClinicalSim.ai
        </Link>
        <nav className="flex gap-6 md:gap-8">
          <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center min-h-[80vh]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-12">
            Pioneering the future of medical communication simulation with research-driven AI solutions.
          </h1>

          <div className="space-y-4 mb-12">
            <p className="text-lg md:text-xl text-blue-600 font-medium">We are currently accepting applications</p>
            <p className="text-lg md:text-xl text-blue-600 font-medium">to trial our AI-Powered Communication</p>
            <p className="text-lg md:text-xl text-blue-600 font-medium">Simulation Platform.</p>
          </div>

          <p className="text-lg md:text-xl text-blue-600 font-medium mb-12">Join the waitlist below.</p>

          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-medium"
            >
              Join the Waitlist
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
