import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MetricCard } from "@/components/ui/MetricCard";
import { SimpleChart } from "@/components/ui/SimpleChart";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(
  "Google Ads Manager Results That Outperform PPC Agencies | USA & Europe Case Studies",
  "Google Ads Manager case studies: 400% ROAS, 9.78 ROAS jewelry eCom, $2M+ revenue generation. PPC Agency alternative with proven results across USA & Europe markets.",
  "/results",
  ["Google Ads Manager case studies", "PPC Agency results", "Google Ads Manager success stories", "PPC management results USA", "Google Ads Agency alternative", "PPC specialist case studies Europe"]
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
    number: 8, 
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

// New breakthrough case studies - Enhanced for SEO and mobile
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
    color: '#3b82f6',
    highlight: "4.26 ROAS",
    seoKeywords: "Shopify PPC, luggage ecommerce, Google Ads optimization"
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
    color: '#8b5cf6',
    highlight: "9.78 ROAS",
    seoKeywords: "jewelry ecommerce PPC, lockdown advertising, native ads"
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
    color: '#ef4444',
    highlight: "400% ROAS",
    seoKeywords: "archery gear PPC, sports equipment advertising, Google Shopping"
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
    color: '#06b6d4',
    highlight: "500+ Leads/Day",
    seoKeywords: "local lead generation, garage door leads, local PPC"
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
    color: '#ec4899',
    highlight: "400% ROAS",
    seoKeywords: "visa services PPC, travel industry advertising, Dubai marketing"
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
    color: '#10b981',
    highlight: "5x Growth",
    seoKeywords: "subscription platform PPC, audio entertainment advertising, Apple Search Ads"
  }
];

// Original case studies from your existing page - Enhanced for SEO
const caseStudies = [
  {
    title: "Black Voyage",
    industry: "Shopify Luggage eCommerce",
    platform: "Google Ads & Merchant Center",
    challenge: "Take over from prior agency and scale ROAS + purchases while establishing clean campaign structure for Shopify luggage brand",
    strategy: "Rebuilt PMax + Shopping + branded exclusions, Merchant feed + tracking overhaul, Funnel-based search + display campaigns",
    timeframe: "May 2025 - Present",
    results: {
      roas: { before: "1.69", after: "4.26", improvement: "152% ROAS increase" },
      purchases: { before: "13", after: "69", improvement: "431% purchase growth" },
      revenue: { before: "$3.2K", after: "$20.6K", improvement: "544% revenue increase" },
      monthly: { before: "April", after: "May", improvement: "First month transformation" }
    },
    testimonial: {
      text: "The transformation was immediate and dramatic. Within weeks of taking over our campaigns, we saw our ROAS more than double and our purchase volume explode. The clean campaign structure and proper tracking setup made all the difference in our Shopify store performance.",
      author: "Black Voyage Team",
      title: "Shopify Luggage Brand"
    },
    chartData: [
      { label: 'Week 1', value: 1.69 },
      { label: 'Week 2', value: 2.34 },
      { label: 'Week 3', value: 3.12 },
      { label: 'Week 4', value: 4.26 }
    ],
    color: '#3b82f6',
    seoKeywords: "Shopify PPC optimization, luggage ecommerce Google Ads, merchant center setup"
  },
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
    color: '#10b981',
    seoKeywords: "subscription platform case study, Bloomstories PPC management, audio entertainment advertising"
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
    color: '#f59e0b',
    seoKeywords: "Dagamma ecommerce case study, Baby Doppler PPC, global campaign scaling"
  },
  {
    title: "Mandarin Duck",
    industry: "Archery Gear eCommerce",
    platform: "Google Ads",
    challenge: "Target niche audiences for archery equipment while maintaining 400%+ ROAS consistently in a specialized market with high CPC competition",
    strategy: "Advanced Merchant Center feed optimization for product clarity, bid adjustments based on audience intent + seasonality, continuous audience refinement to reduce wasted spend",
    timeframe: "Dec 2019 - Jan 2022",
    results: {
      roas: { before: "200%", after: "400%+", improvement: "100%+ ROAS improvement" },
      cpa: { before: "$15", after: "<$8", improvement: "47% CPA reduction" },
      consistency: { before: "Variable", after: "Stable", improvement: "Consistent quarterly performance" },
      specialization: { before: "General", after: "Niche-focused", improvement: "Specialized market domination" }
    },
    testimonial: {
      text: "Working in the archery niche requires deep understanding of our specialized audience. The campaign optimization and feed management delivered consistent 400% ROAS across multiple quarters, which is exceptional in our competitive vertical.",
      author: "Mandarin Duck",
      title: "Archery Equipment Retailer"
    },
    chartData: [
      { label: 'Q1 2020', value: 200 },
      { label: 'Q2 2020', value: 320 },
      { label: 'Q3 2020', value: 400 },
      { label: 'Q4 2020', value: 410 },
      { label: 'Q1 2021', value: 400 },
      { label: 'Q2 2021', value: 420 }
    ],
    color: '#ef4444',
    seoKeywords: "archery gear PPC, sports equipment Google Ads, niche ecommerce advertising"
  },
  {
    title: "Garage Doors LA",
    industry: "Local Lead Generation",
    platform: "Google Ads",
    challenge: "Drive high-quality local leads in a competitive service market while keeping lead costs profitable for garage door services",
    strategy: "Built dedicated lead-gen PPC funnels, geo-targeted bidding + ad extensions for location trust, media planning to align with peak demand times",
    timeframe: "Mar 2019 - Feb 2021",
    results: {
      leads: { before: "100+/day", after: "500+/day", improvement: "400% daily lead increase" },
      cpa: { before: "$25", after: "$10", improvement: "60% cost reduction" },
      quality: { before: "Mixed", after: "High-intent", improvement: "Improved lead quality" },
      market: { before: "Regional", after: "Dominant", improvement: "Local market domination" }
    },
    testimonial: {
      text: "The lead generation campaigns transformed our business. Going from 100 to 500+ daily leads while cutting costs in half gave us the scale we needed to dominate the LA garage door market. The geo-targeting and timing optimization were game-changers.",
      author: "Garage Doors LA",
      title: "Local Service Provider"
    },
    chartData: [
      { label: 'Week 1', value: 125 },
      { label: 'Week 4', value: 200 },
      { label: 'Week 8', value: 350 },
      { label: 'Week 12', value: 450 },
      { label: 'Week 16', value: 500 }
    ],
    color: '#06b6d4',
    seoKeywords: "local lead generation, garage door PPC, service business Google Ads"
  },
  {
    title: "Dubai Visa",
    industry: "Hybrid eCommerce + Lead Generation",
    platform: "Google Ads",
    challenge: "Manage both lead gen and eCommerce conversions with 400% ROAS target in tourism sector during travel restrictions",
    strategy: "Dual campaign model (eCom + lead gen split), media plans optimized for seasonal spikes, continuous ROI tracking + budget allocation",
    timeframe: "Sep 2018 - Jul 2019",
    results: {
      roas: { before: "200%", after: "400%", improvement: "100% ROAS improvement" },
      leads: { before: "100/week", after: "300+/week", improvement: "200% weekly lead growth" },
      model: { before: "Single-focus", after: "Hybrid", improvement: "Dual conversion optimization" },
      seasonal: { before: "Reactive", after: "Predictive", improvement: "Seasonal spike optimization" }
    },
    testimonial: {
      text: "Managing both our visa services and travel packages required a sophisticated dual approach. The hybrid campaign model delivered consistent 400% ROAS while tripling our weekly leads, even during challenging travel conditions.",
      author: "Dubai Visa Services",
      title: "Travel & Tourism Provider"
    },
    chartData: [
      { label: 'Launch', value: 200 },
      { label: 'Month 2', value: 290 },
      { label: 'Month 4', value: 370 },
      { label: 'Month 6', value: 400 }
    ],
    color: '#ec4899',
    seoKeywords: "travel industry PPC, visa services advertising, tourism Google Ads"
  },
  {
    title: "Growthpep",
    industry: "Jewelry eCommerce",
    platform: "Google Ads + Native",
    challenge: "Deliver high ROAS during national lockdown for jewelry eCommerce when consumer behavior shifted dramatically",
    strategy: "Hybrid search + native advertising strategy, data-first bid + creative refinement, seasonality-aligned scaling during lockdown",
    timeframe: "Mar 2020 - Aug 2020",
    results: {
      roas: { before: "3x", after: "9.78", improvement: "226% ROAS increase" },
      cpa: { before: "$30", after: "$12", improvement: "60% cost reduction" },
      timing: { before: "Pre-lockdown", after: "Peak lockdown", improvement: "Lockdown optimization" },
      platform: { before: "Google only", after: "Hybrid", improvement: "Multi-platform success" }
    },
    testimonial: {
      text: "During the most challenging period for retail, the hybrid Google + Native strategy delivered our best performance ever. Achieving 9.78 ROAS during lockdown when most competitors struggled was remarkable and kept our jewelry business thriving.",
      author: "Growthpep Team",
      title: "Jewelry eCommerce Brand"
    },
    chartData: [
      { label: 'Pre-lockdown', value: 300 },
      { label: 'Early lockdown', value: 580 },
      { label: 'Peak lockdown', value: 978 },
      { label: 'Post-lockdown', value: 640 }
    ],
    color: '#8b5cf6',
    seoKeywords: "jewelry ecommerce PPC, lockdown advertising strategy, native ads integration"
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
    color: '#3b82f6',
    seoKeywords: "freelance PPC portfolio, multi-industry advertising, automotive travel ecommerce PPC"
  }
];

export default function ResultsPage() {
  return (
    <>
      {/* Enhanced Hero Section - Fixed background consistency */}
      <div className="relative bg-gradient-to-br from-background via-background to-background py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
        
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 animate-pulse-soft">
              🚀 Google Ads Manager Results
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-6">
              Google Ads Manager Results That Outperform{' '}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                PPC Agencies
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed px-4 sm:px-0">
              Proven Google Ads Manager expertise across USA & Europe markets. Data-driven PPC campaigns with full attention on each brand. Results that outperform traditional PPC agencies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0">
              <Button href="/work-with-me/" size="lg" variant="gradient" className="w-full sm:w-auto">
                Get Your Google Ads Manager Blueprint
              </Button>
              <Button href="#individual-success" size="lg" variant="outline" className="w-full sm:w-auto">
                View Google Ads Manager Success Stories
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Animated Metrics Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Google Ads Manager Performance Metrics vs PPC Agencies
            </h2>
            <p className="text-muted-foreground">
              Measurable results from dedicated Google Ads Manager expertise across USA & Europe markets, outperforming traditional PPC agencies
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
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
                className="animate-fade-in-up text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Individual Brand Success Stories Section - MOVED ABOVE CASE STUDIES */}
      <section id="individual-success" className="py-12 md:py-16 lg:py-24 bg-secondary/30">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              🧩 Google Ads Manager Success Stories Across Industries
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
              Latest Google Ads Manager campaigns showcasing breakthrough PPC results across diverse industries and business models in USA & Europe markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {breakthroughCases.map((study, index) => (
              <Card key={index} variant="service" className="group hover:scale-105 transition-all duration-300 bg-card border-border/50 h-full relative overflow-hidden shadow-sm">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br opacity-5" 
                    style={{ 
                      background: `linear-gradient(135deg, ${study.color}20 0%, ${study.color}05 50%, transparent 100%)` 
                    }}
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col h-full relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">{study.title}</h3>
                    <div className="bg-primary/10 text-primary px-2 md:px-3 py-1 rounded-full text-xs font-semibold self-start sm:self-center">
                      {study.highlight}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{study.subtitle}</p>
                  
                  <div className="bg-muted/20 p-3 md:p-4 rounded-lg mb-4 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">📈 Results:</h4>
                    <p className="text-primary font-medium text-sm leading-relaxed">{study.results}</p>
                  </div>

                  <div className="mb-4 md:mb-6 flex-grow">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">🎯 Actions Taken:</h4>
                    <ul className="space-y-2">
                      {study.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5 text-xs flex-shrink-0">•</span>
                          <span className="text-xs text-muted-foreground leading-relaxed">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-4 md:p-5 rounded-lg mt-auto border border-border/50">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="font-semibold text-foreground text-sm">📈 Performance Trend</h5>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: study.color }}></div>
                    </div>
                    <SimpleChart
                      data={study.chartData}
                      type="line"
                      height={140}
                      color={study.color}
                      variant="detailed"
                      showGrid={true}
                      animated={true}
                      className="bg-card/80 rounded-lg p-2 border border-border/30"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* SEO-friendly link to detailed case studies */}
          <div className="text-center mt-12 md:mt-16">
            <Button href="#case-studies" variant="outline" size="lg" className="mx-auto">
              View Detailed Case Studies
            </Button>
          </div>
        </Container>
      </section>

      {/* Original Case Studies Section - Enhanced */}
      <section id="case-studies" className="py-16 md:py-24 bg-secondary/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Detailed Google Ads Manager Case Studies
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Deep dives into how strategic Google Ads Manager expertise and PPC optimization drives real business growth across USA & Europe markets.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 lg:p-12 bg-card border-border/50 shadow-sm">
                <div className="space-y-8">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="lg:w-1/2">
                      <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
                        Case Study
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground mb-2 text-lg">{study.industry}</p>
                      <p className="text-sm text-muted-foreground mb-6">Platform: {study.platform}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Strategy</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{study.strategy}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Timeframe</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{study.timeframe}</p>
                        </div>
                      </div>
                    </div>

                    {/* Professional Performance Chart */}
                    <div className="lg:w-1/2">
                      <div className="bg-muted/20 p-4 md:p-6 rounded-lg border border-border/30">
                        <div className="flex items-center justify-between mb-4">
                          <h5 className="font-semibold text-foreground text-base">📈 Performance Trend</h5>
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: study.color }}></div>
                        </div>
                        <SimpleChart
                          data={study.chartData}
                          type="line"
                          height={200}
                          color={study.color}
                          variant="detailed"
                          showGrid={true}
                          animated={true}
                          className="bg-card/80 rounded-lg p-3 border border-border/30"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Results Metrics */}
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-6">Key Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {Object.entries(study.results).map(([key, result]) => (
                        <div key={key} className="bg-muted/20 p-4 rounded-lg border border-border/30">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
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
                            <span className="text-lg font-bold text-foreground">{result.before}</span>
                            <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-lg font-bold text-success">{result.after}</span>
                          </div>
                          <p className="text-sm text-success font-semibold">{result.improvement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-muted/20 p-4 md:p-6 rounded-lg border border-border/30">
                      <div className="flex items-start gap-3 md:gap-4">
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                        </svg>
                        <div>
                          <p className="text-muted-foreground italic mb-4 leading-relaxed text-sm md:text-base">"{study.testimonial.text}"</p>
                          <div>
                            <p className="font-semibold text-foreground text-sm md:text-base">{study.testimonial.author}</p>
                            <p className="text-xs md:text-sm text-muted-foreground">{study.testimonial.title}</p>
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

      {/* Industries Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-secondary/30">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Google Ads Manager Results Across Industries (USA & Europe)
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
              8+ years as a Google Ads Manager delivering superior results vs PPC agencies across e-commerce, BFSI, automotive, and technology. Direct Google Ads Agency alternative serving USA & Europe markets with industry-specific optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: "E-commerce & Subscription", 
                description: "Google Ads Manager expertise from Bloomstories to Dagamma - scaled subscription and e-commerce models beyond typical PPC agency results",
                examples: ["Subscription Platforms", "E-commerce Solutions", "Product Marketplaces", "Direct-to-Consumer Brands"]
              },
              { 
                title: "Technology & Apps", 
                description: "Google Ads Manager for app acquisition campaigns and tech platform scaling - outperforming traditional PPC agencies",
                examples: ["Educational Apps", "Mobile Applications", "SaaS Platforms", "Tech Startups"]
              },
              { 
                title: "BFSI (Banking & Finance)", 
                description: "Specialized Google Ads Manager services for financial services and insurance - PPC agency alternative for complex compliance",
                examples: ["Financial Services", "Insurance Products", "Investment Platforms", "Fintech Solutions"]
              },
              { 
                title: "Automotive", 
                description: "Google Ads Manager for automotive industry campaign optimization and lead generation across USA & Europe markets",
                examples: ["Car Dealerships", "Auto Services", "Vehicle Parts", "Automotive Technology"]
              },
              { 
                title: "Travel & Tourism", 
                description: "Google Ads Manager expertise in tourism and travel industry - superior to generic PPC agency approaches",
                examples: ["Dubai Visa Services", "Travel Agencies", "Tourism Operators", "Hospitality Services"]
              },
              { 
                title: "Local Services", 
                description: "High-converting Google Ads Manager campaigns for local service providers - PPC agency alternative with direct attention",
                examples: ["Garage Door Services", "Home Services", "Local Contractors", "Service Professionals"]
              }
            ].map((industry, index) => (
              <Card key={index} className="p-4 md:p-6 bg-background border-border">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                  {industry.description}
                </p>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-muted-foreground mb-2">Examples:</p>
                  <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
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
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-r from-primary to-primary-hover text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              ⚡ Ready to Skip the PPC Agency Overhead?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90 leading-relaxed">
              Get direct Google Ads Manager expertise without PPC agency bloat. Free Google Ads Agency consultation to show you how dedicated Google Ads management transforms campaigns across USA & Europe markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button 
                href="/work-with-me/" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              >
                Get Your Free Google Ads Manager Blueprint
              </Button>
              <Button 
                href="/contact/" 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Schedule Google Ads Strategy Call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 