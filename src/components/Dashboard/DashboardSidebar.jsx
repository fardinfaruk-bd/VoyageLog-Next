"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LayoutSideContentLeft } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { LayoutGrid, BookOpen, Camera, Shield, LogOut } from "lucide-react";
import Link from "next/link";

export function DashboardSidebar() {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // VoyageLog Navigation Items based on the reference image
    const navItems = [
        { icon: LayoutGrid, label: "Overview", href: "/dashboard" },
        { icon: BookOpen, label: "My Memories", href: "/dashboard/memories" },
        { icon: Camera, label: "Add New Photo", href: "/dashboard/add-photo" },
        { icon: Shield, label: "Security", href: "/dashboard/security" },
    ];

    const bottomNavItems = [
        { icon: LogOut, label: "Log Out", href: "/logout" },
    ];

    const renderNavItems = (items) => (
        <div className="flex flex-col gap-1.5">
            {items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={`group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 w-full text-left overflow-hidden
                            ${isActive
                                ? "bg-[#1C2821] text-white font-semibold shadow-sm"
                                : "text-[#555B52] hover:bg-[#EAEFE6] hover:text-[#1A1C19]"
                            }`}
                    >
                        <Icon className={`size-4 shrink-0 transition-transform duration-200 group-hover:scale-105
                            ${isActive ? "text-white" : "text-[#555B52] group-hover:text-[#1A1C19]"}`}
                        />
                        <span className="relative z-10">{item.label}</span>
                    </Link>
                );
            })}
        </div>
    );

    const navContent = (
        <div className="flex h-full flex-col justify-between bg-[#F4F7F2] border-r border-[#E2E8DC] text-[#1A1C19] p-6 select-none">
            {/* Top Navigation & Section Header */}
            <div className="flex flex-col gap-6">
                <div className="px-2">
                    <p className="text-[10px] uppercase tracking-widest text-[#737970] font-bold">
                        Navigation
                    </p>
                </div>
                <nav className="px-0.5">{renderNavItems(navItems)}</nav>
            </div>

            {/* Bottom Profile Card & Log Out */}
            <div className="flex flex-col gap-4 px-0.5">
                {/* User Profile Card */}
                <div className="flex items-center gap-3 p-3 bg-white border border-[#E2E8DC] rounded-2xl shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#1C2821] text-white flex items-center justify-center font-bold text-xs tracking-wider shrink-0">
                        CD
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-xs font-bold text-[#1A1C19] truncate">Clara Danvers</p>
                        <p className="text-[11px] text-[#737970] truncate">clara.danvers@voyagelog.com</p>
                    </div>
                </div>

                <hr className="border-[#E2E8DC] mx-1" />
                <nav>{renderNavItems(bottomNavItems)}</nav>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden w-64 shrink-0 lg:block min-h-screen">
                <div className="sticky top-0 h-screen">
                    {navContent}
                </div>
            </aside>

            {/* Mobile Drawer Trigger Bar */}
            <div className="p-4 lg:hidden bg-[#F4F7F2] flex items-center border-b border-[#E2E8DC] sticky top-0 z-40">
                <Drawer>
                    <Button
                        variant="light"
                        size="sm"
                        className="text-[#555B52] hover:bg-[#EAEFE6] min-w-10 p-2"
                    >
                        <LayoutSideContentLeft className="size-5" />
                    </Button>
                    <Drawer.Backdrop>
                        <Drawer.Content placement="left" className="p-0 bg-[#F4F7F2] w-80">
                            <Drawer.Dialog className="h-full border-0">
                                <Drawer.CloseTrigger className="text-[#555B52] hover:text-[#1A1C19] absolute right-4 top-4 z-50 transition-colors" />
                                <Drawer.Body className="p-0 h-full">
                                    {navContent}
                                </Drawer.Body>
                            </Drawer.Dialog>
                        </Drawer.Content>
                    </Drawer.Backdrop>
                </Drawer>
            </div>
        </>
    );
}