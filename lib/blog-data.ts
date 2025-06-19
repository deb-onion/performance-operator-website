// Centralized blog data for consistency across all pages
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Google Ads' | 'PPC Strategy' | 'Performance Marketing' | 'Case Studies' | 'Tools & Resources';
  readTime: string;
  date: string;
  href: string;
  tags: string[];
  featured?: boolean;
  image?: string; // Featured image for SEO and social sharing
}

export const allBlogPosts: BlogPost[] = [
  {
    slug: "performance-marketing-kpis-2025",
    title: "Essential Performance Marketing KPIs and Metrics for 2025",
    excerpt: "Master the essential KPIs and metrics for performance marketing in 2025. A pro guide to tracking what truly matters for scalable, AI-aligned growth.",
    category: "Performance Marketing",
    readTime: "12 min read",
    date: "Jan 16, 2025",
    href: "/blog/performance-marketing-kpis-2025",
    tags: ["Performance Marketing KPIs", "ROAS Optimization", "AI Bidding Metrics", "Marketing Analytics"],
    featured: true,
    image: "/blog/images/performance-kpi-funnel-2025.png"
  },
  {
    slug: "cross-platform-ppc-management-2025",
    title: "Cross-Platform PPC Campaign Management: 2025 Pro Playbook",
    excerpt: "A 2025 masterclass on cross-platform PPC campaign management. Learn to unify Google, Meta, LinkedIn, and AI systems for scalable, efficient paid media.",
    category: "PPC Strategy",
    readTime: "14 min read",
    date: "Jan 15, 2025",
    href: "/blog/cross-platform-ppc-management-2025",
    tags: ["Cross-Platform PPC", "Campaign Management", "Google Meta LinkedIn", "PPC Orchestration"],
    featured: true,
    image: "/blog/images/cross-platform-ppc-funnel-2025.png"
  },
  {
    slug: "ppc-attribution-modeling-2025",
    title: "PPC Attribution Modeling: The Complete Guide for 2025",
    excerpt: "Master PPC attribution modeling in 2025. A pro-level framework for aligning Google Gemini AI, Meta Advantage+, and cross-platform performance for smarter scaling.",
    category: "PPC Strategy",
    readTime: "15 min read",
    date: "Jan 14, 2025",
    href: "/blog/ppc-attribution-modeling-2025",
    tags: ["Attribution Modeling", "Cross-Platform", "Google Gemini AI", "Meta Advantage+"],
    featured: true,
    image: "/blog/images/ppc-attribution-gps-2025.png"
  },
  {
    slug: "google-ads-quality-score-optimization-2025",
    title: "Google Ads Quality Score Optimization for 2025",
    excerpt: "Master Google Ads Quality Score in 2025. A small business guide to lowering CPC, boosting ROI, and aligning with AI bidding for sustainable success.",
    category: "Google Ads",
    readTime: "10 min read",
    date: "Jan 14, 2025",
    href: "/blog/google-ads-quality-score-optimization-2025",
    tags: ["Quality Score", "CPC Optimization", "AI Bidding"],
    featured: false,
    image: "/blog/images/quality-score-boosting-blueprint-2025.png"
  },
  {
    slug: "ppc-landing-page-optimization-2025",
    title: "PPC Landing Page Optimization for 2025",
    excerpt: "Master PPC landing page optimization in 2025. A small business guide to conversion-ready pages with AI insights, Shopify Gem Pages tips, and WordPress hacks.",
    category: "PPC Strategy",
    readTime: "11 min read",
    date: "Jan 14, 2025",
    href: "/blog/ppc-landing-page-optimization-2025",
    tags: ["Landing Pages", "Conversion Optimization", "Shopify", "WordPress"],
    featured: false,
    image: "/blog/images/ppc-landing-page-funnel-2025.png"
  },
  {
    slug: "google-ads-conversion-tracking-2025",
    title: "Google Ads Conversion Tracking Setup for 2025",
    excerpt: "The ultimate 2025 guide for small businesses to set up Google Ads conversion tracking that fuels AI without falling into automation traps or data pitfalls.",
    category: "Google Ads",
    readTime: "12 min read",
    date: "Jan 14, 2025",
    href: "/blog/google-ads-conversion-tracking-2025",
    tags: ["Conversion Tracking", "Enhanced Conversions", "Analytics"],
    featured: true,
    image: "/blog/images/conversion-tracking-ai-funnel-2025.png"
  },
  {
    slug: "automated-vs-manual-bidding-2025",
    title: "Automated vs Manual Bidding in 2025: The Ultimate Guide",
    excerpt: "Discover when to use automated vs manual bidding in Google Ads for 2025. A small business guide to blending AI and human control for superior PPC results.",
    category: "Google Ads",
    readTime: "10 min read",
    date: "Jan 14, 2025",
    href: "/blog/automated-vs-manual-bidding-2025",
    tags: ["Bidding Strategies", "Smart Bidding", "Manual CPC"],
    featured: true,
    image: "/blog/images/smart-bidding-blueprint-2025.png"
  },
  {
    slug: "responsive-search-ads-best-practices-2025",
    title: "Responsive Search Ads (RSA) Best Practices for 2025",
    excerpt: "Master Responsive Search Ads in 2025 with advanced best practices tailored for small businesses. Build high-performing RSAs that convert and lower costs.",
    category: "Google Ads",
    readTime: "8 min read",
    date: "Jan 14, 2025",
    href: "/blog/responsive-search-ads-best-practices-2025",
    tags: ["RSA", "Ad Copy", "Machine Learning"],
    featured: true,
    image: "/blog/images/rsa-best-practices-hero.png"
  },
  {
    slug: "advanced-google-ads-bidding-strategies-2025",
    title: "Advanced Google Ads Bidding Strategies for 2025",
    excerpt: "Master the latest automated bidding strategies and optimization techniques that drive higher ROI for Google Ads campaigns in 2025.",
    category: "Google Ads",
    readTime: "10 min read",
    date: "Jan 14, 2025",
    href: "/blog/advanced-google-ads-bidding-strategies-2025",
    tags: ["Advanced Bidding", "ROI Optimization", "Campaign Strategy"],
    featured: true,
    image: "/blog/images/advanced-google-ads-bidding-strategies-hero.png"
  },
  {
    slug: "performance-max-campaigns-optimization-guide",
    title: "Performance Max Campaigns: Complete Optimization Guide",
    excerpt: "Master Performance Max campaigns with advanced optimization strategies, asset testing, and budget allocation techniques for maximum performance.",
    category: "Google Ads",
    readTime: "12 min read", 
    date: "Jan 14, 2025",
    href: "/blog/performance-max-campaigns-optimization-guide",
    tags: ["Performance Max", "Asset Optimization", "Multi-Channel"],
    featured: false,
    image: "/blog/images/performance-max-optimization-guide-header.png"
  }
];

// Helper functions
export const getFeaturedPosts = (): BlogPost[] => {
  return allBlogPosts.filter(post => post.featured === true).slice(0, 3);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return allBlogPosts;
  return allBlogPosts.filter(post => post.category === category);
};

export const getRelatedPosts = (currentSlug: string, category: string, limit: number = 2): BlogPost[] => {
  return allBlogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
};

export const getRecentPosts = (limit: number = 4): BlogPost[] => {
  return allBlogPosts.slice(0, limit);
};

// Blog categories with accurate post counts
export const blogCategories = [
  {
    name: "Google Ads",
    slug: "google-ads",
    description: "Google Ads strategies, campaign optimization, and advanced techniques",
    postCount: allBlogPosts.filter(post => post.category === "Google Ads").length,
    color: "text-primary"
  },
  {
    name: "PPC Strategy", 
    slug: "ppc-strategy",
    description: "Cross-platform PPC strategies and campaign management",
    postCount: allBlogPosts.filter(post => post.category === "PPC Strategy").length,
    color: "text-success"
  },
  {
    name: "Performance Marketing",
    slug: "performance-marketing", 
    description: "Data-driven marketing, attribution, and conversion optimization",
    postCount: allBlogPosts.filter(post => post.category === "Performance Marketing").length,
    color: "text-warning"
  }
]; 