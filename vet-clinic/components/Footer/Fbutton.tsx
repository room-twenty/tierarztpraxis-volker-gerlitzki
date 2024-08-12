import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

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
      <div className="ml-4 flex flex-col justify-center text-white text-m font-semibold">
        {contactStreet && (
          <div className="flex items-center ">
            <FontAwesomeIcon icon={faLocationDot} className="mr-5 w-6" />
            <div className="justify-center">
              <p>
                {contactStreet.name} {contactStreet.number}
              </p>
              <p>
                {contactCity.name} {contactCity.zip}
              </p>
            </div>
          </div>
        )}
        {contactTel && (
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-5 w-6" />
            <p>{contactTel}</p>
          </div>
        )}
        {contactMail && (
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-5 w-6" />
            <p>{contactMail}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fbutton;
