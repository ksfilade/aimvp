import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-pretty text-foreground/70">{subtitle}</p>
          )}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
