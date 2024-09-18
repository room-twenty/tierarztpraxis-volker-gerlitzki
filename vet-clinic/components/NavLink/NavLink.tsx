'use client';
import { useActivePath } from '@/app/helper';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const isActive = useActivePath();
  return (
    <Link
      href={href}
      className={
        isActive(href)
          ? 'w-full translate-x-8 scale-110 p-1 font-semibold underline underline-offset-4 duration-500 ease-in-out'
          : 'w-full py-2 font-normal duration-500 ease-in-out hover:translate-x-7 hover:scale-110 hover:p-3 hover:font-semibold hover:underline hover:underline-offset-4'
      }>
      {children}
    </Link>
  );
};

export default NavLink;
