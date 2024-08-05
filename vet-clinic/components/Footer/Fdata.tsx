import Fbutton from './Fbutton';

const contact = {
  name: 'Tierarztpraxis Gerlitzki',
  street: { name: 'Wentorfer Straße', number: 15 },
  city: { name: 'Hamburg', zip: 21029 },
  tel: '040 - 721 42 44',
  email: 'praxis@vet-gerlitzki.de',
};

const Fdata = () => {
  // maybe fetching this in the future for editing via db
  return (
    // Render in 3 container, fade-in, and hover
    // use getStaticProbs
    <div>
      <Fbutton contactStreet={contact.street} contactCity={contact.city} />
      <Fbutton contactTel={contact.tel} />
      <Fbutton contactMail={contact.email} />
    </div>
  );
};

export default Fdata;
