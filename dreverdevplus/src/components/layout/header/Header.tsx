"use client"

import Link from "next/link";
import Menu from "./Menu";

export default function Header() {

    return (
        <header className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 backdrop-blur-sm md:backdrop-blur-0">
            <div className="flex flex-grow basis-0 [&>a]:font-medium"><Link href="/">&lt;DreverDev/&gt;</Link></div>
            <Menu />
        </header>
    )
}