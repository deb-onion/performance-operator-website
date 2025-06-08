import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "PPC Management Services | onlydeb",
  description: "Google Ads & Meta Ads management by Debroop Naha. 7+ years experience, 400% ROAS achieved, $5M+ ad spend managed. Results-driven PPC services.",
};

const services = [
  {
    title: "Google Ads Management",
    description: "Search, Shopping, App campaigns optimized for scale.",
    features: [
      "Search campaign optimization and scaling",
      "Shopping campaigns for e-commerce (achieved $2M seasonal revenue)",
      "App campaigns for user acquisition",
      "Performance Max campaigns for maximum reach",
      "Advanced bidding strategies and automation",
      "Conversion tracking and analytics setup"
    ],
    results: "Achieved 400% ROAS consistently, managed 400+ accounts at Google"
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    description: "Social media campaigns that convert and scale.",
    features: [
      "Facebook and Instagram campaign management",
      "Advanced audience targeting and lookalike modeling",
      "Creative testing and A/B optimization",
      "Funnel optimization from awareness to conversion",
      "Retargeting campaigns for maximum lifetime value",
      "Pixel setup and iOS 14.5+ compliance"
    ],
    results: "5x monthly sign-up growth achieved at Bloomstories"
  },
  {
    title: "Multi-Platform Campaign Management",
    description: "Spotify Ads, Apple Search Ads, unified strategy.",
    features: [
      "Spotify advertising for audio content and music apps",
      "Apple Search Ads for iOS app acquisition",
      "Cross-platform campaign coordination",
      "Unified reporting and attribution modeling",
      "Budget allocation optimization across channels",
      "Campaign automation with scripts and tools"
    ],
    results: "Managed $100K+ monthly budgets across multiple platforms"
  },
  {
    title: "Campaign Optimization & Analytics",
    description: "Data-driven optimization and performance analysis.",
    features: [
      "Advanced campaign optimization techniques",
      "A/B testing of ad creatives and landing pages",
      "Conversion rate optimization strategies",
      "Custom analytics and tracking implementation",
      "Automated reporting and insights",
      "Performance analysis and strategic recommendations"
    ],
    results: "Maintained CPA below $8 globally while scaling to $300K+ budgets"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Audit & Analysis",
    description: "Deep dive into your current campaigns, audience data, and conversion funnel to identify opportunities.",
    duration: "Week 1"
  },
  {
    step: "02", 
    title: "Strategy Development",
    description: "Create a custom performance marketing strategy aligned with your business goals and budget.",
    duration: "Week 1-2"
  },
  {
    step: "03",
    title: "Implementation",
    description: "Launch optimized campaigns with proper tracking, audiences, and creative testing frameworks.",
    duration: "Week 2-3"
  },
  {
    step: "04",
    title: "Optimization & Scaling",
    description: "Continuous testing, optimization, and scaling based on performance data and KPIs.",
    duration: "Ongoing"
  }
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#F9FAFB] to-white py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F2E4C] leading-tight">
              Proven PPC Management Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#4F4F4F]">
              7+ years managing campaigns for Google, Bloomstories, Dagamma, and more. From $100K to $300K+ monthly budgets. Google Ads, Meta Ads, Spotify, Apple Search Ads - I've scaled them all.
            </p>
            <div className="mt-10">
              <Button href="/work-with-me/" size="lg">
                Let's Scale Together
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C]">
              Core Services
            </h2>
            <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
              Specialized performance marketing services designed to scale your brand efficiently and profitably.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} variant="service" className="h-full">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0F2E4C] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-[#4F4F4F]">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-[#27AE60] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#4F4F4F]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#EBF6FF] p-4 rounded-lg mb-6">
                  <p className="text-sm font-semibold text-[#2D9CDB] mb-1">Typical Results</p>
                  <p className="text-[#4F4F4F]">{service.results}</p>
                </div>

                <Button href="/work-with-me" className="w-full">
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C]">
              How We'll Work Together
            </h2>
            <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
              A proven process that gets you from strategy to scaled results as quickly as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center relative">
                <div className="w-16 h-16 bg-[#2D9CDB] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#4F4F4F] mb-4">
                  {step.description}
                </p>
                <div className="inline-block bg-[#EBF6FF] text-[#2D9CDB] text-sm font-semibold px-3 py-1 rounded-full">
                  {step.duration}
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-[#E5E5E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C] mb-6">
                Why Choose Direct Operator Expertise?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#EBF6FF] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Faster Implementation</h3>
                    <p className="text-[#4F4F4F]">No approval chains or junior staff. Changes happen in hours, not weeks.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#EBF6FF] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Senior-Level Expertise</h3>
                    <p className="text-[#4F4F4F]">Every aspect of your campaigns handled by an experienced specialist.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#EBF6FF] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Cost Efficiency</h3>
                    <p className="text-[#4F4F4F]">No agency overhead. You pay for expertise, not layers of management.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#EBF6FF] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Direct Communication</h3>
                    <p className="text-[#4F4F4F]">Talk directly to the person running your campaigns. No middlemen.</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-[#0F2E4C] mb-6">Investment & Commitment</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#1A1A1A] mb-2">Management Fee</h4>
                  <p className="text-[#4F4F4F] mb-2">15-20% of ad spend (minimum $2,500/month)</p>
                  <p className="text-sm text-[#828282]">Competitive with top agencies, but with direct operator expertise</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#1A1A1A] mb-2">Minimum Commitment</h4>
                  <p className="text-[#4F4F4F] mb-2">3-month initial engagement</p>
                  <p className="text-sm text-[#828282]">Time needed to properly optimize and scale campaigns</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#1A1A1A] mb-2">What's Included</h4>
                  <ul className="text-[#4F4F4F] space-y-1">
                    <li>• Complete campaign setup and management</li>
                    <li>• Weekly optimization and reporting</li>
                    <li>• Direct access via Slack or email</li>
                    <li>• Monthly strategy calls</li>
                    <li>• Conversion tracking setup</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                <Button href="/work-with-me" className="w-full" size="lg">
                  Book a Strategy Call
                </Button>
                <p className="text-center text-sm text-[#828282] mt-3">
                  Free 30-minute consultation to discuss your goals
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-[#0F2E4C] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready for results like Bloomstories and Dagamma?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Let's discuss how I can bring the same performance-driven approach to your campaigns.
            </p>
            <div className="mt-10">
              <Button href="/work-with-me" size="lg" className="bg-white text-[#0F2E4C] hover:bg-gray-100">
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 