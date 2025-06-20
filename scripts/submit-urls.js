#!/usr/bin/env node

// Script to help with blog URL submission and indexing analysis
const baseUrl = 'https://onlydeb.com';

const blogPosts = [
  'performance-marketing-kpis-2025',
  'cross-platform-ppc-management-2025', 
  'ppc-attribution-modeling-2025',
  'ppc-landing-page-optimization-2025',
  'google-ads-quality-score-optimization-2025',
  'google-ads-conversion-tracking-2025',
  'automated-vs-manual-bidding-2025',
  'responsive-search-ads-best-practices-2025',
  'advanced-google-ads-bidding-strategies-2025',
  'performance-max-campaigns-optimization-guide'
];

const urls = [
  `${baseUrl}/blog`,
  `${baseUrl}/blog/all`,
  ...blogPosts.map(slug => `${baseUrl}/blog/${slug}`)
];

console.log('🔍 Blog URLs for Google Search Console Submission:');
console.log('=====================================================\n');

urls.forEach((url, index) => {
  console.log(`${index + 1}. ${url}`);
});

console.log(`\n📊 Total URLs: ${urls.length}`);

console.log('\n📝 Steps to Submit to Google Search Console:');
console.log('1. Go to https://search.google.com/search-console');
console.log('2. Select your property (onlydeb.com)');
console.log('3. Go to "URL Inspection" tool');
console.log('4. Paste each URL and click "Request Indexing"');
console.log('5. Check "Coverage" report for any issues');

console.log('\n🚀 Performance Optimization Checklist:');
console.log('✅ Hero section optimized (blur effects reduced)');
console.log('✅ reCAPTCHA lazy loading implemented');
console.log('✅ Form performance optimized');
console.log('✅ Simplified animations and gradients');

console.log('\n📋 Next Steps for Blog Indexing:');
console.log('1. Submit sitemap: https://onlydeb.com/sitemap.xml');
console.log('2. Check robots.txt: https://onlydeb.com/robots.txt'); 
console.log('3. Verify structured data with Google Rich Results Test');
console.log('4. Monitor Search Console for crawl errors');

// Check if running with --submit flag for automated submission helper
if (process.argv.includes('--urls-only')) {
  console.log('\n📋 URLs Only (Copy/Paste Format):');
  urls.forEach(url => console.log(url));
} 