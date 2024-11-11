'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { emergencyItem } from '../../../assets/dataArrays/kontakt';

const TopContactBar = () => {
  return (
    <div
      onClick={() =>
        (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()
      }
      className="flex w-full cursor-pointer justify-center bg-red-600 p-2 font-semibold text-base-200">
      Notfall? Klicken Sie hier!
      <dialog
        id="my_modal_3"
        className="modal cursor-default rounded-badge text-glacier-950">
        <div className="modal-box rounded-sm bg-red-600">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-13 w-13 items-center justify-center text-base-200"
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
          </form>
          {emergencyItem && (
            <div className="my-5 flex flex-col gap-4">
              <p className="`w-full py-2 text-center font-semibold text-base-200">
                Tierärztlicher Notfalldienst Hamburg
              </p>
              <FontAwesomeIcon
                className="ml-4 border-none text-5xl text-base-200"
                icon={emergencyItem.icon}
              />
              <a
                href={emergencyItem.href}
                className="m-5 cursor-pointer rounded-lg border-2 border-white p-4 text-center text-base-200 transition-all duration-200 hover:bg-red-800">
                040 - 43 43 79
              </a>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default TopContactBar;
