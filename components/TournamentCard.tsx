'use client';

import { useState } from 'react';
import { Tournament } from '@/types/tournament';

interface Props {
  tournament: Tournament;
}

export default function TournamentCard({ tournament }: Props) {
  const [joined, setJoined] = useState(false);

  const canJoin =
    tournament.status === 'upcoming' &&
    tournament.playersJoined <= tournament.maxPlayers;

  const startDate = new Date(tournament.startTime).toLocaleString();

  return (
    <div className="border p-[5px]" style={{margin: "0 15px"}}>
      <div>
        <h3 className="font-semibold text-lg">{tournament.name}</h3>
        <p className="text-sm text-gray-600">
          {tournament.timeControl} · {tournament.status}
        </p>
        <p className="text-sm text-gray-600">Starts: {startDate}</p>
        <p className="text-sm">
          Players: {tournament.playersJoined}/{tournament.maxPlayers}
        </p>
      </div>

      <button
        disabled={!canJoin || joined}
        onClick={() => setJoined(true)}
        className={`px-4 py-2 rounded text-white ${
          joined
            ? 'bg-green-500'
            : canJoin
            ? 'bg-blue-500 hover:bg-blue-600'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        {joined ? 'Joined' : 'Join'}
      </button>
    </div>
  );
}