import Fdata from './Fdata';
import Fmap from './Fmap';
import Fopening from './Fopening';

const Fcontact = () => {
  return (
    <div className="flex justify-around">
      {/* Animation with light fade-in from the bot */}
      <Fdata />
      <Fmap />
      <Fopening />
    </div>
  );
};

export default Fcontact;
