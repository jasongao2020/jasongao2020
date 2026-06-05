import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader
          eyebrow="01 · 关于我"
          eyebrowVariant="accent"
          title="我是谁"
          star
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--gap-lg)] items-start">
          <p className="text-lg font-semibold leading-[1.7] m-0">
            我是<span className="highlight">高平</span>。<br /><br />
            一个持续学习 AI、研究 AI、实践 AI 的人。<br /><br />
            我并非技术开发者，也不是算法专家。<br /><br />
            我更关注的是：<br />
            <span className="highlight">AI 如何帮助普通人提高效率</span>；<br />
            <span className="highlight">AI 如何帮助企业创造价值</span>；<br />
            <span className="highlight">AI 如何帮助一个人完成过去需要一个团队才能完成的工作</span>。
          </p>

          <Card style={{ background: "var(--accent-yellow)" }}>
            <p className="text-xl font-extrabold leading-[1.5] m-0">
              &ldquo;未来最有竞争力的人，<br />不一定是最专业的人，<br />而是<span style={{ textDecoration: "underline", textDecorationThickness: 3 }}>最善于借助 AI 的人</span>。&rdquo;
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}