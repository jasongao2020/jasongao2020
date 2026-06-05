/**
 * 设计系统预览页 — 仅开发环境可用
 * 展示颜色、字体、按钮、卡片、表单、布局等核心组件
 */
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import Tag from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "设计系统预览",
  robots: "noindex, nofollow",
};

const colorTokens = [
  { name: "bg", value: "#FFFDF5", css: "var(--bg)" },
  { name: "surface", value: "#FFFFFF", css: "var(--surface)" },
  { name: "fg", value: "#111111", css: "var(--fg)" },
  { name: "muted", value: "#5C5C5C", css: "var(--muted)" },
  { name: "border", value: "#111111", css: "var(--border)" },
  { name: "accent", value: "#2F5EEB", css: "var(--accent)" },
  { name: "accent-yellow", value: "#FFD600", css: "var(--accent-yellow)" },
  { name: "accent-coral", value: "#FF5E3A", css: "var(--accent-coral)" },
  { name: "accent-green", value: "#00C853", css: "var(--accent-green)" },
  { name: "accent-purple", value: "#7C3AED", css: "var(--accent-purple)" },
  { name: "accent-pink", value: "#FF2D78", css: "var(--accent-pink)" },
];

export default function DesignSystemPage() {
  return (
    <main>
      {/* 标题 */}
      <Section noBorder className="!pt-10">
        <Container>
          <h1 className="hero-title">设计系统</h1>
          <p className="lead mt-[var(--gap-sm)]">Neo Brutalism — 粗野主义设计语言</p>
        </Container>
      </Section>

      {/* ─── 颜色 ─── */}
      <Section>
        <Container>
          <SectionHeader eyebrow="Tokens" eyebrowVariant="accent" title="颜色" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[var(--gap-sm)]">
            {colorTokens.map((c) => (
              <Card key={c.name} flat className="!p-0">
                <div
                  className="h-20 border-b-[length:var(--border-width)] border-b-[var(--fg)]"
                  style={{ background: c.value }}
                />
                <div className="p-3">
                  <p className="font-mono text-[13px] font-bold m-0">{c.name}</p>
                  <p className="font-mono text-[11px] text-[var(--muted)] m-0 mt-1">{c.value}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── 排版 ─── */}
      <Section>
        <Container>
          <SectionHeader eyebrow="Tokens" eyebrowVariant="yellow" title="排版" />
          <Card className="!p-8 space-y-6">
            <div>
              <p className="meta mb-1">hero-title</p>
              <p className="hero-title">Hero Title</p>
            </div>
            <hr className="rule-thick" />
            <div>
              <p className="meta mb-1">h1</p>
              <h1>Heading One</h1>
            </div>
            <hr className="rule-thick" />
            <div>
              <p className="meta mb-1">h2</p>
              <h2>Heading Two</h2>
            </div>
            <hr className="rule-thick" />
            <div>
              <p className="meta mb-1">h3</p>
              <h3>Heading Three</h3>
            </div>
            <hr className="rule-thick" />
            <div>
              <p className="meta mb-1">lead</p>
              <p className="lead">这是一段引导性文字，用于区块的描述。</p>
            </div>
            <hr className="rule-thick" />
            <div>
              <p className="meta mb-1">body / meta</p>
              <p className="text-base mb-2">正文文字 — 这是默认的 body 字体大小。</p>
              <p className="meta">元信息文字 — 用于辅助信息、日期等。</p>
            </div>
            <hr className="rule-thick" />
            <div>
              <p className="meta mb-1">highlight / deco-star</p>
              <p>
                <span className="highlight">高亮文字</span> 和 <span className="highlight-blue">蓝色高亮</span>
              </p>
              <p className="deco-star">★</p>
            </div>
          </Card>
        </Container>
      </Section>

      {/* ─── Eyebrow ─── */}
      <Section>
        <Container>
          <SectionHeader eyebrow="Components" eyebrowVariant="coral" title="Eyebrow 标签" />
          <Card className="!p-8 flex flex-wrap gap-4">
            <Eyebrow variant="accent">accent · 强调</Eyebrow>
            <Eyebrow variant="yellow">yellow · 黄色</Eyebrow>
            <Eyebrow variant="coral">coral · 珊瑚</Eyebrow>
            <Eyebrow variant="green">green · 绿色</Eyebrow>
          </Card>
        </Container>
      </Section>

      {/* ─── 按钮 ─── */}
      <Section>
        <Container>
          <SectionHeader eyebrow="Components" eyebrowVariant="green" title="按钮 Button" />
          <Card className="!p-8">
            <div className="flex flex-wrap gap-4 items-end">
              <Button variant="primary">Primary</Button>
              <Button variant="primary" arrow>Primary + Arrow</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="outline" arrow>Outline + Arrow</Button>
              <Button variant="dark">Dark</Button>
              <Button variant="dark" arrow>Dark + Arrow</Button>
              <Button variant="dark" arrow size="large">Large CTA</Button>
            </div>
            <hr className="rule-thick" />
            <p className="meta">Hover 态：阴影扩大并向上偏移 2px；Active 态：阴影消失并向下偏移 2px。</p>
          </Card>
        </Container>
      </Section>

      {/* ─── 卡片 ─── */}
      <Section>
        <Container>
          <SectionHeader eyebrow="Components" eyebrowVariant="accent" title="卡片 Card" />
          <Card className="!p-8 mb-4">
            <h3>默认卡片</h3>
            <p className="text-[var(--muted)] text-[15px] mt-2 m-0">
              基础卡片带有粗黑边框和硬阴影，Hover 时阴影扩大并偏移。
            </p>
          </Card>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--gap-md)]">
            {(["blue", "yellow", "coral", "green"] as const).map((accent) => (
              <Card key={accent} accent={accent}>
                <h3 className="!text-[17px]">{accent} 口音卡片</h3>
                <p className="text-[var(--muted)] text-[15px] mt-2 m-0">
                  左上角带 {accent} 色块标记。
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── Tag 标签 ─── */}
      <Section>
        <Container>
          <SectionHeader eyebrow="Components" eyebrowVariant="yellow" title="Tag 标签" />
          <Card className="!p-8 space-y-6">
            <div>
              <p className="meta mb-2">Hero Tag</p>
              <div className="flex flex-wrap gap-[var(--gap-xs)]">
                <Tag type="hero">默认</Tag>
                <Tag type="hero" color="coral">Coral</Tag>
                <Tag type="hero" color="blue">Blue</Tag>
              </div>
            </div>
            <hr className="rule-thick" />
            <div>
              <p className="meta mb-2">Service Tag</p>
              <div className="flex flex-wrap gap-[6px]">
                <Tag type="service">默认</Tag>
                <Tag type="service" color="blue">Alt (Blue)</Tag>
              </div>
            </div>
            <hr className="rule-thick" />
            <div>
              <p className="meta mb-2">Tool Tag</p>
              <div className="flex flex-wrap gap-[var(--gap-sm)]">
                <Tag type="tool">默认</Tag>
                <Tag type="tool" accent>Accent</Tag>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* ─── SectionHeader ─── */}
      <Section>
        <Container>
          <SectionHeader eyebrow="Components" eyebrowVariant="coral" title="SectionHeader 区块标题" />
          <Card className="!p-8 space-y-10">
            <div>
              <SectionHeader eyebrow="01 · 示例" eyebrowVariant="accent" title="带 Star" star />
            </div>
            <div>
              <SectionHeader eyebrow="02 · 示例" eyebrowVariant="yellow" title="带 Lead 引导语" lead="这是引导性文字，用于描述区块内容。" />
            </div>
            <div>
              <SectionHeader eyebrow="03 · 示例" eyebrowVariant="green" title="居中" center star />
            </div>
          </Card>
        </Container>
      </Section>

      {/* ─── 布局 ─── */}
      <Section>
        <Container>
          <SectionHeader eyebrow="Layout" eyebrowVariant="accent" title="布局系统" />
          <Card className="!p-8 space-y-6">
            <div>
              <p className="meta mb-2">Container — 最大宽度 {1120}px，左右内边距 {28}px</p>
              <div className="bg-[var(--bg)] border-[length:var(--border-width)] border-dashed border-[var(--fg)] h-12" />
            </div>
            <hr className="rule-thick" />
            <div>
              <p className="meta mb-2">Section — 带粗黑分隔线</p>
              <p className="text-sm text-[var(--muted)]">每个 section 之间自动添加 border-top</p>
            </div>
            <hr className="rule-thick" />
            <div>
              <p className="meta mb-2">间距系统</p>
              <div className="space-y-2 font-mono text-xs">
                {["xs: 8px", "sm: 12px", "md: 20px", "lg: 32px", "xl: 56px", "2xl: 96px"].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className="w-16">{s.split(":")[0]}</span>
                    <span className="text-[var(--muted)]">{s.split(":")[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
