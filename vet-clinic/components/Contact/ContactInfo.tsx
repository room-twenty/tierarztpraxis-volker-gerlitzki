import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const ContactData = () => {
  return (
    <article className="bg-glacier-200 leading-5">
      <div>
        <FontAwesomeIcon icon={faCircleExclamation} />
      </div>
      <p>
        Um eine entspannte Atmosphäre und kurze Wartezeiten sicherzustellen,
        bitten wir Sie, Ihren Termin vorab
        <span className="font-semibold"> telefonisch</span> zu vereinbaren.
      </p>
    </article>
  );
};

export default ContactData;
