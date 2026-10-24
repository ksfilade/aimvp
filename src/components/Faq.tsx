import { faqs } from "@/content/landing";
import { Section, SectionTitle } from "./Section";

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-10 md:grid-cols-[13rem_1fr] md:gap-16">
        <SectionTitle>Questions</SectionTitle>
        <dl className="divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-5">
              <dt className="font-semibold">{faq.question}</dt>
              <dd className="mt-2 leading-relaxed text-muted">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
