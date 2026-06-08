import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function WhyMeSection() {
  return (
    <Section id="why-me">
      <Container>
        <SectionHeader
          eyebrow="08 · 差异点"
          eyebrowVariant="accent"
          title="为什么与我交流"
          star
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--gap-lg)] items-start">
          <Card className="!bg-[var(--accent-blue)] !text-[var(--white)] !p-9 !border-[var(--fg)]">
            <p className="text-[19px] font-bold leading-[1.7] m-0">
              我不是卖软件。<br /><br />
              也不是卖课程。
            </p>
            <div className="mt-7 flex gap-3">
              <span className="font-mono text-[11px] px-2 py-[3px] border-[1.5px] border-[var(--white)] opacity-80"># 连接者</span>
              <span className="font-mono text-[11px] px-2 py-[3px] border-[1.5px] border-[var(--white)] opacity-80"># 翻译者</span>
              <span className="font-mono text-[11px] px-2 py-[3px] border-[1.5px] border-[var(--white)] opacity-80"># 桥梁</span>
            </div>
          </Card>

          <p className="text-[17px] font-semibold leading-[1.8] m-0">
            我更愿意成为：<br /><br />
            <span className="highlight">企业与 AI 之间的桥梁</span>；<br /><br />
            <span className="highlight">资源与机会之间的连接者</span>；<br /><br />
            <span className="highlight">新技术与商业价值之间的翻译者</span>。
          </p>
        </div>
      </Container>
    </Section>
  );
}
