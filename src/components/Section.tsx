import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  tone?: "cream" | "white";
  children: ReactNode;
};

export function Section({ id, tone = "cream", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 border-t border-line py-20 sm:py-28 ${
        tone === "white" ? "bg-white" : "bg-cream"
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
      {children}
    </h2>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.15em] text-muted uppercase">{children}</p>
  );
}
