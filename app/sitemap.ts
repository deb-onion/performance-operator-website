import type { MetadataRoute } from 'next'

// Only actual blog posts that exist in the system
const blogPosts = [
  // Performance Marketing Posts
  { slug: 'performance-marketing-kpis-2025', category: 'performance-marketing', lastModified: '2025-01-16' },
  
  // PPC Strategy Posts
  { slug: 'cross-platform-ppc-management-2025', category: 'ppc-strategy', lastModified: '2025-01-15' },
  { slug: 'ppc-attribution-modeling-2025', category: 'ppc-strategy', lastModified: '2025-01-14' },
  { slug: 'ppc-landing-page-optimization-2025', category: 'ppc-strategy', lastModified: '2025-01-14' },
  
  // Google Ads Strategy Posts
  { slug: 'google-ads-quality-score-optimization-2025', category: 'google-ads', lastModified: '2025-01-14' },
  { slug: 'google-ads-conversion-tracking-2025', category: 'google-ads', lastModified: '2025-01-14' },
  { slug: 'automated-vs-manual-bidding-2025', category: 'google-ads', lastModified: '2025-01-14' },
  { slug: 'responsive-search-ads-best-practices-2025', category: 'google-ads', lastModified: '2025-01-14' },
  { slug: 'advanced-google-ads-bidding-strategies-2025', category: 'google-ads', lastModified: '2025-01-14' },
  { slug: 'performance-max-campaigns-optimization-guide', category: 'google-ads', lastModified: '2025-01-14' }
];

const blogCategories = [
  'google-ads',
  'ppc-strategy', 
  'performance-marketing'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://onlydeb.com'
  
  // Main pages
  const pages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/results`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work-with-me`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }
  ]

  // Blog main page and all posts page
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/all`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    ...blogCategories.map(category => ({
      url: `${baseUrl}/blog/category/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  ]

  // Individual blog posts (only ones that actually exist)
  const blogPostPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...pages, ...blogPages, ...blogPostPages]
} 