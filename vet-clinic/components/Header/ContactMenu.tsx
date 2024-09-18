'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faBriefcaseMedical,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface ContactItem {
  icon: IconDefinition;
  text: string;
}

const ContactMenu: React.FC = () => {
  const toggleDrawer = () => {
    const drawerCheckbox = document.getElementById(
      'my-drawer-4',
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = !drawerCheckbox.checked;
    }
  };

  const contactItems: ContactItem[] = [
    { icon: faPhone, text: '040 - 724 42 44' },
    { icon: faEnvelope, text: 'praxis@vet-gerlitzki.de' },
    { icon: faBriefcaseMedical, text: 'Tierärztlicher Notruf' },
  ];

  return (
    <div className="drawer drawer-end w-auto">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <label htmlFor="my-drawer-4">
        <FontAwesomeIcon icon={faPhone} className="p-6 text-3xl" />
      </label>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <div className="menu min-h-full w-96 bg-[#e7e7e7] p-0 text-base-content">
          <div className="bg-base-200">
            <div className="flex p-2">
              <button
                onClick={toggleDrawer}
                className="btn btn-circle border-none shadow-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-11 w-11 text-glacier-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-center text-xl">
              <h2 className="mb-2 border-b-2 border-glacier-600 p-1 px-8 text-glacier-600">
                KONTAKT
              </h2>
            </div>
            <div
              className="flex flex-col px-5 py-8 text-right text-lg leading-10 text-glacier-600"
              style={{
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}>
              {contactItems.map((item, index) => {
                let href;
                if (index === 0) {
                  href = `tel:0407244244`;
                } else if (index === 1) {
                  href = `mailto:praxis@vet-gerlitzki.de`;
                } else if (index === 2) {
                  href = `tel:040434379`;
                }
                return (
                  <a
                    key={index}
                    href={href}
                    className={`w-full py-2 font-normal duration-500 ease-in-out ${index === contactItems.length - 1 ? 'text-red-600' : ''}`}>
                    {item.text}
                    <div
                      className={`btn ml-4 text-xl ${index === contactItems.length - 1 ? 'bg-red-600' : 'bg-glacier-600'} text-base-200`}>
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMenu;
