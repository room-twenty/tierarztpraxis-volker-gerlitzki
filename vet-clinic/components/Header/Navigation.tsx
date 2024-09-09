import NavLink from '@/components/NavLink/NavLink';

const navItems = [
  { href: '/', text: 'Startseite' },
  { href: '/tiere', text: 'Tiere' },
  { href: '/aerzte', text: 'Unsere Ärzte' },
  { href: '/leistungen', text: 'Alle Leistungen' },
  { href: '/blog', text: 'Blog' },
];

const Navigation = () => {
  return (
    <nav className="flex h-12 place-items-center justify-evenly bg-glacier-300">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;