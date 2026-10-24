import React from "react";

export default function StepCard({ 
  stepNumber, 
  icon: Icon, 
  title, 
  description, 
  footerText 
}) {
  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#E2E8DC] flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center justify-between mb-8">
          <span className="font-serif text-4xl sm:text-5xl font-normal text-[#C4B8A5]">
            {stepNumber}
          </span>
          <div className="w-12 h-12 rounded-full bg-[#EAEFE6] border border-[#DCE4D6] flex items-center justify-center text-[#1C2821] shadow-sm">
            {Icon && <Icon className="w-5 h-5" />}
          </div>
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#1A1C19] mb-3">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-[#555B52] leading-relaxed mb-10">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-[#F0F4EC] flex items-center gap-2 text-xs sm:text-sm text-[#555B52] font-medium">
        <span className="w-2 h-2 rounded-full bg-[#8C6D48]" />
        <span>{footerText}</span>
      </div>
    </div>
  );
}