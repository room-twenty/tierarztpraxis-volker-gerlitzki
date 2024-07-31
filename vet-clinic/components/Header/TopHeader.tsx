import Logo from '../../public/images/logo/logo_name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const TopHeader = () => {
  return (
    <header>
      <Image className="w-[20rem]" src={Logo} alt="Dr. Gerlitki Logo" />
      <a href="tel:+49407214244">
        <span>
          <FontAwesomeIcon className="w-[2rem]" icon={faPhone} />
        </span>
        Termin vereinbaren
      </a>
      <a href="#">
        <span>
          <FontAwesomeIcon className="w-[2rem]" icon={faLocationDot} />
        </span>
        Anfahrt
      </a>
    </header>
  );
};

export default TopHeader;
