import { faqs } from "@/content/landing";
import { Section } from "./Section";

export function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Frequently asked questions">
      <div className="mx-auto max-w-3xl divide-y divide-black/10 dark:divide-white/10">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              {faq.question}
              <span className="ml-4 text-foreground/50 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-foreground/70">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
