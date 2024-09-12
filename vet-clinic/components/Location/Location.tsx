import LocationData from './LocationData';
import Map from './Map';

const Location = () => {
  return (
    <section
      id="anfahrt"
      className="bg-glacier-600 p-2  pb-10 text-white">
      <div className='py-8'>
        <h3 className="text-center text-2xl font-semibold mb-4">
          Hier finden Sie uns!
        </h3>
        <div className="mx-auto h-1 w-9 rounded-xl bg-white"></div>
      </div>
      <LocationData />
      <Map />
    </section>
  );
};

export default Location;
