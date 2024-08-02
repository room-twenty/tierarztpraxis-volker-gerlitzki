import Logo from '../../public/images/logo/logo_name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const TopHeader = () => {
  return (
    <header className="flex items-center bg-blue-200">
      <a href="tel:+49407214244">
        <span className="hover: hover:text-red-800">
          <FontAwesomeIcon className="w-[1rem]" icon={faPhone} />
          Anruf
        </span>
      </a>

      <Image
        className="w-[15rem] text-blue-900"
        src={Logo}
        alt="Dr. Gerlitki Logo"
      />
      <a href="#">
        <span className="hover: hover:text-red-800">
          <FontAwesomeIcon className="w-[1rem]" icon={faLocationDot} />
          Anfahrt
        </span>
      </a>
    </header>
  );
};

export default TopHeader;
