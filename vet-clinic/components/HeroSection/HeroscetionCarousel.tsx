import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Heroimage from '@/public/images/various/border-collie-8501579_1280.jpg';

const HeroscetionCarousel = ( {images} ) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex,
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex,
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="carousel">
      <img key={currentIndex} src={images[currentIndex]} alt="Bild" />
      <div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
          <image
            className="size-full place-self-center object-cover"
            src={Heroimage}
            alt="Border-Collie mit heraushängender Zunge rennt einem entgegen in Waldlandschaft"></image>
        </div>
        <div className='right' onClick={handleNext}>
        <div className="left" onClick={handlePrevious}>
          <image
            className="size-full place-self-center object-cover"
            src={Heroimage}
            alt="Border-Collie mit heraushängender Zunge rennt einem entgegen in Waldlandschaft"></image>
        </div>
        <div className='indicator'>
            {images.map((_,index)=>{
                <div key={index} className={`dot ${currentIndex === ? "active" : ""}`}
                onClick={()=>handleDotClick(index)}></div>
            })}
        </div>

        </div>
      </div>
    </div>
  );
};

export default HeroscetionCarousel;
