import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stellaryx Labs",
  description: "Forging Intelligence Where Space Systems, Signals, and AI Collide",
  keywords:
    "orbital intelligence, signals intelligence, SIGINT, geospatial AI, satellite imagery, RF signal processing, space systems engineering, aerospace education, defense innovation, machine learning, remote sensing",
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stellaryxlabs.com",
    title: "Stellaryx Labs | AI & Space Systems R&D",
    description: "Forging Intelligence Where Space Systems, Signals, and AI Collide",
    siteName: "Stellaryx Labs",
    images: [
      {
        url: '/stellaryxlabslogo.png',
        width: 1200,
        height: 630,
        alt: 'Stellaryx Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stellaryx Labs | AI & Space Systems R&D',
    description: 'Forging Intelligence Where Space Systems, Signals, and AI Collide',
    images: ['/stellaryxlabslogo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
