"use client"

import { Button } from "@/components/ui/button"
import { Satellite, Radio, Brain, Radar, Zap, Telescope, Shield, Code, Wrench } from "lucide-react"
// import ContactForm from "@/components/contact-form"
import TypeformEmbed from "@/components/typeform-component"
import UseCases from "@/components/use-cases"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FramerSpotlight from "@/components/framer-spotlight"
import CssGridBackground from "@/components/css-grid-background"
import FeaturesSection from "@/components/features-section"
import StructuredData from "@/components/structured-data"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({ subsets: ["latin"] })

export default function Projects() {
  // Detect device capabilities instead of just iOS
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check for various factors that might need optimized animations
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)
    console.log(projects)
    console.log("printed out the projects")
  }, [])

  // Animation variants that work well across all browsers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isIOS ? 0.2 : 0.1,
        delayChildren: isIOS ? 0.3 : 0.2,
        duration: isIOS ? 0.8 : 0.6,
      },
    },
  }

  const NextLogo = () => (
    <div className="relative">
      <div className="w-8 h-8 bg-card-dark-foreground text-card-dark rounded-md flex items-center justify-center font-bold text-xs">
        N
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-purple rounded-full flex items-center justify-center">
        <div className="w-1 h-1 bg-white rounded-full" />
      </div>
    </div>
  );

  const handleDeploy = () => {
    console.log("Deploying project...");
  };

  // Ensure animations work on all browsers
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: isIOS ? 10 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isIOS ? 0.8 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing that works well across browsers
      }
    },
  }

  return (
    <>
      <StructuredData />
      <div className="flex min-h-screen flex-col page-container main-container">
        <Navbar />

        {/* Hero Section - Cross-browser optimized */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden section-container">
          <CssGridBackground include_bg={false} />
          <FramerSpotlight />
          <div className="min-h-screen flex justify-center">
                <div className="max-w-7xl w-full space-y-8">
                  <div className="text-center space-y-2 pb-9 mt-20">
                    <h1 className={`text-5xl font-bold text-foreground ${orbitron.className}`}>Project Gallery</h1>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">

                  {projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      photo={project.photo}
                      github={project.github}
                      medium={project.medium}
                      video={project.video}
                    />
                  ))}

                  {/*
                    <ProjectCard
                      title="Next.js Boilerplate"
                      description="Get started with Next.js and React in seconds."
                      categories={[
                        { name: "Coding", icon: <Code className="w-3 h-3 text-accent-purple" /> }
                      ]}
                      logo={<NextLogo />}
                      onDeploy={handleDeploy}
                    />

                    <ProjectCard
                      title="React Dashboard"
                      description="A modern dashboard built with React and TypeScript for data visualization."
                      categories={[
                        { name: "Engineering", icon: <Wrench className="w-3 h-3 text-accent-purple" /> },
                        { name: "Coding", icon: <Code className="w-3 h-3 text-accent-purple" /> }
                      ]}
                      onDeploy={handleDeploy}
                      deployText="Launch App"
                    />

                    <ProjectCard
                      title="API Gateway"
                      description="Serverless API gateway with authentication and rate limiting built-in."
                      categories={[
                        { name: "Cybersecurity", icon: <Shield className="w-3 h-3 text-accent-purple" /> }
                      ]}
                      logo={<Zap className="w-5 h-5 text-accent-purple" />}
                      onDeploy={handleDeploy}
                      deployText="Deploy API"
                    />
                    */}
                  </div>
                </div>
              </div>

           {/*
          <div className="container-fix px-4 md:px-6 py-16 md:py-20">
            <h1
             className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest"
           >
             PROJECT CATALOG
           </h1>
          </div>
          */}
        </section>
        <Footer />
      </div>
    </>
  )
}