import { steps } from "@/content/landing";
import { Section, SectionTitle } from "./Section";

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionTitle>How it works</SectionTitle>
      <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className={`border-t-2 pt-5 ${
              index === steps.length - 1 ? "border-accent" : "border-ink"
            }`}
          >
            <span className="font-mono text-xs text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
