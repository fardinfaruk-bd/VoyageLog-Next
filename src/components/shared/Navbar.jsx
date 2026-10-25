"use client";
import React from "react";
import Link from "next/link";
import { Avatar, Button, Dropdown, Spinner } from "@heroui/react";
import { Compass, User } from "lucide-react";
import NavbarClient from "./NavbarClient";
import { signOut, useSession } from "@/lib/auth-client";
import { Bars } from "@gravity-ui/icons";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const { data: session, isPending } = useSession();

  const user = session?.user;
  console.log(user);

  const handleLogout = async () => {
    await signOut();
    router.refresh();
  };
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" }
  ];


  return (
    <header className="sticky top-0 z-50 bg-[#F4F7F2]/90 backdrop-blur-md border-b border-[#E2E8DC] px-4 sm:px-6 lg:px-12 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        <div className="flex items-center gap-3">
          <NavbarClient user={user}/>

          <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-[#EAEFE6] border border-[#DCE4D6] flex items-center justify-center text-[#1C2821] shadow-sm">
              <Compass className="w-5 h-5" />
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1C19]">
              VoyageLog
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <NavLinks key={index} href={link.href}>
              {link.label}
            </NavLinks>
          ))}
        </div>

        {isPending ? (
          <Spinner size="sm" color="primary" />
        ) : user ? (
          <div className="flex items-center gap-3">
            <h1 className="hidden md:block font-semibold text-gray-500">
              Hi! <strong className="text-gray-700">{user?.name}</strong>
            </h1>
            <Dropdown placement="bottom end">
              <Dropdown.Trigger>
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user?.name}
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <Dropdown.Menu aria-label="Profile Actions">
                  <Dropdown.Item
                    id="profile"
                    textValue="Profile"
                    className="p-0"
                  >
                    <Link
                      href="/profile"
                      className="flex w-full px-3 py-2 font-medium text-zinc-700 no-underline"
                    >
                      Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="Dashboard"
                    textValue="Dashboard"
                    className="p-0"
                  >
                    <Link
                      href="/dashboard/user"
                      className="flex w-full px-3 py-2 font-medium text-zinc-700 no-underline"
                    >
                      Dashboard
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="logout"
                    color="danger"
                    className="text-danger font-medium px-3 py-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="secondary"
                className="font-semibold rounded-xl shadow-sm border border-[#E2E8DC] text-[#1A1C19] hover:bg-[#E2E8DC] hover:text-[#1A1C19]"
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="font-semibold rounded-xl bg-black">
                Register
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
