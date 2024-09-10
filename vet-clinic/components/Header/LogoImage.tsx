import Logo from '../../public/images/logo/logo_demo.jpg';
import Image from 'next/image';

const LogoImage = () => {
  return (
    <div className="relative z-20">
      <Image
        alt="Logo"
        src={Logo}
        className="tralate-y-3 h-[95px] w-[90px] translate-y-7 rounded-xl"
      />
    </div>
  );
};

export default LogoImage;
