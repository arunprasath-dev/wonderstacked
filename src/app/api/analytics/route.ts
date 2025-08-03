// src/app/api/analytics/route.ts
import { NextRequest, NextResponse } from 'next/server';

import logger from '../../../lib/logger';

// API routes are always dynamic - perfect for runtime logging
export async function POST(request: NextRequest) {
  logger.info('Analytics API called');

  try {
    const data = await request.json();
    logger.info(`Page view: ${data.page} - UserAgent: ${request.headers.get('user-agent')}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error(`Analytics API error: ${error}`);
    return NextResponse.json({ error: 'Failed to log analytics' }, { status: 500 });
  }
}
