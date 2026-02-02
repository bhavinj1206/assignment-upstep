import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-4xl font-bold">♟ Chess Arena</h1>
      <p className="text-gray-600 text-center max-w-md">
        Browse chess tournaments, filter by status, and join upcoming events.
      </p>

      <Link
        href="/tournaments"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View Tournaments
      </Link>
    </main>
  );
}
