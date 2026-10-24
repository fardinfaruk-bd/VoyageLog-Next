import React from "react";
import { Button } from "@heroui/react";
import { ArrowRight, Compass, Play, Bookmark } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F4F7F2] min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAEFE6] border border-[#DCE4D6] text-xs font-semibold tracking-wider text-[#555B52] uppercase mb-6 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#333831]" />
            Your Personal Travel Journal
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#1A1C19] tracking-tight leading-[1.1] mb-6">
            Every Journey Deserves to Be Remembered.
          </h1>

          <p className="text-base sm:text-lg text-[#555B52] font-normal leading-relaxed mb-8 max-w-xl">
            Keep your travel photos, capture the stories behind them, and revisit the moments that made every journey unforgettable.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <Button
              className="bg-[#1C2821] text-white font-medium px-6 py-6 rounded-full hover:bg-[#2C3B32] transition-all shadow-md flex items-center gap-2 group text-base"
              size="lg"
            >
              Start Your Journal
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="bordered"
              className="border-[#DCE4D6] bg-white text-[#1C2821] font-medium px-6 py-6 rounded-full hover:bg-[#F9FBF8] transition-all shadow-sm flex items-center gap-2 text-base"
              size="lg"
            >
              <Play className="w-4 h-4 fill-current text-[#1C2821]" />
              Discover Experience
            </Button>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#737970]">
            <Compass className="w-4 h-4 text-[#737970]" />
            <span>Your memories. Your stories. Your private collection.</span>
          </div>
        </div>

        <div className="lg:col-span-6 relative w-full flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
          
          <div className="absolute top-0 right-4 sm:right-10 bg-[#FFD8A8] text-[#333831] p-3.5 rounded-full shadow-lg z-30 animate-bounce duration-1000">
            <Compass className="w-6 h-6" />
          </div>

          <div className="absolute top-4 left-0 sm:left-4 w-[90%] sm:w-[480px] bg-white p-2.5 rounded-2xl shadow-xl border border-white/50 z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="relative h-[220px] sm:h-[260px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80"
                alt="Geirangerfjord, Norway"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                VoyageLog · Geirangerfjord 🏔️
              </div>
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md p-1.5 rounded-full text-white">
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium">
                <Compass className="w-3.5 h-3.5 text-white" />
                FJORDANE, NORWAY
                <span className="text-[10px] text-gray-300 ml-2">62.1008° N</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-4 sm:left-8 w-[200px] sm:w-[220px] bg-white p-2 rounded-2xl shadow-2xl border border-white/50 z-20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="relative h-[180px] sm:h-[200px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
                alt="Kyoto Temple"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md p-1.5 rounded-full text-white">
                <Bookmark className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium">
                Kyoto • Oct 24
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-20px] right-2 sm:right-6 w-[210px] sm:w-[240px] bg-white p-2 rounded-2xl shadow-2xl border border-white/50 z-30 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="relative h-[250px] sm:h-[280px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80"
                alt="Positano Italy"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-[10px] tracking-widest uppercase font-semibold text-gray-200">Coastal Escape</p>
                <p className="text-sm font-bold">Positano, Italy</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}