"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Rocket,
  Code,
  Users,
  Lightbulb,
  Wrench,
  BookOpen,
  Monitor,
  FileText,
  GraduationCap,
  Calendar,
  Twitter,
  Youtube,
  Linkedin,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Stellaryx() {
  const heroRef = useRef<HTMLElement>(null)

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    servicesSection?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const parallax = heroRef.current.querySelector(".parallax-bg") as HTMLElement
        if (parallax) {
          parallax.style.transform = `translateY(${scrolled * 0.5}px)`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Animated Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Constellation Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20">
          <defs>
            <pattern id="constellation" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="cyan" />
              <circle cx="150" cy="80" r="1" fill="cyan" />
              <circle cx="100" cy="150" r="1" fill="cyan" />
              <line x1="50" y1="50" x2="150" y2="80" stroke="cyan" strokeWidth="0.5" opacity="0.3" />
              <line x1="150" y1="80" x2="100" y2="150" stroke="cyan" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400">Stellaryx Labs</div>
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="#services" className="hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">
              Research
            </Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">
              Instruct
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center text-center px-6">
        <div className="parallax-bg absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" />
          <div className="orbital-animation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full" />
          <div
            className="orbital-animation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-blue-400/20 rounded-full"
            style={{ animationDelay: "5s" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent">
              Stellaryx Labs
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Training, consulting, and development at the nexus of software, aerospace, and cybersecurity
            </p>
          </div>

          <Button
            onClick={scrollToServices}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-12 w-12 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Training & Education</h3>
                <p className="text-gray-300 leading-relaxed">
                  Workshops and courses across aerospace, cybersecurity, and systems engineering
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-12 w-12 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Consultation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Expert guidance for individuals and organizations building space/cyber capabilities
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="h-12 w-12 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Development Services</h3>
                <p className="text-gray-300 leading-relaxed">
                  Rapid prototyping in software, hardware, and secure infrastructure
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Full Services Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Complete Service Portfolio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-cyan-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white">Courses</h3>
                </div>
                <p className="text-gray-300">Space, cyber, software, and hardware education</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-cyan-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white">Workshops</h3>
                </div>
                <p className="text-gray-300">In-person/online events up to 50 people</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-cyan-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white">Consulting</h3>
                </div>
                <p className="text-gray-300">Engineering, design, and cyber strategy</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-cyan-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white">Product Development</h3>
                </div>
                <p className="text-gray-300">Secure comms, telemetry, and firmware</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-cyan-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white">Content Creation</h3>
                </div>
                <p className="text-gray-300">Articles, video, and technical writing</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Monitor className="h-8 w-8 text-cyan-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white">Education</h3>
                </div>
                <p className="text-gray-300">Intuitive and accessible STEM learning</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-slate-700">
                <div className="text-center">
                  <Rocket className="h-32 w-32 text-cyan-400 mx-auto mb-4" />
                  <div className="text-lg text-gray-300">Space-Focused Innovation</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About Us
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Stellaryx Labs is a space-focused technical organization founded by Angelina Tsuboi, offering
                high-quality, rapid development services and specialized education in aerospace cybersecurity.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Rocket className="h-6 w-6 text-cyan-400 mr-3" />
                  <span className="text-white font-semibold">Rapid Integrated Development</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-cyan-400 mr-3" />
                  <span className="text-white font-semibold">High Quality Educational Materials</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="h-6 w-6 text-cyan-400 mr-3" />
                  <span className="text-white font-semibold">Personalized Technical Consulting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliates & Clients */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Affiliates & Clients
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 flex items-center justify-center backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-lg font-semibold text-white mb-2">Lux Space Science</div>
                <div className="text-sm text-gray-400">Partner</div>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 flex items-center justify-center backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-lg font-semibold text-white mb-2">Retia</div>
                <div className="text-sm text-gray-400">Client</div>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 flex items-center justify-center backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-lg font-semibold text-white mb-2">Pentest Magazine</div>
                <div className="text-sm text-gray-400">Publication</div>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 flex items-center justify-center backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-lg font-semibold text-white mb-2">Askerdyne</div>
                <div className="text-sm text-gray-400">Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Book an Appointment
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Schedule a free 15-minute call to discuss your mission-critical needs.
            </p>

            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href="#" target="_blank">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-cyan-400 mb-4">Stellaryx Labs</div>
              <nav className="flex flex-wrap gap-6">
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
                <Link href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About
                </Link>
                <Link href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Research
                </Link>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Instruct
                </Link>
              </nav>
            </div>

            <div className="flex space-x-6">
              <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Stellaryx Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
