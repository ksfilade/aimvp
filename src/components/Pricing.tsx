import { plans } from "@/content/landing";
import { Section } from "./Section";

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Simple pricing that grows with you"
      subtitle="Start free. Upgrade when you are ready to launch."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl border p-8 ${
              plan.highlighted
                ? "border-indigo-600 shadow-lg shadow-indigo-600/10"
                : "border-black/10 dark:border-white/10"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              {plan.highlighted && (
                <span className="rounded-full bg-indigo-600 px-2.5 py-0.5 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-foreground/70">{plan.description}</p>
            <p className="mt-6">
              <span className="text-4xl font-bold tracking-tight">{plan.price}</span>{" "}
              <span className="text-sm text-foreground/60">{plan.period}</span>
            </p>
            <ul className="mt-8 flex-1 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400" aria-hidden>
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                plan.highlighted
                  ? "bg-indigo-600 text-white hover:bg-indigo-500"
                  : "border border-black/10 hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
