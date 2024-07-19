import Link from "next/link";
import Logo from "./Logo";

const routes = [
    { path: "/", name: "Home" },
    { path: "/events/all", name: "All EVents" },
];

export default function Header() {
    return (
        <header className='w-full h-14   border-b border-white/10 flex justify-between items-center px-3 md:px-9'>
            <Logo />
            <nav>
                <ul className='flex gap-6 text-sm'>
                    {routes.map((route) => (
                        <li key={route.name} className="text-white/50 hover:text-white transition">
                            <Link href={route.path}>{route.name}</Link>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    );
}
