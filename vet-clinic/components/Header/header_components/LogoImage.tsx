import Image from 'next/image';
import Logo from '../../../public/images/logo/logoNew.png';
import NavLink from '@/components/NavLink/NavLink';

const LogoImage: React.FC = () => {
  return (
    <div className="relative z-20">
      <NavLink href="/">
        <Image
          alt="Logo"
          src={Logo}
          className="h-[95px] w-[90px] translate-y-7 cursor-pointer rounded-xl"
          layout="intrinsic"
        />
      </NavLink>
    </div>
  );
};

export default LogoImage;
