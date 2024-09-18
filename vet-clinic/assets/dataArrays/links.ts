export interface ILink {
  href: string;
  text: string;
}

export const links: ILink[] = [
  {
    href: 'https://www.dght.de/startseite',
    text: 'Deutschen Gesellschaft für Herpetologie und Terrarienkunde',
  },
  {
    href: 'https://www.bundestieraerztekammer.de/tieraerzte/beruf/got/',
    text: 'Gebührenordnung für Tierärzte',
  },
  {
    href: 'http://www.terrarien-freunde-hamburg.de/',
    text: 'Terrarienfreunde Hamburg',
  },
  {
    href: 'https://www.tasso.net/',
    text: 'TASSO e.V. (Tiernotruf)',
  },
  {
    href: 'http://www.tierschutzbund.de/00524.html',
    text: 'Deutscher Tierschutzbund e.V',
  },
  {
    href: 'https://www.agila.de/?VermittlerID=11&gclid=Cj0KCQiA1sucBhDgARIsAFoytUtaV3FPyB5cAf9xXKu7m32abyoYxq0VWqoM3iraqP9b34WgCtdtj6QaAkk6EALw_wcB',
    text: 'AGILA Tierversicherung',
  },
  {
    href: 'https://www.comfortplan.de/tierversicherung',
    text: 'Comfortplan Tierversicherungsvergleich',
  },
];

export const protectedLinks: ILink[] = [
  { href: '/cookies', text: 'Cookies' },
  { href: '/impressum', text: 'Impressum' },
  { href: '/datenschutz', text: 'Datenschutz' },
];

export const navItems: ILink[] = [
  { href: '/', text: 'Startseite' },
  { href: '/tiere', text: 'Tiere' },
  { href: '/aerzte', text: 'Unsere Ärzte' },
  { href: '/leistungen', text: 'Alle Leistungen' },
  { href: '/blog', text: 'Blog' },
];