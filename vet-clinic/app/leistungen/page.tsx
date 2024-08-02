import { leistungen, ILeistungen } from '@/assets/dataArrays/leistungen';
import { LeistungenCard } from '@/components/Card/Card';

const LeistungenPage = () => {
  return (
    <>
      <h2>Unsere Leistungen</h2>
      {leistungen.map((leistung: ILeistungen, index) => (
        <LeistungenCard key={leistung.title + index + 1} {...leistung} />
      ))}
    </>
  );
};

export default LeistungenPage;
