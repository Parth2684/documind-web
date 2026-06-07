export const VERSION = "1.0.0";

export const LINKS = {
  github: "https://github.com/Parth2684/documind-native",
  releases: "https://github.com/Parth2684/documind-native/releases/tag/v1.0.0",
  issues: "https://github.com/Parth2684/documind-native/issues",
} as const;

export const DOWNLOADS = {
  deb: {
    label: "Debian / Ubuntu (.deb)",
    filename: "documind_1.0.0_amd64.deb",
    url: "https://github.com/Parth2684/documind-native/releases/download/v1.0.0/documind_1.0.0_amd64.deb",
    platform: "linux-deb" as const,
  },
  rpm: {
    label: "Fedora / RHEL (.rpm)",
    filename: "documind-1.0.0-1.x86_64.rpm",
    url: "https://github.com/Parth2684/documind-native/releases/download/v1.0.0/documind-1.0.0-1.x86_64.rpm",
    platform: "linux-rpm" as const,
  },
  exe: {
    label: "Windows (.exe)",
    filename: "documind_0.1.0_x64-setup.exe",
    url: "https://github.com/Parth2684/documind-native/releases/download/v1.0.0/documind_0.1.0_x64-setup.exe",
    platform: "windows" as const,
  },
  dmg: {
    label: "macOS Apple Silicon (.dmg)",
    filename: "documind_1.0.0_aarch64.dmg",
    url: "https://github.com/Parth2684/documind-native/releases/download/v1.0.0/documind_1.0.0_aarch64.dmg",
    platform: "macos" as const,
  },
} as const;

export type Platform = (typeof DOWNLOADS)[keyof typeof DOWNLOADS]["platform"];

export const FEATURES = [
  {
    icon: "🔒",
    title: "Secure PIN Authentication",
    description:
      "Local PIN-protected vault powered by IOTA Stronghold. Sensitive data stays encrypted at rest with no cloud account required.",
  },
  {
    icon: "📄",
    title: "AI-Powered OCR",
    description:
      "Extract text from PDFs and images using Google Gemini. Modes for documents, notes, presentations, code, and general text.",
  },
  {
    icon: "🎙️",
    title: "Local Text-to-Speech",
    description:
      "27 Kokoro ONNX voices run entirely on your machine. Adjustable speed, no cloud TTS, no text sent externally.",
  },
  {
    icon: "🔑",
    title: "Encrypted API Keys",
    description:
      "Gemini API keys are encrypted inside Stronghold vaults, decrypted only when needed, never stored in plaintext.",
  },
  {
    icon: "📜",
    title: "Activity History",
    description:
      "Track OCR and TTS operations, view extracted text, open generated audio, and delete records individually.",
  },
  {
    icon: "🛡️",
    title: "Privacy First",
    description:
      "Local-first architecture with no telemetry, no tracking, and no user accounts. You stay in control of your data.",
  },
] as const;
