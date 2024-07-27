"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={path.startsWith(href) ? "active link" : "link"}
        >
            {children}
        </Link>
    );
};

export default NavLink;
