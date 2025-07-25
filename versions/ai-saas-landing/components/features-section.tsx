import FeatureCard from "@/components/feature-card"
import {
  BotIcon,
  SparklesIcon,
  DatabaseIcon,
  ShieldIcon,
  FileTextIcon,
  ServerIcon,
  LockIcon,
  ZapIcon,
} from "@/components/feature-icons"

export default function FeaturesSection() {
  const features = [
    {
      icon: <BotIcon />,
      title: "AI-Driven Geospatial Analysis",
      description:
        "Cutting-edge machine learning applications for satellite imagery and remote sensing data, enabling automated intelligence extraction from orbital assets.",
      accentColor: "rgba(36, 101, 237, 0.5)",
    },
    {
      icon: <SparklesIcon />,
      title: "Signals Intelligence (SIGINT)",
      description:
        "Advanced signal processing capabilities for RF analysis, satellite communications interception, and tactical intelligence gathering from space-based platforms.",
      accentColor: "rgba(236, 72, 153, 0.5)",
    },
    {
      icon: <DatabaseIcon />,
      title: "Orbital Intelligence Platform",
      description:
        "Democratizing access to space-based intelligence through open-source tools and methodologies for satellite data analysis and orbital monitoring.",
      accentColor: "rgba(34, 211, 238, 0.5)",
    },
    {
      icon: <ShieldIcon />,
      title: "Secure Space Architectures",
      description:
        "Developing autonomous, secure, space-based intelligence architectures that operate at the intersection of defense innovation and open-source development.",
      accentColor: "rgba(132, 204, 22, 0.5)",
    },
    {
      icon: <FileTextIcon />,
      title: "Tactical Signal Processing",
      description:
        "Building specialized tools for RF demodulation, signal analysis, and tactical communications processing from raw satellite and terrestrial sources.",
      accentColor: "rgba(249, 115, 22, 0.5)",
    },
    {
      icon: <ServerIcon />,
      title: "Experimental R&D",
      description:
        "Pushing the boundaries of space systems engineering through experimental research and development in orbital mechanics and satellite technology.",
      accentColor: "rgba(168, 85, 247, 0.5)",
    },
    {
      icon: <LockIcon />,
      title: "Defense Innovation",
      description:
        "Operating at the edge of open-source and defense innovation, bridging civilian research with strategic defense applications in space domain awareness.",
      accentColor: "rgba(251, 191, 36, 0.5)",
    },
    {
      icon: <ZapIcon />,
      title: "Hands-On Workshops",
      description:
        "Immersive educational experiences training the next generation of space systems engineers in practical orbital intelligence and RF analysis techniques.",
      accentColor: "rgba(16, 185, 129, 0.5)",
    },
  ]

  return (
    <section className="py-20 bg-muted/50 dark:bg-muted/10" id="services" aria-labelledby="services-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
              R&D Capabilities
            </div>
            <h2 id="services-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Orbital Intelligence & Space Systems R&D
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Experimental research and development at the intersection of aerospace education, signals intelligence,
              and AI-driven geospatial analysis.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
