🚀 Setup Instructions
Prerequisites

Node.js 18+

npm or yarn

Installation
git clone <repository-url>
cd assignment-upstep
npm install

Run the Development Server
npm run dev


Open your browser and navigate to:

http://localhost:3000

🧠 Key Technical Decisions
1. Next.js App Router
The project uses Next.js 13+ App Router (app/ directory) to align with modern Next.js best practices and demonstrate familiarity with the latest routing and rendering model.

2. Static JSON for Tournament Data
Tournament data is stored in a static JSON file (/public/mock.json) and fetched on the client.

3. Client-side State Management
Local React state (useState, useEffect) is used for:
Tournament data loading
Filtering by status
Mocked “Join tournament” interaction

4. Component-based Architecture
The UI is broken into small, focused components:
TournamentList
TournamentCard
TournamentFilters

📋 Features Implemented
Tournament list displaying:
Name
Time control
Start time
Players joined / max players
Status
Filter by tournament status
Join tournament button with disabled state when full
Responsive layout
Loading and empty states