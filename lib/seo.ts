import { Metadata, Viewport } from 'next';

export const defaultViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://onlydeb.com'),
  title: 'OnlyDeb | Google Ads Manager & PPC Agency Expert | USA & Europe Specialist',
  description: 'Professional Google Ads Manager & PPC Agency specialist with 8+ years experience. Achieved 400% ROAS for brands in USA & Europe. Expert Google Ads management, Meta Ads optimization.',
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
    description: 'Professional Google Ads Manager & PPC Agency specialist with 8+ years experience. 400% ROAS achieved for brands across USA & Europe. Direct expertise, no agency bloat.',
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
      description: 'Professional Google Ads Manager & PPC Agency specialist with 8+ years expertise managing multi-million dollar campaigns across USA & Europe, delivering results like 400% ROAS and $2M+ revenue generation.',
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
      description: 'Professional Google Ads Manager & PPC Agency specialist with 8+ years experience serving brands across USA & Europe.',
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

// International SEO Configuration
export const internationalSEO = {
  defaultLocale: 'en-US',
  locales: [
    { code: 'en-US', region: 'United States', currency: 'USD', timezone: 'America/New_York' },
    { code: 'en-GB', region: 'United Kingdom', currency: 'GBP', timezone: 'Europe/London' },
    { code: 'en-EU', region: 'Europe', currency: 'EUR', timezone: 'Europe/Berlin' },
    { code: 'en-CA', region: 'Canada', currency: 'CAD', timezone: 'America/Toronto' },
    { code: 'en-AU', region: 'Australia', currency: 'AUD', timezone: 'Australia/Sydney' }
  ]
};

// Hreflang URL Generation
export function generateHreflangUrls(pathname: string = '') {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://onlydeb.com';
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  
  return internationalSEO.locales.map(locale => ({
    hreflang: locale.code.toLowerCase(),
    href: `${baseUrl}${cleanPath}?region=${locale.code.toLowerCase()}`
  }));
}

// Generate hreflang meta tags
export function generateHreflangTags(pathname: string = '') {
  const hreflangUrls = generateHreflangUrls(pathname);
  
  return hreflangUrls.map(item => (
    `<link rel="alternate" hreflang="${item.hreflang}" href="${item.href}" />`
  )).join('\n');
}

// Regional Content Adaptation
export interface RegionalContent {
  currency: string;
  currencySymbol: string;
  timezone: string;
  businessHours: string;
  phoneFormat: string;
  testimonialFocus: string[];
  caseStudyRegions: string[];
}

export const regionalContent: Record<string, RegionalContent> = {
  'en-us': {
    currency: 'USD',
    currencySymbol: '$',
    timezone: 'America/New_York',
    businessHours: '9 AM - 6 PM EST',
    phoneFormat: '+1 (XXX) XXX-XXXX',
    testimonialFocus: ['E-commerce', 'SaaS', 'Healthcare', 'Finance'],
    caseStudyRegions: ['United States', 'North America']
  },
  'en-gb': {
    currency: 'GBP',
    currencySymbol: '£',
    timezone: 'Europe/London',
    businessHours: '9 AM - 5 PM GMT',
    phoneFormat: '+44 XXXX XXX XXX',
    testimonialFocus: ['FinTech', 'E-commerce', 'Professional Services', 'EdTech'],
    caseStudyRegions: ['United Kingdom', 'Europe']
  },
  'en-eu': {
    currency: 'EUR',
    currencySymbol: '€',
    timezone: 'Europe/Berlin',
    businessHours: '9 AM - 6 PM CET',
    phoneFormat: '+XX XXX XXX XXXX',
    testimonialFocus: ['B2B SaaS', 'Manufacturing', 'E-commerce', 'Professional Services'],
    caseStudyRegions: ['Germany', 'France', 'Netherlands', 'Europe']
  },
  'en-ca': {
    currency: 'CAD',
    currencySymbol: 'C$',
    timezone: 'America/Toronto',
    businessHours: '9 AM - 6 PM EST',
    phoneFormat: '+1 (XXX) XXX-XXXX',
    testimonialFocus: ['E-commerce', 'SaaS', 'Healthcare', 'Real Estate'],
    caseStudyRegions: ['Canada', 'North America']
  },
  'en-au': {
    currency: 'AUD',
    currencySymbol: 'A$',
    timezone: 'Australia/Sydney',
    businessHours: '9 AM - 5 PM AEST',
    phoneFormat: '+61 X XXXX XXXX',
    testimonialFocus: ['E-commerce', 'Tourism', 'Professional Services', 'Education'],
    caseStudyRegions: ['Australia', 'Asia-Pacific']
  }
};

// Enhanced metadata generation with regional targeting
export function generateRegionalMetadata(
  title: string,
  description: string,
  pathname: string = '',
  region: string = 'en-us'
) {
  const regionalData = regionalContent[region.toLowerCase()] || regionalContent['en-us'];
  const hreflangUrls = generateHreflangUrls(pathname);
  
  // Regional keyword variations
  const regionalKeywords: Record<string, string[]> = {
    'en-us': ['Google Ads Manager USA', 'PPC Agency United States', 'Performance Marketing Specialist America'],
    'en-gb': ['Google Ads Manager UK', 'PPC Agency London', 'Performance Marketing Specialist Britain'],
    'en-eu': ['Google Ads Manager Europe', 'PPC Agency EU', 'Performance Marketing Specialist Deutschland'],
    'en-ca': ['Google Ads Manager Canada', 'PPC Agency Toronto', 'Performance Marketing Specialist Canadian'],
    'en-au': ['Google Ads Manager Australia', 'PPC Agency Sydney', 'Performance Marketing Specialist Australian']
  };

  const keywords = regionalKeywords[region.toLowerCase()] || regionalKeywords['en-us'];
  
  return {
    title: `${title} | ${regionalData.currency} Pricing Available`,
    description: `${description} Serving ${regionalData.caseStudyRegions.join(' and ')}. ${regionalData.businessHours}.`,
    keywords: keywords.join(', '),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`,
      languages: Object.fromEntries(
        hreflangUrls.map(item => [item.hreflang, item.href])
      )
    },
    other: {
      'geo.region': regionalData.caseStudyRegions[0],
      'geo.placename': regionalData.caseStudyRegions[0],
      'geo.position': getRegionalCoordinates(region),
      'ICBM': getRegionalCoordinates(region)
    }
  };
}

// Geographic coordinates for regional targeting
function getRegionalCoordinates(region: string): string {
  const coordinates: Record<string, string> = {
    'en-us': '40.7128,-74.0060', // New York
    'en-gb': '51.5074,-0.1278',  // London
    'en-eu': '52.5200,13.4050',  // Berlin
    'en-ca': '43.6532,-79.3832', // Toronto
    'en-au': '-33.8688,151.2093' // Sydney
  };
  
  return coordinates[region.toLowerCase()] || coordinates['en-us'];
} 