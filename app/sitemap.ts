import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://onlydeb.com';
  const lastModified = new Date();
  
  return [
    // Homepage - Highest priority for Google Ads Manager landing
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Key conversion pages - High priority for Google Ads Manager services
    {
      url: `${baseUrl}/work-with-me`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Google Ads Manager results and case studies - High SEO value
    {
      url: `${baseUrl}/results`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // About page - Important for Google Ads Manager expertise positioning
    {
      url: `${baseUrl}/about`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Contact page - Important for lead generation
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    // Legal pages - Lower priority but necessary
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
} 