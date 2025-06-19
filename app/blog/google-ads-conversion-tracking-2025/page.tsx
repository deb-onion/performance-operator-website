import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'

export const metadata: Metadata = {
  title: 'Google Ads Conversion Tracking Setup Guide for 2025 | OnlyDeb',
  description: 'The ultimate 2025 guide for small businesses to set up Google Ads conversion tracking that fuels AI without falling into automation traps or data pitfalls.',
  keywords: [
    'Google Ads conversion tracking',
    'conversion tracking 2025',
    'enhanced conversions',
    'Google Ads tracking setup',
    'PPC conversion tracking',
    'smart bidding data',
    'Google Tag Manager',
    'conversion tracking guide',
    'Google Ads analytics',
    'conversion optimization'
  ],
  openGraph: {
    title: 'Google Ads Conversion Tracking Setup Guide for 2025 | OnlyDeb',
    description: 'The ultimate 2025 guide for small businesses to set up Google Ads conversion tracking that fuels AI without falling into automation traps or data pitfalls.',
    type: 'article',
    publishedTime: '2025-01-14T00:00:00.000Z',
    authors: ['Deb'],
    tags: ['Google Ads', 'Conversion Tracking', 'PPC', 'Analytics', 'Digital Marketing'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Conversion Tracking Setup Guide for 2025 | OnlyDeb',
    description: 'The ultimate 2025 guide for small businesses to set up Google Ads conversion tracking that fuels AI without falling into automation traps or data pitfalls.',
  },
  alternates: {
    canonical: 'https://onlydeb.com/blog/google-ads-conversion-tracking-2025',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Google Ads Conversion Tracking Setup for 2025: The Ultimate Small Business Guide',
  description: 'The ultimate 2025 guide for small businesses to set up Google Ads conversion tracking that fuels AI without falling into automation traps or data pitfalls.',
  author: {
    '@type': 'Person',
    name: 'Deb',
    url: 'https://onlydeb.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'OnlyDeb',
    logo: {
      '@type': 'ImageObject',
      url: 'https://onlydeb.com/logo.png',
    },
  },
  datePublished: '2025-01-14T00:00:00.000Z',
  dateModified: '2025-01-14T00:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://onlydeb.com/blog/google-ads-conversion-tracking-2025',
  },
  keywords: 'Google Ads conversion tracking, conversion tracking 2025, enhanced conversions, Google Ads tracking setup',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is Enhanced Conversion tracking critical in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enhanced Conversions help recover data lost due to privacy restrictions by securely passing hashed user info, improving Smart Bidding\'s accuracy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop AI from chasing low-value actions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Set clear primary/secondary conversion priorities and audit AI optimization paths regularly to ensure focus on high-value outcomes.',
      },
    },
  ],
}

export default function GoogleAdsConversionTracking2025() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <article className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <header className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Google Ads Conversion Tracking Setup for 2025: The Ultimate Small Business Guide
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                If you're a small business tired of agencies setting up automated campaigns that fail after a month, this is the guide you've been looking for. In 2025, <strong>conversion tracking isn't just important — it's the difference between AI that grows your business and AI that burns your budget.</strong>
              </p>
              <div className="flex items-center gap-4 mt-6 text-sm text-gray-500 dark:text-gray-400">
                <time dateTime="2025-01-14">January 14, 2025</time>
                <span>•</span>
                <span>12 min read</span>
              </div>
            </header>

            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
              <h2>🎯 Why Conversion Tracking Is Your PPC Foundation in 2025</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
                <ul className="space-y-2 mb-0">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold">✅</span>
                    <span>Google's AI (Smart Bidding, Gemini-powered algorithms, predictive audiences) is only as good as the data you feed it.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold">✅</span>
                    <span>Bad conversion tracking = bad AI decisions = wasted spend.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold">✅</span>
                    <span>Without clear, reliable tracking, you lose control of your PPC strategy.</span>
                  </li>
                </ul>
              </div>
              <p className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 pl-6 py-4 my-6">
                👉 <em>Think of conversion tracking as the fuel for your AI engine — dirty fuel = engine failure.</em>
              </p>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              <h2>🚀 Funnel-Aligned Conversion Tracking Blueprint</h2>

              {/* AI-Aligned Funnel Image */}
              <div className="my-8">
                <img
                  src="/blog/images/conversion-tracking-ai-funnel-2025.png"
                  alt="Funnel diagram showing Google Ads conversion tracking strategy for 2025, mapping TOFU micro-conversions like video views and signups, MOFU qualified leads like form fills and calls, and BOFU revenue actions like e-commerce sales and offline imports."
                  className="w-full h-auto rounded-lg shadow-md mx-auto"
                  width={800}
                  height={600}
                />
              </div>

              <h3>🟢 TOFU: Micro-Conversions (Audience Builders, Never Primary Goals)</h3>
              <ul>
                <li>Track video views, newsletter signups, downloads.</li>
                <li>Use these only for building remarketing lists or audience insights.</li>
                <li><strong>AI safeguard:</strong> Always mark as secondary conversions. Don't let Smart Bidding optimize for these.</li>
              </ul>

              <h3>🟡 MOFU: Qualified Engagements</h3>
              <ul>
                <li>Form fills, calls, chats — tracked via GTM or dedicated thank-you URLs.</li>
                <li>Enable Enhanced Conversions (hashed email/phone data) for better attribution.</li>
                <li><strong>AI safeguard:</strong> Prioritize these for lead gen campaigns, but audit regularly to ensure AI is optimizing properly.</li>
              </ul>

              <h3>🔴 BOFU: Revenue + Final Conversions</h3>
              <ul>
                <li>E-commerce sales (dynamic values).</li>
                <li>Offline conversion imports (phone/in-store sales closed after ad click).</li>
                <li>Enhanced Conversions across all BOFU actions.</li>
                <li><strong>AI safeguard:</strong> These should be your primary conversions for Smart Bidding.</li>
              </ul>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              <h2>⚠️ Real Pitfalls + Solutions</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 my-8">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">Pitfall</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">AI optimizes for micro-conversions</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Mark as secondary conversions; set primary = revenue actions</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">GA4 imports only → undercounted data</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Use native Google Ads tags + Enhanced Conversions</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">AI runs unchecked on bad data</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Audit Diagnostic, auction insights, conversion paths bi-weekly</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Agencies overreport with vanity metrics</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Align reports to real revenue + qualified leads</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pitfalls and Solutions Image */}
              <div className="my-8">
                <img
                  src="/blog/images/conversion-tracking-pitfalls-solutions-2025.png"
                  alt="Infographic showing Google Ads conversion tracking pitfalls for 2025 like AI optimizing for micro-conversions, GA4 undercounting, bad data driving AI, and agencies overreporting vanity metrics, alongside solutions such as marking secondary conversions and using native tags."
                  className="w-full h-auto rounded-lg shadow-md mx-auto"
                  width={900}
                  height={500}
                />
              </div>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              <h2>✅ Advanced Best Practices</h2>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
                <ul className="space-y-3 mb-0">
                  <li><strong>Native Google Ads tag + Enhanced Conversions &gt; GA4-only imports</strong> → cleaner AI inputs.</li>
                  <li><strong>Use GTM for flexible deployment + easier debugging.</strong></li>
                  <li><strong>Test tags before launch with Tag Assistant / GTM Preview.</strong></li>
                  <li><strong>Feed offline conversions FAST to keep AI learning right.</strong></li>
                  <li><strong>Audit conversion paths and AI optimization paths at least twice a month.</strong></li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold mb-3">💡 Pro Tip: The Enhanced Conversions Advantage</h3>
                <p className="mb-4">Enhanced Conversions are your secret weapon in 2025:</p>
                <ul className="space-y-2">
                  <li><strong>🔒 Privacy-compliant:</strong> Uses hashed customer data that can't be reverse-engineered</li>
                  <li><strong>📈 Better attribution:</strong> Captures conversions that cookies and pixels miss</li>
                  <li><strong>🤖 Smarter AI:</strong> Feeds Google's machine learning more complete data sets</li>
                  <li><strong>🎯 Future-proof:</strong> Works as third-party cookies phase out</li>
                </ul>
              </div>

              <h2>The 2025 Conversion Tracking Setup Checklist</h2>

              {/* Conversion Tracking Checklist Image */}
              <div className="my-8">
                <img
                  src="/blog/images/conversion-tracking-checklist-2025.png"
                  alt="Checklist infographic outlining essential Google Ads conversion tracking setup steps for 2025, including native tags, Enhanced Conversions, GTM deployment, tag testing, offline conversion feeds, and bi-weekly audits."
                  className="w-full h-auto rounded-lg shadow-md mx-auto"
                  width={800}
                  height={600}
                />
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold mb-4">Step-by-Step Implementation:</h3>
                <ol className="space-y-3">
                  <li><strong>1. Audit existing tracking</strong> → Identify gaps and redundancies</li>
                  <li><strong>2. Define conversion hierarchy</strong> → Primary vs secondary actions</li>
                  <li><strong>3. Set up Enhanced Conversions</strong> → Start with lead forms and purchases</li>
                  <li><strong>4. Configure GTM properly</strong> → Test all triggers and tags</li>
                  <li><strong>5. Import offline conversions</strong> → Connect CRM data within 90 days</li>
                  <li><strong>6. Set conversion values</strong> → Accurate profit margins or lead values</li>
                  <li><strong>7. Test everything</strong> → Use Tag Assistant and make test conversions</li>
                  <li><strong>8. Monitor and audit</strong> → Weekly conversion path reviews</li>
                </ol>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold mb-3">⚠️ Critical Warning: The Attribution Window Trap</h3>
                <p className="mb-0">
                  Don't let agencies convince you to extend attribution windows to 90 days just to inflate conversion numbers. Match your attribution window to your actual sales cycle. For most small businesses, 30 days is realistic. Longer windows create false AI signals and make budget optimization impossible.
                </p>
              </div>

              <h2>Advanced Tracking Techniques for 2025</h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">🏪 E-commerce Focus</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Dynamic remarketing with product IDs</li>
                    <li>Customer lifetime value tracking</li>
                    <li>Cart abandonment recovery sequences</li>
                    <li>Cross-device purchase attribution</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">📞 Lead Generation Focus</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Call tracking with dynamic number insertion</li>
                    <li>Form completion with lead scoring</li>
                    <li>CRM integration for closed-won tracking</li>
                    <li>Multi-touch attribution modeling</li>
                  </ul>
                </div>
              </div>

              <h2>🔗 Internal Links</h2>
              <ul>
                <li><Link href="/results/" className="text-blue-600 dark:text-blue-400 hover:underline">See Our Conversion Tracking Successes</Link></li>
                <li><Link href="/services/" className="text-blue-600 dark:text-blue-400 hover:underline">Explore Our PPC Services</Link></li>
                <li><Link href="/blog/automated-vs-manual-bidding-2025/" className="text-blue-600 dark:text-blue-400 hover:underline">Automated vs Manual Bidding Guide</Link></li>
              </ul>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              <h2>⚡ Final Thoughts</h2>
              <p>
                In 2025, great PPC campaigns don't start with ads — they start with <strong>great conversion tracking</strong>. At <strong>OnlyDeb</strong>, we help small businesses set up conversion tracking that fuels smart AI bidding and protects your budget. <Link href="/services/" className="text-blue-600 dark:text-blue-400 hover:underline">Let's get it right</Link>.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Ready to fix your conversion tracking?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get a free tracking audit and setup roadmap.
                  </p>
                </div>
                <Link
                  href="/contact/"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Get Free Tracking Audit
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </>
  )
} 