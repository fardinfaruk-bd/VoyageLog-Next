"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, InputGroup, Button } from "@heroui/react";
import {
  User,
  Mail,
  KeyRound,
  ShieldCheck,
  Eye,
  EyeOff,
  Lock,
  ArrowRight,
} from "lucide-react";
import RegisterHeroBanner from "@/components/auth/RegisterHeroBanner";
import { FcGoogle } from "react-icons/fc";
import { signUp, signIn } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Individual Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UI Feedback States
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // --- Password Security Level Calculation ---
  const getPasswordStrength = (pass) => {
    if (!pass) return { label: "Too weak", color: "text-red-600" };

    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    switch (score) {
      case 1:
        return { label: "Weak", color: "text-amber-700" };
      case 2:
        return { label: "Fair", color: "text-amber-600" };
      case 3:
        return { label: "Good", color: "text-emerald-600" };
      case 4:
        return { label: "Strong", color: "text-emerald-700" };
      default:
        return { label: "Too weak", color: "text-red-600" };
    }
  };

  const passwordStrength = getPasswordStrength(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error: authError } = await signUp.email({
        email,
        password,
        name: fullName,
      });

      if (authError) {
        setError(authError.message || "Failed to create account.");
        return;
      }

      setSuccess("Account created successfully! Redirecting...");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    console.log("Google login Done")
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 bg-[#F4F7F2]">
      <RegisterHeroBanner />

      <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-12 lg:p-16 max-w-2xl mx-auto w-full">
        {/* Header Bar */}
        <div className="flex items-center justify-between w-full mb-10 text-xs sm:text-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAEFE6] border border-[#DCE4D6] text-[#555B52] font-medium text-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="uppercase text-[11px] tracking-wider">
              Mode:
            </span>{" "}
            View Verification State
          </div>

          <p className="text-[#555B52]">
            Already a member?{" "}
            <Link
              href="/login"
              className="font-bold text-[#1A1C19] underline hover:text-[#1C2821] transition-colors"
            >
              Log In
            </Link>
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full my-auto">
          <p className="text-xs font-bold tracking-widest text-[#B58B5D] uppercase mb-2">
            New Expeditionist
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1C19] font-normal mb-3">
            Create Your Account
          </h2>
          <p className="text-sm text-[#555B52] mb-8">
            Begin your personal, private travel collection today.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Input */}
            <div>
              <label className="block text-xs font-bold tracking-wider text-[#333831] uppercase mb-1.5">
                Full Name <span className="text-amber-600">*</span>
              </label>
              <InputGroup className="bg-white border border-[#DCE4D6] rounded-xl shadow-sm hover:border-[#1C2821] focus-within:border-[#1C2821] overflow-hidden flex items-center">
                <InputGroup.Prefix className="pl-3 pr-1 text-[#737970]">
                  <User className="w-4 h-4" />
                </InputGroup.Prefix>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Clara Danvers"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full py-2.5 px-2 text-sm focus:outline-none bg-transparent"
                />
              </InputGroup>
            </div>

            {/* Email Address Input */}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full py-2.5 px-2 text-sm focus:outline-none bg-transparent"
                />
              </InputGroup>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold tracking-wider text-[#333831] uppercase">
                  Password <span className="text-amber-600">*</span>
                </label>
                <span className="text-[11px] text-[#737970]">
                  Min. 8 characters
                </span>
              </div>
              <InputGroup className="bg-white border border-[#DCE4D6] rounded-xl shadow-sm hover:border-[#1C2821] focus-within:border-[#1C2821] overflow-hidden flex items-center">
                <InputGroup.Prefix className="pl-3 pr-1 text-[#737970]">
                  <KeyRound className="w-4 h-4" />
                </InputGroup.Prefix>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

              {/* Dynamic Security Level Indicator (Text Only) */}
              <div className="flex items-center justify-between text-[11px] text-[#737970] mt-1.5 px-1">
                <span>Security level:</span>
                <span className={`font-semibold ${passwordStrength.color}`}>
                  {passwordStrength.label}
                </span>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-xs font-bold tracking-wider text-[#333831] uppercase mb-1.5">
                Confirm Password <span className="text-amber-600">*</span>
              </label>
              <InputGroup className="bg-white border border-[#DCE4D6] rounded-xl shadow-sm hover:border-[#1C2821] focus-within:border-[#1C2821] overflow-hidden flex items-center">
                <InputGroup.Prefix className="pl-3 pr-1 text-[#737970]">
                  <ShieldCheck className="w-4 h-4" />
                </InputGroup.Prefix>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full py-2.5 px-2 text-sm focus:outline-none bg-transparent"
                />
                <InputGroup.Suffix className="pr-3 pl-1">
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="focus:outline-none text-[#737970] hover:text-[#1A1C19]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </InputGroup.Suffix>
              </InputGroup>
            </div>

            {/* Notification Messages */}
            {error && (
              <div className="p-3 text-xs font-medium rounded-xl bg-red-50 text-red-700 border border-red-200">
                <span className="font-semibold">Error:</span> {error}
              </div>
            )}

            {success && (
              <div className="p-3 text-xs font-medium rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span className="font-semibold">Success:</span> {success}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#1C2821] text-white font-medium py-3 rounded-xl hover:bg-[#2C3B32] transition-all shadow-md flex items-center justify-center gap-2 group text-base mt-4 cursor-pointer"
              isLoading={isLoading}
              isDisabled={isLoading}
            >
              Create Account
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Google Sign Up Button */}
            <Button
              variant="bordered"
              className="w-full font-semibold rounded-xl text-sm h-12 border-[#DCE4D6] bg-white text-[#1A1C19] hover:bg-[#EAEFE6] shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <FcGoogle size={18} />
              Sign Up with Google
            </Button>
          </form>

          {/* Micro Footer */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#737970] mt-6">
            <Lock className="w-3.5 h-3.5 text-amber-700" />
            <span>
              Zero third-party trackers • End-to-end editorial data protection
            </span>
          </div>
        </div>

        {/* Footer */}
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