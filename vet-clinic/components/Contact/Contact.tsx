import Image from 'next/image';
import CatDemo from '@/public/images/various/cat_demo.jpg';
import ContactOpening from './contact_components/ContactOpening';
import ContactInfo from './contact_components/ContactInfo';

const Contact: React.FC = () => {
  return (
    <section className="text bg-slate-100 py-2.5 text-sm text-glacier-950">
      <Image alt="Cat" src={CatDemo} />
      <div className="wrapper px-7 pb-4 pt-7">
        <ContactOpening />
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
