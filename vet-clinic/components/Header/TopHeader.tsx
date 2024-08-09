import Logo from '../../public/images/logo/logo_name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const TopHeader = () => {
  return (
    <header className="flex flex-row place-items-center bg-white p-2">
      <div className="">
        <Image src={Logo} alt="Dr. Gerlitki Logo" />
      </div>
      <div className="">
        <button className="h-12 w-32 rounded-md border-2 bg-green-400 p-2 text-white">
          <a href="tel:+49407214244" className="flex justify-center gap-2">
            <FontAwesomeIcon className="w-4" icon={faPhone} />
            Anruf
          </a>
        </button>

        <button className="h-12 w-32 rounded-md border-2 bg-lblue p-2 text-white">
          <a href="#" className="flex justify-center gap-2">
            <FontAwesomeIcon className="w-4" icon={faLocationDot} />
            Anfahrt
          </a>
        </button>
      </div>
    </header>
  );
};

export default TopHeader;
