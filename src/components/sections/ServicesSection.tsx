import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";

const services = [
  {
    icon: (
      <svg className="card-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="24" height="20" rx="4" stroke="var(--fg)" strokeWidth="2.5" />
        <rect x="14" y="10" width="12" height="8" rx="1.5" stroke="var(--fg)" strokeWidth="1.5" />
        <circle cx="20" cy="23" r="2" fill="var(--fg)" />
        <line x1="12" y1="30" x2="28" y2="30" stroke="var(--fg)" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="34" x2="24" y2="34" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="27" cy="9" r="4" fill="var(--accent-blue)" stroke="var(--fg)" strokeWidth="1.5" />
      </svg>
    ),
    title: "AI 应用咨询",
    desc: "帮助企业了解 AI、认识 AI、应用 AI。从战略认知到落地执行的全流程咨询。",
    tags: [{ label: "战略咨询" }, { label: "落地指导", alt: true }],
  },
  {
    icon: (
      <svg className="card-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="14" height="18" rx="1.5" stroke="var(--fg)" strokeWidth="2.5" />
        <line x1="9" y1="15" x2="17" y2="15" stroke="var(--fg)" strokeWidth="1.5" />
        <line x1="9" y1="19" x2="17" y2="19" stroke="var(--fg)" strokeWidth="1.5" />
        <line x1="9" y1="23" x2="14" y2="23" stroke="var(--fg)" strokeWidth="1.5" />
        <path d="M20,18 L30,18 L34,22 L30,26 L20,26 Z" stroke="var(--fg)" strokeWidth="2.5" fill="none" />
        <circle cx="26" cy="22" r="2" fill="var(--fg)" />
        <line x1="24" y1="11" x2="24" y2="17" stroke="var(--accent-yellow)" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: "AI 工具培训",
    desc: "覆盖主流 AI 工具的实操培训，让团队快速上手、高效应用。",
    tags: [
      { label: "ChatGPT" },
      { label: "Claude" },
      { label: "Gemini" },
      { label: "Cursor" },
      { label: "AI 办公" },
    ],
  },
  {
    icon: (
      <svg className="card-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="5" width="32" height="30" rx="3" stroke="var(--fg)" strokeWidth="2.5" />
        <line x1="10" y1="13" x2="30" y2="13" stroke="var(--fg)" strokeWidth="2" />
        <line x1="10" y1="19" x2="26" y2="19" stroke="var(--fg)" strokeWidth="1.5" />
        <line x1="10" y1="25" x2="28" y2="25" stroke="var(--fg)" strokeWidth="1.5" />
        <line x1="10" y1="31" x2="22" y2="31" stroke="var(--fg)" strokeWidth="1.5" />
        <circle cx="34" cy="33" r="4" fill="var(--accent-coral)" stroke="var(--fg)" strokeWidth="1.5" />
      </svg>
    ),
    title: "调研分析",
    desc: "用 AI 赋能传统调研方法，提供更快速、更深入的市场洞察。",
    tags: [
      { label: "行业调研" },
      { label: "竞品分析", alt: true },
      { label: "趋势研究" },
      { label: "市场研究", alt: true },
    ],
  },
  {
    icon: (
      <svg className="card-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="28" height="32" rx="3" stroke="var(--fg)" strokeWidth="2.5" />
        <line x1="12" y1="12" x2="28" y2="12" stroke="var(--fg)" strokeWidth="1.5" />
        <line x1="12" y1="17" x2="24" y2="17" stroke="var(--fg)" strokeWidth="1.5" />
        <rect x="10" y="22" width="8" height="8" rx="1" stroke="var(--fg)" strokeWidth="1.5" />
        <rect x="22" y="22" width="8" height="8" rx="1" stroke="var(--fg)" strokeWidth="1.5" />
        <rect x="10" y="33" width="20" height="3" rx="1" fill="var(--accent-green)" />
      </svg>
    ),
    title: "商业方案支持",
    desc: "专业的商业文档制作，让你的方案更有说服力。",
    tags: [
      { label: "PPT 制作" },
      { label: "项目汇报", alt: true },
      { label: "商业计划书" },
      { label: "招商材料", alt: true },
    ],
  },
];

export default function ServicesSection() {
  return (
    <Section id="services">
      <Container>
        <SectionHeader
          eyebrow="05 · 服务范围"
          eyebrowVariant="green"
          title="我能提供什么服务"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--gap-lg)]">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[var(--surface)] border-[length:var(--border-width)] border-[var(--fg)] p-8 [box-shadow:var(--shadow-hard-sm)] transition-[box-shadow,transform] duration-[0.15s] ease hover:[box-shadow:var(--shadow-hover)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <div className="w-11 h-11 mb-[14px]">{s.icon}</div>
              <h3 className="!text-xl mb-2">{s.title}</h3>
              <p className="text-[var(--muted)] text-[15px] mt-2 m-0">{s.desc}</p>
              <div className="flex flex-wrap gap-[6px] mt-[14px]">
                {s.tags.map((t, i) => (
                  <Tag key={i} type="service" color={t.alt ? "blue" : undefined}>
                    {t.label}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}