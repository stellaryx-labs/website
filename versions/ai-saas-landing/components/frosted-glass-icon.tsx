"use client"

import type { ReactNode } from "react"
import { useTheme } from "next-themes"

interface FrostedGlassIconProps {
  icon: ReactNode
  color?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function FrostedGlassIcon({
  icon,
  color = "rgba(36, 101, 237, 0.8)",
  size = "md",
  className = "",
}: FrostedGlassIconProps) {
  const { resolvedTheme } = useTheme()

  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14",
  }

  return (
    <div
      className={`relative rounded-xl flex items-center justify-center ${sizeClasses[size]} ${className}`}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: `1px solid rgba(255, 255, 255, 0.7)`,
        boxShadow: `0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.7)`,
      }}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
          }}
        />
      </div>
      <div className="relative z-10">{icon}</div>
    </div>
  )
}
