import { ITeam, team } from '@/assets/dataArrays/team';
import { TeamCard } from '../Card/Card';

const PraxisTeam = () => {
  return (
    <>
      <h2>Unser Team</h2>
      {team.map((mitglied: ITeam, index) => (
        <TeamCard key={mitglied.name + index + 1} {...mitglied} />
      ))}
    </>
  );
};

export default PraxisTeam;
