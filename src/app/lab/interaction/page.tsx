import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Interaction Lab · 交互体验设计",
  description: "探索数字产品与物理设备的交互体验设计 — GAMEFLOW & NEXUS PANEL",
};

/* ── 项目数据 ── */
const projects = [
  {
    num: "01",
    name: "GAMEFLOW",
    subtitle: "Immersive Controller Experience",
    subtitleCN: "沉浸式游戏控制体验",
    description:
      "通过高保真动态演示，展现控制器的人体工学设计、交互反馈及沉浸式操控体验。",
    keywords: [
      "Human-Centered Design",
      "Ergonomics",
      "Gaming Interaction",
      "Motion Feedback",
    ],
    video: "/controller.mp4",
    accentColor: "var(--accent-coral)",
  },
  {
    num: "02",
    name: "NEXUS PANEL",
    subtitle: "Smart Hardware Interface",
    subtitleCN: "智能硬件交互界面",
    description:
      "融合实体控制与数字界面，构建现代设备的直观交互方式。",
    keywords: [
      "Industrial Design",
      "Smart Hardware",
      "Control System",
      "User Experience",
    ],
    video: "/keyboard.mp4",
    accentColor: "var(--accent-blue)",
  },
];

export default function InteractionLabPage() {
  return (
    <main>
      {/* ═══════ Hero ═══════ */}
      <section className="py-[clamp(72px,10vw,120px)] border-b-[length:var(--border-width)] border-b-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]">
        <Container>
          <div className="max-w-[60ch]">
            {/* 面包屑 */}
            <div className="flex items-center gap-2 text-[13px] font-semibold text-[var(--bg)] opacity-50 mb-6">
              <Link
                href="/lab"
                className="hover:opacity-100 transition-opacity"
              >
                ← 实验作品
              </Link>
              <span>/</span>
              <span className="opacity-80">Present Lab</span>
            </div>

            <p className="font-mono text-[13px] font-bold tracking-[0.08em] mb-2" style={{ color: "var(--accent-coral)" }}>
              Interaction Lab
            </p>
            <h1 className="font-display text-[clamp(42px,6vw,72px)] leading-[1.05] tracking-[-0.02em] font-black mb-4">
              交互体验设计
            </h1>
            <p className="text-[20px] font-semibold opacity-70 leading-[1.5]">
              探索数字产品与物理设备的交互体验设计
            </p>

            {/* 底部标签 */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["交互设计", "产品体验", "动态演示", "品牌视觉"].map((t) => (
                <span
                  key={t}
                  className="text-[13px] font-bold tracking-[0.04em] px-[12px] py-[5px] border border-[var(--bg)] opacity-60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════ 项目展示 — 左右交错 ═══════ */}
      {projects.map((project, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={project.num}
            className={`py-[clamp(64px,8vw,100px)] border-b-[length:var(--border-width)] border-b-[var(--fg)] ${
              isEven ? "bg-[var(--bg)]" : "bg-[var(--surface)]"
            }`}
          >
            <Container>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
              >
                {/* 文字区域 */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  {/* 编号 */}
                  <span
                    className="font-display text-[clamp(80px,10vw,140px)] leading-none font-black tracking-[-0.04em]"
                    style={{ color: project.accentColor, opacity: 0.15 }}
                  >
                    {project.num}
                  </span>

                  {/* 项目名称 */}
                  <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.02em] font-black mt-[-0.3em] mb-2">
                    {project.name}
                  </h2>

                  {/* 副标题 */}
                  <p
                    className="text-[18px] font-bold mb-1"
                    style={{ color: project.accentColor }}
                  >
                    {project.subtitle}
                  </p>
                  <p className="text-[15px] text-[var(--muted)] font-medium mb-6">
                    {project.subtitleCN}
                  </p>

                  {/* 描述 */}
                  <p className="text-[17px] leading-[1.7] text-[var(--muted)] mb-6">
                    {project.description}
                  </p>

                  {/* 关键词 */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-[12px] font-semibold tracking-[0.03em] px-[10px] py-[4px] border border-[var(--fg)] bg-[var(--surface)]"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button href="#" variant="outline" size="default" arrow>
                    查看案例
                  </Button>
                </div>

                {/* 视频区域 */}
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="relative bg-[var(--fg)] border-[length:var(--border-width)] border-[var(--fg)] overflow-hidden" style={{ borderRadius: "16px", boxShadow: "8px 8px 0 var(--fg)" }}>
                    {/* 顶部栏装饰 */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[var(--fg)]">
                      <span className="w-3 h-3 rounded-full bg-[#FF5E3A]" />
                      <span className="w-3 h-3 rounded-full bg-[#FFD600]" />
                      <span className="w-3 h-3 rounded-full bg-[#00C853]" />
                    </div>
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* ═══════ Design Principles ═══════ */}
      <section className="py-[clamp(56px,8vw,90px)] bg-[var(--surface)] border-b-[length:var(--border-width)] border-b-[var(--fg)]">
        <Container>
          <p className="font-mono text-[11px] font-bold text-[var(--muted)] tracking-[0.08em] mb-2">
            APPROACH
          </p>
          <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.02em] mb-0">
            Design Principles
          </h2>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              "用户体验",
              "工业设计",
              "UI 动效",
              "产品展示动画",
              "品牌视觉系统",
            ].map((p) => (
              <div
                key={p}
                className="bg-[var(--bg)] border-[length:var(--border-width)] border-[var(--fg)] p-5 text-center transition-[box-shadow,transform] duration-[0.15s] hover:[box-shadow:var(--shadow-hover)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
              >
                <p className="text-[15px] font-bold m-0">{p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════ 设计参考 ═══════ */}
      <section className="py-[clamp(48px,6vw,80px)]">
        <Container>
          <p className="font-mono text-[11px] font-bold text-[var(--muted)] tracking-[0.08em] mb-2">
            REFERENCE
          </p>
          <h2 className="text-[clamp(24px,3.5vw,36px)] leading-[1.2] tracking-[-0.02em] mb-4">
            参考 Apple / Nothing / DJI
          </h2>
          <p className="text-[17px] text-[var(--muted)] leading-[1.7] mb-8">
            高级版布局，左右交错，视觉节奏感。
          </p>

          {/* 返回 */}
          <Button href="/lab" variant="outline" size="large">
            ← 返回实验作品
          </Button>
        </Container>
      </section>
    </main>
  );
}
