import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Results & Case Studies | OnlyDeb",
  description: "Real results from Bloomstories, Dagamma, and more. 400% ROAS, 5x growth, $2M+ revenue. See proven PPC management results.",
};

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
    }
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
    }
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
    }
  }
];

const metrics = [
  { number: "400%", label: "Peak ROAS Achieved", description: "Consistently across multiple brands" },
  { number: "5x", label: "Sign-up Growth", description: "At Bloomstories with $100K+ budget" },
  { number: "$2M+", label: "Revenue Generated", description: "During seasonal peaks at Dagamma" },
  { number: "7+", label: "Years Experience", description: "From Google to leading brands" },
];

export default function ResultsPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#F9FAFB] to-white py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F2E4C] leading-tight">
              Proven Results from Real Brands
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#4F4F4F]">
              From Google to Bloomstories to Dagamma - see the actual results I've delivered across 7+ years of PPC management.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#2D9CDB] mb-2">
                  {metric.number}
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-[#4F4F4F]">
                  {metric.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

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
                    <h4 className="text-xl font-semibold text-[#1A1A1A] mb-6">Results</h4>
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
                               key === 'customers' ? 'New Customers' : key}
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

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-[#0F2E4C] mb-4">
              Want results like these for your brand?
            </h3>
            <p className="text-[#4F4F4F] mb-8 max-w-2xl mx-auto">
              Every business is different, but the approach is the same: strategic thinking, direct execution, and continuous optimization.
            </p>
            <Button href="/work-with-me/" size="lg">
              Book Your Strategy Call
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C]">
              Industries I've Proven Results In
            </h2>
            <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
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
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                  {industry.title}
                </h3>
                <p className="text-[#4F4F4F] mb-4">
                  {industry.description}
                </p>
                <div>
                  <p className="text-sm font-semibold text-[#828282] mb-2">Examples:</p>
                  <ul className="text-sm text-[#4F4F4F] space-y-1">
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

      <section className="py-16 md:py-24 bg-[#0F2E4C] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Want results like these for your brand?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Let's discuss how I can bring the same expertise that scaled Bloomstories and Dagamma to your campaigns.
            </p>
            <div className="mt-10">
              <Button href="/work-with-me/" size="lg" className="bg-white text-[#0F2E4C] hover:bg-gray-100">
                Book Your Strategy Call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 