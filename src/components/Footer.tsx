import { nav, site } from "@/content/landing";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-foreground/60 sm:flex-row sm:px-6">
        <p>
          © <CurrentYear /> {site.name}. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-6">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
