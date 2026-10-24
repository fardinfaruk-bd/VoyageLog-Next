import CuratedEntriesSection from "@/components/Home/CuratedEntriesSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroSection from "@/components/Home/Hero";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CuratedEntriesSection />
      <FeaturesSection />
    </div>
  );
}