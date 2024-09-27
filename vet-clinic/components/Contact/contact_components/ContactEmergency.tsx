import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactEmergency: React.FC = () => {
  return (
    <div className="p-3">
      <p>
        Handelt es sich um einen <span className="font-semibold">Notfall?</span>
      </p>
      <p className="font-semibold">Tierärztlicher Notfalldienst Hamburg</p>
      <button className="flex items-center gap-2">
        <FontAwesomeIcon icon={faPhone} /> 040 - 43 43 79
      </button>
    </div>
  );
};

export default ContactEmergency;
