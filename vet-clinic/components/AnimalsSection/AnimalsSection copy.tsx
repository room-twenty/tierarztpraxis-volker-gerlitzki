'use client';

import { useState } from 'react';
import { tiereData } from '@/assets/dataArrays/tiere copy';

const AnimalsSection = () => {
  // State to track the selected animal
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <section className="flex flex-col bg-glacier-50 py-32">
      {/* Display the titles */}
      <h2 className="mb-8 text-center text-2xl text-glacier-950">
        {tiereData.title}
      </h2>

      {/* If no animal is selected, show the animal buttons */}
      {!selectedAnimal ? (
        <div className="animal-buttons flex flex-col justify-center gap-4 p-10">
          {tiereData.animals.map((animal, index) => (
            <button
              className="btn rounded-lg bg-base-300 text-xl"
              key={index}
              onClick={() => setSelectedAnimal(animal)} // Set the selected animal on button click
            >
              {animal.name}
            </button>
          ))}
        </div>
      ) : (
        // Show the info component when an animal is selected
        <div className="animal-info">
          <h4>Informationen für {selectedAnimal.name}</h4>
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
