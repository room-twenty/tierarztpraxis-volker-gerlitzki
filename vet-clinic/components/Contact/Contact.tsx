import Image from 'next/image';
import CatDemo from '@/public/images/various/cat_demo.jpg';
import ContactOpening from './ContactOpening';
import ContactInfo from './ContactInfo';
import ContactEmergency from './ContactEmergency';
import ContactVisit from './ContactVisit';
const Contact: React.FC = () => {
  return (
    <section className="text bg-slate-100 py-2.5 text-sm text-glacier-950">
      <Image alt="Cat" src={CatDemo} />
      <div className="wrapper px-7 pb-4 pt-7">
        <ContactOpening />
        <ContactInfo />
        <ContactEmergency />
        <ContactVisit />
      </div>
    </section>
  );
};

export default Contact;
