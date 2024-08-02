import { ILeistungen, leistungen } from '@/assets/dataArrays/leistungen';
import { LeistungenCard } from '../Card/Card';
import Link from 'next/link';

const LeistungenSection = () => {
  return (
    <section>
      <h2>Unsere Leistungen</h2>
      {leistungen.slice(0, 3).map((leistung: ILeistungen, index) => (
        <LeistungenCard key={leistung.title + index + 1} {...leistung} />
      ))}
      <Link href={'/leistungen'}>mehr leistungen</Link>
    </section>
  );
};

export default LeistungenSection;
