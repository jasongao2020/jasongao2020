import type { EyebrowVariant } from "@/lib/tokens";

type EyebrowProps = {
  variant?: EyebrowVariant;
  className?: string;
  children: React.ReactNode;
};

const variantStyles: Record<EyebrowVariant, string> = {
  accent: "bg-[var(--accent)] text-[var(--white)]",
  yellow: "bg-[var(--accent-yellow)] text-[var(--fg)]",
  coral: "bg-[var(--accent-coral)] text-[var(--white)]",
  green: "bg-[var(--accent-green)] text-[var(--white)]",
};

export default function Eyebrow({ variant = "accent", className = "", children }: EyebrowProps) {
  return (
    <span
      className={`inline-block font-mono text-xs font-bold tracking-[0.1em] uppercase px-3 py-1 mb-[var(--gap-md)] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}