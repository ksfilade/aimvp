import Link from "next/link";
import { nav, site } from "@/content/landing";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/80 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav className="hidden gap-8 text-sm text-foreground/70 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Get started
        </a>
      </div>
    </header>
  );
}
