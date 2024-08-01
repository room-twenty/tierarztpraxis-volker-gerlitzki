import {
  faStethoscope,
  faUserDoctor,
  faBriefcaseMedical,
  faSyringe,
  faCommentMedical,
  faShieldDog,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface ILeistungen {
  title: string;
  items: string[];
  faIcon: IconDefinition;
}

export const leistungen: ILeistungen[] = [
  {
    title: 'Diagnostik',
    items: [
      'EKG',
      'Geriatrie-Check',
      'Röntgendiagnostik',
      'Laboruntersuchungen',
      'Ultraschall-Untersuchungen',
      'Allergietests und Desensibilisierung',
    ],
    faIcon: faStethoscope,
  },
  {
    title: 'Beratung',
    items: ['Ernährungsberatung', 'Beratung bei Verhaltensproblemen'],
    faIcon: faUserDoctor,
  },
  {
    title: 'Operationen und Chirurgie',
    items: [
      'Weichteil- und Knochenchirurgie',
      'Injektions-, Inhalations- und Kurznarkosen',
    ],
    faIcon: faSyringe,
  },
  {
    title: 'Physiotherapeutische Anwendungen',
    items: [
      'Revitalisierung im Bewegungsapparat (Muskelaufbau)',
      'Nach orthopädischen Operationen (z.B. zur Schmerztherapie)',
      'Zur Motivation der Bewegung bei älteren Tieren oder zur Gewichtsreduktion',
    ],
    faIcon: faCommentMedical,
  },
  {
    title: 'Züchter Spezifische Analysen',
    items: ['DNA-Bestimmungen', 'Reihenuntersuchen', 'Blutgruppen-Bestimmung'],
    faIcon: faShieldDog,
  },
  {
    title: 'Weitere Leistungen',
    items: [
      'Zahnheilkunde',
      'Augenheilkunde',
      'Impferinnerung',
      'EC-Kartenzahlung',
      'Hunde- und Katzenfriseur',
      'Tierärztliche Vollapotheke',
      'Große Auswahl an Diätfuttermitteln',
      'Elektronische Tierkennzeichnung / EU Heimtierpässe',
    ],
    faIcon: faBriefcaseMedical,
  },
];
