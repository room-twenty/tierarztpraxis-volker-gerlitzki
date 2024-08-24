import NavLink from '@/components/NavLink/NavLink';

const Navigation = () => {
  return (
    <nav className="flex h-12 place-items-center justify-evenly bg-glacier-300">
      <NavLink href="/">Startseite</NavLink>
      <NavLink href="/aerzte">Unsere Ärzte</NavLink>
      <NavLink href="/tiere">Tiere</NavLink>
      <NavLink href="/leistungen">Alle Leistungen</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </nav>
  );
};

export default Navigation;
