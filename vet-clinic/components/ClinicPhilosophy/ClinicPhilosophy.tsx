const ClinicPhilosophy = () => {
  return (
    <section className="flex flex-col pt-4">
      <h1 className="text-center text-lg font-bold text-glacier-900">
        Willkommen in der Tierarztpraxis Gerlitzki
      </h1>
      <article className="flex flex-col gap-y-4 p-3">
        <h2 className="text-lg font-semibold text-glacier-900">
          Unsere Philosophie
        </h2>
        <p className="text-justify">
          Wir begreifen unsere Arbeit als Dienst am Tier und damit an Patienten,
          die nicht von vornherein verstehen, dass wir Ihnen helfen wollen. Aber
          die meisten Tiere können fühlen, ob man es gut mit ihnen meint und
          dieses Gefühl möchten wir Ihnen vermitteln - durch einen behutsamen
          und liebevollen Umgang.
        </p>
        <p className="text-justify">
          So bieten wir zwar ein überdurchschnittliches medizinisches Niveau,
          vermeiden aber alle unnötigen Untersuchungen oder Eingriffe. Priorität
          hat das Tier und nicht unser Umsatz.
        </p>
        <p className="text-justify">
          Ebenfalls legen wir großen Wert auf einen breiten therapeutischen
          Ansatz. Dazu gehören für uns auch naturheilkundliche Verfahren.
        </p>
        <p className="text-justify">
          Und auch Sie selbst sind nicht irgendein Kunde sondern als Besitzer
          und Freund ihres Tieres unser Partner für seine Gesundheit. Daher
          nehmen wir uns die Zeit, Ihnen Krankheitsbild, -ursachen und -verlauf
          sowie alle nötigen Maßnahmen ausführlich und verständlich zu
          erläutern, damit Sie die Situation ihres Tieres verstehen und zu
          seiner möglichst schnellen Genesung beitragen können.
        </p>
        <p>Aus Liebe zum Tier</p>
        <p className="font-bold text-glacier-900">Ihr Dr. Volker Gerlitzki</p>
      </article>
    </section>
  );
};

export default ClinicPhilosophy;
