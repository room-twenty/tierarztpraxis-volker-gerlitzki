'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();
  const isActive = path === href || path.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      className={
        isActive
          ? 'text-white under font-semibold underline underline-offset-[7px]'
          : 'text-white font-normal'
      }>
      {children}
    </Link>
  );
};

export default NavLink;
