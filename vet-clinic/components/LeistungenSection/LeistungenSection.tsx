import { ILeistungen, leistungen } from '@/assets/dataArrays/leistungen';
import { LeistungenCard } from '../Card/Card';
import Link from 'next/link';
interface LeistungenSectionProps {
  sliceAmount: [number, number?];
  currentPath: string;
  styling?: string;
}
const LeistungenSection = ({
  sliceAmount,
  currentPath,
  styling,
}: LeistungenSectionProps) => {
  const isPathLeistungen = currentPath === '/leistungen';
  return (
    <section className={`${styling}`}>
      <h2 className="text-dblue pt-2 text-center text-[1.7rem] font-semibold">
        Unsere Leistungen
      </h2>{' '}
      {leistungen.slice(...sliceAmount).map((leistung: ILeistungen, index) => (
        <LeistungenCard key={leistung.title + index + 1} {...leistung} />
      ))}
      {!isPathLeistungen && (
        <Link
          href={'/leistungen'}
          className="bg-lblue shadow-dblue hover:bg-dblue hover:shadow-lblue active:bg-dblue mb-4 w-max self-center rounded-lg p-3 font-semibold text-[white] shadow-md active:shadow-none">
          Mehr Leistungen
        </Link>
      )}
    </section>
  );
};

export default LeistungenSection;
