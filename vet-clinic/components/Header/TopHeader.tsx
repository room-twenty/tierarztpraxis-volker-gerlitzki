import Logo from '@/public/images/logo/logo_name.png';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Button from '../Button/Button';
import Link from 'next/link';
import TopContactBar from './TopContactBar';

const TopHeader = () => {
  return (
    <>
      <TopContactBar />
      <header className="flex flex-row place-items-center bg-white p-2">
        <div className="">
          <Link href={'/'}>
            <Image src={Logo} alt="Dr. Gerlitki Logo" />
          </Link>
        </div>
        {/* <div className="flex flex-col gap-3">
        <Button
        buttonStyling={
          'h-12 w-32 rounded-md bg-pastel-green-400 text-steel-blue-50 shadow-md shadow-pastel-green-500 hover:shadow-pastel-green-400 active:bg-pastel-green-500 active:shadow-none'
          }
          isLink={false}
          faIcon={faPhone}
          text={'Anruf'}
          src={'tel:+49407214244'}
          hoverColor={'#42b433'}
          />
          <Button
          buttonStyling={
            'h-12 w-32 rounded-md bg-glacier-300 text-steel-blue-50 shadow-md shadow-steel-blue-500 hover:shadow-glacier-300 active:bg-steel-blue-500 active:shadow-none'
            }
            isLink={false}
            faIcon={faLocationDot}
            text={'Anfahrt'}
            src={'#anfahrt'}
            hoverColor={'#3e77aa'}
            />
            </div> */}
      </header>
    </>
  );
};

export default TopHeader;
