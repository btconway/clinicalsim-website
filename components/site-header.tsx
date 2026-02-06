"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Brain } from "lucide-react"

export function SiteHeader() {
  const pathname = usePathname()

  const links = [
    { href: "/about", label: "About" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="flex items-center justify-between px-4 py-4 md:px-12 md:py-6 bg-white/80 backdrop-blur-sm border-b border-white/20">
      <Link href="/" className="flex items-center gap-2">
        <Brain className="h-8 w-8 text-blue-600" />
        <span className="text-2xl font-light text-slate-800">
          ClinicalSim<span className="text-blue-600 shimmer">.ai</span>
        </span>
      </Link>
      <nav className="flex gap-4 md:gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-gray-700 hover:text-gray-900 font-medium transition-colors ${
              pathname === link.href || pathname?.startsWith(link.href + "/")
                ? "border-b-2 border-blue-600"
                : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
