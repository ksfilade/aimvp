import { cta, site } from "@/content/landing";

export function CallToAction() {
  return (
    <section id="contact" className="scroll-mt-16 bg-ink text-cream">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-20 sm:px-6 sm:py-24 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {cta.title}
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-cream/70">{cta.subtitle}</p>
        </div>
        <div>
          <a
            href={cta.button.href}
            className="inline-block rounded-lg bg-accent px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-accent-hover"
          >
            {cta.button.label}
          </a>
          <p className="mt-4 text-sm text-cream/70">
            or email{" "}
            <a href={`mailto:${site.email}`} className="hover:text-cream">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
