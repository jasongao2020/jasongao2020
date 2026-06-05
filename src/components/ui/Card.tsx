import type { AccentColor } from "@/lib/tokens";

type CardProps = {
  accent?: AccentColor;
  flat?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const accentColors: Record<AccentColor, string> = {
  blue: "var(--accent-blue)",
  yellow: "var(--accent-yellow)",
  coral: "var(--accent-coral)",
  green: "var(--accent-green)",
  purple: "var(--accent-purple)",
  pink: "var(--accent-pink)",
};

export default function Card({ accent, flat = false, className = "", style, children }: CardProps) {
  if (flat) {
    return (
      <div className={`bg-transparent border-none p-0 shadow-none ${className}`} style={style}>
        {children}
      </div>
    );
  }

  const cardStyle: React.CSSProperties = {
    ...style,
    ...(accent ? { "--card-accent": accentColors[accent] } as React.CSSProperties : {}),
  };

  return (
    <div
      className={`bg-[var(--surface)] border-[length:var(--border-width)] border-[var(--fg)] p-7 [box-shadow:var(--shadow-hard-sm)] transition-[box-shadow,transform] duration-[0.15s] ease hover:[box-shadow:var(--shadow-hover)] hover:translate-x-[-2px] hover:translate-y-[-2px] ${accent ? "pt-11 relative" : ""} ${className}`}
      style={cardStyle}
    >
      {accent && (
        <div
          className="absolute top-7 left-7 w-[14px] h-[14px] border-[length:var(--border-width)] border-[var(--fg)]"
          style={{ background: accentColors[accent] }}
        />
      )}
      {children}
    </div>
  );
}