const Fdata = () => {
  // maybe fetching this in the future for editing via db
  const contactData = {
    name: 'Tierarztpraxis Gerlitzki',
    street: { name: 'Wentorfer Straße', number: 15 },
    city: { name: 'Hamburg', zip: 21029 },
    tel: '040 - 721 42 44',
    email: 'praxis@vet-gerlitzki.de',
  };
  return (
    // Render in 3 container, with icon and text
    <div>
      <div>
        <p>Wentorfer Straße 15</p>
        <p>21029 Hamburg</p>
      </div>
      <ul>
        <li>Email: praxis@vet-gerlitzki.de</li>
        <li>Telefon: 040 - 721 42 44</li>
      </ul>
    </div>
  );
};

export default Fdata;
