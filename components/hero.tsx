import { LINKS, VERSION } from "@/lib/constants";
import { DownloadIcon, GithubIcon } from "./icons";
import { Logo } from "./logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(52,211,153,0.15),transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <Logo size="xl" />
        </div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          v{VERSION} — First Stable Release
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl md:leading-[1.1]">
          Transform documents with{" "}
          <span className="bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent">
            privacy-first AI
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Documind is a native desktop app for AI-powered OCR and fully local
          text-to-speech. Extract text from PDFs and images, or convert text
          into natural speech — all while keeping your data on your machine.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#download"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-8 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
          >
            <DownloadIcon className="h-5 w-5" />
            Get Documind
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 px-8 text-base font-medium text-foreground transition-colors hover:border-white/20 hover:bg-white/5"
          >
            <GithubIcon className="h-5 w-5" />
            View on GitHub
          </a>
        </div>

        <p className="mt-8 text-sm text-muted">
          Windows · macOS · Linux · No telemetry · No tracking
        </p>
      </div>
    </section>
  );
}
