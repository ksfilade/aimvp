import { hero } from "@/content/landing";
import { Mark } from "./Mark";
import { Eyebrow } from "./Section";

export function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-[1fr_auto]">
        <div>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-2xl font-display text-5xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-pretty text-muted">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="rounded-lg bg-accent px-6 py-3.5 text-center font-semibold text-ink transition-colors hover:bg-accent-hover"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-lg border-2 border-ink px-6 py-3 text-center font-semibold transition-colors hover:bg-ink hover:text-cream"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <figure className="hidden md:block">
          <Mark className="w-56 text-ink lg:w-64" />
          <figcaption className="mt-8 flex justify-center gap-6 font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-current" aria-hidden />
              {hero.legend.ring}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-current" aria-hidden />
              {hero.legend.square}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
