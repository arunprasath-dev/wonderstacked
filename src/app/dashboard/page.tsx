// src/app/dashboard/page.tsx
import logger from '../../lib/logger';

// Force dynamic for user-specific pages that need runtime logging
export const dynamic = 'force-dynamic';

export default function Dashboard() {
  logger.info('Dashboard accessed - user-specific page');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>This is a dynamic page that logs on each visit.</p>
    </div>
  );
}
