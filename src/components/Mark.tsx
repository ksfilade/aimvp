// The brand mark: a ring ("strategy") overlapped by a square ("product").
// The ring uses currentColor so it can sit on light or dark backgrounds.
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 222 216" className={className} aria-hidden>
      <circle cx="89" cy="127" r="73" fill="none" stroke="currentColor" strokeWidth="32" />
      <rect x="122" y="0" width="100" height="100" rx="14" className="fill-accent" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
      <Mark className={`h-6 w-6 ${inverted ? "text-cream" : "text-ink"}`} />
      <span>
        <span className="text-accent">AI</span>
        <span className={inverted ? "text-cream" : "text-ink"}>MVP</span>
      </span>
    </span>
  );
}
