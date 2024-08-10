import Logo from '@/public/images/logo/logo_name.png';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Button from '../Button';

const TopHeader = () => {
  return (
    <header className="flex flex-row place-items-center bg-white p-2">
      <div className="">
        <Image src={Logo} alt="Dr. Gerlitki Logo" />
      </div>
      <div className="">
        <Button
          buttonStyling={
            'h-12 w-32 rounded-md border-2 bg-green-400 p-2 text-white'
          }
          isLink={false}
          faIcon={faPhone}
          text={'Anruf'}
          src={'tel:+49407214244'}
        />
        <Button
          buttonStyling={
            'h-12 w-32 rounded-md border-2 bg-lblue p-2 text-white'
          }
          isLink={false}
          faIcon={faLocationDot}
          text={'Anfahrt'}
          src={'#'}
        />
      </div>
    </header>
  );
};

export default TopHeader;
