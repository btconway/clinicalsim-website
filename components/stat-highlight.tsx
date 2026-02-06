import * as React from "react"
import { cn } from "@/lib/utils"

export interface StatHighlightProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  label: string
  source?: string
  variant?: "warm" | "navy" | "blue" | "success"
  size?: "default" | "large"
}

const variantStyles = {
  warm: "text-warm",
  navy: "text-navy",
  blue: "text-blue-600",
  success: "text-success",
}

export function StatHighlight({
  value,
  label,
  source,
  variant = "warm",
  size = "default",
  className,
  ...props
}: StatHighlightProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-6",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "font-mono font-bold mb-3",
          size === "large" ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl lg:text-5xl",
          variantStyles[variant]
        )}
      >
        {value}
      </div>

      <p className="text-base md:text-lg text-gray-700 font-normal leading-relaxed max-w-xs">
        {label}
      </p>

      {source && (
        <p className="text-sm text-gray-500 font-light mt-2 italic">
          {source}
        </p>
      )}
    </div>
  )
}
