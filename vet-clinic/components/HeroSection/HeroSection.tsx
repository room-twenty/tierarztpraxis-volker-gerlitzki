import Heroimage from '@/public/images/various/border-collie-8501579_1280.jpg';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-6 gap-0">
      <div className="col-span-12 row-span-6">
        <Image
          className="z-10"
          src={Heroimage}
          alt="Border-Collie mit heraushängender Zunge rennt einem entgegen in Waldlandschaft"
        />
      </div>
      <div className="col-span-8 col-start-3 row-span-4 row-start-2">
        <h2>Slogan</h2>
      </div>
    </div>
  );
};

export default HeroSection;
