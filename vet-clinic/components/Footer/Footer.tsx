import Fcontact from './Fcontact';
import Fheader from './Fheader';

const Footer = () => {
  return (
    <section className="bg-blue-950 text-white">
      {/* use framer motion here for master animation -> roll up from the bot */}
      <Fheader />
      <Fcontact />
    </section>
  );
};

export default Footer;
