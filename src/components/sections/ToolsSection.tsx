import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const steps = [
  { num: "01", title: "信息获取", tool: "Perplexity", desc: "AI 全网搜索，快速锁定关键信息源" },
  { num: "02", title: "知识整理", tool: "NotebookLM", desc: "自动归纳梳理，构建结构化知识库" },
  { num: "03", title: "深度分析", tool: "Claude", desc: "多角度推理，挖掘深层洞察与关联" },
  { num: "04", title: "方案输出", tool: "PPT / Gamma", desc: "一键生成专业演示与可视化报告" },
  { num: "05", title: "最终交付", tool: null, desc: "结果验证、迭代打磨、持续追踪优化" },
];

export default function ToolsSection() {
  return (
    <Section id="workflow">
      <Container>
        <SectionHeader
          eyebrow="03 · 实验室"
          eyebrowVariant="accent"
          title="我的 AI 工作流"
          lead="从信息到决策，AI 驱动的五步方法论"
        />

        {/* ===== 桌面端 ===== */}
        <div className="hidden md:flex items-start gap-0">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-start min-w-0 flex-1">
              <Card className="!p-5 !shadow-[var(--shadow-hard-sm)] hover:!shadow-[var(--shadow-hover)] w-full">
                <span className="font-mono text-[11px] font-bold text-[var(--muted)] tracking-[0.08em]">
                  {s.num}
                </span>
                <h4 className="font-display text-[17px] font-extrabold mt-1 mb-2">
                  {s.title}
                </h4>
                <span className="highlight text-[11px] font-bold">
                  {s.tool ?? "YOU"}
                </span>
                <p className="text-xs text-[var(--muted)] mt-2 m-0 leading-[1.5]">
                  {s.desc}
                </p>
              </Card>

              {/* 箭头 */}
              {i < steps.length - 1 && (
                <div className="flex items-center shrink-0 px-1.5 text-[var(--fg)] opacity-30 font-display text-[22px] font-black select-none mt-6">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ===== 移动端 ===== */}
        <div className="md:hidden">
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-4">
              {/* 左边序号+连线 */}
              <div className="flex flex-col items-center shrink-0 w-10">
                <div className="w-9 h-9 bg-[var(--fg)] text-[var(--bg)] font-display text-[13px] font-black flex items-center justify-center border-[length:var(--border-width)] border-[var(--fg)]">
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[2px] flex-1 bg-[var(--fg)] opacity-20 my-1 min-h-[24px]" />
                )}
              </div>

              {/* 右边卡片 */}
              <Card className="!p-4 !shadow-[var(--shadow-hard-sm)] flex-1 mb-3">
                <h4 className="font-display text-[16px] font-extrabold m-0 mb-1">
                  {s.title}
                </h4>
                <span className="highlight text-[11px] font-bold">
                  {s.tool ?? "YOU"}
                </span>
                <p className="text-xs text-[var(--muted)] mt-2 m-0">{s.desc}</p>
              </Card>
            </div>
          ))}
        </div>

        <p className="font-mono text-[11px] text-[var(--muted)] mt-7 text-center tracking-[0.04em]">
          + 更多工具与流程持续迭代中 …
        </p>
      </Container>
    </Section>
  );
}