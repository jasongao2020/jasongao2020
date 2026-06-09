import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const thoughts = [
  { text: <>AI 不会取代所有人。<br />但<span className="highlight">会使用 AI 的人</span>将拥有更大的优势。</> },
  { text: <>未来最强大的公司，<br /><span className="highlight">未必拥有最多员工</span>。</> },
  { text: <><span className="highlight">个人能力 × AI</span><br />可能是普通人最大的机会。</> },
  { text: <>企业最大的成本，<br />往往是<span className="highlight">低效率</span>。</> },
];

export default function ThoughtsSection() {
  return (
    <Section id="thoughts">
      <Container>
        <SectionHeader
          eyebrow="06 · 深度思考"
          eyebrowVariant="yellow"
          title="我的思考"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--gap-lg)]">
          {thoughts.map((t, i) => (
            <Card key={i} className="!p-8 relative before:content-['\201C'] before:font-display before:text-[80px] before:leading-[0.6] before:text-[var(--accent-yellow)] before:block before:mb-2">
              <p className="text-[17px] leading-[1.6] m-0 font-medium">{t.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
