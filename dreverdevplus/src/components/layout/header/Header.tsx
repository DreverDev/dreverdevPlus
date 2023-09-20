import Link from "next/link";
import Menu from "./Menu";
import { LogoIcon } from "@/icons/icons";

export default function Header() {

    return (
        <header className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 backdrop-blur-sm md:backdrop-blur-0">
            <div className="flex flex-grow basis-0 [&>a]:font-medium">
                <Link href="/" className="flex items-center hover:text-subtext transition-colors duration-300">
                    <span>
                        <LogoIcon size={40} />
                    </span>
                    <span>DreverDev</span>
                </Link>
            </div>
            <Menu />
        </header>
    )
}