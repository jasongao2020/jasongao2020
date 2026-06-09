import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import BackToLab from "@/components/lab/BackToLab";

export const metadata: Metadata = {
  title: "Lab #004 · 水蜜桃品牌独立站实验",
  description: "从农产品到品牌体验的数字化实践 — PEAU 品牌构建完整过程",
};

/* ── 对比表格数据 ── */
const comparisonRows = [
  { dim: "定位", peau: "高端品牌", yangshan: "地域品牌" },
  { dim: "用户", peau: "礼品用户", yangshan: "家庭消费" },
  { dim: "风格", peau: "国际化", yangshan: "本土化" },
  { dim: "核心卖点", peau: "品牌体验", yangshan: "产品品质" },
  { dim: "转化方式", peau: "情感认同", yangshan: "直接购买" },
];

/* ── AI 工具列表 ── */
const aiTools = ["Claude", "ChatGPT", "Gemini", "Cursor", "Vercel"];

/* ── 成果数据 ── */
const results = [
  { num: "2", label: "品牌方向" },
  { num: "20+", label: "页面模块" },
  { num: "100+", label: "AI生成素材" },
  { num: "1", label: "完整独立站" },
];

/* ── 相关实验室 ── */
const relatedLabs = [
  { id: "005", title: "NOVA X Pro 游戏手柄品牌实验" },
  { id: "007", title: "AI企业服务平台研究" },
  { id: "001", title: "一人公司实践模型" },
];

export default function PeachBrandPage() {
  return (
    <main className="page-enter">
      <BackToLab />
      {/* ═══════ 第一部分：项目概览 ═══════ */}
      <section className="py-[clamp(72px,12vw,140px)] border-b-[length:var(--border-width)] border-b-[var(--fg)]">
        <Container>
          <div className="max-w-[60ch]">
            {/* 返回按钮 */}
            <Link
              href="/lab"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-[var(--muted)] hover:text-[var(--fg)] transition-colors mb-6"
            >
              <span className="text-[16px]">←</span> 返回实验作品
            </Link>

            <p className="font-mono text-[13px] font-bold text-[var(--accent-blue)] tracking-[0.08em] mb-2">
              Lab #004 · Build Lab
            </p>
            <h1 className="hero-title !text-[clamp(42px,6vw,72px)] mb-6">
              水蜜桃品牌独立站实验
            </h1>
            <p className="text-[22px] font-bold text-[var(--accent-blue)] mb-4">
              PEACH BRAND EXPERIENCE
            </p>
            <p className="lead text-[18px]">
              从农产品到品牌体验的数字化实践
            </p>

            {/* 简介 */}
            <p className="text-[17px] leading-[1.7] mt-6 mb-8 text-[var(--muted)]">
              探索传统农产品如何通过品牌化设计、
              视觉表达与数字化体验，
              完成从"卖水果"到"卖品牌"的升级。
            </p>

            {/* 项目信息标签 */}
            <div className="flex flex-wrap gap-3 mb-3">
              {["品牌构建", "独立站设计", "AI视觉创作", "体验设计"].map((t) => (
                <span
                  key={t}
                  className="text-[13px] font-bold tracking-[0.04em] px-[12px] py-[5px] border-[length:var(--border-width)] border-[var(--fg)] bg-[var(--accent-yellow)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="inline-block text-[13px] font-bold mt-2 px-[10px] py-[4px] bg-[var(--accent-yellow)] text-[var(--fg)] border border-[var(--fg)]">
              Completed
            </span>
          </div>
        </Container>
      </section>

      {/* ═══════ 第二部分：项目背景 ═══════ */}
      <Section>
        <Container className="!max-w-[720px]">
          <p className="font-mono text-[11px] font-bold text-[var(--muted)] tracking-[0.08em] mb-2">
            BACKGROUND
          </p>
          <h2>为什么要做这个项目？</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--fg)] text-[var(--bg)] p-8 border-[length:var(--border-width)] border-[var(--fg)] [box-shadow:var(--shadow-hard-sm)]">
              <p className="text-[17px] font-bold leading-[1.7] m-0">
                大多数农产品网站
                <br />
                停留在产品展示层面。
              </p>
            </div>
            <div className="bg-[var(--surface)] p-8 border-[length:var(--border-width)] border-[var(--fg)] [box-shadow:var(--shadow-hard-sm)]">
              <p className="text-[17px] font-bold leading-[1.7] m-0 text-[var(--muted)]">
                消费者记住的是<span className="highlight">价格</span>，
                <br />
                而不是<span className="highlight">品牌</span>。
              </p>
            </div>
          </div>
          <p className="text-[17px] leading-[1.7] mt-8 text-[var(--muted)]">
            本实验尝试通过品牌视觉、
            故事表达与独立站体验设计，
            打造一个具有高端感的水果品牌。
          </p>
        </Container>
      </Section>

      {/* ═══════ 第三部分：设计方向探索 ═══════ */}
      <Section>
        <Container>
          <p className="font-mono text-[11px] font-bold text-[var(--muted)] tracking-[0.08em] mb-2">
            DESIGN EXPLORATION
          </p>
          <h2>设计方向探索</h2>

          {/* Concept A — PEAU */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* 左：图片 */}
            <div className="bg-[var(--surface)] border-[length:var(--border-width)] border-[var(--fg)] [box-shadow:var(--shadow-hard-sm)] overflow-hidden">
              <img
                src="/peau-concept-a.png"
                alt="PEAU — A Peach Beyond Summer"
                className="w-full h-auto"
              />
            </div>

            {/* 右：设计说明 */}
            <div>
              <span className="font-mono text-[12px] font-bold text-[var(--accent-blue)] tracking-[0.08em]">
                Concept A
              </span>
              <h3 className="text-[28px] mt-1 mb-1">PEAU</h3>
              <p className="text-[16px] text-[var(--muted)] font-medium mb-4">
                A Peach Beyond Summer
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {["高端品牌", "精品水果", "国际化", "生活方式品牌"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold px-[8px] py-[2px] border border-[var(--fg)] bg-[var(--accent-yellow)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-[14px] text-[var(--muted)] leading-[1.6] mb-4">
                参考奢侈品品牌与精品食品品牌视觉。
                <br />
                强调：质感 · 产地 · 时间 · 季节 · 体验
              </p>

              <div className="flex flex-wrap gap-1.5">
                {["Premium", "Nature", "Luxury", "Story"].map((k) => (
                  <span
                    key={k}
                    className="text-[11px] font-bold px-[6px] py-[1px] bg-[var(--fg)] text-[var(--bg)]"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Concept B — 阳山水蜜桃 */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* 左：设计说明 */}
            <div className="lg:order-1 order-2">
              <span className="font-mono text-[12px] font-bold text-[var(--accent-coral)] tracking-[0.08em]">
                Concept B
              </span>
              <h3 className="text-[28px] mt-1 mb-1">阳山水蜜桃</h3>
              <p className="text-[16px] text-[var(--muted)] font-medium mb-4">
                地域品牌 · 原产地 · 品质表达
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {["地域品牌", "原产地", "品质表达", "电商转化"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold px-[8px] py-[2px] border border-[var(--fg)] bg-[var(--accent-yellow)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-[14px] text-[var(--muted)] leading-[1.6] mb-4">
                突出：产地 · 甜度 · 成熟度 · 新鲜度 · 购买转化
              </p>

              <div className="flex flex-wrap gap-1.5">
                {["Origin", "Fresh", "Trust", "Conversion"].map((k) => (
                  <span
                    key={k}
                    className="text-[11px] font-bold px-[6px] py-[1px] bg-[var(--fg)] text-[var(--bg)]"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>

            {/* 右：图片 */}
            <div className="lg:order-2 order-1 bg-[var(--surface)] border-[length:var(--border-width)] border-[var(--fg)] [box-shadow:var(--shadow-hard-sm)] overflow-hidden">
              <img
                src="/yangshan-concept-b.png"
                alt="阳山水蜜桃 — 地域品牌"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════ 第四部分：对比表格 ═══════ */}
      <Section style={{ background: "var(--fg)", color: "var(--bg)" }}>
        <Container>
          <p className="font-mono text-[11px] font-bold text-[var(--accent-yellow)] tracking-[0.08em] mb-2">
            COMPARISON
          </p>
          <h2 className="!text-[var(--bg)]">两种品牌路径对比</h2>

          <div className="mt-8 border-[length:var(--border-width)] border-[var(--bg)] overflow-hidden">
            {/* 表头 */}
            <div className="grid grid-cols-3 bg-[var(--bg)] text-[var(--fg)]">
              <div className="p-4 font-bold text-[15px] border-r-[length:var(--border-width)] border-r-[var(--fg)]">
                维度
              </div>
              <div
                className="p-4 font-bold text-[15px] border-r-[length:var(--border-width)] border-r-[var(--fg)]"
                style={{ color: "var(--accent-blue)" }}
              >
                PEAU
              </div>
              <div
                className="p-4 font-bold text-[15px]"
                style={{ color: "var(--accent-coral)" }}
              >
                阳山水蜜桃
              </div>
            </div>
            {/* 表体 */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.dim}
                className={`grid grid-cols-3 border-t-[length:var(--border-width)] border-t-[var(--bg)]`}
              >
                <div className="p-4 text-[14px] font-semibold border-r-[length:var(--border-width)] border-r-[var(--bg)] bg-[var(--fg)] opacity-90">
                  {row.dim}
                </div>
                <div className="p-4 text-[14px] border-r-[length:var(--border-width)] border-r-[var(--bg)] bg-[var(--fg)] opacity-75">
                  {row.peau}
                </div>
                <div className="p-4 text-[14px] bg-[var(--fg)] opacity-75">
                  {row.yangshan}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════ 第五部分：AI创作流程 ═══════ */}
      <Section>
        <Container className="!max-w-[720px]">
          <p className="font-mono text-[11px] font-bold text-[var(--muted)] tracking-[0.08em] mb-2">
            AI WORKFLOW
          </p>
          <h2>AI 创作流程</h2>

          {/* 流程图 */}
          <div className="mt-8 space-y-0">
            {[
              "品牌定位",
              "网站架构",
              "视觉设计",
              "AI图片生成",
              "页面开发",
              "部署上线",
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                {/* 左侧序号+连线 */}
                <div className="flex flex-col items-center shrink-0 w-10">
                  <div className="w-9 h-9 bg-[var(--fg)] text-[var(--bg)] font-display text-[13px] font-black flex items-center justify-center border-[length:var(--border-width)] border-[var(--fg)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < 5 && (
                    <div className="w-[2px] h-8 bg-[var(--fg)] opacity-20" />
                  )}
                </div>
                {/* 步骤文字 */}
                <div className="py-2">
                  <p className="text-[17px] font-bold m-0">{step}</p>
                </div>
                {/* 箭头 */}
                {i < 5 && (
                  <div className="hidden sm:block text-[var(--accent)] font-display text-[22px] font-black opacity-30 ml-auto shrink-0">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 工具展示 */}
          <div className="mt-8 pt-8 border-t-[length:var(--border-width)] border-t-[var(--fg)]">
            <p className="font-mono text-[11px] font-bold text-[var(--muted)] tracking-[0.08em] mb-3">
              使用工具
            </p>
            <div className="flex flex-wrap gap-3">
              {aiTools.map((tool) => (
                <span
                  key={tool}
                  className="text-[14px] font-bold px-5 py-3 border-[length:var(--border-width)] border-[var(--fg)] bg-[var(--surface)] [box-shadow:var(--shadow-hard-sm)] transition-[box-shadow,transform] duration-[0.12s] cursor-default hover:[box-shadow:var(--shadow-hover)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════ 第六部分：项目成果 ═══════ */}
      <Section style={{ background: "var(--accent-yellow)" }}>
        <Container>
          <p className="font-mono text-[11px] font-bold text-[var(--fg)] tracking-[0.08em] mb-2 opacity-60">
            RESULTS
          </p>
          <h2>项目成果</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {results.map((r) => (
              <div
                key={r.label}
                className="bg-[var(--surface)] border-[length:var(--border-width)] border-[var(--fg)] p-6 text-center [box-shadow:var(--shadow-hard-sm)]"
              >
                <div className="font-display text-[clamp(36px,5vw,56px)] font-black leading-none mb-2">
                  {r.num}
                </div>
                <p className="text-[14px] font-bold text-[var(--muted)] m-0">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════ 第七部分：我的思考 ═══════ */}
      <Section>
        <Container className="!max-w-[720px]">
          <p className="font-mono text-[11px] font-bold text-[var(--muted)] tracking-[0.08em] mb-2">
            INSIGHTS
          </p>
          <h2>从卖水果到卖品牌</h2>

          <div className="mt-8 bg-[var(--surface)] border-[length:var(--border-width)] border-[var(--fg)] p-8 [box-shadow:var(--shadow-hard-sm)]">
            <p className="text-[17px] leading-[1.8] m-0">
              消费者购买的并不只是桃子。
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["产地", "故事", "品质", "情绪", "身份认同"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 border border-[var(--border)]"
                >
                  <span className="w-2 h-2 bg-[var(--accent-yellow)] border border-[var(--fg)] shrink-0" />
                  <span className="text-[15px] font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <hr className="rule-thick" />
            <p className="text-[18px] font-black leading-[1.5] m-0">
              未来农产品竞争，
              <br />
              本质上是<span className="highlight">品牌竞争</span>。
            </p>
          </div>
        </Container>
      </Section>

      {/* ═══════ 相关实验室 ═══════ */}
      <Section className="border-b-0">
        <Container>
          <p className="font-mono text-[11px] font-bold text-[var(--muted)] tracking-[0.08em] mb-2">
            RELATED LABS
          </p>
          <h2>相关实验</h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedLabs.map((lab) => (
              <Link
                key={lab.id}
                href={`/lab#lab-build`}
                className="group block bg-[var(--surface)] border-[length:var(--border-width)] border-[var(--fg)] p-6 [box-shadow:var(--shadow-hard-sm)] transition-[box-shadow,transform] duration-[0.15s] ease hover:[box-shadow:var(--shadow-hover)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <span className="font-mono text-[11px] font-bold text-[var(--muted)]">
                  Lab #{lab.id}
                </span>
                <p className="text-[15px] font-bold mt-2 mb-0">{lab.title}</p>
                <span className="inline-flex items-center gap-1 mt-2 text-[12px] font-bold text-[var(--accent-blue)] opacity-0 translate-x-[-4px] transition-all duration-[0.15s] group-hover:opacity-100 group-hover:translate-x-0">
                  查看 →
                </span>
              </Link>
            ))}
          </div>

          {/* 返回 */}
          <div className="mt-10 text-center">
            <Button href="/lab" variant="outline" size="large">
              ← 返回实验作品
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
