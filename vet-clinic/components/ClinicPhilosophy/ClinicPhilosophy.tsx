import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ClinicPhilosophy: React.FC = () => {
  return (
    <section className="flex flex-col pb-2.5 pt-12">
      <article className="flex flex-col gap-4 px-2.5 text-sm leading-5">
        <div className="mb-6 text-center text-base font-semibold text-glacier-900">
          <h4>
            Aus{' '}
            <FontAwesomeIcon className="text-red-500" icon={faHeart} />{' '}
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
          Und auch Sie selbst sind nicht irgendein Kunde, sondern als Besitzer
          und Freund ihres Tieres unser Partner für seine Gesundheit. Daher
          nehmen wir uns die Zeit, Ihnen Krankheitsbild, -ursachen und -verlauf
          sowie alle nötigen Maßnahmen ausführlich und verständlich zu
          erläutern, damit Sie die Situation Ihres Tieres verstehen und zu
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
