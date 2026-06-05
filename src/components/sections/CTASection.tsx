import Section from "../layout/Section";
import Container from "../layout/Container";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <Section
      noBorder
      className="text-center !py-[clamp(64px,12vw,120px)]"
      style={{ background: "var(--accent-yellow)" }}
    >
      <Container className="!max-w-[680px]">
        <h2>一起探索 AI 时代的新机会</h2>
        <p className="lead mx-auto my-[var(--gap-md)] !text-[var(--fg)] opacity-70">
          让 AI 成为普通人的超级生产力
        </p>
        <Button variant="dark" arrow size="large">
          与我联系
        </Button>
      </Container>
    </Section>
  );
}
