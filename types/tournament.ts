export type TournamentStatus = 'upcoming' | 'live';

export interface Tournament {
  id: string;
  name: string;
  timeControl: 'Blitz' | 'Rapid' | 'Classical';
  startTime: string; // ISO string
  playersJoined: number;
  maxPlayers: number;
  status: TournamentStatus;
}
