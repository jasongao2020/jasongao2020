import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import LabCard from "@/components/lab/LabCard";
import { labCategories, labPageData } from "@/data/lab-projects";

export const metadata: Metadata = {
  title: "LAB · jasongao的实验室",
  description: "AI时代个人实践成果展示中心 — 从一个想法开始，到形成价值。",
};

export default function LabPage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════
          页面头部
          ═══════════════════════════════════════════ */}
      <section className="py-[clamp(72px,12vw,140px)] border-b-[length:var(--border-width)] border-b-[var(--fg)]">
        <Container>
          <div className="max-w-[56ch]">
            <h1 className="hero-title mb-4">{labPageData.title}</h1>
            <p className="lead text-[19px] leading-[1.7]">
              {labPageData.subtitleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < labPageData.subtitleLines.length - 1 && <br />}
                </span>
              ))}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {labPageData.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[13px] font-bold tracking-[0.04em] px-[12px] py-[5px] border-[length:var(--border-width)] border-[var(--fg)] bg-[var(--accent-yellow)] text-[var(--fg)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════
          四大实验室
          ═══════════════════════════════════════════ */}
      {labCategories.filter(cat => cat.projects.length > 0).map((cat) => (
        <section
          key={cat.key}
          id={`lab-${cat.key}`}
          className="py-[clamp(56px,10vw,100px)] border-b-[length:var(--border-width)] border-b-[var(--fg)]"
          style={{ borderLeft: `6px solid ${cat.color}` }}
        >
          <Container>
            {/* 类别头部 */}
            <div className="flex items-start gap-4 mb-2">
              <span className="text-[40px] leading-none">{cat.icon}</span>
              <div>
                <h2
                  className="text-[clamp(32px,4.5vw,52px)] leading-[1.05] tracking-[-0.02em] mb-0"
                  style={{ color: cat.color }}
                >
                  {cat.title}
                </h2>
                <p className="text-[18px] font-semibold text-[var(--muted)] mt-1 mb-0">
                  {cat.subtitle}
                </p>
              </div>
            </div>

            <p className="lead mt-4 mb-0 text-[17px]">{cat.description}</p>

            {/* 展示内容 */}
            <div className="flex flex-wrap gap-2 mt-5 mb-10">
              {cat.showcases.map((item) => (
                <span
                  key={item}
                  className="text-[13px] font-medium px-[10px] py-[4px] rounded-[20px] border border-[var(--border)] text-[var(--muted)] bg-[var(--bg)]"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* 项目卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cat.projects.map((project) => (
                <LabCard
                  key={project.id}
                  project={project}
                  accentColor={cat.color}
                />
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* ═══════════════════════════════════════════
          页面 Slogan
          ═══════════════════════════════════════════ */}
      <section className="py-[clamp(72px,10vw,120px)] bg-[var(--fg)] text-[var(--bg)]">
        <Container>
          <div className="text-center">
            <p className="font-display text-[clamp(28px,4vw,48px)] font-black leading-[1.15] tracking-[-0.02em] mb-6">
              {labPageData.slogan}
            </p>
            <p className="lead text-[var(--bg)] opacity-70 text-[18px]">
              每一个项目，都是一次实验。
              <br />
              探索AI时代的新机会。
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
