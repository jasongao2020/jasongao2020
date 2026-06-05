import type { AccentColor } from "@/lib/tokens";

type TagProps = {
  /** hero-tag | service-tag | tool-tag */
  type?: "hero" | "service" | "tool";
  accent?: boolean;
  color?: AccentColor;
  className?: string;
  children: React.ReactNode;
};

const heroColorMap: Record<string, string> = {
  alt: "bg-[var(--accent-coral)] text-[var(--white)]",
  blue: "bg-[var(--accent-blue)] text-[var(--white)]",
};

const serviceColorMap: Record<string, string> = {
  alt: "bg-[var(--accent-blue)] text-[var(--white)]",
};

export default function Tag({ type = "hero", accent = false, color, className = "", children }: TagProps) {
  const colorKey = color ? String(color) : "";

  if (type === "hero") {
    const colorClass = colorKey ? (heroColorMap[colorKey] || "") : "";
    return (
      <span
        className={`text-xs font-bold tracking-[0.04em] px-[10px] py-1 border-[length:var(--border-width)] border-[var(--fg)] bg-[var(--accent-yellow)] text-[var(--fg)] ${colorClass} ${className}`}
      >
        {children}
      </span>
    );
  }

  if (type === "service") {
    const colorClass = colorKey ? (serviceColorMap[colorKey] || "") : "";
    return (
      <span
        className={`text-xs font-semibold px-[10px] py-[3px] border-[length:var(--border-width)] border-[var(--fg)] bg-[var(--accent-yellow)] text-[var(--fg)] ${colorClass} ${className}`}
      >
        {children}
      </span>
    );
  }

  // tool-tag
  return (
    <span
      className={`inline-flex items-center justify-center px-4 py-[10px] text-sm font-bold border-[length:var(--border-width)] border-[var(--fg)] bg-[var(--surface)] text-[var(--fg)] [box-shadow:var(--shadow-hard-sm)] transition-[box-shadow,transform] duration-[0.12s] ease cursor-default hover:[box-shadow:3px_3px_0_var(--fg)] hover:translate-x-[-1px] hover:translate-y-[-1px] ${accent ? "bg-[var(--accent-yellow)]" : ""} ${className}`}
    >
      {children}
    </span>
  );
}