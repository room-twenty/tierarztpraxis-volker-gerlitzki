const ContactVisit = () => {
  return (
    <div className="my-3 flex bg-yellow-100">
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="w-[100%] border-2 bg-glacier-50 p-3">
        <p>
          Kennen Sie schon unseren Hausbesuchsservice? Rufen Sie uns an und
          vereinbaren einen Termin mit uns!
        </p>
      </div>
    </div>
  );
};

export default ContactVisit;
