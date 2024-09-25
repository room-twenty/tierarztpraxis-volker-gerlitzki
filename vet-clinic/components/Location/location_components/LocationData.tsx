import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Contact {
  name: string;
  street: { name: string; number: number };
  city: { name: string; zip: number };
  tel: string;
  email: string;
}

interface ContactDetail {
  condition: any;
  icon: any;
  content: React.ReactNode;
}
const LocationData: React.FC = () => {
  const contact: Contact = {
    name: 'Tierarztpraxis Gerlitzki',
    street: { name: 'Wentorfer Straße', number: 15 },
    city: { name: 'Hamburg', zip: 21029 },
    tel: '040 - 721 42 44',
    email: 'praxis@vet-gerlitzki.de',
  };

  const contactDetails: ContactDetail[] = [
    {
      condition: contact.street,
      icon: faLocationDot,
      content: (
        <>
          <p>
            {contact.street.name} {contact.street.number}
          </p>
          <p>
            {contact.city.name} {contact.city.zip}
          </p>
        </>
      ),
    },
    {
      condition: contact.tel,
      icon: faPhone,
      content: <p>{contact.tel}</p>,
    },
    {
      condition: contact.email,
      icon: faEnvelope,
      content: <p>{contact.email}</p>,
    },
  ];
  return (
    <div className="flex items-center">
      <div className="text-m flex flex-col justify-center gap-2 text-white">
        {contactDetails.map(
          (detail, index) =>
            detail.condition && (
              <div key={index} className="flex items-center">
                <FontAwesomeIcon icon={detail.icon} className="mr-5 w-6" />
                <div className="justify-center">{detail.content}</div>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default LocationData;
