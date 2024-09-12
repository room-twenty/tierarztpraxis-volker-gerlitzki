import DogoramaWidget from "./DogoramaWidget";

const navItems = [
  { href: '/', text: 'Startseite' },
  { href: '/tiere', text: 'Tiere' },
  { href: '/aerzte', text: 'Unsere Ärzte' },
  { href: '/leistungen', text: 'Alle Leistungen' },
  { href: '/blog', text: 'Blog' },
];

const Footer = () => {
  return (
    <footer className="footer bg-neutral p-10 text-neutral-content">
      <nav>
        {navItems.map((item, index) => (
          <a key={index} href={item.href} className="link-hover link">
            {item.text}
          </a>
        ))}
      </nav>
      <DogoramaWidget/>
    </footer>
  );
};

export default Footer;