"use client"
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Turn as Hamburger } from 'hamburger-react';
import { useState } from "react";

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <div className="flex text-sm [&>li>a]:font-medium [&>li>a]:text-current [&>li>a]:transition-colors [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 relative">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
            <nav className={`transform origin-top-right ${isOpen ? 'scale-100' : 'scale-0'} transition-transform duration-300 absolute top-full right-0 w-64 bg-gray-800 text-white p-4 rounded`}>
                <ul className="flex flex-col gap-y-4">
                    {siteConfig.navItems.map((item) => (
                        <li key={item.href}>
                            <Link className="text-xl" href={item.href}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* <div id="overlay" className={`fixed top-0 left-0 bg-black h-screen w-screen cursor-pointer z-20 ${isOpen ? 'open' : 'closed'}`} onClick={toggleOpen} /> */}
        </div>
    )
}