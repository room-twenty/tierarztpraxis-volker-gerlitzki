import Card from '../Card/Card';
import { leistungen } from '@/assets/dataArrays/leistungen';

const Leistungen = () => {
  return (
    <>
      <h1>Leistungen</h1>
      {leistungen.map((leistung, index) => (
        <Card key={leistung.title + index + 1} {...leistung} />
      ))}
    </>
  );
};

export default Leistungen;
