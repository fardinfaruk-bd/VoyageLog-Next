import AiSummarySection from "@/components/Home/AiSummarySection";
import CtaBannerSection from "@/components/Home/CtaBannerSection";
import CuratedEntriesSection from "@/components/Home/CuratedEntriesSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroSection from "@/components/Home/Hero";
import SecuritySection from "@/components/Home/SecuritySection";
import WorkflowSection from "@/components/Home/WorkflowSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CuratedEntriesSection />
      <FeaturesSection />
      <WorkflowSection />
      <AiSummarySection />
      <SecuritySection />
      <CtaBannerSection />
    </div>
  );
}