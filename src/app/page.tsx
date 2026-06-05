import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ThoughtsSection from "@/components/sections/ThoughtsSection";
import ToolsSection from "@/components/sections/ToolsSection";
import CooperateSection from "@/components/sections/CooperateSection";
import WhyMeSection from "@/components/sections/WhyMeSection";
import GithubSection from "@/components/sections/GithubSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ProblemsSection />
      <ServicesSection />
      <ThoughtsSection />
      <ToolsSection />
      <CooperateSection />
      <WhyMeSection />
      <GithubSection />
      <CTASection />
    </main>
  );
}
