'use client';

import { useEffect, useState } from 'react';
import { Tournament } from '@/types/tournament';
import TournamentFilters from '@/components/TournamentFilters';
import TournamentList from '@/components/TournamentList';

export default function TournamentsPage() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTournaments = async () => {
      const res = await fetch('/tournament.json');
      const data: Tournament[] = await res.json();
      setTournaments(data);
      setLoading(false);
    };

    fetchTournaments();
  }, []);

  const filteredTournaments = tournaments.filter(t => {
    const matchesQuery = t.name.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === 'all' || t.status === status;
    return matchesQuery && matchesStatus;
  });

  if (loading) {
    return <p className="p-6">Loading tournaments…</p>;
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Chess Tournaments</h1>

      <TournamentFilters
        query={query}
        status={status}
        onQueryChange={setQuery}
        onStatusChange={setStatus}
      />

      <TournamentList tournaments={filteredTournaments} />
    </main>
  );
}
