import type { Metadata } from 'next'
import { Poppins, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://clinicalsim.ai'),
  title: {
    default: 'ClinicalSim.ai — AI Voice Simulation for Medical Communication Training',
    template: '%s | ClinicalSim.ai',
  },
  description: 'Practice the conversations that matter most. AI voice simulation for high-stakes medical conversations — goals of care, advance care planning, diagnosis disclosure — backed by a published randomized controlled trial.',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'ClinicalSim.ai',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${ibmPlexMono.variable} font-sans`} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
