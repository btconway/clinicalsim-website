import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Brain } from "lucide-react"

export default function ContactPage() {
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
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium border-b-2 border-blue-600 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Contact Hero Section */}
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <section className="relative bg-blue-600 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-6">Contact us</h1>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
                Interested in working together? Fill out some info and we will be in touch shortly. We can&apos;t wait to
                hear from you!
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Get in Touch</h3>
                  <p className="text-lg font-light">
                    Whether you&apos;re interested in joining our pilot program, have questions about our platform, or want
                    to explore partnership opportunities, we&apos;d love to hear from you.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Response Time</h3>
                  <p className="text-lg font-light">
                    We typically respond to all inquiries within 24-48 hours during business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/mzzrnbkk"
              method="POST"
              className="space-y-6"
            >
              {/* Name Fields */}
              <div>
                <Label htmlFor="name" className="text-white text-base font-normal mb-2 block">
                  Name (required)
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="bg-transparent border-white border-2 text-white placeholder:text-gray-300 focus:border-white focus:ring-0"
                    />
                  </div>
                  <div>
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="bg-transparent border-white border-2 text-white placeholder:text-gray-300 focus:border-white focus:ring-0"
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="text-white text-base font-normal mb-2 block">
                  Email (required)
                </Label>
                <Input
                  name="email"
                  type="email"
                  required
                  className="bg-transparent border-white border-2 text-white placeholder:text-gray-300 focus:border-white focus:ring-0"
                />
              </div>

              {/* Organization Field */}
              <div>
                <Label htmlFor="organization" className="text-white text-base font-normal mb-2 block">
                  Organization
                </Label>
                <Input
                  name="organization"
                  placeholder="Hospital, Medical School, etc."
                  className="bg-transparent border-white border-2 text-white placeholder:text-gray-300 focus:border-white focus:ring-0"
                />
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  name="newsletter"
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                />
                <Label htmlFor="newsletter" className="text-white text-base">
                  Sign up for news and updates
                </Label>
              </div>

              {/* Message Field */}
              <div>
                <Label htmlFor="message" className="text-white text-base font-normal mb-2 block">
                  Message (required)
                </Label>
                <Textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your interest in ClinicalSim.ai..."
                  required
                  className="bg-transparent border-white border-2 text-white placeholder:text-gray-300 focus:border-white focus:ring-0 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="bg-transparent border-white border-2 text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-normal">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

        {/* Additional Contact Information */}
        <section className="relative py-16 md:py-24 bg-gray-50/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Other Ways to Connect</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-600">Pilot Program</h3>
              <p className="text-gray-700 font-light">
                Interested in being part of our pilot program? We&apos;re looking for forward-thinking healthcare
                organizations to help shape the future of medical communication training.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-600">Partnerships</h3>
              <p className="text-gray-700 font-light">
                We&apos;re open to partnerships with medical schools, healthcare systems, and technology companies that share
                our vision for improving patient care through better communication.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-600">Research Collaboration</h3>
              <p className="text-gray-700 font-light">
                Are you a researcher in medical education or healthcare communication? We&apos;d love to explore
                opportunities for collaboration and knowledge sharing.
              </p>
            </div>
          </div>
        </div>
        </section>
      </main>
    </div>
  )
}
