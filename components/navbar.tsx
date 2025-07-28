"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

    const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2" aria-label="Stellaryx Labs Homepage">
            <img 
              src="/stellaryxlabslogo_invert.png" 
              alt="Stellaryx Labs Logo" 
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold">Stellaryx Labs</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6" aria-label="Main Navigation">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
