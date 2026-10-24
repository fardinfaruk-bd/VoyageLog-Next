import React from "react";
import { Compass } from "lucide-react";
import JournalCard from "../ui/JournalCard";

const entriesData = [
  {
    tag: "COASTAL ESCAPE",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    location: "Cox's Bazar, Bangladesh",
    date: "Nov 18, 2024",
    title: "Where the Ocean Meet...",
    description: "Spent the evening listening to steady rhythmic tides along the world's...",
  },
  {
    tag: "MOUNTAIN EXPEDITION",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    location: "Pokhara, Nepal",
    date: "Oct 29, 2024",
    title: "A Morning Above the...",
    description: "Ascended Sarangkot before dawn to watch the first golden rays awaken t... Machapuchare crest in cold silence.",
  },
  {
    tag: "CULTURAL HERITAGE",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    location: "Kyoto, Japan",
    date: "Nov 04, 2024",
    title: "Quiet Moments in Kyoto",
    description: "Rain fell softly upon cedar shingles while monk footsteps resonated acro... the weathered pavilion galleries.",
  },
  {
    tag: "ALPINE JOURNEY",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    location: "Swiss Alps, Switzerland",
    date: "Sep 12, 2024",
    title: "Lost Among the...",
    description: "Hiking high above Zermatt through wildflowers with cowbells echoing...",
  },
];

export default function CuratedEntriesSection() {
  return (
    <section className="bg-[#F1F5EB] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAEFE6] border border-[#DCE4D6] text-xs font-semibold tracking-wider text-[#555B52] uppercase mb-4 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#333831]" />
              Curated Public Entries
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1C19] tracking-tight leading-[1.15]">
              Memories From Every Corner of the World
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#555B52] max-w-sm leading-relaxed">
            Every photo has a place, a story, and a moment worth remembering. Explore journal archives recorded by members.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {entriesData.map((entry, index) => (
            <JournalCard 
              key={index}
              tag={entry.tag}
              image={entry.image}
              location={entry.location}
              date={entry.date}
              title={entry.title}
              description={entry.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}