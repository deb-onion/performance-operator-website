import { Metadata } from 'next';

export const defaultViewport = 'width=device-width, initial-scale=1';

export const defaultMetadata: Metadata = {
  title: 'onlydeb | Performance Marketing Specialist | 7+ Years Google Ads & Meta Ads Expert',
  description: '7+ years PPC Manager managing multi-million dollar campaigns. Achieved 400% ROAS, 47% CPC reduction. Google Ads & Meta Ads specialist for scaling brands.',
  keywords: [
    'PPC Manager',
    'Google Ads',
    'Meta Ads',
    'Facebook Ads',
    'Performance Marketing',
    'PPC specialist',
    'paid advertising',
    'digital marketing',
    'Google Ads consultant',
    'advertising specialist',
    'ROAS optimization',
    'campaign management'
  ],
  authors: [{ name: 'Debroop Naha' }],
  creator: 'onlydeb',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onlydeb.com',
    siteName: 'onlydeb',
    title: 'onlydeb | 7+ Years PPC Manager | Google Ads & Meta Ads Expert',
    description: '7+ years PPC Manager managing multi-million dollar campaigns. Achieved 400% ROAS, 47% CPC reduction. Direct expertise, no agency bloat.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'onlydeb - Performance Marketing Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'onlydeb | 7+ Years PPC Manager | Google Ads & Meta Ads Expert',
    description: '7+ years PPC Manager managing multi-million dollar campaigns. Achieved 400% ROAS, 47% CPC reduction. Direct expertise, no agency bloat.',
    images: ['/og-image.jpg'],
    creator: '@onlydeb',
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
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: string[]
): Metadata {
  return {
    title: `${title} | onlydeb`,
    description,
    keywords: keywords || defaultMetadata.keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${title} | onlydeb`,
      description,
      url: `https://onlydeb.com${path}`,
    },
    alternates: {
      canonical: `https://onlydeb.com${path}`,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: `${title} | onlydeb`,
      description,
    },
  };
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Debroop Naha',
  url: 'https://onlydeb.com',
  image: 'https://onlydeb.com/profile.jpg',
  description: 'Performance-focused PPC Manager with 7+ years expertise managing multi-million dollar ad campaigns across diverse industries, delivering results like 400% ROAS and 47% CPC reduction.',
  jobTitle: 'PPC Manager & Performance Marketing Specialist',
  worksFor: {
  '@type': 'Organization',
    name: 'onlydeb',
  },
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Google',
    },
    {
      '@type': 'Organization', 
      name: 'Bloomstories',
    },
    {
      '@type': 'Organization',
      name: 'Dagamma Ecommerce Solutions',
    }
  ],
  serviceArea: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  areaServed: 'Worldwide',
  knowsAbout: [
    'Google Ads',
    'Meta Ads',
    'Facebook Advertising',
    'PPC Management',
    'Performance Marketing',
    'Digital Advertising',
    'Conversion Optimization',
    'Campaign Strategy',
    'A/B Testing',
    'ROAS Optimization'
  ],
  offers: {
    '@type': 'Service',
    name: 'PPC Management & Performance Marketing Services',
    description: 'Google Ads, Meta Ads, and performance marketing services for scaling brands with proven results',
    provider: {
      '@type': 'Person',
      name: 'Debroop Naha',
    },
  },
}; 