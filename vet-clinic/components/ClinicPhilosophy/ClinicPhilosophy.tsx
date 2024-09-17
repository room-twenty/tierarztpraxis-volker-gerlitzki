import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ClinicPhilosophy = () => {
  return (
    <section className="flex flex-col pb-[10px] pt-[50px]">
      <article className="flex flex-col gap-y-4 px-[10px] text-[15px] leading-[1.2rem]">
        <div className="mb-6 text-center text-base font-semibold text-glacier-900">
          <h4>
            Aus{' '}
            <FontAwesomeIcon
              className="text-base text-red-500"
              icon={faHeart}
            />{' '}
            zum Tier
          </h4>
          <h5>
            Überdurchschnittliches medizinisches Niveau, ohne unnötige
            Untersuchungen oder Eingriffe.
          </h5>
        </div>
        <p className="text-justify">
          Wir begreifen unsere Arbeit als Dienst am Tier und damit an Patienten,
          die nicht von vornherein verstehen, dass wir Ihnen helfen wollen. Aber
          die meisten Tiere können fühlen, ob man es gut mit ihnen meint und
          dieses Gefühl möchten wir Ihnen vermitteln - durch einen behutsamen
          und liebevollen Umgang.
        </p>
        <p className="text-justify">
          Und auch Sie selbst sind nicht irgendein Kunde sondern als Besitzer
          und Freund ihres Tieres unser Partner für seine Gesundheit. Daher
          nehmen wir uns die Zeit, Ihnen Krankheitsbild, -ursachen und -verlauf
          sowie alle nötigen Maßnahmen ausführlich und verständlich zu
          erläutern, damit Sie die Situation ihres Tieres verstehen und zu
          seiner möglichst schnellen Genesung beitragen können.
        </p>
        <p className="mb-5 text-base font-bold text-glacier-900">
          Ihr Dr. Volker Gerlitzki
        </p>
      </article>
    </section>
  );
};

export default ClinicPhilosophy;
