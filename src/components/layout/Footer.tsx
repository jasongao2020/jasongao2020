import Container from "./Container";

const contacts = [
  { label: "微信", value: "13806176358" },
  { label: "手机", value: "+86 138-0617-6358" },
  { label: "邮箱", value: "gp771112@gmail.com" },
  { label: "公众号", value: "高平 AI 笔记（预留）" },
  { label: "视频号", value: "高平 AI（预留）" },
  { label: "小红书 / 知乎", value: "@gaoping-ai（预留）" },
];

export default function Footer() {
  return (
    <footer className="py-[var(--gap-xl)] bg-[var(--fg)] text-[var(--bg)] border-t-[length:var(--border-width)] border-t-[var(--fg)]">
      <Container>
        <div className="flex items-baseline justify-between flex-wrap gap-[var(--gap-md)]">
          <span className="font-display text-[22px] font-black">高平</span>
          <span className="text-[13px] opacity-60">
            AI 时代的一人公司实践者 · 让 AI 成为普通人的超级生产力
          </span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[var(--gap-md)] mt-[var(--gap-lg)]">
          {contacts.map((c) => (
            <div
              key={c.label}
              className="font-mono text-[13px] p-[10px_14px] border-[length:var(--border-width)] border-[var(--bg)] text-[var(--bg)]"
            >
              <span className="text-[11px] opacity-50 block mb-[2px]">{c.label}</span>
              <span>{c.value}</span>
            </div>
          ))}
        </div>

        <p className="text-xs opacity-40 mt-[var(--gap-xl)]">
          © 2026 高平 · 保留所有权利
        </p>
      </Container>
    </footer>
  );
}