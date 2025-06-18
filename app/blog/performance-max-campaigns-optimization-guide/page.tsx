import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { generatePageMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";

export const metadata = generatePageMetadata(
  "Complete Performance Max Campaign Optimization Guide for 2025 | OnlyDeb",
  "Optimize your Google Performance Max campaigns for 2025 with expert strategies tailored for small businesses seeking higher ROI and efficient results.",
  "/blog/performance-max-campaigns-optimization-guide",
  ["Performance Max campaigns", "Google Ads optimization", "PMax campaigns 2025", "Google Ads Manager", "PPC optimization", "Performance Max strategy"]
);

// Structured data for the blog post
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Performance Max Campaigns: Complete Optimization Guide for 2025",
  "description": "Optimize your Google Performance Max campaigns for 2025 with expert strategies tailored for small businesses seeking higher ROI and efficient results.",
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
  "datePublished": "2024-12-17",
  "dateModified": "2024-12-17",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://onlydeb.com/blog/performance-max-campaigns-optimization-guide"
  },
  "image": "https://onlydeb.com/blog/performance-max-optimization-flow.png"
};

// FAQ structured data
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should I avoid using Performance Max campaigns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avoid using Performance Max campaigns when you lack established conversion data or when relying heavily on branded terms, as these scenarios can initially boost performance but lead to unsustainable results."
      }
    },
    {
      "@type": "Question",
      "name": "What is the benefit of using 'Feed Only' in Performance Max campaigns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "'Feed Only' targets product-focused ads specifically, helping to optimize results for eCommerce and product-based campaigns effectively."
      }
    }
  ]
};

export default function PerformanceMaxGuide() {
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
            <span className="text-foreground">Performance Max Optimization Guide</span>
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
              <span className="text-muted-foreground text-sm">12 min read</span>
              <span className="text-muted-foreground text-sm">Dec 17, 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Performance Max Campaigns: Complete Optimization Guide for 2025
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Are you a small business owner frustrated by agencies promising big results but delivering lackluster performance? This comprehensive guide details actionable strategies to master Google's Performance Max (PMax) campaigns effectively in 2025, maximizing your investment and achieving sustainable success.
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
            
            {/* Header Image */}
            <div className="mb-12 relative">
              <Card className="overflow-hidden">
                <Image 
                  src="/blog/images/performance-max-optimization-guide-header.png"
                  alt="Header graphic for 'Performance Max Campaigns: Complete Optimization Guide for 2025' featuring Google ad icons like Gmail, YouTube, and Maps, aimed at small business owners."
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </Card>
            </div>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Why Performance Max Campaigns?</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Performance Max campaigns use Google's advanced AI to serve ads across Search, Display, YouTube, Discover, Gmail, and Maps. This unified approach helps streamline campaign management, increase reach, and optimize spending.
                </p>
              </section>

              {/* Optimization Flow Image */}
              <div className="mb-12 relative">
                <Card className="overflow-hidden">
                  <Image 
                    src="/blog/images/performance-max-optimization-flow.png"
                    alt="Infographic of strategic Performance Max campaign optimization flow for 2025, showing steps like establishing conversion data, using assets and signals, and refining budget and targeting."
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </Card>
              </div>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">When to Use (and Not Use) Performance Max</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="p-6 border-success/20 bg-success/5">
                    <h3 className="text-xl font-semibold mb-4 text-success">✅ Optimal Usage:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-success mt-1">•</span>
                        <span>You have established conversion data (ideally at least 30-50 conversions in the past 14 days).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success mt-1">•</span>
                        <span>You aim to expand reach across multiple Google channels simultaneously.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success mt-1">•</span>
                        <span>You have high-quality creative assets ready to leverage Google's machine learning.</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-destructive/20 bg-destructive/5">
                    <h3 className="text-xl font-semibold mb-4 text-destructive">❌ When Not to Use:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span><strong>No Established Conversion Data:</strong> Using PMax too early, without sufficient conversion history, initially boosts performance, but soon flatlines.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span><strong>Overreliance on Initial ROAS:</strong> Early success (5-7 ROAS initially) might create false optimism without foundational data.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span><strong>Branded Terms:</strong> Exclude branded terms to focus campaigns strictly on acquiring new customers.</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Essential Optimization Strategies</h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">1. Strategic Asset Management (TOFU)</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Provide diverse, high-quality assets (text, images, video).</li>
                      <li>• Regularly refresh underperforming assets based on Google's asset ratings.</li>
                      <li>• Utilize "Feed Only" option for targeted, product-focused performance.</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">2. Precision Audience Signals (MOFU)</h3>
                    
                    {/* Audience Targeting Image */}
                    <div className="mb-6">
                      <Image 
                        src="/blog/images/pmax-audience-targeting.png"
                        alt="Diagram showing effective audience targeting methods for Performance Max campaigns, including Customer Lists, Custom Segments, and Website Visitors linked to a central user silhouette."
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    
                    <ul className="space-y-2 ml-4">
                      <li>• Use detailed first-party data (customer lists, site visitors).</li>
                      <li>• Create custom segments aligned with audience behaviors.</li>
                      <li>• Continually refine audience signals for accuracy.</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">3. Solid Conversion Tracking (BOFU)</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Enable Enhanced Conversions.</li>
                      <li>• Ensure reliable, continuous tracking.</li>
                      <li>• Consider offline conversion tracking for deeper insights.</li>
                    </ul>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Advanced Optimization Techniques</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Budget and Campaign Structure</h3>
                    <ul className="space-y-2">
                      <li>• Consolidate campaigns to focus budget and optimize data collection.</li>
                      <li>• Avoid splitting your budget too thinly across numerous campaigns, as it hampers AI-driven optimization.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Exclude Branded and Low-Value Queries</h3>
                    <ul className="space-y-2">
                      <li>• Ensure branded keywords are fully excluded to genuinely measure acquisition campaigns.</li>
                      <li>• Use Google's support to manage keyword exclusions proactively.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Diagnostic Reviews</h3>
                    <ul className="space-y-2">
                      <li>• Regularly utilize Google's Diagnostics to proactively address any asset, budget, or targeting issues.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Refine Location Targeting</h3>
                    <ul className="space-y-2">
                      <li>• Choose "Presence" rather than "Presence or Interest" to avoid wasting budget outside target locations.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Funnel-Based Optimization</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">TOFU</span>
                    <span>Broad initial reach with substantial assets and budget.</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">MOFU</span>
                    <span>Refined targeting using data-driven audience signals.</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">BOFU</span>
                    <span>Precise targeting and optimization based on high-intent user data.</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Common Pitfalls to Avoid</h2>
                <Card className="p-6 bg-warning/5 border-warning/20">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-destructive text-xl">❌</span>
                      <div>
                        <strong>Early Adoption without Data:</strong> Avoid starting PMax prematurely, as insufficient conversion data compromises long-term success.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-destructive text-xl">❌</span>
                      <div>
                        <strong>Branded Terms Inclusion:</strong> Clearly exclude branded searches to accurately measure and optimize true acquisition performance.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-destructive text-xl">❌</span>
                      <div>
                        <strong>Ignoring Asset Management:</strong> Frequently update assets to prevent stagnation.
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Final Thoughts</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Optimizing Performance Max campaigns in 2025 requires strategic execution, precise targeting, and comprehensive tracking. At <strong>OnlyDeb</strong>, we understand the critical balance between early results and long-term sustainability.
                </p>
                
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Ready to Optimize Your Performance Max Campaigns?</h3>
                    <p className="text-muted-foreground mb-6">
                      Get expert Google Ads management and Performance Max optimization from a certified specialist.
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
                  <span className="text-sm text-muted-foreground">8 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Advanced Google Ads Bidding Strategies for 2025
                </h3>
                <p className="text-muted-foreground mb-4">
                  Discover the latest automated bidding strategies and optimization techniques that drive higher ROI for Google Ads campaigns.
                </p>
                <Button variant="ghost" size="sm">
                  Read More →
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm bg-success px-2 py-1 rounded-full text-success-foreground">
                    PPC Strategy
                  </span>
                  <span className="text-sm text-muted-foreground">10 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  PPC Budget Optimization: Maximize ROI Across Platforms
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn data-driven budget allocation strategies across Google Ads, Microsoft Ads, and Meta to maximize your advertising ROI.
                </p>
                <Button variant="ghost" size="sm">
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