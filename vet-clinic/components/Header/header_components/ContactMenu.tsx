'use client';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import DrawerMenu from './DrawerMenu';
import { contactItems } from '../../../assets/dataArrays/kontakt';

const ContactMenu: React.FC = () => {
  return (
    <DrawerMenu
      drawerId="my-drawer-4"
      icon={faPhone}
      title="KONTAKT"
      items={contactItems}
      position="right"
      contentClassName="text-right"
    />
  );
};

export default ContactMenu;
