import React from "react";
import Link from "next/link";
import { Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F4F7F2] border-t border-[#E2E8DC] px-4 sm:px-6 lg:px-12 pt-12 pb-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10">
          
          <div className="flex flex-col items-start gap-2">
            <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-[#EAEFE6] border border-[#DCE4D6] flex items-center justify-center text-[#1C2821] shadow-sm">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1A1C19]">
                VoyageLog
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#555B52] font-normal mt-1">
              Your memories. Your stories. Your private collection.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
            <Link 
              href="#features" 
              className="text-[#555B52] hover:text-[#1A1C19] font-medium text-sm transition-colors"
            >
              Features
            </Link>
            <Link 
              href="#about" 
              className="text-[#555B52] hover:text-[#1A1C19] font-medium text-sm transition-colors"
            >
              About
            </Link>
            <Link 
              href="#login" 
              className="text-[#555B52] hover:text-[#1A1C19] font-medium text-sm transition-colors"
            >
              Login
            </Link>
            <Link 
              href="#register" 
              className="text-[#555B52] hover:text-[#1A1C19] font-medium text-sm transition-colors"
            >
              Register
            </Link>
          </nav>
        </div>

        <div className="w-full h-1px bg-[#E2E8DC] mb-6" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] sm:text-xs text-[#737970] font-medium tracking-wider uppercase">
          <p>© 2026 VOYAGELOG. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-6">
            <Link 
              href="#privacy" 
              className="hover:text-[#1A1C19] transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <Link 
              href="#terms" 
              className="hover:text-[#1A1C19] transition-colors"
            >
              TERMS OF SERVICE
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}