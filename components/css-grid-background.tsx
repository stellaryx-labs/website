export default function CssGridBackground({
    include_bg = true,
  }) {
  return (
    <>
      {/* Tactical World Map SVG Background */}
      <div
        className="absolute inset-0 pointer-events-none z-[-3] opacity-30 dark:opacity-20"
        style={{
          backgroundImage: include_bg ? `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ybGR8ZW58MHx8MHx8fDA%3D")`: 'none',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Enhanced Grid overlay that works with the map */}
      <div
        className="absolute inset-0 pointer-events-none z-[-1] grid-background"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(36, 101, 237, 0.15) 0.5px, transparent 0.5px),
            linear-gradient(to bottom, rgba(36, 101, 237, 0.15) 0.5px, transparent 0.5px)`,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(circle at center, transparent 15%, black 65%)",
          WebkitMaskImage: "radial-gradient(circle at center, transparent 15%, black 65%)",
        }}
        aria-hidden="true"
      />

      {/* Tactical scanning lines animation */}
      <div
        className="absolute inset-0 pointer-events-none z-[-2] opacity-20 dark:opacity-30"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, rgba(36, 101, 237, 0.3) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(36, 101, 237, 0.2) 50%, transparent 100%)
          `,
          backgroundSize: "200% 200%",
          animation: "tactical-scan 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* Subtle gradient overlay for depth */}

      <div
        className="absolute inset-0 pointer-events-none z-[-2] grid-gradient"
        style={{
          background: "radial-gradient(70% 70% at 50% 50%, transparent 0%, rgba(36, 101, 237, 0.03) 100%)",
        }}
        aria-hidden="true"
      />
    </>
  )
}
