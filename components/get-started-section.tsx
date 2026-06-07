"use client";

import { useEffect, useState } from "react";
import { LINKS, VERSION } from "@/lib/constants";
import {
  detectPlatform,
  getPlatform,
  PLATFORMS,
  type OsId,
  type Prerequisite,
} from "@/lib/platforms";
import { DownloadIcon, ExternalLinkIcon, ShieldIcon } from "./icons";
import { CodeBlock } from "./code-block";

function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
            {i + 1}
          </span>
          <span
            className="pt-0.5 text-muted [&_code]:rounded [&_code]:bg-background [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_code]:text-accent [&_strong]:text-foreground"
            dangerouslySetInnerHTML={{ __html: step }}
          />
        </li>
      ))}
    </ol>
  );
}

function PrerequisitesList({ prerequisites }: { prerequisites: Prerequisite[] }) {
  return (
    <div className="mb-8 space-y-6">
      <div>
        <h4 className="font-semibold">Prerequisites</h4>
        <p className="mt-1 text-sm text-muted">
          Install these dependencies before running Documind.
        </p>
      </div>

      {prerequisites.map((prerequisite) => (
        <div
          key={prerequisite.name}
          className="rounded-xl border border-white/5 bg-background p-5"
        >
          <h5 className="font-medium">{prerequisite.name}</h5>
          <p className="mt-1 text-sm text-muted">{prerequisite.purpose}</p>

          <div className="mt-4 space-y-3">
            {prerequisite.methods.map((method) => (
              <div key={method.label}>
                <p className="mb-1.5 text-sm font-medium text-foreground">
                  {method.label}
                </p>
                {method.command && <CodeBlock code={method.command} />}
                {method.href && method.linkText && (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    {method.linkText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function UnsignedWarning({ type }: { type: "unsigned-windows" | "unsigned-macos" }) {
  if (type === "unsigned-windows") {
    return (
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
        <div className="mb-3 flex items-center gap-2 text-amber-400">
          <ShieldIcon className="h-5 w-5" />
          <h4 className="font-semibold">Unsigned app notice</h4>
        </div>
        <div className="space-y-3 text-sm leading-relaxed text-muted">
          <p>
            Documind is <strong className="text-foreground">not code-signed</strong>.
            Windows SmartScreen may block the installer because it cannot verify the
            publisher. This is expected for independent open-source software.
          </p>
          <p>
            If the installer is blocked before you can click &quot;More info&quot;, right-click
            the downloaded file, choose <strong className="text-foreground">Properties</strong>,
            check <strong className="text-foreground">Unblock</strong> at the bottom if
            present, click Apply, then run the installer again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
      <div className="mb-3 flex items-center gap-2 text-amber-400">
        <ShieldIcon className="h-5 w-5" />
        <h4 className="font-semibold">Unsigned app notice</h4>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-muted">
        <p>
          Documind is <strong className="text-foreground"> not notarized</strong>&nbsp;with
          Apple. macOS Gatekeeper will block the app on first launch with a message
          like &quot;cannot be opened because the developer cannot be verified.&quot;
        </p>
        <p>
          <strong className="text-foreground">Right-click → Open</strong> is the
          recommended way to bypass this on first launch. Alternatively, go to{" "}
          <strong className="text-foreground">System Settings → Privacy &amp; Security</strong>{" "}
          and click <strong className="text-foreground">Open Anyway</strong> next to
          the Documind security message.
        </p>
        <p>If issues persist, remove the quarantine attribute in Terminal:</p>
        <CodeBlock code="xattr -cr /Applications/documind.app" />
        <p>
          This release is built for{" "}
          <strong className="text-foreground">Apple Silicon (M1/M2/M3/M4)</strong> only.
        </p>
      </div>
    </div>
  );
}

export function GetStartedSection() {
  const [selected, setSelected] = useState<OsId | null>(null);
  const [detected, setDetected] = useState<OsId>("linux-deb");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const platform = detectPlatform();
    setDetected(platform);
    setSelected(platform);
    setMounted(true);
  }, []);

  const platform = selected ? getPlatform(selected) : null;

  return (
    <section id="download" className="border-t border-white/5 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Get Documind
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Version {VERSION} is available for Windows, macOS, and Linux. Select
            your operating system to see download and installation instructions.
            {mounted && (
              <>
                {" "}
                We pre-selected{" "}
                <span className="font-medium text-foreground">
                  {getPlatform(detected).label}
                </span>{" "}
                based on your device.
              </>
            )}
          </p>
        </div>

        <div className="mb-10">
          <p className="mb-4 text-sm font-medium text-muted">
            1. Select your operating system
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORMS.map((option) => {
              const isSelected = selected === option.id;
              const isDetected = mounted && detected === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelected(option.id)}
                  className={`rounded-xl border p-4 text-left transition-all ${
                    isSelected
                      ? "border-accent bg-accent/5 ring-1 ring-accent/30"
                      : "border-white/5 bg-surface hover:border-white/15 hover:bg-surface-hover"
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-2xl">{option.icon}</span>
                    {isDetected && (
                      <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
                        Detected
                      </span>
                    )}
                  </div>
                  <p className="font-semibold">{option.label}</p>
                  <p className="mt-1 text-sm text-muted">{option.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {platform && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/5 bg-surface p-6 md:p-8">
              <p className="mb-4 text-sm font-medium text-muted">
                2. Download for {platform.label}
              </p>

              {platform.download ? (
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-lg font-semibold">{platform.download.label}</p>
                    <p className="mt-1 font-mono text-sm text-muted">
                      {platform.download.filename}
                    </p>
                  </div>
                  <a
                    href={platform.download.url}
                    className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-8 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
                  >
                    <DownloadIcon className="h-5 w-5" />
                    Download
                  </a>
                </div>
              ) : (
                <div>
                  <p className="mb-4 text-muted">
                    Documind is available in the AUR. Install with your preferred helper:
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    {platform.aurCommands?.map((command) => (
                      <CodeBlock key={command} code={command} className="flex-1" />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-white/5 bg-surface p-6 md:p-8">
              <p className="mb-6 text-sm font-medium text-muted">
                3. Install on {platform.label}
              </p>
              <h3 className="mb-6 text-xl font-semibold">{platform.guide.title}</h3>

              {platform.guide.prerequisites && (
                <PrerequisitesList prerequisites={platform.guide.prerequisites} />
              )}

              {platform.guide.prerequisites && (
                <h4 className="mb-4 font-semibold">Install Documind</h4>
              )}

              <StepList steps={platform.guide.steps} />

              {platform.guide.warning && (
                <div className="mt-8">
                  <UnsignedWarning type={platform.guide.warning} />
                </div>
              )}

              {platform.guide.note && (
                <p className="mt-6 rounded-lg border border-accent/20 bg-accent/5 px-4 py-3 text-sm text-muted">
                  {platform.guide.note}
                </p>
              )}
            </div>
          </div>
        )}

        <p className="mt-10 text-center text-sm text-muted">
          All releases are hosted on{" "}
          <a
            href={LINKS.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline"
          >
            GitHub Releases
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
