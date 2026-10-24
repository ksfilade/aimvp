// All landing page copy lives here so it can be edited without touching layout code.

export const site = {
  name: "AIMVP",
  tagline: "Ship your AI product idea in days, not months.",
  description:
    "AIMVP gives founders a production-ready starting point for AI products: auth, billing, prompts and analytics wired up so you can focus on what makes your idea unique.",
};

export const nav = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "Now in public beta",
  title: "Turn your AI idea into a live MVP this week",
  subtitle: site.description,
  primaryCta: { label: "Get early access", href: "#cta" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
};

export const stats = [
  { value: "5 days", label: "Average time to launch" },
  { value: "1,200+", label: "Founders on the waitlist" },
  { value: "40+", label: "Prebuilt components" },
];

export const features = [
  {
    title: "Model-agnostic",
    description:
      "Swap between leading LLM providers with one config change. No rewrites when a better model ships.",
  },
  {
    title: "Auth & billing included",
    description:
      "Sign-in, teams, subscriptions and usage-based limits work out of the box.",
  },
  {
    title: "Prompt management",
    description:
      "Version, test and roll back prompts without redeploying your app.",
  },
  {
    title: "Usage analytics",
    description:
      "See what users ask, what it costs, and where answers fall short.",
  },
  {
    title: "Fast by default",
    description:
      "Streaming responses, edge caching and optimized assets keep the experience snappy.",
  },
  {
    title: "Own your code",
    description:
      "Everything lives in your repo. Extend it, fork it, or deploy it anywhere.",
  },
];

export const steps = [
  {
    title: "Describe your idea",
    description: "Tell us what your product does and who it is for.",
  },
  {
    title: "Customize the template",
    description: "Pick your model, brand colors and core workflows.",
  },
  {
    title: "Launch and learn",
    description: "Deploy in one click and start collecting real user feedback.",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For validating an idea.",
    features: ["1 project", "Community support", "Basic analytics"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For founders ready to launch.",
    features: [
      "Unlimited projects",
      "Custom domain",
      "Prompt versioning",
      "Priority support",
    ],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$99",
    period: "per month",
    description: "For small teams shipping together.",
    features: ["Everything in Pro", "5 seats", "Role-based access", "SSO"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "Basic familiarity helps, but the template is designed so you can launch by editing configuration and content files.",
  },
  {
    question: "Which AI models are supported?",
    answer:
      "Any provider with an HTTP API. Adapters for the most popular providers are included.",
  },
  {
    question: "Can I self-host?",
    answer:
      "Yes. It is a standard Next.js app, so you can deploy it on any platform that runs Node.js.",
  },
  {
    question: "What happens after the beta?",
    answer:
      "Beta users keep their pricing for life, and every project you build stays yours.",
  },
];

export const cta = {
  title: "Ready to build your AI MVP?",
  subtitle: "Join the waitlist and get early access plus founder pricing.",
  placeholder: "you@company.com",
  button: "Join waitlist",
};
