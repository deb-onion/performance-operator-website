import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MetricCard } from "@/components/ui/MetricCard";
import { SimpleChart } from "@/components/ui/SimpleChart";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(
  "Results That Outperform Agencies | Solo PPC Specialist Success Stories",
  "Solo PPC operator case studies: Shopify Ads, Google Ads, 400% ROAS, 9.78 ROAS jewelry eCom, subscription signup growth — OnlyDeb.com",
  "/results"
);

// Enhanced metrics with animations
const metrics = [
  { 
    number: 400, 
    label: "Peak ROAS Achieved", 
    description: "Consistently across multiple brands",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    trend: 'up' as const,
    suffix: '%'
  },
  { 
    number: 5, 
    label: "Sign-up Growth", 
    description: "At Bloomstories with $100K+ budget",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    trend: 'up' as const,
    suffix: 'x'
  },
  { 
    number: 2, 
    label: "Revenue Generated", 
    description: "During seasonal peaks at Dagamma",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    trend: 'up' as const,
    prefix: '$',
    suffix: 'M+'
  },
  { 
    number: 7, 
    label: "Years Experience", 
    description: "From Google to leading brands",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    trend: 'up' as const,
    suffix: '+'
  },
];

// Original case studies from your existing page - Enhanced
const caseStudies = [
  {
    title: "Bloomstories",
    industry: "Subscription Platform",
    platform: "Google Ads, Facebook, Spotify, Apple Search Ads",
    challenge: "Scaling subscription sign-ups while maintaining profitable ROAS with $100K+ monthly ad budget",
    strategy: "A/B testing of ad creatives and landing pages, advanced bidding strategies, cross-platform optimization",
    timeframe: "1.5 years (Feb 2023 - Jul 2024)",
    results: {
      signups: { before: "1x", after: "5x", improvement: "5x monthly growth" },
      roas: { before: "150%", after: "350%", improvement: "133% increase" },
      engagement: { before: "Standard", after: "+20%", improvement: "20% user engagement boost" },
      budget: { before: "$50K", after: "$100K+", improvement: "Scaled budget 2x+" }
    },
    testimonial: {
      text: "Debroop excelled at refining keyword strategies, optimizing ad copy for higher engagement, and leveraging advanced analytics to uncover valuable opportunities. Their analytical prowess enabled them to convert complex data into actionable insights effectively.",
      author: "Michael Albertshauser",
      title: "COO, Bloom Stories"
    },
    chartData: [
      { label: 'Month 1', value: 150 },
      { label: 'Month 6', value: 220 },
      { label: 'Month 12', value: 280 },
      { label: 'Month 18', value: 350 }
    ],
    color: '#10b981'
  },
  {
    title: "Dagamma Ecommerce",
    industry: "E-commerce Solutions",
    platform: "Google Ads & Facebook",
    challenge: "Scaling global campaigns to $300K+ monthly budgets while maintaining CPA below $8",
    strategy: "Shopping campaign optimization, automated bidding, merchant center optimization, advanced remarketing",
    timeframe: "1.5 years (Jan 2022 - Aug 2023)",
    results: {
      roas: { before: "200%", after: "400%", improvement: "100% improvement" },
      revenue: { before: "$500K", after: "$2M", improvement: "$2M+ seasonal revenue" },
      cpa: { before: "$12+", after: "$8", improvement: "33% CPA reduction" },
      budget: { before: "$150K", after: "$300K+", improvement: "2x budget scale" }
    },
    testimonial: {
      text: "I am pleased to write this letter of recommendation for Debroop Naha, who served as PPC Manager at Baby Doppler for 1 year and 10 months. During his time with us, Deb consistently demonstrated a high level of expertise in pay-per-click advertising and delivered exceptional results.",
      author: "Mitho Kuna",
      title: "President & CEO, Baby Doppler (Dagamma)"
    },
    chartData: [
      { label: 'Q1', value: 200 },
      { label: 'Q2', value: 280 },
      { label: 'Q3', value: 350 },
      { label: 'Q4', value: 400 }
    ],
    color: '#f59e0b'
  },
  {
    title: "Freelance Portfolio",
    industry: "Multi-Industry",
    platform: "Google Ads, Facebook Ads",
    challenge: "Managing diverse client portfolios across automotive, travel, and e-commerce with annual budgets of $200K+",
    strategy: "Industry-specific campaign strategies, advanced audience targeting, conversion optimization",
    timeframe: "3+ years (Sep 2018 - Dec 2021)",
    results: {
      leads: { before: "100/day", after: "500+/day", improvement: "500+ daily leads (Garage Doors LA)" },
      signups: { before: "200/week", after: "1000+/week", improvement: "1000+ weekly signups (educational apps)" },
      roas: { before: "200%", after: "400%", improvement: "Consistent 400% ROAS (Mandarin Duck)" },
      clients: { before: "5", after: "15+", improvement: "Managed 15+ clients annually" }
    },
    testimonial: {
      text: "Debroop Naha deeply understands digital advertising platforms, including Google Ads, Facebook Ads Manager, and other relevant tools. He excelled at analyzing campaign performance, optimizing for improved ROI, and implementing strategies that achieved measurable outcomes.",
      author: "Various Clients",
      title: "Freelance Client Portfolio"
    },
    chartData: [
      { label: 'Year 1', value: 200 },
      { label: 'Year 2', value: 320 },
      { label: 'Year 3', value: 400 }
    ],
    color: '#3b82f6'
  }
];

// New breakthrough case studies
const breakthroughCases = [
  {
    title: "🧳 Black Voyage",
    subtitle: "Shopify Luggage eCom (2025-Present)",
    results: "ROAS grew from 1.69 → 4.26 in under a month | Purchases doubled MoM",
    actions: [
      "Rebuilt Google Ads + PMax + branded exclusions",
      "Merchant Center + tracking cleanup", 
      "Launched full-funnel campaigns"
    ],
    chartData: [
      { label: 'Week 1', value: 1.69 },
      { label: 'Week 2', value: 2.34 },
      { label: 'Week 3', value: 3.12 },
      { label: 'Week 4', value: 4.26 }
    ],
    color: '#3b82f6'
  },
  {
    title: "💎 Growthpep",
    subtitle: "Jewelry eCommerce (Lockdown Period)",
    results: "9.78 ROAS during national lockdown | Record performance achieved",
    actions: [
      "Hybrid Google + Native Ads strategy",
      "Data-first bid + copy refinement"
    ],
    chartData: [
      { label: 'Pre-lockdown', value: 3.2 },
      { label: 'Early lockdown', value: 5.8 },
      { label: 'Peak lockdown', value: 9.78 },
      { label: 'Post-lockdown', value: 6.4 }
    ],
    color: '#8b5cf6'
  },
  {
    title: "🎯 Mandarin Duck",
    subtitle: "Archery Gear eCommerce (2019-2020)",
    results: "400% ROAS | Consistent quarterly performance",
    actions: [
      "Feed + bid optimization",
      "Audience refinement"
    ],
    chartData: [
      { label: 'Q1', value: 2.1 },
      { label: 'Q2', value: 3.2 },
      { label: 'Q3', value: 4.0 },
      { label: 'Q4', value: 4.1 }
    ],
    color: '#ef4444'
  },
  {
    title: "🚪 Garage Doors LA",
    subtitle: "Local Lead-Gen (2018-2019)",
    results: "500+ daily leads | Local market domination",
    actions: [
      "Lead funnel PPC",
      "Media + bid planning"
    ],
    chartData: [
      { label: 'Week 1', value: 125 },
      { label: 'Week 2', value: 285 },
      { label: 'Week 3', value: 420 },
      { label: 'Week 4', value: 510 }
    ],
    color: '#06b6d4'
  },
  {
    title: "✈️ Dubai Visa",
    subtitle: "Hybrid eCom + Lead Model (2020-2021)",
    results: "400% ROAS | Multi-model campaign success",
    actions: [
      "Multi-model campaign execution",
      "Media plans, ROI tracking"
    ],
    chartData: [
      { label: 'Launch', value: 1.8 },
      { label: 'Month 2', value: 2.9 },
      { label: 'Month 4', value: 3.7 },
      { label: 'Month 6', value: 4.0 }
    ],
    color: '#ec4899'
  },
  {
    title: "🌱 Bloomstories",
    subtitle: "Subscription Audio Entertainment (Extended)",
    results: "350% ROAS | 5x monthly signups",
    actions: [
      "Keyword + ad copy refinement (NSFW-safe)",
      "A/B creative + landing page testing",
      "Analytics → continuous insight cycles"
    ],
    chartData: [
      { label: 'Month 1', value: 120 },
      { label: 'Month 6', value: 280 },
      { label: 'Month 12', value: 450 },
      { label: 'Month 18', value: 600 }
    ],
    color: '#10b981'
  }
];

export default function ResultsPage() {
  return (
    <>
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-background via-secondary to-accent py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse-soft">
              🚀 Solo PPC Specialist Results
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Results That Outperform{' '}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                Agencies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Data-driven campaigns. Full attention on each brand. Outcomes that speak louder than promises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/work-with-me/" size="lg" variant="gradient">
                Get Your Free PPC Blueprint
              </Button>
              <Button href="#case-studies" size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Animated Metrics Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                number={metric.number}
                label={metric.label}
                description={metric.description}
                icon={metric.icon}
                trend={metric.trend}
                prefix={metric.prefix}
                suffix={metric.suffix}
                isAnimated={true}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Original Case Studies - Enhanced */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C]">
              Case Studies
            </h2>
            <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
              Deep dives into how strategic performance marketing drives real business growth.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Overview */}
                  <div className="lg:col-span-1">
                    <div className="inline-block bg-[#EBF6FF] text-[#2D9CDB] text-sm font-semibold px-3 py-1 rounded-full mb-4">
                      Case Study
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F2E4C] mb-2">
                      {study.title}
                    </h3>
                    <p className="text-[#4F4F4F] mb-4">{study.industry}</p>
                    <p className="text-sm text-[#828282] mb-6">Platform: {study.platform}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#1A1A1A] mb-2">Challenge</h4>
                        <p className="text-[#4F4F4F] text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1A1A1A] mb-2">Strategy</h4>
                        <p className="text-[#4F4F4F] text-sm">{study.strategy}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1A1A1A] mb-2">Timeframe</h4>
                        <p className="text-[#4F4F4F] text-sm">{study.timeframe}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-semibold text-[#1A1A1A]">Results</h4>
                      <SimpleChart
                        data={study.chartData}
                        type="line"
                        height={120}
                        color={study.color}
                        className="w-32"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {Object.entries(study.results).map(([key, result]) => (
                        <div key={key} className="bg-white p-4 rounded-lg border border-[#E5E5E5]">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-[#4F4F4F] uppercase tracking-wide">
                              {key === 'cpa' ? 'Cost Per Acquisition' :
                               key === 'roas' ? 'Return on Ad Spend' :
                               key === 'cpl' ? 'Cost Per Lead' :
                               key === 'ltv' ? 'Lifetime Value' :
                               key === 'aov' ? 'Average Order Value' :
                               key === 'spend' ? 'Monthly Ad Spend' :
                               key === 'leads' ? 'Monthly Leads' :
                               key === 'revenue' ? 'Monthly Revenue' :
                               key === 'conversion' ? 'Conversion Rate' :
                               key === 'customers' ? 'New Customers' : 
                               key === 'signups' ? 'Sign-ups' :
                               key === 'engagement' ? 'Engagement' :
                               key === 'budget' ? 'Budget' :
                               key === 'clients' ? 'Clients' : key}
                            </span>
                          </div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-lg font-bold text-[#1A1A1A]">{result.before}</span>
                            <svg className="w-4 h-4 text-[#828282]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-lg font-bold text-[#27AE60]">{result.after}</span>
                          </div>
                          <p className="text-sm text-[#27AE60] font-semibold">{result.improvement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-[#F9FAFB] p-6 rounded-lg">
                      <div className="flex items-start">
                        <svg className="w-8 h-8 text-[#2D9CDB] mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                        </svg>
                        <div>
                          <p className="text-[#4F4F4F] italic mb-4">"{study.testimonial.text}"</p>
                          <div>
                            <p className="font-semibold text-[#1A1A1A]">{study.testimonial.author}</p>
                            <p className="text-sm text-[#828282]">{study.testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Breakthrough Cases Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              🧩 Individual Brand Success Stories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Latest campaigns showcasing breakthrough results across diverse industries and business models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {breakthroughCases.map((study, index) => (
              <Card key={index} variant="service" className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{study.subtitle}</p>
                  
                  <div className="p-3 bg-accent/50 rounded-lg mb-4">
                    <h4 className="font-semibold text-foreground mb-2">📈 Results:</h4>
                    <p className="text-primary font-medium text-sm">{study.results}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">🎯 Actions Taken:</h4>
                    <ul className="space-y-1">
                      {study.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5 text-xs">•</span>
                          <span className="text-xs text-muted-foreground">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="font-medium text-foreground mb-2 text-sm">Performance Trend:</h5>
                  <SimpleChart
                    data={study.chartData}
                    type="line"
                    height={140}
                    color={study.color}
                  />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Industries I've Proven Results In
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              7+ years managing campaigns across e-commerce, BFSI, automotive, technology, and more. Each industry optimized for maximum performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "E-commerce & Subscription", 
                description: "From Bloomstories to Dagamma - scaled subscription and e-commerce models",
                examples: ["Subscription Platforms", "E-commerce Solutions", "Product Marketplaces", "Direct-to-Consumer Brands"]
              },
              { 
                title: "Technology & Apps", 
                description: "App acquisition campaigns and tech platform scaling",
                examples: ["Educational Apps", "Mobile Applications", "SaaS Platforms", "Tech Startups"]
              },
              { 
                title: "BFSI (Banking & Finance)", 
                description: "Financial services and insurance campaign management",
                examples: ["Financial Services", "Insurance Products", "Investment Platforms", "Fintech Solutions"]
              },
              { 
                title: "Automotive", 
                description: "Automotive industry campaign optimization and lead generation",
                examples: ["Car Dealerships", "Auto Services", "Vehicle Parts", "Automotive Technology"]
              },
              { 
                title: "Travel & Tourism", 
                description: "Tourism and travel industry campaign management",
                examples: ["Dubai Visa Services", "Travel Agencies", "Tourism Operators", "Hospitality Services"]
              },
              { 
                title: "Local Services", 
                description: "High-converting local service provider campaigns",
                examples: ["Garage Door Services", "Home Services", "Local Contractors", "Service Professionals"]
              }
            ].map((industry, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {industry.description}
                </p>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Examples:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {industry.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex}>• {example}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-hover text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ⚡ Tired of Agency Bloat?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Let's craft your brand's next success story. Get a free PPC growth blueprint and see how direct, 
              strategic execution can transform your campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/work-with-me/" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Your Free PPC Blueprint
              </Button>
              <Button 
                href="/contact/" 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Schedule Strategy Call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 