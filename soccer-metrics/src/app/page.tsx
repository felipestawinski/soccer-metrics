import React from 'react';
import Link from 'next/link';
import { players } from '../data/players';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Team Players</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {players.map(player => (
          <Link key={player.id} href={`/players/${player.id}`} className="p-4 border rounded hover:shadow">
            {player.name}
            </Link>
        ))}
      </div>
    </div>
  );
}