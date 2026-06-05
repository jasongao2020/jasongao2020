"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type HighlightTextProps = {
  children: ReactNode;
  /** 蓝色高亮（深色文字变白） */
  blue?: boolean;
  className?: string;
};

export default function HighlightText({
  children,
  blue = false,
  className = "",
}: HighlightTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cls = blue
    ? `highlight-blue ${visible ? "highlight-anim-visible" : "highlight-anim"}`
    : `highlight ${visible ? "highlight-anim-visible" : "highlight-anim"}`;

  return (
    <span ref={ref} className={`${cls} ${className}`}>
      {children}
    </span>
  );
}