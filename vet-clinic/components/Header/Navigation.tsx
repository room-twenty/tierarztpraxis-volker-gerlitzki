import React from 'react';
import NavLink from '@/components/NavLink/NavLink';

const Navigation = () => {
  return (
    <nav className="flex h-12 place-items-center justify-evenly bg-glacier-300">
      <NavLink href="/">Startseite</NavLink>
      <NavLink href="/leistungen">Leistungen</NavLink>
      <NavLink href="/#unsere-aerzte">Unsere Ärzte</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </nav>
  );
};

export default Navigation;
