import { links, ILink } from '../../assets/dataArrays/links';

const navItems: ILink[] = [
  { href: '/', text: 'Startseite' },
  { href: '/tiere', text: 'Tiere' },
  { href: '/aerzte', text: 'Unsere Ärzte' },
  { href: '/leistungen', text: 'Alle Leistungen' },
  { href: '/blog', text: 'Blog' },
];

const Footer: React.FC = () => {
  const combinedLinks: { title: string; items: ILink[] }[] = [
    { title: 'Entdecken', items: navItems },
    { title: 'Links', items: links },
  ];

  return (
    <footer className="footer bg-neutral p-5 text-neutral-content">
      {combinedLinks.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-4">
          <h4>{section.title}</h4>
          {section.items.map((item, index) => (
            <a key={index} href={item.href} className="link-hover link mr-4">
              {item.text}
            </a>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
