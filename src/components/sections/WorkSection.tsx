import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const items = [
  {
    accent: "blue" as const,
    icon: (
      <svg className="card-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="var(--fg)" strokeWidth="2.5" />
        <circle cx="20" cy="20" r="10" stroke="var(--fg)" strokeWidth="2.5" />
        <circle cx="20" cy="20" r="3" fill="var(--fg)" />
        <line x1="20" y1="2" x2="20" y2="8" stroke="var(--fg)" strokeWidth="2.5" />
        <line x1="33" y1="10" x2="29" y2="14" stroke="var(--fg)" strokeWidth="2.5" />
        <line x1="38" y1="20" x2="32" y2="20" stroke="var(--fg)" strokeWidth="2.5" />
      </svg>
    ),
    title: "研究 AI 工具",
    desc: "持续测试全球主流 AI 产品与工作流，提炼最佳实践。",
  },
  {
    accent: "yellow" as const,
    icon: (
      <svg className="card-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="6" width="20" height="28" rx="10" stroke="var(--fg)" strokeWidth="2.5" />
        <line x1="20" y1="2" x2="20" y2="6" stroke="var(--fg)" strokeWidth="2.5" />
        <line x1="14" y1="16" x2="18" y2="20" stroke="var(--fg)" strokeWidth="2.5" />
        <line x1="18" y1="20" x2="22" y2="16" stroke="var(--fg)" strokeWidth="2.5" />
        <line x1="18" y1="20" x2="22" y2="24" stroke="var(--fg)" strokeWidth="2.5" />
        <line x1="18" y1="20" x2="14" y2="24" stroke="var(--fg)" strokeWidth="2.5" />
        <circle cx="18" cy="20" r="3" fill="var(--fg)" />
      </svg>
    ),
    title: "探索 AI 商业化",
    desc: "关注 AI 在企业服务、咨询、营销和内容领域的落地应用。",
  },
  {
    accent: "coral" as const,
    icon: (
      <svg className="card-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="22" width="14" height="16" rx="2" stroke="var(--fg)" strokeWidth="2.5" />
        <rect x="20" y="12" width="17" height="26" rx="2" stroke="var(--fg)" strokeWidth="2.5" />
        <rect x="5" y="26" width="4" height="4" fill="var(--fg)" />
        <rect x="23" y="16" width="4" height="4" fill="var(--fg)" />
      </svg>
    ),
    title: "输出行业研究",
    desc: "通过调研与分析，帮助企业理解 AI 趋势，做出正确决策。",
  },
  {
    accent: "green" as const,
    icon: (
      <svg className="card-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="10" stroke="var(--fg)" strokeWidth="2.5" />
        <line x1="20" y1="2" x2="20" y2="9" stroke="var(--fg)" strokeWidth="3" strokeLinecap="round" />
        <line x1="13" y1="20" x2="7" y2="20" stroke="var(--fg)" strokeWidth="3" strokeLinecap="round" />
        <line x1="27" y1="20" x2="33" y2="20" stroke="var(--fg)" strokeWidth="3" strokeLinecap="round" />
        <line x1="15" y1="15" x2="10" y2="10" stroke="var(--fg)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="25" y1="15" x2="30" y2="10" stroke="var(--fg)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "实践一人公司",
    desc: "探索 AI 时代个人创业的新模式，验证「个人×AI」的边界。",
  },
];

export default function WorkSection() {
  return (
    <Section id="work">
      <Container>
        <SectionHeader
          eyebrow="02 · 工作焦点"
          eyebrowVariant="yellow"
          title="我在做什么"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[var(--gap-md)]">
          {items.map((item) => (
            <Card key={item.title} accent={item.accent}>
              <div className="w-11 h-11 mb-[14px]">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="text-[var(--muted)] text-[15px] mt-2 m-0">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}