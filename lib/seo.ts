import { Metadata } from 'next';

export const defaultViewport = 'width=device-width, initial-scale=1';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://onlydeb.com'),
  title: 'OnlyDeb | Google Ads Manager & PPC Agency Expert | USA & Europe Specialist',
  description: 'Professional Google Ads Manager & PPC Agency specialist with 7+ years experience. Achieved 400% ROAS for brands in USA & Europe. Expert Google Ads management, Meta Ads optimization.',
  keywords: [
    // Primary target keywords
    'Google Ads Manager',
    'PPC Agency',
    'Google Ads Agency',
    'Google Ads Manager USA',
    'Google Ads Manager Europe',
    'PPC Agency USA',
    'PPC Agency Europe',
    'Google Ads Agency USA',
    'Google Ads Agency Europe',
    // Secondary keywords
    'PPC Manager',
    'Google Ads Specialist',
    'Google Ads Consultant',
    'Performance Marketing Agency',
    'Paid Search Manager',
    'Google Ads Expert',
    'Facebook Ads Manager',
    'Meta Ads Manager',
    'Digital Marketing Agency',
    'Advertising Agency',
    'Pay Per Click Agency',
    'Search Engine Marketing',
    'PPC Management Services',
    'Google Ads Optimization',
    'Campaign Management',
    'ROAS Optimization',
    'Ad Spend Management',
    'Conversion Optimization',
    // Location-specific
    'Google Ads Manager New York',
    'Google Ads Manager Los Angeles',
    'Google Ads Manager London',
    'Google Ads Manager Berlin',
    'PPC Agency New York',
    'PPC Agency London',
    'European PPC Services',
    'USA Google Ads Management'
  ],
  authors: [{ name: 'Debroop Naha' }],
  creator: 'OnlyDeb',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onlydeb.com',
    siteName: 'OnlyDeb - Google Ads Manager & PPC Agency Expert',
    title: 'OnlyDeb | Google Ads Manager & PPC Agency Expert | USA & Europe',
    description: 'Professional Google Ads Manager & PPC Agency specialist with 7+ years experience. 400% ROAS achieved for brands across USA & Europe. Direct expertise, no agency bloat.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OnlyDeb - Google Ads Manager & PPC Agency Expert for USA & Europe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnlyDeb | Google Ads Manager & PPC Agency Expert | USA & Europe',
    description: 'Professional Google Ads Manager & PPC Agency specialist. 400% ROAS for brands across USA & Europe. Direct expertise, no agency bloat.',
    images: ['/og-image.jpg'],
    creator: '@OnlyDeb',
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
    title: `${title} | OnlyDeb`,
    description,
    keywords: keywords || defaultMetadata.keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${title} | OnlyDeb`,
      description,
      url: `https://onlydeb.com${path}`,
    },
    alternates: {
      canonical: `https://onlydeb.com${path}`,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: `${title} | OnlyDeb`,
      description,
    },
  };
}

// Enhanced structured data with comprehensive business and service information  
export const structuredData: { '@context': string; '@graph': Array<Record<string, unknown>> } = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://onlydeb.com/#person',
      name: 'Debroop Naha',
      url: 'https://onlydeb.com',
      image: 'https://onlydeb.com/profile.jpg',
      description: 'Professional Google Ads Manager & PPC Agency specialist with 7+ years expertise managing multi-million dollar campaigns across USA & Europe, delivering results like 400% ROAS and $2M+ revenue generation.',
      jobTitle: 'Google Ads Manager & PPC Agency Specialist',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://onlydeb.com/#organization',
        name: 'OnlyDeb',
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
      serviceArea: [
        {
          '@type': 'Place',
          name: 'United States',
        },
        {
          '@type': 'Place',
          name: 'Europe',
        },
        {
          '@type': 'Place',
          name: 'Worldwide',
        }
      ],
      areaServed: ['United States', 'Europe', 'Worldwide'],
      knowsAbout: [
        'Google Ads Management',
        'PPC Agency Services',
        'Google Ads Optimization',
        'Meta Ads Management',
        'Facebook Advertising',
        'Performance Marketing',
        'Pay Per Click Management',
        'Digital Advertising Strategy',
        'Conversion Optimization',
        'Campaign Strategy',
        'A/B Testing',
        'ROAS Optimization',
        'Ad Spend Management',
        'Search Engine Marketing'
      ],
      sameAs: [
        'https://linkedin.com/in/debro0p'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://onlydeb.com/#organization',
      name: 'OnlyDeb',
      url: 'https://onlydeb.com',
      logo: 'https://onlydeb.com/logo.png',
      description: 'Professional Google Ads Manager & PPC Agency services. Expert management of Google Ads, Meta Ads, and performance marketing campaigns for brands across USA & Europe.',
      foundingDate: '2018',
      founder: {
        '@type': 'Person',
        '@id': 'https://onlydeb.com/#person'
      },
      serviceArea: [
        {
          '@type': 'Place',
          name: 'United States',
        },
        {
          '@type': 'Place',
          name: 'Europe',
        }
      ],
      areaServed: ['United States', 'Europe', 'Worldwide']
    },
    {
      '@type': 'Service',
      '@id': 'https://onlydeb.com/#service',
      name: 'Google Ads Manager & PPC Agency Services',
      description: 'Professional Google Ads management, PPC agency services, and performance marketing for brands in USA & Europe. Proven results including 400% ROAS and $2M+ revenue generation.',
      provider: {
        '@type': 'Person',
        '@id': 'https://onlydeb.com/#person'
      },
      serviceType: [
        'Google Ads Management',
        'PPC Agency Services',
        'Meta Ads Management',
        'Performance Marketing',
        'Campaign Optimization',
        'Conversion Optimization'
      ],
      areaServed: [
        {
          '@type': 'Place',
          name: 'United States',
        },
        {
          '@type': 'Place',
          name: 'Europe',
        }
      ],
      offers: [
        {
          '@type': 'Offer',
          name: 'Google Ads Management',
          description: 'Professional Google Ads campaign management and optimization',
          category: 'Digital Marketing Service'
        },
        {
          '@type': 'Offer',
          name: 'PPC Campaign Management',
          description: 'Pay-per-click campaign strategy and management across platforms',
          category: 'Digital Marketing Service'
        },
        {
          '@type': 'Offer',
          name: 'Meta Ads Management',
          description: 'Facebook and Instagram advertising campaign management',
          category: 'Social Media Marketing'
        }
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://onlydeb.com/#website',
      url: 'https://onlydeb.com',
      name: 'OnlyDeb - Google Ads Manager & PPC Agency Expert',
      description: 'Professional Google Ads Manager & PPC Agency specialist with 7+ years experience serving brands across USA & Europe.',
      publisher: {
        '@type': 'Organization',
        '@id': 'https://onlydeb.com/#organization'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://onlydeb.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  ]
}; 