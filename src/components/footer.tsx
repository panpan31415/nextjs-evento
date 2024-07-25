import Link from "next/link";

const links = [
    {
        path: "/terms-and-conditions",
        name: "Terms & Conditions",
    },
    {
        path: "/privacy-policy",
        name: "Privacy",
    },
];

export default function Footer() {
    return (
        <footer className='mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25'>
            <small className='text-xs'>&copy; 2024 ByteGrad, All rights reserved.</small>
            <ul className='flex gap-x-3 sm:gap-x-8'>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
