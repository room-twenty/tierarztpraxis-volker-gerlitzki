'use client';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navItems } from '@/assets/dataArrays/links';
import NavLink from '@/components/NavLink/NavLink';

const HamburgerMenu = () => {
  const toggleDrawer = () => {
    const drawerCheckbox = document.getElementById(
      'my-drawer',
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = !drawerCheckbox.checked;

      // Tailwind's overflow-hidden class on body to prevent scrolling
      if (drawerCheckbox.checked) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    }
  };

  return (
    <div className="drawer h-max w-auto">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <label htmlFor="my-drawer">
        <FontAwesomeIcon className="p-6 text-3xl text-white" icon={faBars} />
      </label>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        {/* Content */}{' '}
        <div className="menu min-h-full w-96 bg-[#e7e7e7] p-0 text-base-content">
          <div className="bg-base-200">
            <div className="flex flex-row-reverse p-2">
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
                MENU
              </h2>
            </div>
            <div
              className="flex flex-col px-5 py-8 text-lg leading-10 text-glacier-600"
              style={{
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}>
              {navItems.map((item) => (
                <NavLink
                  onClick={toggleDrawer}
                  key={item.href}
                  href={item.href}>
                  {item.text}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
