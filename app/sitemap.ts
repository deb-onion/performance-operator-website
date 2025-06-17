import type { MetadataRoute } from 'next'

// Blog post structure for SEO
const blogPosts = [
  // Google Ads Strategy Posts
  { slug: 'google-ads-bidding-strategies-2025', category: 'google-ads', lastModified: '2024-12-18' },
  { slug: 'performance-max-campaigns-optimization-guide', category: 'google-ads', lastModified: '2024-12-18' },
  { slug: 'google-ads-quality-score-improvement', category: 'google-ads', lastModified: '2024-12-18' },
  { slug: 'responsive-search-ads-best-practices', category: 'google-ads', lastModified: '2024-12-18' },
  { slug: 'google-ads-conversion-tracking-setup', category: 'google-ads', lastModified: '2024-12-18' },
  
  // PPC Strategy Posts  
  { slug: 'ppc-budget-optimization-strategies', category: 'ppc-strategy', lastModified: '2024-12-18' },
  { slug: 'cross-platform-ppc-campaign-management', category: 'ppc-strategy', lastModified: '2024-12-18' },
  { slug: 'ppc-attribution-modeling-guide', category: 'ppc-strategy', lastModified: '2024-12-18' },
  { slug: 'automated-bidding-vs-manual-bidding', category: 'ppc-strategy', lastModified: '2024-12-18' },
  { slug: 'ppc-landing-page-optimization', category: 'ppc-strategy', lastModified: '2024-12-18' },
  
  // Performance Marketing Posts
  { slug: 'performance-marketing-kpis-metrics', category: 'performance-marketing', lastModified: '2024-12-18' },
  { slug: 'data-driven-marketing-attribution', category: 'performance-marketing', lastModified: '2024-12-18' },
  { slug: 'marketing-funnel-optimization-guide', category: 'performance-marketing', lastModified: '2024-12-18' },
  { slug: 'customer-lifetime-value-optimization', category: 'performance-marketing', lastModified: '2024-12-18' },
  { slug: 'marketing-automation-roi-improvement', category: 'performance-marketing', lastModified: '2024-12-18' },
  
  // Industry Case Studies
  { slug: 'ecommerce-google-ads-case-study', category: 'case-studies', lastModified: '2024-12-18' },
  { slug: 'saas-ppc-campaign-optimization', category: 'case-studies', lastModified: '2024-12-18' },
  { slug: 'b2b-lead-generation-ppc-strategy', category: 'case-studies', lastModified: '2024-12-18' },
  { slug: 'local-business-google-ads-success', category: 'case-studies', lastModified: '2024-12-18' },
  { slug: 'mobile-app-user-acquisition', category: 'case-studies', lastModified: '2024-12-18' },
  
  // Tools and Resources
  { slug: 'google-ads-tools-extensions-guide', category: 'tools', lastModified: '2024-12-18' },
  { slug: 'ppc-analytics-dashboard-setup', category: 'tools', lastModified: '2024-12-18' },
  { slug: 'competitor-analysis-ppc-tools', category: 'tools', lastModified: '2024-12-18' },
  { slug: 'keyword-research-tools-comparison', category: 'tools', lastModified: '2024-12-18' },
  { slug: 'ppc-reporting-automation-tools', category: 'tools', lastModified: '2024-12-18' }
];

const blogCategories = [
  'google-ads',
  'ppc-strategy', 
  'performance-marketing',
  'case-studies',
  'tools'
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

  // Blog main page and categories
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    ...blogCategories.map(category => ({
      url: `${baseUrl}/blog/category/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  ]

  // Individual blog posts
  const blogPostPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...pages, ...blogPages, ...blogPostPages]
} 