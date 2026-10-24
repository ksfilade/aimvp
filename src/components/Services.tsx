import { services } from "@/content/landing";
import { Section, SectionTitle } from "./Section";

export function Services() {
  return (
    <Section id="services" tone="white">
      <SectionTitle>{services.title}</SectionTitle>
      <p className="mt-3 text-muted">{services.subtitle}</p>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {services.items.map((service) => (
          <div
            key={service.name}
            className={`flex flex-col rounded-xl border p-7 ${
              service.highlighted
                ? "border-ink bg-ink text-cream"
                : "border-line bg-cream"
            }`}
          >
            <div className="flex min-h-6 items-center justify-between gap-4">
              <p
                className={`font-mono text-xs tracking-[0.15em] uppercase ${
                  service.highlighted ? "text-cream/60" : "text-muted"
                }`}
              >
                {service.duration}
              </p>
              {service.highlighted && (
                <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-ink">
                  Most popular
                </span>
              )}
            </div>
            <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight">
              {service.name}
            </h3>
            <p
              className={`mt-4 leading-relaxed ${
                service.highlighted ? "text-cream/75" : "text-muted"
              }`}
            >
              {service.description}
            </p>
            <ul className="mt-6 flex-1 list-disc space-y-2 pl-5 text-[15px] marker:text-current">
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p
              className={`mt-8 border-t pt-5 font-semibold ${
                service.highlighted ? "border-cream/15" : "border-line"
              }`}
            >
              {service.price}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
