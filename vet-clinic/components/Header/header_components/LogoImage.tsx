import Image from 'next/image';
import Logo from '../../../public/images/logo/logo_demo.jpg';

const LogoImage: React.FC = () => {
  return (
    <div className="relative z-20">
      <Image
        alt="Logo"
        src={Logo}
        className="translate-y-7 h-[95px] w-[90px] rounded-xl"
        layout="intrinsic"
      />
    </div>
  );
};

export default LogoImage;
