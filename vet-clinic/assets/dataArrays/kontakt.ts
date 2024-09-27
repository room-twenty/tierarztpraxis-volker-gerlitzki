import {
  faPhone,
  faEnvelope,
  faBriefcaseMedical,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

interface IContact {
  href: string;
  text: string;
  icon: IconDefinition;
  isImportant?: boolean;
}

export const contactItems: IContact[] = [
  { href: 'tel:0407244244', text: '040 - 724 42 44', icon: faPhone },
  {
    href: 'mailto:praxis@vet-gerlitzki.de',
    text: 'praxis@vet-gerlitzki.de',
    icon: faEnvelope,
  },
  {
    href: 'tel:040434379',
    text: 'Tierärztlicher Notruf',
    icon: faBriefcaseMedical,
    isImportant: true,
  },
];
