import { hero, stats } from "@/content/landing";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[480px] max-w-3xl rounded-full bg-gradient-to-tr from-indigo-500/30 via-sky-400/20 to-fuchsia-500/30 blur-3xl"
      />
      <div className="mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6 sm:pt-32">
        <span className="inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-foreground/70 dark:border-white/15">
          {hero.badge}
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl">
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-foreground/70">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="w-full rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 sm:w-auto"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="w-full rounded-full border border-black/10 px-6 py-3 text-sm font-semibold transition-colors hover:bg-black/5 sm:w-auto dark:border-white/15 dark:hover:bg-white/5"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-sm text-foreground/60">{stat.label}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
