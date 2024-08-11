'use client';
import { useActivePath } from '@/app/helper';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const isActive = useActivePath();
  return (
    <Link
      href={href}
      className={
        isActive(href)
          ? 'under scale-110 font-semibold text-steel-blue-50 underline underline-offset-[4px] duration-500 ease-in-out'
          : 'font-normal text-steel-blue-50 duration-500 ease-in-out hover:scale-110 hover:font-semibold hover:underline hover:underline-offset-[4px]'
      }>
      {children}
    </Link>
  );
};

export default NavLink;
