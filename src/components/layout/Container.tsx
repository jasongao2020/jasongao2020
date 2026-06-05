type ContainerProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default function Container({ className = "", style, children }: ContainerProps) {
  return (
    <div
      className={`max-w-[var(--container)] mx-auto px-[var(--gutter)] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}