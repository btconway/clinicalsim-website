import * as React from "react"
import Link from "next/link"
import { LucideIcon, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface AudienceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  title: string
  subtitle: string
  bullets: string[]
  href: string
  variant?: "warm" | "navy" | "blue" | "success"
}

const variantStyles = {
  warm: {
    iconBg: "bg-gradient-to-r from-warm to-orange-600",
    bulletColor: "bg-warm",
  },
  navy: {
    iconBg: "bg-navy",
    bulletColor: "bg-navy",
  },
  blue: {
    iconBg: "bg-gradient-to-r from-blue-600 to-indigo-600",
    bulletColor: "bg-blue-600",
  },
  success: {
    iconBg: "bg-gradient-to-r from-success to-emerald-600",
    bulletColor: "bg-success",
  },
}

export function AudienceCard({
  icon: Icon,
  title,
  subtitle,
  bullets,
  href,
  variant = "warm",
  className,
  ...props
}: AudienceCardProps) {
  const styles = variantStyles[variant]

  return (
    <Link href={href} className="group block">
      <div
        className={cn(
          "relative bg-white/70 backdrop-blur-sm rounded-xl p-6 md:p-8",
          "border border-gray-200 transition-all duration-300",
          "border-glow-hover h-full",
          "hover:bg-white/90 hover:shadow-xl",
          className
        )}
        {...props}
      >
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", styles.iconBg)}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-xl md:text-2xl font-medium mb-2 text-gray-900 group-hover:text-navy transition-colors">
          {title}
        </h3>

        <p className="text-base text-gray-500 font-light mb-4">
          {subtitle}
        </p>

        <ul className="space-y-2.5 mb-6">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <div className={cn("w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0", styles.bulletColor)} />
              <span className="text-sm text-gray-600 font-light leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center text-blue-600 font-medium group-hover:text-warm transition-colors">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
