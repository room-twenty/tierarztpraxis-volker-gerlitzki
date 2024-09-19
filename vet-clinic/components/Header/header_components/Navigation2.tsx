import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import ContactMenu from './ContactMenu';
import LogoImage from './LogoImage';

const Navigation2: React.FC = () => {
  return (
    <div className="flex max-h-[72px] items-center justify-between bg-glacier-600 text-white">
      <HamburgerMenu />
      <LogoImage />
      <ContactMenu />
    </div>
  );
};

export default Navigation2;
