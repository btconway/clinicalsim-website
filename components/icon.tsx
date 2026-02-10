import * as React from "react"
import { cn } from "@/lib/utils"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  src: string
}

export function Icon({ src, className, ...props }: IconProps) {
  const [svgContent, setSvgContent] = React.useState<string>("")
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((text) => {
        // Extract the path from the SVG
        const parser = new DOMParser()
        const doc = parser.parseFromString(text, "image/svg+xml")
        const svg = doc.querySelector("svg")
        if (svg) {
          // Get the innerHTML (paths)
          const paths = svg.innerHTML
          setSvgContent(paths)
        }
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [src])

  if (isLoading) {
    return <div className={cn("animate-pulse", className)} />
  }

  return (
    <svg
      viewBox="0 0 1200 1200"
      className={cn("fill-current", className)}
      {...props}
    >
      <g dangerouslySetInnerHTML={{ __html: svgContent }} />
    </svg>
  )
}
