import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "Stellaryx Labs",
  description:
    "Forging Intelligence Where Space Systems, Signals, and AI Collide",
  keywords:
    "orbital intelligence, signals intelligence, SIGINT, geospatial AI, satellite imagery, RF signal processing, space systems engineering, aerospace education, defense innovation, machine learning, remote sensing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stellaryxlabs.com",
    title: "Stellaryx Labs | AI & Space Systems R&D",
    description:
      "Forging Intelligence Where Space Systems, Signals, and AI Collide",
    siteName: "Stellaryx Labs"
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
