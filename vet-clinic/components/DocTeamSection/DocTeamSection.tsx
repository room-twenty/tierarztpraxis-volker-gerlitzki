import { ITeam, team } from '@/assets/dataArrays/aerzte';
import { TeamCard } from '../Card/Card';

const DocTeamSection = () => {
  return (
    <section>
      <h2 className="text-dblue text-center text-[1.7rem] font-semibold">
        Unsere Ärzte
      </h2>
      {team.map((mitglied: ITeam, index) => (
        <TeamCard key={mitglied.name + index + 1} {...mitglied} />
      ))}
    </section>
  );
};

export default DocTeamSection;
