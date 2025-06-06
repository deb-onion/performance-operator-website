import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: 'Performance Marketing Operator | Scale Without Agency Bloat',
  description: 'Direct operator expertise for Google Ads, Meta Ads, and performance marketing. No agency bloat, just results. Scale your brand with a performance marketing specialist.',
  keywords: [
    'performance marketing',
    'Google Ads',
    'Meta Ads',
    'Facebook Ads',
    'Instagram Ads',
    'PPC specialist',
    'paid advertising',
    'digital marketing',
    'marketing consultant',
    'advertising specialist'
  ],
  authors: [{ name: 'Performance Marketing Operator' }],
  creator: 'Performance Marketing Operator',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://performanceoperator.com',
    siteName: 'Performance Marketing Operator',
    title: 'Scale Without Agency Bloat | Performance Marketing Operator',
    description: 'Direct operator expertise for Google Ads, Meta Ads, and performance marketing. No agency bloat, just results.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Performance Marketing Operator - Scale Without Agency Bloat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scale Without Agency Bloat | Performance Marketing Operator',
    description: 'Direct operator expertise for Google Ads, Meta Ads, and performance marketing. No agency bloat, just results.',
    images: ['/og-image.jpg'],
    creator: '@performanceoperator',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: string[]
): Metadata {
  return {
    title: `${title} | Performance Marketing Operator`,
    description,
    keywords: keywords || defaultMetadata.keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${title} | Performance Marketing Operator`,
      description,
      url: `https://performanceoperator.com${path}`,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: `${title} | Performance Marketing Operator`,
      description,
    },
  };
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Performance Marketing Operator',
  url: 'https://performanceoperator.com',
  logo: 'https://performanceoperator.com/logo.png',
  description: 'Performance marketing specialist providing Google Ads, Meta Ads, and paid advertising services without agency bloat.',
  founder: {
    '@type': 'Person',
    name: 'Performance Marketing Operator',
    jobTitle: 'Performance Marketing Specialist',
  },
  serviceArea: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  areaServed: 'Worldwide',
  knowsAbout: [
    'Google Ads',
    'Meta Ads',
    'Facebook Advertising',
    'Instagram Advertising',
    'PPC Management',
    'Performance Marketing',
    'Digital Advertising',
    'Conversion Optimization',
  ],
  offers: {
    '@type': 'Service',
    name: 'Performance Marketing Services',
    description: 'Google Ads, Meta Ads, and performance marketing services for scaling brands',
    provider: {
      '@type': 'Organization',
      name: 'Performance Marketing Operator',
    },
  },
}; 