import React from "react";
import { ShieldCheck, KeyRound, EyeOff, Shield } from "lucide-react";
import SecurityCard from "../ui/SecurityCard";

const securityData = [
  {
    icon: KeyRound,
    title: "Secure account access",
    description: "Encrypted credentials and session tokens keep unauthorized eyes away from your journal.",
  },
  {
    icon: EyeOff,
    title: "Private photo collection",
    description: "Strict row-level ownership checks guarantee your images remain visible exclusively to you.",
  },
  {
    icon: Shield,
    title: "Protected personal data",
    description: "Zero third-party trackers or external ad-tech scripts injected into your reading spaces.",
  },
];

export default function SecuritySection() {
  return (
    <section className="bg-[#F1F5EB] py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="w-12 h-12 rounded-full bg-[#1C2821] text-white flex items-center justify-center shadow-md mb-6">
          <ShieldCheck className="w-6 h-6" />
        </div>

        <div className="text-center max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1C19] tracking-tight mb-6 leading-[1.15]">
            Your Memories Stay Yours.
          </h2>

          <p className="text-base sm:text-lg text-[#555B52] leading-relaxed">
            Your account and personal collection are protected through authentication and user-specific access controls. We treat your personal stories as intimate, archival treasures, never as ad targeting material.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {securityData.map((item, index) => (
            <SecurityCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}