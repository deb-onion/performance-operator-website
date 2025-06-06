import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Results & Case Studies | Performance Marketing Operator",
  description: "Real brands, real results. See how direct operator expertise drives measurable growth without agency bloat.",
};

const caseStudies = [
  {
    title: "DTC Beauty Brand",
    industry: "Beauty & Cosmetics",
    platform: "Meta Ads",
    challenge: "High CPAs and difficulty scaling beyond $15K monthly ad spend",
    strategy: "Audience optimization, creative testing framework, and funnel improvements",
    timeframe: "3 months",
    results: {
      cpa: { before: "$2.41", after: "$0.87", improvement: "64% reduction" },
      roas: { before: "2.1x", after: "4.8x", improvement: "129% increase" },
      spend: { before: "$15K", after: "$45K", improvement: "200% scale" },
      revenue: { before: "$31.5K", after: "$216K", improvement: "585% growth" }
    },
    testimonial: {
      text: "Working directly with an operator instead of an agency was game-changing. No more waiting weeks for simple changes, and our results speak for themselves.",
      author: "Sarah Chen",
      title: "Founder, Glow Beauty Co."
    }
  },
  {
    title: "SaaS Startup",
    industry: "B2B Software",
    platform: "Google Ads",
    challenge: "Low lead volume and high cost per acquisition for B2B leads",
    strategy: "Keyword expansion, landing page optimization, and lead quality improvement",
    timeframe: "4 months",
    results: {
      leads: { before: "28", after: "142", improvement: "407% increase" },
      cpl: { before: "$89", after: "$61", improvement: "31% reduction" },
      ltv: { before: "$2,400", after: "$3,100", improvement: "29% increase" },
      conversion: { before: "2.1%", after: "4.7%", improvement: "124% increase" }
    },
    testimonial: {
      text: "The direct communication and rapid implementation made all the difference. We went from struggling to hit targets to exceeding them consistently.",
      author: "Mike Rodriguez",
      title: "CMO, TechFlow Solutions"
    }
  },
  {
    title: "E-commerce Fashion",
    industry: "Fashion & Apparel",
    platform: "Google Shopping & Meta",
    challenge: "Seasonal fluctuations and poor ROAS during off-peak periods",
    strategy: "Multi-channel approach with dynamic product ads and retargeting",
    timeframe: "6 months",
    results: {
      roas: { before: "1.8x", after: "3.4x", improvement: "89% increase" },
      revenue: { before: "$125K", after: "$340K", improvement: "172% growth" },
      aov: { before: "$67", after: "$89", improvement: "33% increase" },
      customers: { before: "1,865", after: "3,820", improvement: "105% growth" }
    },
    testimonial: {
      text: "Finally found someone who understands e-commerce seasonality. Our off-peak months are now profitable instead of just breaking even.",
      author: "Lisa Park",
      title: "CEO, Urban Threads"
    }
  }
];

const metrics = [
  { number: "47%", label: "Average CPC Reduction", description: "Across Google Search campaigns" },
  { number: "3.2x", label: "ROAS Improvement", description: "For e-commerce DTC brands" },
  { number: "$1.2M+", label: "Revenue Generated", description: "Direct from optimized campaigns" },
  { number: "89%", label: "Client Retention", description: "After initial 3-month period" },
];

export default function ResultsPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#F9FAFB] to-white py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F2E4C] leading-tight">
              Real Brands. Real Results.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#4F4F4F]">
              Performance driven by strategy, not guesswork. See how direct operator expertise delivers measurable growth.
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
            <Button href="/work-with-me" size="lg">
              Book Your Strategy Call
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C]">
              Industries I Work With
            </h2>
            <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
              Performance marketing strategies that work across verticals, adapted for your specific business model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "E-commerce & DTC", 
                description: "Product-based businesses looking to scale profitably",
                examples: ["Fashion & Apparel", "Beauty & Cosmetics", "Home & Garden", "Electronics"]
              },
              { 
                title: "SaaS & B2B", 
                description: "Software companies seeking quality lead generation",
                examples: ["SaaS Platforms", "B2B Services", "Professional Tools", "Enterprise Software"]
              },
              { 
                title: "Health & Wellness", 
                description: "Supplement and wellness brands in competitive markets",
                examples: ["Supplements", "Fitness Equipment", "Wellness Services", "Health Apps"]
              },
              { 
                title: "Education & Courses", 
                description: "Online education and course creators",
                examples: ["Online Courses", "Coaching Programs", "Educational Apps", "Certification Programs"]
              },
              { 
                title: "Professional Services", 
                description: "Service-based businesses targeting local or national markets",
                examples: ["Legal Services", "Consulting", "Real Estate", "Financial Services"]
              },
              { 
                title: "Home Services", 
                description: "Local service providers looking to dominate their markets",
                examples: ["HVAC", "Roofing", "Landscaping", "Home Renovation"]
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
              Ready to become the next success story?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Let's discuss your current challenges and create a strategy to drive similar results for your brand.
            </p>
            <div className="mt-10">
              <Button href="/work-with-me" size="lg" className="bg-white text-[#0F2E4C] hover:bg-gray-100">
                Start Your Success Story
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 