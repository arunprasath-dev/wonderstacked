// src/app/blog/page.tsx
import logger from '../../lib/logger';

// Static page - logs during build
export default function Blog() {
  logger.info('Blog page generated at build time');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Blog</h1>
      <p>This static page is logged once during build.</p>
    </div>
  );
}
