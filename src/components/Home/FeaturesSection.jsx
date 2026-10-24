import React from "react";
import { BookOpen, FolderArchive, FileText, Sparkles, Lock } from "lucide-react";
import FeatureCard from "../ui/FeatureCard";

const featuresData = [
  {
    icon: FolderArchive,
    title: "Your Personal Collection",
    description: "Keep every travel photograph organized in one personal space, arranged chronologically or by destination.",
    footerText: "Archival Storage",
    fill: "bg-[#1C2821]"
  },
  {
    icon: FileText,
    title: "Stories Behind the Photos",
    description: "Add locations, dates, weather, and detailed narrative descriptions to preserve the deeper meaning behind every image.",
    footerText: "Rich Context Fields",
    fill: "bg-[#7E5624]"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Summaries",
    description: "Turn long descriptions into short, evocative summaries automatically, capturing the essence of each expedition.",
    footerText: "Instant Reflection",
    fill: "bg-[#1C2821]"
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your personal photo collection belongs strictly to you. Access is protected by rigorous authentication and ownership checks.",
    footerText: "Guaranteed Ownership",
    fill: "bg-[#7E5624]"
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#F4F7F2] py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAEFE6] border border-[#DCE4D6] text-xs font-semibold tracking-wider text-[#A05624] uppercase mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#A05624]" />
            Crafted for Travelers
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1C19] tracking-tight mb-4">
            Everything Your Memories Need
          </h2>

          <p className="text-base sm:text-lg text-[#555B52] leading-relaxed">
            Purpose-built tooling designed to honour travel storytelling without social media noise or algorithmic clutter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              footerText={feature.footerText}
              fill={feature.fill}
            />
          ))}
        </div>

      </div>
    </section>
  );
}