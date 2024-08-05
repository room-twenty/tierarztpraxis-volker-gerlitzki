import React from 'react';
import NavLink from '../NavLink/NavLink';

const Navigation = () => {
  return (
    <nav className="flex justify-evenly bg-lblue p-2">
      <NavLink href="/">Startseite</NavLink>
      <NavLink href="/#leistungen">Leistungen</NavLink>
      <NavLink href="/#unsere-aerzte">Unsere Ärzte</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </nav>
  );
};

export default Navigation;
