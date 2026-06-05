import Section from "../layout/Section";
import Container from "../layout/Container";
import Tag from "../ui/Tag";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <Section id="hero" noBorder className="!pt-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-2xl)] items-center min-h-[84vh]">
          {/* 左侧文字 */}
          <div>
            <div className="flex flex-wrap gap-[var(--gap-xs)] mb-[var(--gap-md)]">
              <Tag type="hero">AI 探索者</Tag>
              <Tag type="hero" color="coral">一人公司</Tag>
              <Tag type="hero" color="blue">实践者</Tag>
            </div>

            <h1 className="hero-title">Jason Gao</h1>

            <p className="font-display text-[clamp(22px,2.5vw,32px)] font-bold leading-[1.3] mt-3 mb-0">
              AI 时代的<br />一人公司实践者
            </p>

            <p className="text-lg font-semibold text-[var(--muted)] my-[var(--gap-md)] max-w-[40ch] leading-relaxed">
              研究 AI &nbsp;·&nbsp; 实践 AI &nbsp;·&nbsp; 传播 AI<br />
              帮助个人与企业发现 AI 时代的新机会
            </p>

            <div className="flex gap-[var(--gap-sm)] flex-wrap">
              <Button href="#about" variant="primary" arrow>
                了解我
              </Button>
              <Button href="#cooperate" variant="outline">
                合作交流
              </Button>
            </div>
          </div>

          {/* 右侧头像 */}
          <div className="flex items-center justify-center float max-lg:max-w-[260px] max-lg:mx-auto">
            <img
              src="/avatar.png"
              alt="Jason Gao 头像"
              className="max-w-[380px] w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}