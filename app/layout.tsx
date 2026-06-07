import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://documind.app"),
  title: "Documind — Privacy-First Document AI",
  description:
    "Download Documind, a native desktop app for AI-powered OCR and fully local text-to-speech. Extract text from PDFs and images, convert text to speech — all on your machine.",
  keywords: [
    "OCR",
    "text-to-speech",
    "PDF",
    "document AI",
    "privacy",
    "local",
    "offline",
    "Windows",
    "macOS",
    "Linux",
    "desktop app",
    "AI",
    "text extraction",
    "speech synthesis",
    "eSpeak NG",
    "Kokoro",
    "Gemini",
  ],
  authors: [{ name: "Parth2684" }],
  creator: "Parth2684",
  publisher: "Parth2684",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Documind — Privacy-First Document AI",
    description:
      "AI-powered OCR and local text-to-speech for Windows, macOS, and Linux.",
    type: "website",
    images: ["/logo.png"],
    siteName: "Documind",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documind — Privacy-First Document AI",
    description:
      "AI-powered OCR and local text-to-speech for Windows, macOS, and Linux.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verify",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Documind",
    description:
      "Privacy-first document AI app for OCR and text-to-speech. Extract text from PDFs and images, convert text to speech — all locally on your machine.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: ["Windows", "macOS", "Linux"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Parth2684",
      url: "https://github.com/Parth2684",
    },
    publisher: {
      "@type": "Organization",
      name: "Parth2684",
      url: "https://github.com/Parth2684",
    },
    downloadUrl: "https://github.com/Parth2684/documind-native/releases",
    softwareVersion: "1.0.0",
    license: "https://github.com/Parth2684/documind-native/blob/main/LICENSE",
    featureList: [
      "AI-powered OCR with Google Gemini",
      "Local text-to-speech with 27 Kokoro voices",
      "Secure PIN authentication with IOTA Stronghold",
      "Encrypted API keys",
      "Activity history tracking",
      "No telemetry or tracking",
    ],
    keywords:
      "OCR, text-to-speech, PDF, document AI, privacy, local, offline, Windows, macOS, Linux, desktop app",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
