"use client";

import { useState, type FormEvent } from "react";
import { cta } from "@/content/landing";

export function CallToAction() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: send the email to your waitlist provider or an API route.
    setSubmitted(true);
  }

  return (
    <section id="cta" className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl rounded-3xl bg-indigo-600 px-6 py-16 text-center text-white sm:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">{cta.subtitle}</p>
        {submitted ? (
          <p className="mt-10 font-medium">Thanks! You are on the list.</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder={cta.placeholder}
              className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-indigo-200 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
            >
              {cta.button}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
