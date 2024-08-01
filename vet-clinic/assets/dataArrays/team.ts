export interface ITeam {
  imgSrc: string;
  name: string;
  infoTexte: string[];
}

export const team: ITeam[] = [
  {
    imgSrc: '/images/aerzte/volker.jpeg',
    name: 'Tierarzt Dr. Volker Robert Gerlitzki',
    infoTexte: [
      'Von 1983 bis 1989 hat Dr. Gerlitzki Tiermedizin an der tierärztlichen Hochschule in Hannover studiert und begleitend in den verschiedenen Kliniken an der Hochschule, z.B. in der Vogelklinik, der Heimtierklinik, und der Klinik für kleine Haustiere gearbeitet. Nach seiner Approbation 1989 war er vielfach als Stellvertreter für verschiedene Kleintierpraxen rund um Hannover sowie als Klinikreferent tätig.',
      'Seine erste eigene Praxis eröffnete er Ende 1993 in Form einer Gemeinschaftspraxis mit Schwerpunkten in den Bereichen Kleintiere und Pferde. 1996 promovierte Dr. Gerlitzki zum Thema Insektengifte. Anschließend übernahm er eine bestehende Kleintierpraxis in Hamburg Bergedorf.',
      'Neben seiner Praxistätigkeit betreut der Tierarzt die Sporthundevereine in Geesthacht und Trittau.',
      'Sozial engagiert sich Dr. Gerlitzki im Verein (Tierärzte ohne Grenzen) e.V. Durch das Elend der wilden Hunde und Katzen auf Rhodos stark beeindruckt engagiert er sich seit 2011 intensiv im RAWS, dem Tierschutzverein Rhodos und arbeitet ehrenamtlich auch direkt vor Ort als Tierarzt. Weiterhin ist er im Vorstand der Lehmann Stiftung für das Miteinander von Mensch, Tier und Natur tätig.',
    ],
  },
  {
    imgSrc: '/images/aerzte/birgit.jpg',
    name: 'Tierärztin Dr. Birgit Joswig',
    infoTexte: [
      'Von 2000 bis 2009 führte sie eine eigene Praxis in Vierlanden.',
      'Seit 2009 ist sie für die pharmazeutische Industrie in der vorklinischen und klinischen Forschung tätig sowie feste Mitarbeiterin der Tierarztpraxis Dr. Gerlitzki.',
      'In mehreren lokalen Vereinen tätig, kümmert sie sich ebenfalls um Ihren beachtlichen Tierbestand.',
    ],
  },
];
