
import { players } from '../../../data/players';
import { notFound } from 'next/navigation';
import PlayerForm from '../../../components/PlayerForm'; 

export default function PlayerPage({ params }: { params: { id: string } }) {
  const player = players.find(p => p.id === params.id);
  
  if (!player) return notFound();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{player.name}</h1>
      <PlayerForm player={player} />
    </div>
  );
}