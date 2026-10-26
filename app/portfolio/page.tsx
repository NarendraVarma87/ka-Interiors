import { Metadata } from 'next';
import { PortfolioClient } from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Portfolio | Curated Residential & Commercial Spaces',
  description:
    'Explore 16 bespoke architectural chapters by KA Interiors, featuring sacred mandirs, sculpted relief walls, luxury foyers, and commercial flagships in Vijayawada.',
  openGraph: {
    title: 'KA Interiors Portfolio | Bespoke Architecture & Living Spaces',
    description:
      'Curated anthology of residential sanctuaries and commercial flagships crafted with 30+ years of design heritage.',
  },
};

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return <PortfolioClient initialCategory={category || 'all'} />;
}
