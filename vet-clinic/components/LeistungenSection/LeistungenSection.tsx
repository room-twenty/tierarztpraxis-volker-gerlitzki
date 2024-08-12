import { ILeistungen, leistungen } from '@/assets/dataArrays/leistungen';
import { LeistungenCard } from '../Card/Card';
import Button from '../Button/Button';
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
      <h2 className="pt-2 text-center text-[1.7rem] font-semibold text-steel-blue-500">
        Unsere Leistungen
      </h2>{' '}
      {leistungen.slice(...sliceAmount).map((leistung: ILeistungen, index) => (
        <LeistungenCard key={leistung.title + index + 1} {...leistung} />
      ))}
      {!isPathLeistungen && (
        <Button
          buttonStyling={
            'h-12 w-fit flex rounded-md bg-glacier-300 place-self-center text-steel-blue-50 mb-4 shadow-md shadow-steel-blue-500 hover:shadow-glacier-300 active:bg-steel-blue-500 active:shadow-none'
          }
          isLink={true}
          text={'Alle Leistungen'}
          src={'/leistungen'}
          hoverColor={'#3e77aa'}
        />
      )}
    </section>
  );
};

export default LeistungenSection;
