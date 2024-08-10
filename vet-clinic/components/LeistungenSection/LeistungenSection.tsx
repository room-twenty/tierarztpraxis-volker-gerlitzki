import { ILeistungen, leistungen } from '@/assets/dataArrays/leistungen';
import { LeistungenCard } from '../Card/Card';
import Link from 'next/link';
import Button from '../Button';
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
    <section id={'leistungen'} className={`${styling}`}>
      <h2 className="pt-2 text-center text-[1.7rem] font-semibold text-dblue">
        Unsere Leistungen
      </h2>{' '}
      {leistungen.slice(...sliceAmount).map((leistung: ILeistungen, index) => (
        <LeistungenCard key={leistung.title + index + 1} {...leistung} />
      ))}
      {!isPathLeistungen && (
        <Button
          buttonStyling={
            'mb-4 w-max self-center rounded-lg bg-lblue p-3 font-semibold text-[white] shadow-md shadow-dblue hover:bg-dblue hover:shadow-lblue active:bg-dblue active:shadow-none'
          }
          isLink={true}
          text={'Alle Leistungen'}
          src={'/leistungen'}
        />
      )}
    </section>
  );
};

export default LeistungenSection;
