import { tiereData } from '@/assets/dataArrays/tiere copy';

const AnimalsButtons = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {tiereData.animals.map((animal, index) => (
        <button className="btn" key={index}>
          {animal.name}
        </button>
      ))}
    </div>
  );
};

export default AnimalsButtons;
