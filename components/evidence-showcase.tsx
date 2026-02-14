import * as React from "react"
import Link from "next/link"
import { BookOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface EvidenceShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  studyTitle: string
  journal: string
  year: string
  summary: string
  link?: string
  badges?: string[]
}

export function EvidenceShowcase({
  studyTitle,
  journal,
  year,
  summary,
  link,
  badges = ["Peer-Reviewed", "Randomized Controlled Trial"],
  className,
  ...props
}: EvidenceShowcaseProps) {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-br from-white/90 to-blue-50/90",
        "rounded-2xl p-8 md:p-10 border border-blue-200",
        "shadow-xl hover:shadow-2xl transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {badges.map((badge, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Icon and Title */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold text-navy mb-2">
            {studyTitle}
          </h3>
          <p className="text-base text-gray-600 font-medium">
            {journal} ({year})
          </p>
        </div>
      </div>

      {/* Summary */}
      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
        {summary}
      </p>

      {/* CTA */}
      {link && (
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Button
            variant="warm-accent"
            size="lg"
            className="group"
          >
            Read Full Study
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      )}
    </div>
  )
}
