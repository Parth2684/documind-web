import { LINKS, VERSION } from "@/lib/constants";
import { GithubIcon } from "./icons";
import { Logo } from "./logo";

export function ReleaseNotes() {
  return (
    <section className="border-t border-white/5 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            What&apos;s new in v{VERSION}
          </h2>
          <p className="text-muted">First stable release — privacy-focused document tools.</p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-surface p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold text-accent">📄 AI-Powered OCR</h3>
              <p className="text-sm leading-relaxed text-muted">
                Extract text from PDFs and images using Google Gemini. OCR modes
                for documents, notes, presentations, code, and general text.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-accent">🎙️ Local Text-to-Speech</h3>
              <p className="text-sm leading-relaxed text-muted">
                27 Kokoro ONNX voices with adjustable playback speed. Runs
                entirely on your machine — no cloud TTS services.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-accent">🔒 Privacy-First Security</h3>
              <p className="text-sm leading-relaxed text-muted">
                PIN-protected IOTA Stronghold vaults, encrypted API key storage,
                local-first architecture, no telemetry, and no tracking.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-accent">🖥️ Cross-Platform</h3>
              <p className="text-sm leading-relaxed text-muted">
                Available for Windows, macOS, and Linux. Built with Rust, Tauri,
                React, TypeScript, SQLite, and Kokoro ONNX Runtime.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/5 pt-6">
            <h3 className="mb-3 font-semibold">Getting started</h3>
            <p className="text-sm leading-relaxed text-muted">
              After installing, launch Documind and create a PIN to protect your
              local vault. To use OCR, open <strong className="text-foreground">Manage Keys</strong> and
              add a Gemini API key from{" "}
              <a
                href="https://aistudio.google.com/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Google AI Studio
              </a>
              . Keys are encrypted and stored inside your Stronghold vault.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <div>
            <p className="font-semibold">Documind</p>
            <p className="text-sm text-muted">v{VERSION}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
            Source code
          </a>
          <a
            href={LINKS.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Releases
          </a>
          <a
            href={LINKS.issues}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Report an issue
          </a>
        </div>

        <p className="text-sm text-muted">
          No telemetry · No tracking · Privacy first
        </p>
      </div>
    </footer>
  );
}
