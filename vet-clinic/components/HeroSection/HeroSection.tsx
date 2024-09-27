import Heroimage from '@/public/images/various/border-collie-8501579_1280.jpg';
import Slogan from './herosection_components/Slogan';

const HeroSection = () => {
  return (
    <div
      className="relative h-[30rem] max-h-[310px] bg-cover bg-center"
      style={{ backgroundImage: `url(${Heroimage.src})` }}>
      <div className="absolute inset-0 flex items-end justify-center p-3">
        <Slogan />
      </div>
    </div>
  );
};

export default HeroSection;
