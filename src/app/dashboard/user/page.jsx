"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { 
  Download, 
  Plus, 
  BookOpen, 
  Globe, 
  Camera, 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Clock, 
  Lock 
} from "lucide-react";

export default function DashboardOverviewPage() {
  return (
    <div className="min-h-screen bg-[#F4F7F2] text-[#1A1C19] p-6 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ================= TOP HEADER BANNER ================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E2E8DC]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#B58B5D] uppercase mb-1">
              <span>Journal Dispatch • Vol. IV</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B58B5D]" />
              <span>Overview & Field Intelligence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1C19]">
              Travel Overview & Chronicle
            </h1>
            <p className="text-sm sm:text-base text-[#555B52] mt-1 max-w-2xl">
              A curated synthesis of your global expeditions, archival milestones, and automated storytelling metrics.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="bordered"
              className="border-[#DCE4D6] bg-white text-[#1A1C19] hover:bg-[#EAEFE6] font-medium px-4 py-6 rounded-xl flex items-center gap-2 text-sm shadow-xs"
            >
              <Download className="w-4 h-4 text-[#737970]" />
              Download Archival Report
            </Button>
            <Button
              className="bg-[#1C2821] text-white hover:bg-[#2C3B32] font-medium px-5 py-6 rounded-xl flex items-center gap-2 text-sm shadow-md"
            >
              <Plus className="w-4 h-4" />
              Log New Expedition
            </Button>
          </div>
        </div>

        {/* ================= STATS METRICS ROW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E2E8DC] shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#737970]">Archived Expeditions</span>
              <div className="p-2 rounded-lg bg-[#EAEFE6] text-[#1C2821]">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-[#1A1C19]">14</span>
                <span className="text-xs text-[#555B52]">Total Journeys</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                <Sparkles className="w-3 h-3" />
                +2 this autumn season
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E2E8DC] shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#737970]">Global Footprint</span>
              <div className="p-2 rounded-lg bg-[#EAEFE6] text-[#1C2821]">
                <Globe className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-[#1A1C19]">8</span>
                <span className="text-xs text-[#555B52]">Countries • 28 Pins</span>
              </div>
              <div className="mt-4 w-full bg-[#E2E8DC] rounded-full h-1.5 overflow-hidden">
                <div className="bg-[#B58B5D] h-full rounded-full" style={{ width: "18%" }} />
              </div>
              <p className="text-[10px] text-[#737970] mt-1.5 text-right">18% World</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E2E8DC] shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#737970]">Photographic Vault</span>
              <div className="p-2 rounded-lg bg-[#EAEFE6] text-[#1C2821]">
                <Camera className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-[#1A1C19]">342</span>
                <span className="text-xs text-[#555B52]">High-Res Frames</span>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#555B52]">
                <Lock className="w-3 h-3 text-[#B58B5D]" />
                <span>4.2 GB Encrypted Vault</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E2E8DC] shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#737970]">AI Narratives</span>
              <div className="p-2 rounded-lg bg-[#EAEFE6] text-[#1C2821]">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-[#1A1C19]">14</span>
                <span className="text-xs text-[#555B52]">Chronicles Synthesized</span>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#555B52]">
                <Clock className="w-3 h-3 text-[#B58B5D]" />
                <span>Avg. read time 1.3 min</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= MAIN CONTENT GRID (2 COLUMNS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN (FEATURED EXPEDITION & CARTOGRAPHY) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Featured Hero Card */}
            <div className="bg-white rounded-3xl border border-[#E2E8DC] overflow-hidden shadow-xs">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#1C2821]">
                {/* Background Banner */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-80"
                  style={{ backgroundImage: `url('https://i.ibb.co.com/ycP6RdsG/screen.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-wider text-white uppercase">
                    Featured Field Note • Oct 2026
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-medium text-white flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-300" />
                    46.5983° N, 12.0563° E
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold tracking-widest text-amber-300 uppercase mb-1">
                    Prags Dolomites • South Tyrol
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal leading-snug">
                    Autumn in the Italian Dolomites — Lago di Braies Expedition
                  </h2>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 divide-x divide-[#E2E8DC] border-b border-[#E2E8DC] py-4 px-6 bg-[#F9FBF7]">
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#737970]">Alpine Passes</p>
                  <p className="text-sm font-serif font-bold text-[#1A1C19] mt-0.5">3 Traversed</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#737970]">Camera Frames</p>
                  <p className="text-sm font-serif font-bold text-[#1A1C19] mt-0.5">48 Raw Shots</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#737970]">Pass Elevation</p>
                  <p className="text-sm font-serif font-bold text-[#1A1C19] mt-0.5">1,498 m</p>
                </div>
              </div>

              {/* Description & Footer */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-3 bg-[#F4F7F2] p-4 rounded-2xl border border-[#E2E8DC]">
                  <Sparkles className="w-4 h-4 text-[#B58B5D] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#B58B5D] mb-1">AI Field Synthesis</p>
                    <p className="text-xs sm:text-sm text-[#555B52] italic leading-relaxed">
                      "A serene dawn passage through the pale peaks of Prags, where silent emerald waters mirror the rugged limestone monoliths. The morning chill lingers on timber planks as low fog winds through larches turning liquid gold."
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#737970]">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>Leica Q2 • Summilux 28mm f/1.7</span>
                  </div>
                  <Link href="/dashboard/memories" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A1C19] hover:text-[#B58B5D] transition-colors">
                    Read Full Field Journal
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Cartography Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8DC] shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#737970]">Cartography & Route</p>
                  <h3 className="text-xl font-serif font-normal text-[#1A1C19]">Expedition Geographic Footprint</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#EAEFE6] border border-[#DCE4D6] text-[11px] font-medium text-[#555B52]">
                  Current Season Focus: Alpine & High Elevation
                </span>
              </div>

              {/* Simulated Map / Coordinates Box */}
              <div className="relative bg-[#F4F7F2] rounded-2xl p-6 border border-[#E2E8DC] overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#DCE4D6] text-[10px] font-medium text-[#555B52]">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" /> Dolomites, IT
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#DCE4D6] text-[10px] font-medium text-[#555B52]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Geiranger, NO
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#DCE4D6] text-[10px] font-medium text-[#555B52]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Kyoto, JP
                  </span>
                </div>

                <div className="h-28 w-full relative flex items-end">
                  <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 500 100">
                    <path d="M 0 80 Q 120 20, 250 60 T 500 30" fill="none" stroke="#B58B5D" strokeWidth="2.5" strokeDasharray="4 4" />
                  </svg>
                  <div className="absolute top-6 left-1/4 w-3 h-3 rounded-full bg-[#1C2821] border-2 border-white shadow-xs" />
                  <div className="absolute bottom-6 left-3/4 w-3 h-3 rounded-full bg-[#B58B5D] border-2 border-white shadow-xs" />
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-[#E2E8DC] text-[10px] text-[#737970] font-mono">
                  <span>Cartographic Grid System • WGS 84</span>
                  <span>Elevation Profile Active</span>
                </div>
              </div>

              {/* Regional Breakdown */}
              <div className="space-y-4 pt-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#737970]">Regional Distribution of Expeditions</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium text-[#1A1C19]">
                    <span>Europe (Alps & Scandinavian Fjords)</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-[#F4F7F2] rounded-full h-2 border border-[#E2E8DC] overflow-hidden">
                    <div className="bg-[#1C2821] h-full rounded-full" style={{ width: "45%" }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium text-[#1A1C19]">
                    <span>Asia (Himalayan Range & Kansai)</span>
                    <span>35%</span>
                  </div>
                  <div className="w-full bg-[#F4F7F2] rounded-full h-2 border border-[#E2E8DC] overflow-hidden">
                    <div className="bg-[#B58B5D] h-full rounded-full" style={{ width: "35%" }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium text-[#1A1C19]">
                    <span>North America (Cascadia & Pacific Rim)</span>
                    <span>20%</span>
                  </div>
                  <div className="w-full bg-[#F4F7F2] rounded-full h-2 border border-[#E2E8DC] overflow-hidden">
                    <div className="bg-[#737970] h-full rounded-full" style={{ width: "20%" }} />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN (RECENT FIELD ENTRIES & STORYTELLING SYNTHESIS) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Recent Field Entries Widget */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8DC] shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#737970]">Chronological Log</p>
                  <h3 className="text-xl font-serif font-normal text-[#1A1C19]">Recent Field Entries</h3>
                </div>
                <Link href="/dashboard/memories" className="text-xs font-bold text-[#B58B5D] hover:underline">
                  VIEW ALL
                </Link>
              </div>

              <div className="space-y-4">
                
                {/* Entry 1 */}
                <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F4F7F2] transition-colors border border-transparent hover:border-[#E2E8DC]">
                  <div className="w-14 h-14 rounded-xl bg-[#1C2821] overflow-hidden shrink-0 relative">
                    <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url('https://i.ibb.co.com/ycP6RdsG/screen.png')` }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#737970]">Nov 3, 2026</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[9px] font-semibold border border-emerald-100">AI Complete</span>
                    </div>
                    <h4 className="text-xs font-serif font-bold text-[#1A1C19] truncate">Torii Path at Fushimi Inari</h4>
                    <p className="text-[11px] text-[#555B52] truncate">Kyoto, Japan • 18 Vermillion Fr...</p>
                  </div>
                </div>

                {/* Entry 2 */}
                <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F4F7F2] transition-colors border border-transparent hover:border-[#E2E8DC]">
                  <div className="w-14 h-14 rounded-xl bg-[#1C2821] overflow-hidden shrink-0 relative">
                    <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url('https://i.ibb.co.com/ycP6RdsG/screen.png')` }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#737970]">Oct 28, 2026</span>
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-[9px] font-semibold border border-amber-100">EXIF Synced</span>
                    </div>
                    <h4 className="text-xs font-serif font-bold text-[#1A1C19] truncate">Sarangkot Sunrise Ove...</h4>
                    <p className="text-[11px] text-[#555B52] truncate">Pokhara, Nepal • Altitude 1,60...</p>
                  </div>
                </div>

                {/* Entry 3 */}
                <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F4F7F2] transition-colors border border-transparent hover:border-[#E2E8DC]">
                  <div className="w-14 h-14 rounded-xl bg-[#1C2821] overflow-hidden shrink-0 relative">
                    <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url('https://i.ibb.co.com/ycP6RdsG/screen.png')` }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#737970]">Oct 24, 2026</span>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[9px] font-semibold border border-blue-100">Archived</span>
                    </div>
                    <h4 className="text-xs font-serif font-bold text-[#1A1C19] truncate">Lago di Braies at First D...</h4>
                    <p className="text-[11px] text-[#555B52] truncate">Dolomites, Italy • 48 Photos</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Automated Storytelling Synthesis Widget */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8DC] shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#737970]">Narrative Engine</p>
                  <h3 className="text-xl font-serif font-normal text-[#1A1C19]">Automated Storytelling Synthesis</h3>
                </div>
                <Sparkles className="w-5 h-5 text-[#B58B5D]" />
              </div>

              {/* Tone Distribution */}
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#737970]">Editorial Tone Distribution</p>
                <div className="w-full bg-[#F4F7F2] rounded-full h-3 border border-[#E2E8DC] flex overflow-hidden">
                  <div className="bg-[#1C2821] h-full" style={{ width: "55%" }} />
                  <div className="bg-[#B58B5D] h-full" style={{ width: "30%" }} />
                  <div className="bg-[#DCE4D6] h-full" style={{ width: "15%" }} />
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#555B52] pt-1">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#1C2821]" /> Contemplative (55%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#B58B5D]" /> Documentary (30%)</span>
                </div>
              </div>

              {/* AI Draft Suggestion Box */}
              <div className="bg-[#F4F7F2] p-5 rounded-2xl border border-[#E2E8DC] space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1A1C19]">
                  <Sparkles className="w-4 h-4 text-[#B58B5D]" />
                  <span>Next Suggested Story Draft</span>
                </div>
                <p className="text-xs text-[#555B52] leading-relaxed">
                  You have <span className="font-semibold text-[#1A1C19]">3 uncaptioned photos</span> from <span className="font-semibold text-[#1A1C19]">Zermatt, Switzerland</span>. Let VoyageLog compose an alpine draft.
                </p>
                <Button
                  className="w-full bg-white hover:bg-gray-50 border border-[#DCE4D6] text-[#1A1C19] font-medium py-2.5 rounded-xl shadow-xs text-xs flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#B58B5D]" />
                  Draft AI Story
                </Button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}