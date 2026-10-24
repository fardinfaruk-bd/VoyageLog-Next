"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input, InputGroup, Button, Checkbox, Separator } from "@heroui/react";
import { Mail, KeyRound, Eye, EyeOff, Lock, ArrowRight } from "lucide-react";
import RegisterHeroBanner from "@/components/auth/RegisterHeroBanner";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  const handleGoogleLogin = () => {
    console.log("Google login initiated");
  }

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 bg-[#F4F7F2]">
      <RegisterHeroBanner
        title="Welcome back to your journeys."
        subtitle="Access your private travel archives, route notes, and field entries seamlessly."
      />

      <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-12 lg:p-16 max-w-2xl mx-auto w-full">
        <div className="flex items-center justify-between w-full mb-10 text-xs sm:text-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAEFE6] border border-[#DCE4D6] text-[#555B52] font-medium text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="uppercase text-[11px] tracking-wider">
              Mode:
            </span>{" "}
            Secure Authentication
          </div>

          <p className="text-[#555B52]">
            New traveler?{" "}
            <Link
              href="/register"
              className="font-bold text-[#1A1C19] underline hover:text-[#1C2821] transition-colors"
            >
              Create Account
            </Link>
          </p>
        </div>

        <div className="w-full my-auto">
          <p className="text-xs font-bold tracking-widest text-[#B58B5D] uppercase mb-2">
            Returning Explorer
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1C19] font-normal mb-3">
            Access Your Journal
          </h2>
          <p className="text-sm text-[#555B52] mb-8">
            Enter your credentials to open your private expedition records.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold tracking-wider text-[#333831] uppercase mb-1.5">
                Email Address <span className="text-amber-600">*</span>
              </label>
              <InputGroup className="bg-white border border-[#DCE4D6] rounded-xl shadow-sm hover:border-[#1C2821] focus-within:border-[#1C2821] overflow-hidden flex items-center">
                <InputGroup.Prefix className="pl-3 pr-1 text-[#737970]">
                  <Mail className="w-4 h-4" />
                </InputGroup.Prefix>
                <Input
                  type="email"
                  name="email"
                  placeholder="clara.danvers@voyagelog.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full py-2.5 px-2 text-sm focus:outline-none bg-transparent"
                />
              </InputGroup>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold tracking-wider text-[#333831] uppercase">
                  Password <span className="text-amber-600">*</span>
                </label>
                
              </div>
              <InputGroup className="bg-white border border-[#DCE4D6] rounded-xl shadow-sm hover:border-[#1C2821] focus-within:border-[#1C2821] overflow-hidden flex items-center">
                <InputGroup.Prefix className="pl-3 pr-1 text-[#737970]">
                  <KeyRound className="w-4 h-4" />
                </InputGroup.Prefix>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full py-2.5 px-2 text-sm focus:outline-none bg-transparent"
                />
                <InputGroup.Suffix className="pr-3 pl-1">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="focus:outline-none text-[#737970] hover:text-[#1A1C19]"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </InputGroup.Suffix>
              </InputGroup>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#1C2821] text-white font-medium py-3 h-12 rounded-xl hover:bg-[#2C3B32] transition-all shadow-md flex items-center justify-center gap-2 group text-base mt-4 cursor-pointer"
            >
              Sign In to VoyageLog
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Separator className="mt-6" />
            <p className="text-center text-gray-500">or</p>
            <Separator className="mb-6" />
            <Button
              variant="outline"
              className="w-full font-semibold rounded-xl text-sm h-12 shadow-sm"
              onClick={handleGoogleLogin}
            >
              <FcGoogle />
              Sign Up with Google
            </Button>
          </form>

          <div className="flex items-center justify-center gap-2 text-xs text-[#737970] mt-6">
            <Lock className="w-3.5 h-3.5 text-amber-700" />
            <span>Protected by end-to-end user authentication controls</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#737970] pt-8 border-t border-[#E2E8DC] mt-8">
          <p>© 2026 VoyageLog Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="#support"
              className="hover:text-[#1A1C19] transition-colors"
            >
              Support Desk
            </Link>
            <span>•</span>
            <Link
              href="#security"
              className="hover:text-[#1A1C19] transition-colors"
            >
              Field Security
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
