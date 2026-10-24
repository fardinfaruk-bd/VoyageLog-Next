"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, children}) => {
    const pathname = usePathname();
    
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            className={`text-sm font-medium transition-colors no-underline ${isActive
                ? "font-semibold border-b-2 pb-1 rounded-none"
                : "text-gray-400 hover:text-white"
                }`}
            style={isActive ? { color: "##1C2821", borderColor: "##1C2821" } : {}}
        >
            {children}
        </Link>
    );
};

export default NavLinks;