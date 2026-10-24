import React from "react";

export default function SecurityCard({ 
  icon: Icon, 
  title, 
  description 
}) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#E2E8DC] flex flex-col items-center text-center hover:shadow-md transition-shadow">
      {/* Icon Badge */}
      <div className="w-12 h-12 rounded-full bg-[#F4F7F2] border border-[#DCE4D6] flex items-center justify-center text-[#555B52] mb-6 shadow-sm">
        {Icon && <Icon className="w-5 h-5" />}
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl font-bold text-[#1A1C19] mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#555B52] leading-relaxed">
        {description}
      </p>
    </div>
  );
}