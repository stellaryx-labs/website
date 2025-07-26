"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FrostedGlassIcon from "@/components/frosted-glass-icon"
import { FlaskConical, Globe, GraduationCap, Radio, Satellite, Shield } from "lucide-react"

export default function UseCases() {
  const useCases = [
    {
      icon: <Satellite />,
      title: "Space Systems Engineering",
      description:
        "Training the next generation of engineers in orbital mechanics, satellite design, and space-based intelligence systems through hands-on workshops and practical applications.",
      accentColor: "rgba(59, 130, 246, 0.5)",
    },
    {
      icon: <Shield />,
      title: "Defense & Intelligence",
      description:
        "Developing secure, autonomous space-based intelligence architectures for defense applications while maintaining open-source innovation principles.",
      accentColor: "rgba(139, 92, 246, 0.5)",
    },
    {
      icon: <Globe />,
      title: "Satellite Data Analytics",
      description:
        "AI-driven analysis of satellite imagery and remote sensing data for commercial applications, environmental monitoring, and geospatial intelligence.",
      accentColor: "rgba(245, 158, 11, 0.5)",
    },
    {
      icon: <FlaskConical />,
      title: "Research Institutions",
      description:
        "Collaborative research in orbital intelligence, signal processing, and machine learning applications for academic and scientific communities.",
      accentColor: "rgba(239, 68, 68, 0.5)",
    },
    {
      icon: <Radio />,
      title: "RF Signal Analysis",
      description:
        "Advanced signal processing and demodulation techniques for tactical communications, satellite monitoring, and signals intelligence applications.",
      accentColor: "rgba(132, 204, 22, 0.5)",
    },
    {
      icon: <GraduationCap />,
      title: "Aerospace Education",
      description:
        "Democratizing access to orbital intelligence through educational programs that bridge theoretical knowledge with practical space systems engineering.",
      accentColor: "rgba(14, 165, 233, 0.5)",
    },
  ]

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      className="py-20 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10"
      id="services"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Orbital Intelligence & Space Systems R&D
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Experimental research and development at the intersection of aerospace education, signals intelligence, and AI-driven geospatial analysis.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {useCases.map((useCase, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-background/60 backdrop-blur-sm border transition-all duration-300 hover:shadow-lg dark:bg-background/80">
                <CardHeader className="pb-2">
                  <FrostedGlassIcon icon={useCase.icon} color={useCase.accentColor} className="mb-4" />
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
