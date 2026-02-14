import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  title: string
  description: string
  variant?: "default" | "warm" | "navy" | "success"
  asymmetric?: boolean
  expandOnHover?: boolean
}

const variantStyles = {
  default: {
    iconContainer: "bg-gradient-to-r from-blue-600 to-indigo-600",
    border: "border-gray-200",
  },
  warm: {
    iconContainer: "bg-gradient-to-r from-warm to-orange-600",
    border: "border-warm/30",
  },
  navy: {
    iconContainer: "bg-navy",
    border: "border-navy/30",
  },
  success: {
    iconContainer: "bg-gradient-to-r from-success to-emerald-600",
    border: "border-success/30",
  },
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "default",
  asymmetric = false,
  expandOnHover = false,
  className,
  ...props
}: FeatureCardProps) {
  const styles = variantStyles[variant]

  return (
    <div
      className={cn(
        "relative bg-white/70 rounded-xl p-6 md:p-8",
        "border transition-all duration-300",
        "border-glow-hover",
        expandOnHover && "hover:bg-white/90 hover:shadow-xl",
        asymmetric ? "h-auto" : "h-full",
        styles.border,
        className
      )}
      {...props}
    >
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110", styles.iconContainer)}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-xl md:text-2xl font-medium mb-3 text-gray-900">
        {title}
      </h3>

      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
