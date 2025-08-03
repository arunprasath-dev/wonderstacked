// src/components/ClientAnalytics.tsx
'use client';

import { useEffect } from 'react';

// src/components/ClientAnalytics.tsx

// src/components/ClientAnalytics.tsx

export default function ClientAnalytics({ page }: { page: string }) {
  useEffect(() => {
    // Client-side logging via API route
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page }),
    }).catch(console.error);
  }, [page]);

  return null; // This component doesn't render anything
}
