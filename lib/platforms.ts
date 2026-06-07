import { DOWNLOADS } from "./constants";

export type OsId =
  | "windows"
  | "macos"
  | "linux-deb"
  | "linux-rpm"
  | "linux-aur";

export type PrerequisiteMethod = {
  label: string;
  command?: string;
  href?: string;
  linkText?: string;
};

export type Prerequisite = {
  name: string;
  purpose: string;
  methods: PrerequisiteMethod[];
};

export type PlatformGuide = {
  title: string;
  steps: string[];
  prerequisites?: Prerequisite[];
  warning?: "unsigned-windows" | "unsigned-macos";
  note?: string;
};

export type PlatformOption = {
  id: OsId;
  label: string;
  description: string;
  icon: string;
  download?: {
    label: string;
    filename: string;
    url: string;
  };
  aurCommands?: string[];
  guide: PlatformGuide;
};

export const PLATFORMS: PlatformOption[] = [
  {
    id: "linux-deb",
    label: "Debian / Ubuntu",
    description: ".deb package for apt-based distros",
    icon: "🐧",
    download: {
      label: DOWNLOADS.deb.label,
      filename: DOWNLOADS.deb.filename,
      url: DOWNLOADS.deb.url,
    },
    guide: {
      title: "Install on Debian / Ubuntu",
      steps: [
        'Download <code>documind_1.0.0_amd64.deb</code> using the button above.',
        'Open a terminal in your Downloads folder and run: <code>sudo dpkg -i documind_1.0.0_amd64.deb</code>',
        'If dependency errors appear, fix them with: <code>sudo apt install -f</code>',
        "Launch Documind from your application menu.",
      ],
      note: "eSpeak NG and Poppler are declared as package dependencies — your package manager installs them automatically when you install Documind. No manual setup required.",
    },
  },
  {
    id: "linux-rpm",
    label: "Fedora / RHEL",
    description: ".rpm package for dnf and zypper",
    icon: "🐧",
    download: {
      label: DOWNLOADS.rpm.label,
      filename: DOWNLOADS.rpm.filename,
      url: DOWNLOADS.rpm.url,
    },
    guide: {
      title: "Install on Fedora / RHEL",
      steps: [
        'Download <code>documind-1.0.0-1.x86_64.rpm</code> using the button above.',
        'On Fedora, run: <code>sudo dnf install ./documind-1.0.0-1.x86_64.rpm</code>',
        'On openSUSE, run: <code>sudo zypper install ./documind-1.0.0-1.x86_64.rpm</code>',
        "Launch Documind from your application menu.",
      ],
      note: "eSpeak NG and Poppler are declared as package dependencies — dnf or zypper installs them automatically when you install Documind. No manual setup required.",
    },
  },
  {
    id: "linux-aur",
    label: "Arch Linux",
    description: "AUR package via paru or yay",
    icon: "🐧",
    aurCommands: ["paru -S documind", "yay -S documind"],
    guide: {
      title: "Install on Arch Linux",
      steps: [
        "Ensure you have an AUR helper installed (paru or yay).",
        'Run: <code>paru -S documind</code> or <code>yay -S documind</code>',
        "The helper will build and install Documind along with any dependencies.",
        "Launch Documind from your application menu.",
      ],
      note: "Arch and Arch-derived distros (Manjaro, EndeavourOS, etc.) can use the AUR package. Dependencies such as eSpeak NG and Poppler are pulled in automatically during installation.",
    },
  },
  {
    id: "windows",
    label: "Windows",
    description: "Windows 10 or later (64-bit)",
    icon: "🪟",
    download: {
      label: DOWNLOADS.exe.label,
      filename: DOWNLOADS.exe.filename,
      url: DOWNLOADS.exe.url,
    },
    guide: {
      title: "Install on Windows",
      prerequisites: [
        {
          name: "eSpeak NG",
          purpose: "Required for text-to-speech.",
          methods: [
            {
              label: "Winget",
              command: "winget install eSpeak-NG.eSpeak-NG",
            },
            {
              label: "Chocolatey",
              command: "choco install espeak",
            },
            {
              label: "Manual",
              href: "https://github.com/espeak-ng/espeak-ng/releases",
              linkText: "Download from the official eSpeak NG repository",
            },
          ],
        },
        {
          name: "Poppler",
          purpose: "Required for PDF processing (used by pdf2image).",
          methods: [
            {
              label: "Winget",
              command: "winget install -e --id oschwartz10612.Poppler",
            },
          ],
        },
      ],
      steps: [
        'Download <code>documind_0.1.0_x64-setup.exe</code> using the button above.',
        "Double-click the installer to run it.",
        'If Windows SmartScreen shows a warning, click <strong>More info</strong>, then <strong>Run anyway</strong>.',
        "Follow the setup wizard to complete installation.",
        "Launch Documind from the Start menu or desktop shortcut.",
      ],
      warning: "unsigned-windows",
    },
  },
  {
    id: "macos",
    label: "macOS",
    description: "Apple Silicon (M1/M2/M3/M4)",
    icon: "🍎",
    download: {
      label: DOWNLOADS.dmg.label,
      filename: DOWNLOADS.dmg.filename,
      url: DOWNLOADS.dmg.url,
    },
    guide: {
      title: "Install on macOS",
      prerequisites: [
        {
          name: "eSpeak NG",
          purpose: "Required for text-to-speech.",
          methods: [
            {
              label: "Homebrew",
              command: "brew install espeak-ng",
            },
          ],
        },
        {
          name: "Poppler",
          purpose: "Required for PDF processing (used by pdf2image).",
          methods: [
            {
              label: "Homebrew",
              command: "brew install poppler",
            },
          ],
        },
      ],
      steps: [
        'Download <code>documind_1.0.0_aarch64.dmg</code> using the button above.',
        "Open the DMG file and drag Documind to your Applications folder.",
        'The first time you open Documind, <strong>right-click</strong> the app in Applications and choose <strong>Open</strong>.',
        'Click <strong>Open</strong> in the dialog to confirm — this only needs to be done once.',
        "On subsequent launches, open Documind normally from Applications or Spotlight.",
      ],
      warning: "unsigned-macos",
    },
  },
  
];

export function getPlatform(id: OsId): PlatformOption {
  const platform = PLATFORMS.find((p) => p.id === id);
  if (!platform) throw new Error(`Unknown platform: ${id}`);
  return platform;
}

export function detectPlatform(): OsId {
  if (typeof navigator === "undefined") return "linux-deb";

  const ua = navigator.userAgent.toLowerCase();
  const platform = navigator.platform?.toLowerCase() ?? "";

  if (ua.includes("win") || platform.includes("win")) return "windows";
  if (ua.includes("mac") || platform.includes("mac")) return "macos";
  if (ua.includes("arch") || ua.includes("manjaro")) return "linux-aur";
  if (ua.includes("fedora") || ua.includes("rhel") || ua.includes("centos")) {
    return "linux-rpm";
  }

  return "linux-deb";
}
