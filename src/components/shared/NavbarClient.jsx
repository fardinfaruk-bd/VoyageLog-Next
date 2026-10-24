"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavbarClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden text-[#1A1C19] focus:outline-none"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F4F7F2] border-b border-[#E2E8DC] px-6 py-6 flex flex-col gap-4 shadow-lg sm:hidden transition-all">
          <Link 
            href="#features" 
            className="text-lg font-medium text-[#1A1C19]" 
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="#how-it-works" 
            className="text-lg font-medium text-[#1A1C19]" 
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            href="#about" 
            className="text-lg font-medium text-[#1A1C19]" 
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="pt-4 border-t border-[#E2E8DC]">
            <Link 
              href="#login" 
              className="text-lg font-medium text-[#1A1C19]" 
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </>
  );
}