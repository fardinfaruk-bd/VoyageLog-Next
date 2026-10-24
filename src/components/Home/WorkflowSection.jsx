import React from "react";
import { Activity, Camera, FileEdit, Sparkles } from "lucide-react";
import StepCard from "../ui/StepCard";

const stepsData = [
  {
    stepNumber: "01",
    icon: Camera,
    title: "Capture",
    description: "Upload a high-resolution photo from your travels directly from mobile, camera roll, or desktop.",
    footerText: "JPG, PNG, HEIC supported",
  },
  {
    stepNumber: "02",
    icon: FileEdit,
    title: "Tell Your Story",
    description: "Add a title, destination tag, and your raw, unedited thoughts on what you saw, felt, and tasted.",
    footerText: "Natural language notes",
  },
  {
    stepNumber: "03",
    icon: Sparkles,
    title: "Keep the Memory",
    description: "View your permanent entry complete with its automatically generated AI summary and archival metadata.",
    footerText: "One-click recap & sharing",
  },
];

export default function WorkflowSection() {
  return (
    <section className="bg-[#F4F7F2] py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#7E5624] uppercase mb-4">
            <Activity className="w-3.5 h-3.5 text-[#7E5624]" />
            Effortless Workflow
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1C19] tracking-tight mb-4 leading-[1.15]">
            Three Simple Steps to Preserve Your Journey
          </h2>

          <p className="text-base sm:text-lg text-[#555B52] leading-relaxed">
            From snapshot to curated memory in seconds without complex journal formatting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stepsData.map((step, index) => (
            <StepCard 
              key={index}
              stepNumber={step.stepNumber}
              icon={step.icon}
              title={step.title}
              description={step.description}
              footerText={step.footerText}
            />
          ))}
        </div>

      </div>
    </section>
  );
}