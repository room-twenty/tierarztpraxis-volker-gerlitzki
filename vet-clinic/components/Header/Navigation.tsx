import React from 'react';
import NavLink from '@/components/NavLink/NavLink';

const Navigation = () => {
  return (
    <nav className="flex justify-evenly bg-glacier-300 p-2">
      <NavLink href="/">Startseite</NavLink>
      <NavLink href="/#leistungen">Leistungen</NavLink>
      <NavLink href="/#unsere-aerzte">Unsere Ärzte</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </nav>
  );
};

export default Navigation;
