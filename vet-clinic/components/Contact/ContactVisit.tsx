import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
const ContactVisit = () => {
  return (
    <div className="bg-yellow-50">
      <div>
        <FontAwesomeIcon icon={faLightbulb} />
      </div>
      <div>
        <p>Kennen Sie schon unseren Hausbesuchsservice ?</p>
        <p>Rufen Sie uns an und vereinbaren einen Termin mit uns !</p>
      </div>
    </div>
  );
};

export default ContactVisit;
