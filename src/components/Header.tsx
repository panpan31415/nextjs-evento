"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const routes = [
    { path: "/", name: "Home" },
    { path: "/events/all", name: "All EVents" },
];

export default function Header() {
    const activePath = usePathname();

    return (
        <header className='w-full h-14   border-b border-white/10 flex justify-between items-center px-3 md:px-9'>
            <Logo />
            <nav className='h-full'>
                <ul className='h-full flex items-center  gap-6 text-sm '>
                    {routes.map((route) => (
                        <li
                            key={route.name}
                            className={clsx("hover:text-white transition relative flex h-full items-center", {
                                "text-white/100": activePath === route.path,
                                "text-white/50": activePath !== route.path,
                            })}>
                            <Link href={route.path}>{route.name}</Link>
                            {activePath === route.path && (
                                <motion.div
                                    layoutId='activePath'
                                    className='bg-accent h-1 w-full absolute bottom-0 '></motion.div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
