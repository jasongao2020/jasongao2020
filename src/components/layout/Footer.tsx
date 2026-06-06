import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-[var(--gap-lg)] bg-[var(--fg)] text-[var(--bg)] border-t-[length:var(--border-width)] border-t-[var(--fg)] text-center">
      <Container>
        <span className="font-display text-[18px] font-black">高平</span>
        <span className="text-[13px] opacity-50 mx-3">·</span>
        <span className="text-[13px] opacity-50">
          AI 时代的一人公司实践者 · 让 AI 成为普通人的超级生产力
        </span>
        <p className="text-xs opacity-30 mt-[var(--gap-sm)]">
          © 2026 高平 · 保留所有权利
        </p>
      </Container>
    </footer>
  );
}