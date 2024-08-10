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
          ? 'under font-semibold text-steel-blue-50 underline underline-offset-[7px]'
          : 'font-normal text-steel-blue-50'
      }>
      {children}
    </Link>
  );
};

export default NavLink;
