"use client";

import { useState } from "react";

export default function WechatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 弹出层 */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[var(--surface)] border-[length:var(--border-width)] border-[var(--fg)] p-6 [box-shadow:var(--shadow-hover)] max-w-[280px] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-display text-lg font-black m-0 mb-1">微信交流</p>
            <p className="text-sm text-[var(--muted)] m-0 mb-4">
              扫码或搜索微信号添加
            </p>

            <img
              src="/wechat-qr.jpg"
              alt="微信二维码"
              className="w-40 h-40 mx-auto mb-3 border-[length:var(--border-width)] border-[var(--fg)]"
            />

            <p className="font-mono text-sm font-bold m-0 mb-1">13806176358</p>
            <p
              className="text-[11px] text-[var(--muted)] m-0 cursor-pointer hover:text-[var(--accent)]"
              onClick={() => {
                navigator.clipboard.writeText("13806176358");
              }}
            >
              点击复制微信号
            </p>
          </div>
        </div>
      )}

      {/* 浮动按钮 */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-[120px] right-4 z-50 flex items-center gap-2 px-4 py-[10px] bg-[var(--accent-green)] text-[var(--fg)] font-bold text-sm border-[length:var(--border-width)] border-[var(--fg)] [box-shadow:var(--shadow-hard-sm)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:[box-shadow:var(--shadow-hover)] transition-[box-shadow,transform] duration-[0.15s] ease cursor-pointer"
        aria-label="微信交流"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.742 2.04 2.439 3.379 4.4 4.099a6.9 6.9 0 0 0 2.122.338c.644 0 1.285-.09 1.92-.262.17-.053.352-.087.527-.04l1.588.92.08.04c.18 0 .29-.158.29-.29a.58.58 0 0 0-.048-.2l-.38-1.34a.575.575 0 0 1 .18-.6c1.58-1.302 2.63-3.056 2.63-4.999 0-3.114-2.78-5.672-6.249-5.672zm-2.268 3.003c.535 0 .97.458.97 1.022a.997.997 0 0 1-.97 1.022.998.998 0 0 1-.97-1.022c0-.564.435-1.022.97-1.022zm4.55 0c.535 0 .97.458.97 1.022a.997.997 0 0 1-.97 1.022.997.997 0 0 1-.97-1.022c0-.564.434-1.022.97-1.022z"/>
        </svg>
        微信交流
      </button>
    </>
  );
}