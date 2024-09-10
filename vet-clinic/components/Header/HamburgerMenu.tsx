import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HamburgerMenu = () => {
  return (
    <FontAwesomeIcon className="p-6 text-3xl text-white" icon={faBars} />
  );
};

export default HamburgerMenu;
