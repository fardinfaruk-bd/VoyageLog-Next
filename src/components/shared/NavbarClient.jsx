"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@heroui/react";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function NavbarClient({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const currentUser = user?.user || user;
  const isAuthenticated = Boolean(currentUser && Object.keys(currentUser).length > 0);

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsMenuOpen(false);
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden text-[#1A1C19] focus:outline-none p-2 rounded-lg hover:bg-[#EAEFE6] transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F4F7F2] border-b border-[#E2E8DC] px-6 py-6 flex flex-col gap-4 shadow-lg sm:hidden transition-all z-50">
          <Link
            href="/features"
            className="text-base font-medium text-[#1A1C19] hover:text-[#B58B5D] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className="text-base font-medium text-[#1A1C19] hover:text-[#B58B5D] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/about"
            className="text-base font-medium text-[#1A1C19] hover:text-[#B58B5D] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>

          <div className="pt-4 border-t border-[#E2E8DC] flex flex-col gap-3">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center bg-[#1C2821] text-white font-medium py-2.5 rounded-xl shadow-xs"
                >
                  Go to Dashboard
                </Link>
                <Button
                  className="w-full bg-red-600/10 text-red-700 hover:bg-red-600/20 font-medium py-2.5 rounded-xl border border-red-200 transition-all"
                  onClick={handleSignOut}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center border border-[#DCE4D6] bg-white text-[#1A1C19] hover:bg-[#EAEFE6] font-medium py-2.5 rounded-xl transition-all text-sm"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center bg-[#1C2821] text-white font-medium py-2.5 rounded-xl hover:bg-[#2C3B32] transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}