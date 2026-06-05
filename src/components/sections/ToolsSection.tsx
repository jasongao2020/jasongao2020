import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Tag from "../ui/Tag";

const tools = [
  { label: "ChatGPT", accent: true },
  { label: "Claude" },
  { label: "Gemini", accent: true },
  { label: "Cursor" },
  { label: "Perplexity", accent: true },
  { label: "NotebookLM" },
  { label: "即梦", accent: true },
  { label: "Midjourney" },
  { label: "Runway", accent: true },
  { label: "Sora" },
  { label: "Suno", accent: true },
  { label: "Make" },
  { label: "Coze", accent: true },
  { label: "Notion AI" },
];

export default function ToolsSection() {
  return (
    <Section id="tools">
      <Container>
        <SectionHeader
          eyebrow="06 · 工具箱"
          eyebrowVariant="accent"
          title="我正在使用的 AI 工具"
          lead="持续探索，不断更新。以下是我深度使用并验证过的工具。"
        />

        <Card className="!p-8">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-[var(--gap-sm)] max-sm:grid-cols-[repeat(3,1fr)]">
            {tools.map((t) => (
              <Tag key={t.label} type="tool" accent={t.accent}>
                {t.label}
              </Tag>
            ))}
          </div>
          <p className="font-mono text-xs text-[var(--muted)] mt-5 text-center">
            + 更多持续探索中的工具 …
          </p>
        </Card>
      </Container>
    </Section>
  );
}
