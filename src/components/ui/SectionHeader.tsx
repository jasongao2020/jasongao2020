import Eyebrow from "./Eyebrow";
import type { EyebrowVariant } from "@/lib/tokens";

type SectionHeaderProps = {
  eyebrow: string;
  eyebrowVariant?: EyebrowVariant;
  title: string;
  star?: boolean;
  lead?: string;
  center?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  eyebrowVariant = "accent",
  title,
  star = false,
  lead,
  center = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-[var(--gap-xl)] max-w-[48ch] ${center ? "text-center mx-auto" : ""} ${className}`}
    >
      <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow>
      <h2>
        {title}
        {star && <span className="deco-star">★</span>}
      </h2>
      {lead && <p className="lead mt-2">{lead}</p>}
    </div>
  );
}