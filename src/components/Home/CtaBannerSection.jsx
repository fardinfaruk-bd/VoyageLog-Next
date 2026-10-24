import React from "react";
import { Button } from "@heroui/react";
import { Plane, ArrowRight } from "lucide-react";

export default function CtaBannerSection() {
  return (
    <section className="bg-[#F4F7F2] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative bg-linear-to-br from-[#455944] via-[#183D32] to-[#34594D] rounded-[2.5rem] py-16 sm:py-20 px-6 sm:px-12 text-center text-white shadow-xl overflow-hidden flex flex-col items-center justify-center">
          
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider text-emerald-200 uppercase mb-6 backdrop-blur-md shadow-sm relative z-10">
            <Plane className="w-3.5 h-3.5 text-emerald-300" />
            Begin The Journey
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-white mb-4 relative z-10 leading-[1.15]">
            Your Next Memory Starts Here.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-normal max-w-xl mx-auto mb-8 relative z-10 leading-relaxed">
            Create your personal travel journal and give every journey a place to live. Open your private archive today.
          </p>

          <div className="relative z-10 mb-4">
            <Button
              className="bg-white text-[#1C2821] font-medium px-8 py-6 rounded-full hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2 group text-base"
              size="lg"
            >
              Create Your Free Account
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="text-xs text-gray-400 font-medium tracking-wide relative z-10">
            Free for individual travelers <span className="mx-1.5 text-emerald-500">•</span> No credit card required
          </p>

        </div>

      </div>
    </section>
  );
}