import React from "react";
import { MapPin, ArrowRight } from "lucide-react";

export default function JournalCard({ 
  tag, 
  image, 
  location, 
  date, 
  title, 
  description, 
  verifiedText = "AI Log Verified" 
}) {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#E2E8DC] flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="relative h-48 sm:h-52 rounded-xl overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md text-white text-[10px] sm:text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider">
            {tag}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#737970] mb-2 px-1">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#555B52]" />
            <span className="truncate max-w-[140px]">{location}</span>
          </div>
          <span>{date}</span>
        </div>

        <h3 className="font-serif text-lg font-bold text-[#1A1C19] mb-2 px-1 leading-snug">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-[#555B52] leading-relaxed mb-6 px-1 line-clamp-2">
          {description}
        </p>
      </div>

      <div className="pt-3 border-t border-[#F0F4EC] flex items-center justify-between text-xs px-1">
        <span className="font-medium text-[#737970]">{verifiedText}</span>
        <div className="w-7 h-7 rounded-full bg-[#F4F7F2] flex items-center justify-center text-[#1C2821] hover:bg-[#1C2821] hover:text-white transition-colors cursor-pointer">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}