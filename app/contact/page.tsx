import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/ClinicalSim.ai-logo.webp"
            alt="ClinicalSim.ai"
            width={200}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <nav className="flex gap-6 md:gap-8">
          <Link href="/about" className="text-gray-700 hover:text-gray-900 font-normal transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-normal border-b-2 border-blue-600 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Contact Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-6">Contact us</h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Interested in working together? Fill out some info and we will be in touch shortly. We can't wait to
                hear from you!
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Get in Touch</h3>
                  <p className="text-lg">
                    Whether you're interested in joining our pilot program, have questions about our platform, or want
                    to explore partnership opportunities, we'd love to hear from you.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Response Time</h3>
                  <p className="text-lg">
                    We typically respond to all inquiries within 24-48 hours during business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              {/* Name Fields */}
              <div>
                <Label htmlFor="name" className="text-white text-base font-normal mb-2 block">
                  Name (required)
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      className="bg-transparent border-white border-2 text-white placeholder:text-gray-300 focus:border-white focus:ring-0"
                    />
                  </div>
                  <div>
                    <Input
                      id="lastName"
                      placeholder="Last Name"
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
                  id="email"
                  type="email"
                  className="bg-transparent border-white border-2 text-white placeholder:text-gray-300 focus:border-white focus:ring-0"
                />
              </div>

              {/* Organization Field */}
              <div>
                <Label htmlFor="organization" className="text-white text-base font-normal mb-2 block">
                  Organization
                </Label>
                <Input
                  id="organization"
                  placeholder="Hospital, Medical School, etc."
                  className="bg-transparent border-white border-2 text-white placeholder:text-gray-300 focus:border-white focus:ring-0"
                />
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
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
                  id="message"
                  rows={6}
                  placeholder="Tell us about your interest in ClinicalSim.ai..."
                  className="bg-transparent border-white border-2 text-white placeholder:text-gray-300 focus:border-white focus:ring-0 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button className="bg-transparent border-white border-2 text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-normal">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Information */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Other Ways to Connect</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-600">Pilot Program</h3>
              <p className="text-gray-700">
                Interested in being part of our pilot program? We're looking for forward-thinking healthcare
                organizations to help shape the future of medical communication training.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-600">Partnerships</h3>
              <p className="text-gray-700">
                We're open to partnerships with medical schools, healthcare systems, and technology companies that share
                our vision for improving patient care through better communication.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-600">Research Collaboration</h3>
              <p className="text-gray-700">
                Are you a researcher in medical education or healthcare communication? We'd love to explore
                opportunities for collaboration and knowledge sharing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
