import { about } from "@/content/landing";
import { Eyebrow, Section } from "./Section";

function Highlight({ text, link }: (typeof about.highlights)[number]) {
  if (!link) return text;
  const [before, after] = text.split(link.label);
  return (
    <>
      {before}
      <a href={link.href} className="underline underline-offset-2 hover:text-accent">
        {link.label}
      </a>
      {after}
    </>
  );
}

export function About() {
  return (
    <Section id="about" tone="white">
      <div className="grid gap-12 md:grid-cols-[17rem_1fr] md:gap-10">
        <div>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight">
            {about.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{about.intro}</p>
        </div>
        <div>
          <ul className="divide-y divide-line border-b border-line">
            {about.highlights.map((highlight) => (
              <li key={highlight.text} className="flex gap-4 py-4 first:pt-1">
                <span className="mt-2 h-2 w-2 shrink-0 bg-accent" aria-hidden />
                <span>
                  <Highlight {...highlight} />
                </span>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2">
            {about.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
