import { steps } from "@/content/landing";
import { Section } from "./Section";

export function HowItWorks() {
  return (
    <Section id="how-it-works" eyebrow="How it works" title="From idea to launch in three steps">
      <ol className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="text-center md:text-left">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
              {index + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-foreground/70">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
