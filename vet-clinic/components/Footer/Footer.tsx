import Fcontact from './Fcontact';
import Fheader from './Fheader';
import Fmap from './Fmap';

const Footer = () => {
  return (
    <section className="bg-steel-blue-800 p-2 pb-10 text-white mt-20">
      {/* use framer motion here for master animation -> roll up from the bot */}
      <Fheader />
      <Fcontact />
      <Fmap />
    </section>
  );
};

export default Footer;
