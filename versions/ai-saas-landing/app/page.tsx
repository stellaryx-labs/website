"use client"

import { Button } from "@/components/ui/button"
import { Satellite, Radio, Brain, Radar, Zap, Telescope } from "lucide-react"
import ContactForm from "@/components/contact-form"
import UseCases from "@/components/use-cases"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FramerSpotlight from "@/components/framer-spotlight"
import CssGridBackground from "@/components/css-grid-background"
import FeaturesSection from "@/components/features-section"
import StructuredData from "@/components/structured-data"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <StructuredData />
      <div className="flex min-h-screen flex-col">
        <Navbar />

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <CssGridBackground />
          <FramerSpotlight />
          <div className="container px-4 md:px-6 py-16 md:py-20">
            <motion.div 
              className="flex flex-col items-center text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-6">Enterprise AI Solution</div> */}

              <motion.div 
                className="flex flex-col items-center justify-center gap-4 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <img 
                  src="/stellaryxlabslogo_invert.png" 
                  alt="Stellaryx Labs Logo" 
                  className="h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
                />
                <h1
                  className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest main-title-text"
                >
                  STELLARYX LABS
                </h1>
              </motion.div>
              <motion.p 
                className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Forging AI-driven software, training, and tactical systems at the edge of space, security, and electromagnetic warfare
              </motion.p>

              <motion.div 
                className="flex flex-wrap justify-center gap-3 mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <Link href="#about">
                <Button className="px-5 py-6 h-[60px] border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-[15px] font-medium text-foreground">
                  LEARN MORE
                </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20" id="about" aria-labelledby="about-heading">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div 
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
                    Our Mission
                  </div>
                  <h2 id="about-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Technical Rigor Meets Strategic Foresight
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                   Stellaryx Labs builds tools and training at the edge of aerospace, SIGINT, and AI, democratizing orbital intelligence through hands-on education and geospatial machine learning
                  </p>
                </motion.div>
                <motion.div 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div className="flex items-start gap-3" variants={itemVariants}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                      <Satellite className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Orbital Intelligence Platform</h3>
                      <p className="text-sm text-muted-foreground">
                        Democratizing access to space-based intelligence through open-source tools and methodologies for
                        satellite data analysis and orbital monitoring.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start gap-3" variants={itemVariants}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                      <Radio className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Signals Intelligence & RF Processing</h3>
                      <p className="text-sm text-muted-foreground">
                        Advanced signal processing capabilities for RF analysis, from demodulating raw RF to tactical
                        communications processing and satellite monitoring.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start gap-3" variants={itemVariants}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                      <Brain className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI-Driven Geospatial Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Cutting-edge machine learning applications for satellite imagery and remote sensing data,
                        enabling automated intelligence extraction from orbital assets.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start gap-3" variants={itemVariants}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                      <Telescope className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Space Systems Engineering Education</h3>
                      <p className="text-sm text-muted-foreground">
                        Training the next generation of space systems engineers while laying the groundwork for
                        autonomous, secure, space-based intelligence architectures.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <img
                  alt="Orbital Intelligence Research"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                  height="550"
                  src="/placeholder.svg?height=550&width=550"
                  width="550"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <UseCases />

        {/* Contact/Research Collaboration Section */}
        <section id="contact" className="py-20 bg-muted/50 dark:bg-muted/10" aria-labelledby="contact-heading">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Join Our Research Initiative
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Contact us to discuss research collaboration opportunities, workshop participation, or to learn more
                    about our experimental R&D initiatives in space systems engineering.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Satellite className="h-5 w-5 text-primary" />
                    <span>Hands-on workshops in orbital intelligence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio className="h-5 w-5 text-primary" />
                    <span>Tactical signal processing tools development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <span>AI/ML for satellite imagery analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radar className="h-5 w-5 text-primary" />
                    <span>Secure space-based intelligence architectures</span>
                  </div>
                </div>
 
              </div>
              <div className="lg:ml-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
