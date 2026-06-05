"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  /** 子元素交错入场 */
  stagger?: boolean;
  className?: string;
  /** 触发阈值：0-1，元素可见比例达到此值后触发 */
  threshold?: number;
};

export default function ScrollReveal({
  children,
  stagger = false,
  className = "",
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold, rootMargin: "0px 0px -24px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const base = stagger
    ? `reveal-stagger ${visible ? "reveal-stagger-visible" : ""}`
    : `reveal ${visible ? "reveal-visible" : ""}`;

  return (
    <div ref={ref} className={`${base} ${className}`}>
      {children}
    </div>
  );
}