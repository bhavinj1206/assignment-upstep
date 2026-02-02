interface Props {
    query: string;
    status: string;
    onQueryChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

export default function TournamentFilters({
    query,
    status,
    onQueryChange,
    onStatusChange,
}: Props) {
    return (
        <div className="flex">
            <input
                type="text"
                placeholder="Search tournaments..."
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                className="border p-2 rounded"
            />

            <select
                value={status}
                onChange={(e) => onStatusChange(e.target.value)}
                className="border p-2 rounded"
            >
                <option value="all">All</option>
                <option value="upcoming">Upcoming</option>
                <option value="live">Live</option>
            </select>
        </div>
    );
}
