import type { Thing, WithContext } from "schema-dts"

interface JsonLdProps {
  data: WithContext<Thing> | WithContext<Thing>[]
}

export function JsonLd({ data }: JsonLdProps) {
  // Content is safe: only serialized from typed schema-dts objects, never user input
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}
