import { Tournament } from '@/types/tournament';
import TournamentCard from './TournamentCard';

interface Props {
  tournaments: Tournament[];
}

export default function TournamentList({ tournaments }: Props) {
  if (tournaments.length === 0) {
    return <p className="text-gray-500">No tournaments found.</p>;
  }

  return (
    <div className="flex border p-[5px] mt-[15px]">
      {tournaments.map(t => (
        <TournamentCard key={t.id} tournament={t} />
      ))}
    </div>
  );
}
