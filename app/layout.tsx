import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "Stellaryx Labs | Experimental R&D in Orbital Intelligence, Signals Intelligence & AI-Driven Geospatial Analysis",
  description:
    "Experimental R&D initiative at the intersection of aerospace education, signals intelligence, and AI-driven geospatial analysis. Democratizing access to orbital intelligence through hands-on workshops, tactical signal processing tools, and cutting-edge machine learning applications.",
  keywords:
    "orbital intelligence, signals intelligence, SIGINT, geospatial AI, satellite imagery, RF signal processing, space systems engineering, aerospace education, defense innovation, machine learning, remote sensing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stellaryxlabs.com",
    title: "Stellaryx Labs | Orbital Intelligence & Space Systems R&D",
    description:
      "Experimental R&D initiative democratizing access to orbital intelligence through AI-driven geospatial analysis, signals intelligence, and aerospace education.",
    siteName: "Stellaryx Labs",
    images: [
      {
        url: "https://stellaryxlabs.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stellaryx Labs - Orbital Intelligence Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stellaryx Labs | Orbital Intelligence & Space Systems R&D",
    description:
      "Experimental R&D initiative at the intersection of aerospace education, signals intelligence, and AI-driven geospatial analysis.",
    images: ["https://stellaryxlabs.com/twitter-image.jpg"],
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
