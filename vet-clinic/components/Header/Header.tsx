import Navigation2 from './header_components/Navigation2';
import TopContactBar from './header_components/TopContactBar';

const Header: React.FC = () => {
  return (
    <header>
      <TopContactBar />
      <Navigation2 />
    </header>
  );
};

export default Header;
