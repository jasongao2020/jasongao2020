/**
 * Neo Brutalism 设计令牌
 * 所有设计变量集中管理，组件通过 CSS 变量或 Tailwind 类名引用。
 */

export const colors = {
  bg: "#FFFDF5",
  surface: "#FFFFFF",
  fg: "#111111",
  muted: "#5C5C5C",
  border: "#111111",
  white: "#ffffff",
  accent: {
    blue: "#2F5EEB",
    yellow: "#FFD600",
    coral: "#FF5E3A",
    green: "#00C853",
    purple: "#7C3AED",
    pink: "#FF2D78",
    DEFAULT: "#2F5EEB",
  },
} as const;

export const fonts = {
  display: ["Impact", "Arial Black", "Helvetica Neue", "system-ui", "-apple-system", "sans-serif"],
  body: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "PingFang SC", "Microsoft YaHei", "system-ui", "sans-serif"],
  mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "Menlo", "monospace"],
} as const;

export const fontSizes = {
  hero: "clamp(52px, 7vw, 96px)",
  h1: "clamp(40px, 5.5vw, 72px)",
  h2: "clamp(28px, 3.5vw, 44px)",
  h3: "22px",
  lead: "18px",
  body: "16px",
  meta: "13px",
} as const;

export const spacing = {
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "56px",
  "2xl": "96px",
  container: "1120px",
  gutter: "28px",
} as const;

export const shadows = {
  hard: "4px 4px 0 #111111",
  hardSm: "3px 3px 0 #111111",
  hover: "6px 6px 0 #111111",
} as const;

export const borderRadius = {
  sm: "2px",
  md: "4px",
  lg: "4px",
} as const;

export type ButtonVariant = "primary" | "outline" | "dark";
export type AccentColor = "blue" | "yellow" | "coral" | "green" | "purple" | "pink";
export type EyebrowVariant = "accent" | "yellow" | "coral" | "green";