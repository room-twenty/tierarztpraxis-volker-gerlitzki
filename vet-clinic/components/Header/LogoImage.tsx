import Logo from '../../public/images/logo/logo_demo.jpg';
import Image from 'next/image';

const LogoImage = () => {
  return (
    <div className="">
      <Image
        alt="Logo"
        src={Logo}
        className="tralate-y-3 h-[95px] w-[90px] rounded-xl translate-y-7"
      />
    </div>
  );
};

export default LogoImage;
