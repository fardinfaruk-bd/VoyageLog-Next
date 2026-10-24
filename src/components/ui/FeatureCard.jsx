import React from "react";
import { Check } from "lucide-react";

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  footerText,
  fill
}) {
  return (
    <div className="bg-[#EAEFE6]/60 border border-[#DCE4D6] p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className={`w-12 h-12 rounded-2xl ${fill} text-white flex items-center justify-center mb-6 shadow-md`}>
          {Icon && <Icon className="w-6 h-6" />}
        </div>

        <h3 className="font-serif text-xl font-bold text-[#1A1C19] mb-3">
          {title}
        </h3>

        <p className="text-sm text-[#555B52] leading-relaxed mb-8">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-[#DCE4D6]/60 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#333831]">
        <span>{footerText}</span>
        <Check className="w-4 h-4 text-[#1C2821]" />
      </div>
    </div>
  );
}