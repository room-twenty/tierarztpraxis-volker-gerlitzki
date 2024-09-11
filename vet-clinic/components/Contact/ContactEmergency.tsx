const ContactEmergency = () => {
  return (
    <div className="my-3 flex bg-red-200">
      <div className="flex items-center p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <div className="w-[100%] border-2 bg-glacier-50 p-3">
        <p>
          Handelt es sich um einen Notfall? Tierärztlichen Notfalldienst Hamburg
          040-43 43 79
        </p>
      </div>
    </div>
  );
};

export default ContactEmergency;
