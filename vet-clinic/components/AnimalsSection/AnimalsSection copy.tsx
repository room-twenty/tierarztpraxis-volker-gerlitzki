'use client';

import { useState } from 'react';
import { tiereData } from '@/assets/dataArrays/tiere copy';

const AnimalsSection = () => {
  // State to track the selected animal
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <section className="text bg-slate-100 py-10 text-sm text-glacier-950">
      {/* Display the titles */}

      {/* If no animal is selected, show the animal buttons */}
      {!selectedAnimal ? (
        <div className="flex flex-col justify-center gap-4 p-5">
          <h2 className="text-center text-2xl font-semibold text-glacier-600">
            {tiereData.title}
          </h2>
          <div className="mx-auto h-1 w-9 rounded-xl bg-glacier-600"></div>
          <div className="mt-5 grid grid-cols-2 gap-4">
            {tiereData.animals.map((animal, index) => (
              <button
                className="btn rounded-lg bg-glacier-600 text-lg text-white hover:bg-glacier-700"
                key={index}
                onClick={() => setSelectedAnimal(animal)} // Set the selected animal on button click
              >
                {animal.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        // Show the info component when an animal is selected
        <div className="flex flex-col justify-center gap-4 p-5">
          <h2 className="text-center text-2xl font-semibold text-glacier-600">
            {selectedAnimal.name}
          </h2>
          <div className="mx-auto h-1 w-9 rounded-xl bg-glacier-600"></div>
          {selectedAnimal.info.map((infoItem, index) => (
            <p key={index}>{infoItem.title}</p>
          ))}
          <button className="btn mt-4" onClick={() => setSelectedAnimal(null)}>
            Zurück
          </button>
        </div>
      )}
    </section>
  );
};

export default AnimalsSection;
