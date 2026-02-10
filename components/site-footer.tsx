import Link from "next/link"
import { BrainIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-white/20 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <BrainIcon className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-light text-slate-800">
                ClinicalSim<span className="text-blue-600">.ai</span>
              </span>
            </Link>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              AI-powered voice simulation for high-stakes medical conversations. Backed by published research.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Navigate</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 font-light transition-colors">
                About
              </Link>
              <Link href="/insights" className="text-sm text-gray-600 hover:text-gray-900 font-light transition-colors">
                Insights
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 font-light transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Get Started</h3>
            <p className="text-sm text-gray-600 font-light">
              Running pilot programs with academic medical centers.
            </p>
            <Link href="https://form.typeform.com/to/Zve4CKk2" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500 font-light">
            &copy; {new Date().getFullYear()} ClinicalSim.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
