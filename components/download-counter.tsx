"use client";
 
import { useEffect, useState } from "react";
 
interface GitHubAsset {
  download_count: number;
}
 
interface GitHubRelease {
  assets: GitHubAsset[];
}
 
export function DownloadCounter() {
  const [totalDownloads, setTotalDownloads] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    async function fetchDownloads() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Parth2684/documind-native/releases/latest"
        );
        const data: GitHubRelease = await response.json();
 
        const total = data.assets.reduce(
          (sum, asset) => sum + asset.download_count,
          0
        );
 
        setTotalDownloads(total);
      } catch (error) {
        console.error("Failed to fetch download count:", error);
        setTotalDownloads(null);
      } finally {
        setIsLoading(false);
      }
    }
 
    fetchDownloads();
  }, []);
 
  if (isLoading || totalDownloads === null) {
    return null;
  }
 
  return (
    <div className="flex items-center gap-2 text-sm text-muted">
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span className="font-medium text-foreground">{totalDownloads.toLocaleString()}</span>
      <span>Downloads</span>
    </div>
  );
}