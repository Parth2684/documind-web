import Image from "next/image";

const sizes = {
  sm: 32,
  md: 48,
  lg: 128,
  xl: 160,
} as const;

type LogoProps = {
  size?: keyof typeof sizes;
  showWordmark?: boolean;
  className?: string;
};

export function Logo({ size = "sm", showWordmark = false, className = "" }: LogoProps) {
  const dimension = sizes[size];

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="Documind"
        width={dimension}
        height={dimension}
        className="rounded-xl"
        priority={size === "lg" || size === "xl"}
      />
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight">Documind</span>
      )}
    </span>
  );
}
