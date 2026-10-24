import React from "react";
import { Sparkles, MapPin, AlignLeft, ArrowDown, Compass } from "lucide-react";

export default function AiSummarySection() {
  return (
    <section className="bg-[#F4F7F2] py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Wrapper Container Card */}
        <div className="bg-[#EAEFE6]/50 border border-[#DCE4D6] rounded-3xl p-6 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Photo Card Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white p-4 rounded-3xl shadow-lg border border-[#E2E8DC] w-full max-w-sm transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Image Box */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                    alt="Twilight by the Bay of Bengal"
                    className="w-full h-full object-cover"
                  />
                  {/* Location Tag on Image */}
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Cox's Bazar Beach • 17:42 Dusk</span>
                  </div>
                </div>

                {/* Card Title Details */}
                <div className="px-2 pb-2">
                  <p className="text-[10px] font-semibold tracking-wider text-[#737970] uppercase mb-1">
                    Journal Entry #042
                  </p>
                  <h3 className="font-serif text-xl font-bold text-[#1A1C19]">
                    Twilight by the Bay of Bengal
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Description, and AI Synthesis Workflow */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAEFE6] border border-[#DCE4D6] text-xs font-semibold tracking-wider text-[#555B52] uppercase mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C4841D]" />
                Intelligent Synthesis
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1C19] tracking-tight leading-[1.15] mb-4">
                Your Stories, Thoughtfully Summarized.
              </h2>

              {/* Subtitle description */}
              <p className="text-base sm:text-lg text-[#555B52] leading-relaxed mb-8 max-w-xl">
                VoyageLog automatically creates a short AI summary from your photo description, helping you revisit the feeling of a journey at a glance without losing the original voice.
              </p>

              {/* Workflow Container */}
              <div className="w-full space-y-4">
                
                {/* 1. Original Traveler's Note Card */}
                <div className="bg-white p-5 rounded-2xl border border-[#E2E8DC] shadow-sm relative">
                  <div className="flex items-center justify-between mb-3 text-[11px] font-semibold tracking-wider text-[#737970] uppercase">
                    <div className="flex items-center gap-1.5">
                      <AlignLeft className="w-3.5 h-3.5 text-[#555B52]" />
                      <span>Original Traveler's Note</span>
                    </div>
                    <span>184 chars</span>
                  </div>
                  <p className="font-serif italic text-sm sm:text-base text-[#1A1C19] leading-relaxed">
                    "I spent the evening walking along Cox's Bazar beach. The golden sunset reflected on the waves, and the sound of the ocean made the moment unforgettable."
                  </p>
                </div>

                {/* Transition Arrow Divider */}
                <div className="flex justify-center my-[-4px] relative z-10">
                  <div className="w-8 h-8 rounded-full bg-[#1C2821] text-white flex items-center justify-center shadow-md">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>

                {/* 2. Sample AI-Generated Summary Card */}
                <div className="bg-white p-5 rounded-2xl border border-[#E2E8DC] shadow-sm relative">
                  <div className="flex items-center justify-between mb-3 text-[11px] font-semibold tracking-wider text-[#737970] uppercase">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C4841D]" />
                      <span>Sample AI-Generated Summary</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#F4F7F2] border border-[#DCE4D6] text-[#333831] text-[10px]">
                      Concise
                    </span>
                  </div>
                  <p className="font-serif text-sm sm:text-base text-[#1A1C19] leading-relaxed mb-4">
                    "A peaceful sunset walk along Cox's Bazar beach, surrounded by golden light and soothing ocean waves."
                  </p>
                  
                  {/* Micro Metadata Footer */}
                  <div className="pt-3 border-t border-[#F0F4EC] flex items-center gap-2 text-[11px] sm:text-xs text-[#737970] font-medium">
                    <Compass className="w-3.5 h-3.5 text-[#555B52]" />
                    <span>Backend processing pipeline ready</span>
                    <span className="text-[#C4B8A5]">•</span>
                    <span>Generates in ~400ms</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}