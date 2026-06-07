import { LINKS } from "@/lib/constants";
import { GithubIcon } from "./icons";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="transition-opacity hover:opacity-90">
          <Logo size="md" showWordmark />
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="#features"
            className="hidden text-muted transition-colors hover:text-foreground sm:inline"
          >
            Features
          </a>
          <a
            href="#download"
            className="hidden text-muted transition-colors hover:text-foreground sm:inline"
          >
            Get Documind
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-muted transition-colors hover:border-white/20 hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
