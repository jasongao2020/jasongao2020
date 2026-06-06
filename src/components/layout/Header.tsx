"use client";

import { useState } from "react";
import Container from "./Container";

const navItems = [
  { href: "#about", label: "关于" },
  { href: "#work", label: "工作" },
  { href: "#services", label: "服务" },
  { href: "#thoughts", label: "思考" },
  { href: "#cooperate", label: "合作" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-10 bg-[var(--bg)] border-b-[length:var(--border-width)] border-b-[var(--fg)]">
      <Container className="flex items-center justify-between py-[14px]">
        <span className="font-display text-[22px] font-black tracking-[-0.02em]">
          GAO PING
        </span>

        {/* 桌面导航 */}
        <nav className="hidden sm:flex gap-[var(--gap-lg)]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-semibold text-[var(--fg)] relative
                         after:content-[''] after:absolute after:bottom-[-2px] after:left-0
                         after:w-full after:h-[2px] after:bg-[var(--accent)]
                         after:scale-x-0 after:transition-transform after:duration-[0.15s]
                         hover:after:scale-x-100
                         focus-visible:outline-[3px] focus-visible:outline-[var(--accent)] focus-visible:outline-offset-[3px]"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 汉堡菜单按钮 */}
        <button
          className="flex sm:hidden flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer bg-none border-none p-1"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
          aria-expanded={open}
        >
          <span
            className={`block w-full h-[3px] bg-[var(--fg)] transition-transform duration-[0.2s] ease ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-full h-[3px] bg-[var(--fg)] transition-opacity duration-[0.2s] ease ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-full h-[3px] bg-[var(--fg)] transition-transform duration-[0.2s] ease ${
              open ? "translate-y-[-8px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {/* 移动端下拉菜单 */}
      <nav
        className={`sm:hidden flex-col px-[var(--gutter)] pb-5 border-b-[length:var(--border-width)] border-[var(--fg)] bg-[var(--bg)] ${
          open ? "flex" : "hidden"
        }`}
      >
        {navItems.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className={`py-3 text-base ${
              i < navItems.length - 1 ? "border-b border-[var(--border)]" : ""
            }`}
            onClick={handleNavClick}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}