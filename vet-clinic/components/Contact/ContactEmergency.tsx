import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const ContactEmergency = () => {
  return (
    <article className="bg-red-200 text-center font-semibold text-red-700">
      <div>
        <FontAwesomeIcon icon={faTriangleExclamation} />
      </div>
      <div>
        <h3 className="">Handelt es sich um einen Notfall?</h3>
        <p className="font-normal">Tierärztlichen Notfalldienst Hamburg</p>
        <p>040-43 43 79</p>
      </div>
    </article>
  );
};

export default ContactEmergency;
