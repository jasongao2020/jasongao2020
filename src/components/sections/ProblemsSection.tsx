import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const problems = [
  { q: "不知道 AI 能做什么？", a: "帮助快速找到适合的 AI 应用场景。" },
  { q: "工具太多不会选？", a: "筛选真正有价值的工具和方案。" },
  { q: "团队效率低？", a: "利用 AI 优化工作流程，降本增效。" },
  { q: "不知道如何开始？", a: "提供从认知到落地的完整行动路径。" },
];

export default function ProblemsSection() {
  return (
    <Section id="problems">
      <Container>
        <SectionHeader
          eyebrow="03 · 问题解决"
          eyebrowVariant="coral"
          title="我能解决什么问题"
          star
        />

        <Card className="!px-7 !py-2">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto_1fr] gap-[var(--gap-md)] items-center py-6 max-sm:grid-cols-1 max-sm:text-center max-sm:gap-[var(--gap-sm)] max-sm:py-5 ${
                i < problems.length - 1 ? "border-b-[length:var(--border-width)] border-b-[var(--fg)]" : ""
              }`}
            >
              <div className="font-bold text-[17px] py-[10px] px-4 bg-[var(--fg)] text-[var(--bg)] text-right max-sm:text-center">
                {p.q}
              </div>
              <div className="font-display text-[28px] font-black text-[var(--accent)]">→</div>
              <div className="text-base text-[var(--muted)]">{p.a}</div>
            </div>
          ))}
        </Card>
      </Container>
    </Section>
  );
}