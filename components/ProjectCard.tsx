import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Zap, Github, Youtube, FileText } from "lucide-react";
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({ subsets: ["latin"] })

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  photo?: string;
  github?: string;
  medium?: string;
  video?: string;
  logo?: React.ReactNode;
  onDeploy?: () => void;
  deployText?: string;
  className?: string;
}

const cardStyle = {
    boxShadow: "0 0 15px rgba(57, 166, 208, 0.2)",
    backgroundColor: "#020811",
};

export const ProjectCard = ({
  title,
  description,
  tags,
  photo,
  github = "",
  medium = "",
  video = "",
  logo,
  onDeploy,
  deployText = "Deploy",
  className = ""
}: ProjectCardProps) => {
  return (
    <Card className={`ml-4 mr-4 bg-card-dark border-border-dark shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] ${className}`} style={cardStyle}>
      <CardContent className="p-6 space-y-4">
        {/* Logo/Icon section */}
        <div className="flex items-center justify-center">
          {photo ? (
            <img
              src={photo}
              alt={title}
              className="h-32 w-60 object-cover rounded-md"
            />
          ) : logo ? (
            logo
          ) : (
            <div className="w-32 h-32 bg-gradient-to-br from-accent-purple to-primary rounded-md flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-card-dark-foreground mb-1">
              {title}
            </h3>
            <p className="text-sm text-muted-dark leading-relaxed">
              {description}
            </p>
          </div>

          {/* links */}
          <div className="flex items-center gap-3">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-muted-dark hover:text-card-dark-foreground">
                <Github className="w-4 h-4" /> GitHub
              </a>
            )}
            {medium && (
              <a href={medium} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-muted-dark hover:text-card-dark-foreground">
                <FileText className="w-4 h-4" /> Medium
              </a>
            )}
            {video && (
              <a href={video} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-muted-dark hover:text-card-dark-foreground">
                <Youtube className="w-4 h-4" /> Video
              </a>
            )}
          </div>

          {/* tags */}
          <div className="flex items-center gap-2 pt-2 border-t border-border-dark">
            <span className="text-xs text-muted-dark">tags:</span>
            <div className="flex items-center gap-2 flex-wrap">
              {tags.map((tag, index) => (
                <div key={index} className="flex items-center gap-1 bg-card-dark-foreground/10 px-2 py-1 rounded-sm">
                  <span className="text-xs text-card-dark-foreground font-medium">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
