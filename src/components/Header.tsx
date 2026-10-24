import Link from "next/link";
import { nav, site } from "@/content/landing";
import { Logo } from "./Mark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label={site.name}>
          <Logo />
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={site.bookingUrl}
            className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-cream transition-opacity hover:opacity-85"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
