"use client";

import { useRef, useState, useCallback } from "react";

type VideoPlayerProps = {
  src: string;
  /** 窗口装饰圆点颜色（可选，默认红黄绿） */
  dots?: string[];
};

export default function VideoPlayer({ src, dots }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    const el = videoRef.current?.closest(".video-container") as HTMLElement | null;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  const dotColors = dots ?? ["#FF5E3A", "#FFD600", "#00C853"];

  return (
    <div
      className="video-container relative bg-[var(--fg)] border-[length:var(--border-width)] border-[var(--fg)] overflow-hidden cursor-pointer group"
      style={{ borderRadius: "16px", boxShadow: "8px 8px 0 var(--fg)" }}
      onClick={toggleFullscreen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") toggleFullscreen(); }}
      title="点击全屏播放"
    >
      {/* 顶部栏装饰 */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[var(--fg)]">
        {dotColors.map((color, i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full shrink-0"
            style={{ backgroundColor: color }}
          />
        ))}
        {/* 全屏提示 */}
        <span className="ml-auto text-[11px] font-semibold text-[var(--bg)] opacity-0 group-hover:opacity-60 transition-opacity duration-200">
          点击全屏
        </span>
      </div>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block"
      />
    </div>
  );
}
