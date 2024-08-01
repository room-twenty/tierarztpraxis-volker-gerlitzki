interface ILeistungen {
  title: string;
  items: string[];
}

export const leistungen: ILeistungen[] = [
  {
    title: 'Diagnostik',
    items: [
      'Röntgendiagnostik',
      'Ultraschall-Untersuchungen',
      'Laboruntersuchungen',
      'EKG',
      'Allergietests und Desensibilisierung',
      'Geriatrie-Check',
    ],
  },
  {
    title: 'Physiotherapeutische Anwendungen',
    items: [
      'Nach orthopädischen Operationen (z.B. zur Schmerztherapie)',
      'Revitalisierung im Bewegungsapparat (Muskelaufbau)',
      'Zur Motivation der Bewegung bei älteren Tieren oder zur Gewichtsreduktion',
    ],
  },
  {
    title: 'Weitere Leistungen',
    items: [
      'Augenheilkunde',
      'Zahnheilkunde',
      'Elektronische Tierkennzeichnung/EU Heimtierpässe',
      'Tierärztliche Vollapotheke',
      'Große Auswahl an Diätfuttermitteln',
      'Impferinnerung',
      'EC-Kartenzahlung',
      'Hunde- und Katzenfriseur',
    ],
  },
  {
    title: 'Züchter Spezifische Analysen',
    items: ['DNA-Bestimmungen', 'Blutgruppen-Bestimmung', 'Reihenuntersuchen'],
  },
  {
    title: 'Beratung',
    items: ['Beratung bei Verhaltensproblemen', 'Ernährungsberatung'],
  },
  {
    title: 'Operationen und Chirurgie',
    items: [
      'Injektions-, Inhalations- und Kurznarkosen',
      'Weichteil- und Knochenchirurgie',
    ],
  },
];
