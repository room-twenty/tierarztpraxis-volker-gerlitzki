import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Street {
  name: string;
  number: number;
}

interface City {
  name: string;
  zip: number;
}

interface ContactProps {
  contactStreet?: Street;
  contactCity?: City;
  contactTel?: string;
  contactMail?: string;
}

const Fbutton: React.FC<ContactProps> = ({
  contactStreet,
  contactCity,
  contactTel,
  contactMail,
}) => {
  return (
    <div className="flex items-center bg-lblue p-2">
      <div className="flex items-center justify-center bg-dblue p-1">
        <FontAwesomeIcon icon={faPaw} className="w-11 text-white" />
      </div>
      <div className="ml-4 flex flex-col justify-center text-white">
        {contactStreet && (
          <p>
            {contactStreet.name} {contactStreet.number}
          </p>
        )}
        {contactCity && (
          <p>
            {contactCity.name}, {contactCity.zip}
          </p>
        )}
        {contactTel && <p>{contactTel}</p>}
        {contactMail && <p>{contactMail}</p>}
      </div>
    </div>
  );
};

export default Fbutton;
