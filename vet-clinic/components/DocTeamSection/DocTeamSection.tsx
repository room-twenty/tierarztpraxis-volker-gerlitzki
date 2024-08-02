import { ITeam, team } from '@/assets/dataArrays/aerzte';
import { TeamCard } from '../Card/Card';

const DocTeamSection = () => {
  return (
    <section>
      <h2>Unsere Ärzte</h2>
      {team.map((mitglied: ITeam, index) => (
        <TeamCard key={mitglied.name + index + 1} {...mitglied} />
      ))}
    </section>
  );
};

export default DocTeamSection;