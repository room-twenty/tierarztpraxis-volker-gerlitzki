import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HamburgerMenu = () => {
  return (
    <div className="drawer w-auto">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <label htmlFor="my-drawer" className="">
        <FontAwesomeIcon className="p-6 text-3xl text-white" icon={faBars} />
      </label>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
