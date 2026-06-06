"use client";

import { useState } from "react";
import Button from "./Button";

export default function WechatContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[var(--surface)] border-[length:var(--border-width)] border-[var(--fg)] p-6 [box-shadow:var(--shadow-hover)] max-w-[280px] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-display text-lg font-black m-0 mb-1">微信</p>
            <p className="text-sm text-[var(--muted)] m-0 mb-4">
              扫码或搜索微信号添加
            </p>
            <img
              src="/wechat-qr.jpg"
              alt="微信二维码"
              className="w-40 h-40 mx-auto border-[length:var(--border-width)] border-[var(--fg)]"
            />
          </div>
        </div>
      )}

      <span onClick={() => setOpen(true)} className="inline-block">
        <Button variant="dark" arrow size="large">
          与我联系
        </Button>
      </span>
    </>
  );
}