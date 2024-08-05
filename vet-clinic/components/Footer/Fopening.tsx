const Fopening = () => {
  // create Array with objects for mapping, maybe fetching this in the future for editing via db
  // create function to check the date, if current DAY is true => colorize font green
  return (
    <div>
      <h2>Öffnungszeiten</h2>
      {/* Tabelle oder Grid? */}
      <ul>
        <li>Montag - Freitag</li>
        <li>10 - 12 16 - 19</li>
        <li>Mittwoch</li>
        <li>10 - 12 GESCHLOSSEN</li>
      </ul>
    </div>
  );
};

export default Fopening;
