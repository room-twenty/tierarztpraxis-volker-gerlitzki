const ContactData = () => {
  return (
    <div className="my-3 flex bg-glacier-300">
      <div className="flex items-center p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <div className="w-[100%] border-2 bg-glacier-50 p-3">
        <p>
          Um eine entspannte Atmosphäre und kurze Wartezeiten sicherzustellen,
          bitten wir Sie, Ihren Termin vorab{' '}
          <span className="font-semibold"> telefonisch</span> zu vereinbaren.
        </p>
      </div>
    </div>
  );
};

export default ContactData;
