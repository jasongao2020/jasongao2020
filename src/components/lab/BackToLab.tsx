"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

interface Props {
  href?: string;
  label?: string;
}

export default function BackToLab({ href = "/lab", label = "返回实验作品" }: Props) {
  const router = useRouter();
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goBack = useCallback(() => {
    router.push(href);
  }, [router, href]);

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!touchStart.current) return;
      const dx = e.changedTouches[0].clientX - touchStart.current.x;
      const dy = e.changedTouches[0].clientY - touchStart.current.y;
      if (dx > 80 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        goBack();
      }
      touchStart.current = null;
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [goBack]);

  return (
    <div className="lg:hidden sticky top-0 z-30 flex items-center bg-[var(--bg)] border-b-[length:var(--border-width)] border-b-[var(--border)] px-4 py-2">
      <button
        onClick={goBack}
        className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[var(--muted)] hover:text-[var(--fg)] transition-colors cursor-pointer bg-transparent border-none p-0"
      >
        <span className="text-[18px] leading-none">←</span>
        <span>{label}</span>
      </button>
    </div>
  );
}
