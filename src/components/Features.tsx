import { features } from "@/content/landing";
import { Section } from "./Section";

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title="Everything you need to launch"
      subtitle="Skip the boilerplate and spend your time on the parts users will notice."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.3a1 1 0 0 1 1.4 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
