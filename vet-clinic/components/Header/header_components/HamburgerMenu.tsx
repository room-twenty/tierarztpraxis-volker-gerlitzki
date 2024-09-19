'use client';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { navItems } from '@/assets/dataArrays/links';
import DrawerMenu from './DrawerMenu';

const HamburgerMenu = () => {
  const items = navItems.map((item) => ({
    href: item.href,
    text: item.text,
  }));

  return (
    <DrawerMenu
      drawerId="my-drawer"
      icon={faBars}
      title="MENU"
      items={items}
      position="left"
    />
  );
};

export default HamburgerMenu;
