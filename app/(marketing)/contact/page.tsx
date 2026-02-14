import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Handshake, FlaskConical } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-6">Contact us</h1>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-8 text-blue-50">
                Interested in working together? Fill out some info and we will be in touch shortly. We can&apos;t wait to
                hear from you!
              </p>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-medium mb-2">Get in Touch</h3>
                  <p className="text-base font-light text-blue-50">
                    Whether you&apos;re interested in joining our pilot program, have questions about our platform, or want
                    to explore partnership opportunities, we&apos;d love to hear from you.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-medium mb-2">Response Time</h3>
                  <p className="text-base font-light text-blue-50">
                    We typically respond to all inquiries within <span className="font-mono text-warm">24-48 hours</span> during business days.
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
                  Name <span className="text-warm">*</span>
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="bg-white/10 backdrop-blur-sm border-white/30 border-2 text-white placeholder:text-gray-300 focus:border-warm focus:ring-0 rounded-lg"
                    />
                  </div>
                  <div>
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="bg-white/10 backdrop-blur-sm border-white/30 border-2 text-white placeholder:text-gray-300 focus:border-warm focus:ring-0 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="text-white text-base font-normal mb-2 block">
                  Email <span className="text-warm">*</span>
                </Label>
                <Input
                  name="email"
                  type="email"
                  required
                  className="bg-white/10 backdrop-blur-sm border-white/30 border-2 text-white placeholder:text-gray-300 focus:border-warm focus:ring-0 rounded-lg"
                />
                <p className="text-xs text-blue-200 mt-2 font-light">We&apos;ll never share your email with anyone else.</p>
              </div>

              {/* Organization Field */}
              <div>
                <Label htmlFor="organization" className="text-white text-base font-normal mb-2 block">
                  Organization
                </Label>
                <Input
                  name="organization"
                  placeholder="Hospital, Medical School, etc."
                  className="bg-white/10 backdrop-blur-sm border-white/30 border-2 text-white placeholder:text-gray-300 focus:border-warm focus:ring-0 rounded-lg"
                />
              </div>

              {/* Message Field */}
              <div>
                <Label htmlFor="message" className="text-white text-base font-normal mb-2 block">
                  Message <span className="text-warm">*</span>
                </Label>
                <Textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your interest in ClinicalSim.ai..."
                  required
                  className="bg-white/10 backdrop-blur-sm border-white/30 border-2 text-white placeholder:text-gray-300 focus:border-warm focus:ring-0 resize-none rounded-lg"
                />
                <p className="text-xs text-blue-200 mt-2 font-light">Include any specific questions or details about your program.</p>
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-start space-x-3 bg-white/5 rounded-lg p-4 border border-white/10">
                <Checkbox
                  name="newsletter"
                  className="border-white/50 data-[state=checked]:bg-warm data-[state=checked]:border-warm mt-1"
                />
                <div>
                  <Label htmlFor="newsletter" className="text-white text-base font-normal">
                    Sign up for news and updates
                  </Label>
                  <p className="text-xs text-blue-200 mt-1 font-light">Get notified about new features, research findings, and pilot opportunities.</p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="warm-filled"
                size="lg"
                className="w-full md:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Contact Information */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-light text-navy mb-4 text-center">Other Ways to Connect</h2>
          <p className="text-lg text-gray-600 font-light text-center mb-12 max-w-2xl mx-auto">
            We&apos;re always looking for innovative partners who share our mission to improve patient care through better communication.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-warm to-orange-600 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-navy mb-3">Pilot Program</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Interested in being part of our pilot program? We&apos;re looking for forward-thinking healthcare
                organizations to help shape the future of medical communication training.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-navy mb-3">Partnerships</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                We&apos;re open to partnerships with medical schools, healthcare systems, and technology companies that share
                our vision for improving patient care through better communication.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-success to-emerald-600 flex items-center justify-center mb-6">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-navy mb-3">Research Collaboration</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Are you a researcher in medical education or healthcare communication? We&apos;d love to explore
                opportunities for collaboration and knowledge sharing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
