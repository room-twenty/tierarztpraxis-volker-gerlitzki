import { ILeistungen, leistungen } from '@/assets/dataArrays/leistungen';
import { LeistungenCard } from '../Card/Card';

const Leistungen = () => {
  return (
    <>
      <h2>Unsere Leistungen</h2>
      {leistungen.map((leistung: ILeistungen, index) => (
        <LeistungenCard key={leistung.title + index + 1} {...leistung} />
      ))}
    </>
  );
};

export default Leistungen;
