import { ILeistungen, leistungen } from '@/assets/dataArrays/leistungen';
import { LeistungenCard } from '../Card/Card';
import Link from 'next/link';

interface LeistungenSectionProps {
  sliceAmount: [number, number?];
}

const LeistungenSection = ({ sliceAmount }: LeistungenSectionProps) => {
  return (
    <section>
      <h2>Unsere Leistungen</h2>
      {leistungen.slice(...sliceAmount).map((leistung: ILeistungen, index) => (
        <LeistungenCard key={leistung.title + index + 1} {...leistung} />
      ))}
      <Link href={'/leistungen'}>mehr leistungen</Link>
    </section>
  );
};

export default LeistungenSection;
