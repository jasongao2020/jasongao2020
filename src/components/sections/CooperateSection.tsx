import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const modes = [
  { num: "01", title: "企业顾问", color: "var(--accent-blue)" },
  { num: "02", title: "项目合作", color: "var(--accent-coral)" },
  { num: "03", title: "培训分享", color: "var(--accent-green)" },
  { num: "04", title: "资源协同", color: "var(--accent-purple)" },
  { num: "05", title: "联合探索 AI 项目", color: "var(--accent-pink)" },
];

export default function CooperateSection() {
  return (
    <Section id="cooperate">
      <Container>
        <SectionHeader
          eyebrow="07 · 合作方式"
          eyebrowVariant="coral"
          title="合作模式"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[var(--gap-md)]">
          {modes.map((m) => (
            <Card key={m.num} className="!p-5 text-center">
              <div className="num text-[40px] font-black leading-none mb-2" style={{ color: m.color }}>
                {m.num}
              </div>
              <h4 className="text-[17px] font-bold m-0">{m.title}</h4>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
