import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { BRAND_DATA } from '@/data/brand';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#2B1408',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://kainteriors.in'),
  title: {
    default: 'KA Interiors | Luxury Interior Design Studio | Vijayawada',
    template: '%s | KA Interiors',
  },
  description:
    'KA Interiors is a luxury interior design studio delivering bespoke residential and commercial spaces with 30+ years of heritage. Head office in Vijayawada.',
  keywords: [
    'KA Interiors',
    'Luxury Interior Design Studio',
    'Vijayawada Interior Designers',
    '3D Visualization Architecture',
    'Bespoke Residential Interiors',
    'Commercial Interiors',
    'Luxury Home Decor India',
    'Andhra Pradesh Interior Architecture',
  ],
  authors: [{ name: 'KA Interiors' }],
  creator: 'KA Interiors',
  publisher: 'KA Interiors',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: 'KA Interiors | Luxury Interior Design Studio | Vijayawada',
    description:
      'Designing Spaces. Inspiring Lives. Bespoke residential and commercial interiors with 30+ years of design and execution heritage.',
    url: 'https://kainteriors.in',
    siteName: 'KA Interiors',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/brand/brand-cover-hero-1600.webp',
        width: 1600,
        height: 1067,
        alt: 'KA Interiors Luxury Living Space',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KA Interiors | Luxury Interior Design Studio',
    description:
      'Designing Spaces. Inspiring Lives. Bespoke residential and commercial spaces with 30+ years heritage in Vijayawada.',
    images: ['/images/brand/brand-cover-hero-1600.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['HomeAndConstructionBusiness', 'LocalBusiness', 'ProfessionalService'],
  name: 'KA Interiors',
  image: 'https://kainteriors.in/images/brand/ka-phoenix-monogram.png',
  '@id': 'https://kainteriors.in/#business',
  url: 'https://kainteriors.in',
  telephone: BRAND_DATA.contact.phone,
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BRAND_DATA.contact.address,
    addressLocality: BRAND_DATA.contact.city,
    addressRegion: BRAND_DATA.contact.state,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 16.5062,
    longitude: 80.648,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '19:30',
    },
  ],
  sameAs: [
    BRAND_DATA.contact.whatsapp,
  ],
  description:
    'KA Interiors is a luxury interior design studio delivering bespoke residential and commercial spaces with 30+ years of heritage, headquartered in Vijayawada.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ivory text-ink font-sans antialiased selection:bg-gold selection:text-espresso">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999] px-4 py-2 bg-espresso text-gold border border-gold rounded-md text-xs font-sans tracking-widest uppercase shadow-lg"
        >
          Skip to main content
        </a>

        <SmoothScroll>
          <CustomCursor />
          <Header />
          <div id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
