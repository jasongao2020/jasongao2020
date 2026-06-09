import Link from "next/link";
import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { labCategories } from "@/data/lab-projects";

export default function LabPreviewSection() {
  return (
    <Section id="workflow">
      <Container>
        <SectionHeader
          eyebrow="03 · 实验作品"
          eyebrowVariant="accent"
          title="jasongao的实验作品"
          lead="从一个想法开始，到形成价值。"
        />

        {/* 四大实验室卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--gap-md)] mb-8">
          {labCategories.map((cat) => (
            <Link
              key={cat.key}
              href={`/lab#lab-${cat.key}`}
              className="group block bg-[var(--surface)] border-[length:var(--border-width)] border-[var(--fg)] rounded-[4px] p-6 [box-shadow:var(--shadow-hard-sm)] transition-[box-shadow,transform] duration-[0.15s] ease hover:[box-shadow:var(--shadow-hover)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <span className="text-[32px] leading-none">{cat.icon}</span>
              <h3
                className="text-[20px] font-black mt-3 mb-1 tracking-[-0.01em]"
                style={{ color: cat.color }}
              >
                {cat.title}
              </h3>
              <p className="text-[13px] font-semibold text-[var(--muted)] mb-3">
                {cat.subtitle}
              </p>
              <p className="text-[14px] text-[var(--muted)] leading-[1.5] m-0">
                {cat.description}
              </p>

              {/* 项目数量 */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {cat.projects.map((p) => (
                  <span
                    key={p.id}
                    className="text-[11px] font-semibold tracking-[0.03em] px-[8px] py-[1px] rounded-[2px] border border-[var(--border)] text-[var(--muted)]"
                  >
                    #{p.id}
                  </span>
                ))}
              </div>

              <span
                className="inline-flex items-center gap-1 mt-3 text-[13px] font-bold opacity-0 translate-x-[-6px] transition-all duration-[0.2s] ease group-hover:opacity-100 group-hover:translate-x-0"
                style={{ color: cat.color }}
              >
                查看详情 →
              </span>
            </Link>
          ))}
        </div>

        {/* 进入实验室 */}
        <div className="text-center">
          <Button href="/lab" variant="primary" size="large" arrow>
            进入实验室
          </Button>
        </div>
      </Container>
    </Section>
  );
}
