import Heroimage from '@/public/images/various/border-collie-8501579_1280.jpg';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="grid h-[30rem] grid-cols-12 grid-rows-1">
      <div className="col-span-12">
        <Image
          className="size-full place-self-center object-cover"
          src={Heroimage}
          alt="Border-Collie mit heraushängender Zunge rennt einem entgegen in Waldlandschaft"
        />
      </div>
      <div className="absolute col-span-8 col-start-3 place-self-center text-[2rem] text-monza-600">
        <h2 className="filter-blur rounded-lg bg-slate-400/30 p-2">Slogan</h2>
      </div>
    </div>
  );
};

export default HeroSection;
