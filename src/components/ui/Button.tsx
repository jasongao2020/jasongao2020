import Link from "next/link";
import type { ButtonVariant } from "@/lib/tokens";

type ButtonProps = {
  variant?: ButtonVariant;
  arrow?: boolean;
  href?: string;
  size?: "default" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[var(--accent)] text-[var(--white)] border-[var(--fg)]",
  outline: "bg-[var(--surface)] text-[var(--fg)] border-[var(--fg)]",
  dark: "bg-[var(--fg)] text-[var(--bg)] border-[var(--fg)]",
};

export default function Button({
  variant = "outline",
  arrow = false,
  href,
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 border-[length:var(--border-width)] font-bold tracking-[-0.005em] cursor-pointer transition-[box-shadow,transform] duration-[0.12s] ease [box-shadow:var(--shadow-hard-sm)] hover:[box-shadow:var(--shadow-hover)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:[box-shadow:none] active:translate-x-[2px] active:translate-y-[2px]";

  const sizeClass =
    size === "large" ? "px-8 py-[14px] text-[17px]" : "px-6 py-3 text-[15px]";

  const arrowClass = arrow ? "btn-arrow" : "";
  const classes = [base, variantStyles[variant], sizeClass, arrowClass, className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
