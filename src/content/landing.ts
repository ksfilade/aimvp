// All landing page copy lives here so it can be edited without touching layout code.

export const site = {
  name: "AIMVP",
  domain: "aimvp.io",
  tagline: "AI consulting and MVP builds",
  description:
    "I help founders and product teams decide what to build with AI, and then build it: a working, production-ready MVP in weeks, not quarters.",
  email: "[your@email.com]",
  // Swap for a scheduling link (e.g. Calendly) when you have one.
  bookingUrl: "#contact",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "AI consulting · MVP builds",
  title: "Find where AI pays off. Then ship it.",
  subtitle: site.description,
  primaryCta: { label: "Book a free 30-min call", href: site.bookingUrl },
  secondaryCta: { label: "See services", href: "#services" },
  legend: { ring: "Strategy", square: "Product" },
};

export const services = {
  title: "Three ways to work together",
  subtitle: "Fixed scope, fixed price. You know what you get and when before we start.",
  items: [
    {
      duration: "1–2 weeks",
      name: "AI Audit",
      description:
        "A clear-eyed look at your product, workflows and data, and where AI would actually save time or make money.",
      features: [
        "Prioritized list of AI opportunities",
        "Effort, cost and risk for each",
        "A build plan you can run with anyone",
      ],
      price: "From [YOUR PRICE]",
      highlighted: false,
    },
    {
      duration: "4–8 weeks",
      name: "MVP Build",
      description:
        "From idea to a product real users can sign up for, with one core AI feature built in from day one.",
      features: [
        "Auth, payments and admin included",
        "Weekly demos on a live staging link",
        "Deployed, documented, yours",
      ],
      price: "From [YOUR PRICE]",
      highlighted: true,
    },
    {
      duration: "2–4 weeks",
      name: "AI Feature Add-on",
      description:
        "Already have a product? I add AI features to your existing codebase without a rewrite.",
      features: [
        "Assistants, smart search, document processing",
        "Workflow automation with LLMs",
        "Cost and quality monitoring",
      ],
      price: "From [YOUR PRICE]",
      highlighted: false,
    },
  ],
};

export const steps = [
  {
    title: "Discovery call",
    description:
      "30 minutes on your goals, users and constraints. Free, no pitch deck needed.",
  },
  {
    title: "Scope and plan",
    description: "A written proposal with features, timeline and a fixed price.",
  },
  {
    title: "Build in the open",
    description: "Weekly demos on a live link, so you can steer as it takes shape.",
  },
  {
    title: "Launch and hand over",
    description:
      "Deployed to production, code and docs handed over, ongoing support if you want it.",
  },
];

export const about = {
  eyebrow: "Who builds it",
  title: "Hi, I'm Kiril.",
  intro:
    "A senior full-stack engineer with 8 years of shipping products. You work directly with me, not an account manager or a junior team.",
  // `link.label` must appear verbatim in `text`; that part is rendered as a link.
  highlights: [
    {
      text: "Built features for an HR SaaS inside Microsoft Teams used by 150,000+ people.",
    },
    {
      text: "Founded and shipped Hostlio solo, a multi-tenant SaaS for short-term rental hosts.",
      link: { label: "Hostlio", href: "#" },
    },
    {
      text: "Products in fintech, healthcare, gaming and analytics, plus agency work at MiracleMill and NRG Edge.",
    },
    { text: "AWS Certified Developer – Associate." },
  ] as { text: string; link?: { label: string; href: string } }[],
  stack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "AWS", "LLM APIs"],
};

export const faqs = [
  {
    question: "Who owns the code?",
    answer: "You do. Everything lives in your own repository and accounts from day one.",
  },
  {
    question: "I'm not technical. Can we still work together?",
    answer:
      "Yes. I translate between product goals and code, and explain trade-offs in plain language.",
  },
  {
    question: "Do I even need AI?",
    answer:
      "Maybe not. The audit is there to tell you honestly where it helps and where a simpler solution wins.",
  },
  {
    question: "Where are you based?",
    answer:
      "North Macedonia, on Central European Time. Easy overlap with Europe and US mornings.",
  },
];

export const cta = {
  title: "Have an idea or an AI question?",
  subtitle:
    "Book a free 30-minute call. You'll leave with a clear next step, whether or not we work together.",
  button: { label: "Book a free call", href: site.bookingUrl },
};
