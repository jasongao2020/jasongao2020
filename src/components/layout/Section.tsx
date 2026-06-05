type SectionProps = {
  id?: string;
  noBorder?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default function Section({ id, noBorder = false, className = "", style, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-[clamp(56px,10vw,100px)] ${noBorder ? "" : "border-t-[length:var(--border-width)] border-t-[var(--fg)]"} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}