import * as React from "react"
import { cn } from "@/lib/utils"

export interface AsymmetricGridProps extends React.HTMLAttributes<HTMLDivElement> {
  layout?: "featured-left" | "featured-right" | "staggered" | "mixed"
  gap?: "default" | "large" | "small"
}

const gapStyles = {
  small: "gap-4",
  default: "gap-6 md:gap-8",
  large: "gap-8 md:gap-12",
}

const layoutStyles = {
  "featured-left": "grid-cols-1 lg:grid-cols-2 [&>*:first-child]:lg:row-span-2 [&>*:first-child]:lg:col-span-1",
  "featured-right": "grid-cols-1 lg:grid-cols-2 [&>*:last-child]:lg:row-span-2 [&>*:last-child]:lg:col-span-1",
  "staggered": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto",
  "mixed": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [&>*:first-child]:lg:col-span-2 [&>*:first-child]:lg:row-span-1",
}

export function AsymmetricGrid({
  layout = "staggered",
  gap = "default",
  className,
  children,
  ...props
}: AsymmetricGridProps) {
  return (
    <div
      className={cn(
        "grid",
        layoutStyles[layout],
        gapStyles[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
