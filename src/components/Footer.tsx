import { site } from "@/content/landing";
import { Mark } from "./Mark";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-6 text-sm sm:px-6">
        <p className="flex items-center gap-2">
          <Mark className="h-4 w-4 text-cream" />
          {site.name} · {site.domain}
        </p>
        <p>
          © <CurrentYear /> {site.name}
        </p>
      </div>
    </footer>
  );
}
