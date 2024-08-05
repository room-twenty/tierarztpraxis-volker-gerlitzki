import Logo from '../../public/images/logo/logo_name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const TopHeader = () => {
  return (
    <header className="border-md items-space-around flex justify-evenly border-b border-blue-900 bg-white">
      <Image
        className="w-[15rem] text-blue-900"
        src={Logo}
        alt="Dr. Gerlitki Logo"
      />
      <button className="h-auto w-10 rounded-md border-2 border-solid border-blue-900 bg-green-400">
        <a href="tel:+49407214244">
          <span>
            <FontAwesomeIcon
              className="h-auto w-[2rem] text-white"
              icon={faPhone}
            />
            {/*Anruf*/}
          </span>
        </a>
      </button>

      <button className="h-auto w-10 rounded-md border-2 border-solid border-black bg-blue-300">
        <a href="#">
          <span>
            <FontAwesomeIcon
              className="w-[2rem] text-white"
              icon={faLocationDot}
            />
            {/*Anfahrt*/}
          </span>
        </a>
      </button>
    </header>
  );
};

export default TopHeader;
