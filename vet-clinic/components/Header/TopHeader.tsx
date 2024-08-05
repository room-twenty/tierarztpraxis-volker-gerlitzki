import Logo from '../../public/images/logo/logo_name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const TopHeader = () => {
  return (
    <header className="border-md items-space-around bg-white flex flex-col place-items-center p-2">
      <div className="flex w-[100%] flex-row justify-between gap-5">
        <button className="bg-green-400 text-white h-12 w-32 rounded-md border-2 p-2">
          <a href="tel:+49407214244" className="flex justify-center gap-2">
            <FontAwesomeIcon className="w-4" icon={faPhone} />
            Anruf
          </a>
        </button>

        <button className="text-white h-12 w-32 rounded-md border-2 bg-lblue p-2">
          <a href="#" className="flex justify-center gap-2">
            <FontAwesomeIcon className="w-4" icon={faLocationDot} />
            Anfahrt
          </a>
        </button>
      </div>
      <Image className="" src={Logo} alt="Dr. Gerlitki Logo" />
    </header>
  );
};

export default TopHeader;
