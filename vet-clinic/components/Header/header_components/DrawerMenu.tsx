'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface DrawerMenuProps {
  drawerId: string;
  icon: IconDefinition;
  title: string;
  items: {
    href?: string;
    text: string;
    icon?: IconDefinition;
    isImportant?: boolean;
  }[];
  position?: 'left' | 'right';
  contentClassName?: string;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  drawerId,
  icon,
  title,
  items,
  position = 'left',
  contentClassName = '',
}) => {
  const toggleDrawer = () => {
    const drawerCheckbox = document.getElementById(
      drawerId,
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = !drawerCheckbox.checked;
    }
  };

  return (
    <div
      className={`drawer ${position === 'right' ? 'drawer-end' : ''} w-auto`}>
      <input id={drawerId} type="checkbox" className="drawer-toggle" />
      <label htmlFor={drawerId}>
        <FontAwesomeIcon icon={icon} className="p-6 text-3xl" />
      </label>
      <div className="drawer-side z-50">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        {/* Content */}
        <div className="menu min-h-full w-96 bg-[#e7e7e7] p-0 text-base-content">
          <div className="bg-base-200">
            <div
              className={`flex ${position === 'right' ? 'justify-start' : 'justify-end'} p-2`}>
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
                {title}
              </h2>
            </div>
            <div
              className={`flex flex-col px-5 py-8 text-lg leading-10 text-glacier-600 ${contentClassName}`}
              style={{
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}>
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={toggleDrawer}
                  className={`w-full py-2 font-normal duration-500 ease-in-out ${item.isImportant ? 'text-red-600' : ''}`}>
                  {item.text}
                  {item.icon && (
                    <div
                      className={`btn ml-4 text-xl ${item.isImportant ? 'bg-red-600' : 'bg-glacier-600'} text-base-200`}>
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;
