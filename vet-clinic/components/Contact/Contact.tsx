import Image from 'next/image';
import CatDemo from '@/public/images/various/cat_demo.jpg';
import ContactOpening from "./ContactOpening"
const Contact: React.FC = () => {
  return (
    <section className="bg-slate-100 py-2.5">
      <Image alt="Cat" src={CatDemo} />
      <div className="px-7 pb-4 pt-7">
        <h2 className="text-2xl font-semibold text-glacier-600">
          Unsere Öffnungzeiten
        </h2>
        <ContactOpening/>
      </div>
    </section>
  );
};

export default Contact;
