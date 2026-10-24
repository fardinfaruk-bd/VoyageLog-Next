import React from "react";
import { Compass, Lock, WifiOff, MapPin } from "lucide-react";

export default function RegisterHeroBanner({
  backgroundImageUrl = "https://i.ibb.co.com/ycP6RdsG/screen.png",
  title = "Every great journey begins with a story.",
  subtitle = "Create your account and start collecting your favorite travel memories, route narratives, and private field sketches.",
  locationText = "Lago di Braies, Dolomites • Archival Volume 2026",
  expeditionText = "Curated Expedition 04",
}) {
  return (
    <div className="lg:col-span-6 relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-[#1A1C19] text-white min-h-screen">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center filter brightness-[0.75] contrast-[1.05]"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50 z-0" />

      {/* Top Branding */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 shadow-md">
          <Compass className="w-6 h-6" />
        </div>
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
            VoyageLog
          </h1>
          <p className="text-[10px] tracking-widest text-gray-300 font-semibold uppercase mt-0.5">
            Private Expedition Journals
          </p>
        </div>
      </div>

      {/* Middle Copy */}
      <div className="relative z-10 max-w-lg my-auto py-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider text-emerald-300 uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Journal Your Expeditions
        </div>

        <h2 className="text-4xl lg:text-5xl font-serif font-normal text-white leading-[1.15] mb-6 drop-shadow-sm">
          {title}
        </h2>

        <p className="text-base text-gray-200 leading-relaxed font-normal mb-10 max-w-md">
          {subtitle}
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/15">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md text-emerald-300 mt-0.5">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Private & Encrypted</p>
              <p className="text-xs text-gray-300 mt-0.5">Your archives stay yours</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md text-amber-300 mt-0.5">
              <WifiOff className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Offline Synced</p>
              <p className="text-xs text-gray-300 mt-0.5">Field capture everywhere</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="relative z-10 flex items-center justify-between text-xs text-gray-300 border-t border-white/10 pt-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-amber-300" />
          <span>{locationText}</span>
        </div>
        <span className="text-gray-400">{expeditionText}</span>
      </div>
    </div>
  );
}