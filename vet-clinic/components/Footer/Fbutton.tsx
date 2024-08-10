// components/Fbutton.tsx

import React from 'react';
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
    <div className="flex bg-gray-600 p-2">
      <div className="bg-gray-300 p-2">
        <FontAwesomeIcon
          icon={faPaw}
          className="w-12 place-self-center text-steel-blue-500"
        />
      </div>
      <div className="ml-4 text-steel-blue-50">
        {contactStreet && (
          <div>
            <p>
              {contactStreet.name} {contactStreet.number}
            </p>
          </div>
        )}
        {contactCity && (
          <div>
            <p>
              {contactCity.name}, {contactCity.zip}
            </p>
          </div>
        )}
        {contactTel && (
          <div>
            <p>Tel: {contactTel}</p>
          </div>
        )}
        {contactMail && (
          <div>
            <p>Email: {contactMail}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fbutton;
