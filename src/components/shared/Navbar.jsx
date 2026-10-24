import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Compass, User } from "lucide-react";
import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F4F7F2]/90 backdrop-blur-md border-b border-[#E2E8DC] px-4 sm:px-6 lg:px-12 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        <div className="flex items-center gap-3">
          <NavbarClient />

          <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-[#EAEFE6] border border-[#DCE4D6] flex items-center justify-center text-[#1C2821] shadow-sm">
              <Compass className="w-5 h-5" />
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1C19]">
              VoyageLog
            </span>
          </Link>
        </div>

        <nav className="hidden sm:flex items-center gap-8">
          <Link href="#features" className="text-[#555B52] hover:text-[#1A1C19] font-medium text-sm transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-[#555B52] hover:text-[#1A1C19] font-medium text-sm transition-colors">
            How It Works
          </Link>
          <Link href="#about" className="text-[#555B52] hover:text-[#1A1C19] font-medium text-sm transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="#login" className="hidden md:block text-[#1A1C19] font-medium text-sm hover:opacity-80 transition-opacity">
            Log In
          </Link>

          <Link href="#get-started">
            <Button 
              className="bg-[#1C2821] text-white font-medium px-5 py-2.5 rounded-full hover:bg-[#2C3B32] transition-all shadow-sm text-sm"
            >
              Get Started
            </Button>
          </Link>

          <Link 
            href="#profile" 
            className="w-10 h-10 rounded-full bg-[#1C2821] text-white flex items-center justify-center shadow-sm hover:bg-[#2C3B32] transition-colors"
            aria-label="User Profile"
          >
            <User className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </header>
  );
}