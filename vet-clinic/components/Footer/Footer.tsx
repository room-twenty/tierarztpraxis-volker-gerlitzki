import { links, ILink } from '../../assets/dataArrays/links';

const navItems: ILink[] = [
  { href: '/', text: 'Startseite' },
  { href: '/tiere', text: 'Tiere' },
  { href: '/aerzte', text: 'Unsere Ärzte' },
  { href: '/leistungen', text: 'Alle Leistungen' },
  { href: '/blog', text: 'Blog' },
];

const protectedLinks: ILink[] = [
  { href: '/cookies', text: 'Cookies' },
  { href: '/impressum', text: 'Impressum' },
  { href: '/datenschutz', text: 'Datenschutz' },
];

const Footer: React.FC = () => {
  const combinedLinks: { title: string; items: ILink[] }[] = [
    { title: 'Entdecken', items: navItems },

    { title: 'Wir achten Ihre Privatsphäre', items: protectedLinks },
    { title: 'Weitere Links', items: links },
  ];

  return (
    <footer className="bg-gl footer scroll-pb-9 bg-[#E7E7E7] px-2 pt-11 text-neutral-content">
      <h4 className="text-[1rem] font-semibold text-glacier-950">
        Tierarztpraxis Gerlitzki: Danke für Ihren Besuch
      </h4>
      {combinedLinks.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-4 leading-6">
          <h4 className="text-[1rem] font-semibold text-glacier-950">
            {section.title}
          </h4>
          {section.items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="link-hover link mr-4 text-glacier-700 underline">
              {item.text}
            </a>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
