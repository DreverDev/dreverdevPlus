"use client"
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Turn as Hamburger } from 'hamburger-react';
import { useEffect, useRef, useState } from "react";

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLElement>(null);
    const buttonRef = useRef<HTMLElement>(null);

    const toggleOpen = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && buttonRef.current && (!menuRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node))) {
            if (isOpen) toggleOpen();
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex text-sm [&>li>a]:font-medium [&>li>a]:text-current [&>li>a]:transition-colors [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 relative">
            <span className="z-10" ref={buttonRef} onClick={toggleOpen}><Hamburger toggled={isOpen} /></span>
            <nav ref={menuRef} className={`transform origin-top-right ${isOpen ? 'scale-100' : 'scale-0'} transition-transform duration-300 absolute top-0 right-0 w-64 bg-gray-800 text-white rounded`}>
                <ul className="flex flex-col py-5">
                    {siteConfig.navItems.map((item) => (
                        <Link className="text-xl" href={item.href}>
                            <li key={item.href} className="px-5 py-3 inline-block relative group">
                                {item.label}
                                <span className="absolute bottom-1 left-0 w-0 bg-white opacity-10 transform origin-left group-hover:w-full transition-all duration-300 h-1"></span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    )
}