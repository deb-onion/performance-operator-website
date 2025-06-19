import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { generatePageMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";

export const metadata = generatePageMetadata(
  "Advanced Google Ads Bidding Strategies for 2025 | OnlyDeb",
  "Master advanced Google Ads bidding strategies for 2025. Learn how small businesses can optimize bidding across the marketing funnel for superior ROI and lower costs.",
  "/blog/advanced-google-ads-bidding-strategies-2025",
  ["Google Ads bidding strategies", "automated bidding", "Target CPA", "Target ROAS", "Manual CPC", "Google Ads optimization", "PPC bidding 2025"]
);

// Structured data for the blog post
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Advanced Google Ads Bidding Strategies for 2025",
  "description": "Master advanced Google Ads bidding strategies for 2025. Learn how small businesses can optimize bidding across the marketing funnel for superior ROI and lower costs.",
  "author": {
    "@type": "Person",
    "name": "Debroop Naha",
    "url": "https://onlydeb.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "OnlyDeb",
    "logo": {
      "@type": "ImageObject",
      "url": "https://onlydeb.com/profile.jpg"
    }
  },
  "datePublished": "2024-12-18",
  "dateModified": "2024-12-18",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://onlydeb.com/blog/advanced-google-ads-bidding-strategies-2025"
  },
  "image": "https://onlydeb.com/blog/images/bidding-strategy-funnel-2025.png"
};

// FAQ structured data
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which Google Ads bidding strategy is best for branded keywords in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manual CPC bidding is ideal for branded keywords as it keeps costs low and ensures precise control."
      }
    },
    {
      "@type": "Question",
      "name": "When should I transition from Maximize Clicks to Maximize Conversions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Transition once you have accumulated about 15-30 conversions in 14 days to ensure sufficient data for Google's AI to optimize effectively."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best time to start using Target CPA or ROAS strategies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shift to Target CPA or ROAS when your campaigns consistently generate around 30-50 conversions every two weeks. This provides enough data for Google's machine learning algorithms to optimize accurately."
      }
    }
  ]
};

export default function BiddingStrategiesGuide() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <section className="py-6 border-b border-border/50">
        <Container>
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>→</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <span>→</span>
            <span className="text-foreground">Advanced Google Ads Bidding Strategies</span>
          </nav>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                Google Ads
              </span>
              <span className="text-muted-foreground text-sm">8 min read</span>
              <span className="text-muted-foreground text-sm">Dec 18, 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced Google Ads Bidding Strategies for 2025
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              If you're a small business frustrated with marketing agencies that consistently overpromise and underdeliver, mastering Google Ads bidding strategies can put you back in control. Here's your actionable guide to advanced Google Ads bidding strategies for 2025, crafted specifically for businesses that want smarter spending, optimal performance, and real results.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <Image 
                  src="/profile.jpg" 
                  alt="Debroop Naha - Google Ads Manager" 
                  width={48} 
                  height={48} 
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">Debroop Naha</p>
                  <p className="text-sm text-muted-foreground">Google Ads Manager & PPC Expert</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            
            {/* Hero Image */}
            <div className="mb-12 relative">
              <Card className="overflow-hidden">
                <Image 
                  src="/blog/images/advanced-google-ads-bidding-strategies-hero.png"
                  alt="Hero graphic for advanced Google Ads bidding strategies in 2025, featuring a browser window, rising arrow, dollar signs, Google icon, and price tag against an abstract background."
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </Card>
            </div>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Why Bidding Strategy is Crucial</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Your bidding strategy directly influences your ad placement, visibility, cost per click (CPC), and overall return on investment (ROI). In short, it determines how effectively Google's powerful AI algorithms work for your business.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Understanding the buyer's journey—<strong>top of funnel (TOFU), middle of funnel (MOFU), and bottom of funnel (BOFU)</strong>—is key:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="p-6 border-primary/20 bg-primary/5">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Top of Funnel (TOFU)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Awareness stage</li>
                      <li>• Low intent</li>
                      <li>• Low-cost clicks</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-warning/20 bg-warning/5">
                    <h3 className="text-xl font-semibold mb-3 text-warning">Middle of Funnel (MOFU)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Interest & consideration</li>
                      <li>• Moderate intent</li>
                      <li>• Nurturing prospects</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-success/20 bg-success/5">
                    <h3 className="text-xl font-semibold mb-3 text-success">Bottom of Funnel (BOFU)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• High intent</li>
                      <li>• Ready to convert</li>
                      <li>• Higher-value clicks</li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* Bidding Strategy Funnel Image */}
              <div className="mb-12 relative">
                <Card className="overflow-hidden">
                  <Image 
                    src="/blog/images/bidding-strategy-funnel-2025.png"
                    alt="Funnel illustration showing recommended Google Ads bidding strategies for TOFU, MOFU, and BOFU stages in 2025."
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </Card>
              </div>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Recommended Google Ads Bidding Strategies for 2025</h2>
                
                <div className="space-y-8">
                  <Card className="p-6 border-l-4 border-l-primary">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">TOFU</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">1. Manual CPC for Branded Keywords</h3>
                        <ul className="space-y-2">
                          <li>• Ideal for maintaining control over branded search terms</li>
                          <li>• Keep CPC low and manage brand visibility affordably</li>
                          <li>• Ensures budget isn't unnecessarily inflated on branded traffic</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-primary">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">TOFU</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">2. Maximize Clicks with CPC Limits</h3>
                        <ul className="space-y-2">
                          <li>• Excellent for driving high traffic volumes when building initial data</li>
                          <li>• Use a maximum CPC bid limit to avoid overspending</li>
                          <li>• Accumulate data to train Google's machine learning algorithms effectively</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-warning">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-semibold">MOFU</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">3. Maximize Conversions</h3>
                        <ul className="space-y-2">
                          <li>• Transition to this once you've gathered initial conversion data</li>
                          <li>• Google automatically adjusts bids to capture the maximum conversions within your budget</li>
                          <li>• Works effectively with moderate conversion volumes (~15-30 conversions every 14 days)</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-success">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold">BOFU</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">4. Target CPA or Target ROAS</h3>
                        <ul className="space-y-2">
                          <li>• Best suited when substantial conversion data is available (30-50 conversions in the last 14 days)</li>
                          <li>• Precise optimization for leads or sales at defined costs or returns</li>
                          <li>• Google's AI fine-tunes bids in real-time based on robust historical data</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Transition Strategy Image Placeholder */}
              <div className="mb-12 relative">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Strategic Transition: Maximize Clicks → Target CPA/ROAS</h3>
                      <p className="text-muted-foreground">Progressive bidding strategy evolution based on data accumulation</p>
                    </div>
                  </div>
                </Card>
              </div>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Strategic Implementation Steps</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Start with TOFU Strategies</h3>
                      <p>Initially focus on affordable clicks using Manual CPC and Maximize Clicks strategies.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-warning/5 to-warning/10 rounded-lg border border-warning/20">
                    <div className="bg-warning text-warning-foreground w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Gather Data</h3>
                      <p>Allow sufficient conversion data (ideally 15-30 conversions) to accumulate to guide Google's AI effectively.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-success/5 to-success/10 rounded-lg border border-success/20">
                    <div className="bg-success text-success-foreground w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Transition to MOFU</h3>
                      <p>Move to Maximize Conversions for more targeted mid-funnel traffic.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg border border-accent/20">
                    <div className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Optimize with BOFU Strategies</h3>
                      <p>Finally, shift to advanced bidding strategies (Target CPA or ROAS) to optimize conversion costs and maximize profitability.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* AI Balancing Act Image Placeholder */}
              <div className="mb-12 relative">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Google Ads AI Balancing Act in 2025</h3>
                      <p className="text-muted-foreground">Manual control vs automated optimization - finding the perfect balance</p>
                    </div>
                  </div>
                </Card>
              </div>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Common Mistakes to Avoid</h2>
                <Card className="p-6 bg-destructive/5 border-destructive/20">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-destructive text-xl">❌</span>
                      <div>
                        <strong>Frequent Strategy Switching:</strong> Allow 1-2 weeks of data collection before evaluating results.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-destructive text-xl">❌</span>
                      <div>
                        <strong>Neglecting Conversion Tracking:</strong> Proper conversion tracking is crucial for Google's AI to work efficiently.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-destructive text-xl">❌</span>
                      <div>
                        <strong>Ignoring Negative Keywords:</strong> Always maintain negative keywords to filter irrelevant traffic and maximize budget effectiveness.
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Final Thoughts</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Advanced bidding strategies in Google Ads aren't about spending more—they're about spending smarter. At <strong>OnlyDeb</strong>, we understand the nuances of balancing manual precision and automated AI bidding.
                </p>
                
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Ready to Master Advanced Bidding Strategies?</h3>
                    <p className="text-muted-foreground mb-6">
                      Get expert Google Ads management with data-driven bidding optimization from a certified specialist.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button href="/services" size="lg" variant="primary">
                        Explore PPC Services
                      </Button>
                      <Button href="/results" size="lg" variant="outline">
                        View Client Results
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-secondary/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm bg-primary px-2 py-1 rounded-full text-primary-foreground">
                    Google Ads
                  </span>
                  <span className="text-sm text-muted-foreground">12 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="/blog/performance-max-campaigns-optimization-guide">
                    Performance Max Campaigns: Complete Optimization Guide
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Master Performance Max campaigns with advanced optimization strategies, asset testing, and budget allocation techniques.
                </p>
                <Button variant="ghost" size="sm" href="/blog/performance-max-campaigns-optimization-guide">
                  Read More →
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm bg-success px-2 py-1 rounded-full text-success-foreground">
                    Google Ads
                  </span>
                  <span className="text-sm text-muted-foreground">10 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="/blog/automated-vs-manual-bidding-2025">
                    Automated vs Manual Bidding in 2025: The Ultimate Guide
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Discover when to use automated vs manual bidding in Google Ads for 2025. A small business guide to blending AI and human control.
                </p>
                <Button variant="ghost" size="sm" href="/blog/automated-vs-manual-bidding-2025">
                  Read More →
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 