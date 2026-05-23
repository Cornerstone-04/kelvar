export function NoiseOverlay({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 bg-size-[256px_256px] bg-repeat opacity-35 ${className}`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

export function AmbientField({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_12%,rgba(245,245,249,0.12),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(148,148,168,0.12),transparent_28%)] ${className}`}
    />
  );
}
