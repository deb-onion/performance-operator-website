import Hero from "@/components/sections/Hero";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero 
        headline="7+ Years Managing Multi-Million Dollar Campaigns"
        subheadline="I'm Debroop, a results-driven PPC Manager who delivered 400% ROAS and $2M+ revenue for brands. From Google to Bloomstories, I optimize campaigns that scale. No agency bloat—just direct expertise."
        cta="Let's Scale Together"
        ctaHref="/work-with-me"
      />
      
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C]">
              Why Operators Outperform Agencies
            </h2>
            <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
              Skip the layers of account managers and junior specialists. Work directly with a seasoned operator who gets it done right.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="service" className="text-center">
              <div className="w-16 h-16 bg-[#EBF6FF] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#1A1A1A]">Fast Implementation</h3>
              <p className="mt-4 text-[#4F4F4F]">
                No long onboarding processes or approval chains. Strategies go from idea to execution in days, not weeks.
              </p>
            </Card>
            
            <Card variant="service" className="text-center">
              <div className="w-16 h-16 bg-[#EBF6FF] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#1A1A1A]">Direct Access</h3>
              <p className="mt-4 text-[#4F4F4F]">
                The person you talk to is the person who runs your campaigns. No gatekeepers, no miscommunication.
              </p>
            </Card>
            
            <Card variant="service" className="text-center">
              <div className="w-16 h-16 bg-[#EBF6FF] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#1A1A1A]">Cost Efficiency</h3>
              <p className="mt-4 text-[#4F4F4F]">
                You only pay for expertise, not overhead. Get better results without the bloated agency pricing.
              </p>
            </Card>
          </div>
        </Container>
      </section>
      
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C]">
                Proven Results Across Industries
              </h2>
              <p className="mt-4 text-lg text-[#4F4F4F]">
                From Google to Bloomstories to Dagamma, I've consistently delivered measurable improvements that drive real business growth.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#EBF6FF] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-[#1A1A1A]">400% ROAS Achieved</p>
                    <p className="text-[#4F4F4F]">Consistently across multiple brands</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#EBF6FF] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-[#1A1A1A]">5x Monthly Sign-up Growth</p>
                    <p className="text-[#4F4F4F]">At Bloomstories with $100K+ monthly budget</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#EBF6FF] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-[#1A1A1A]">$2M+ Revenue Generated</p>
                    <p className="text-[#4F4F4F]">During seasonal peaks at Dagamma</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button href="/results">See All Results</Button>
              </div>
            </div>
            
            <div>
              <Card variant="result" highlight="primary" className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A]">Bloomstories</h3>
                    <p className="text-[#4F4F4F] mt-1">Subscription Platform Optimization</p>
                  </div>
                  <div className="bg-[#EBF6FF] text-[#2D9CDB] text-sm font-semibold px-3 py-1 rounded-full">
                    Case Study
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-[#4F4F4F]">Monthly Sign-ups Before</span>
                    <span className="text-[#4F4F4F]">After</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#1A1A1A]">1x</span>
                    <div className="h-0.5 flex-grow mx-4 bg-[#E5E5E5] relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#F2994A]"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#27AE60]"></div>
                    </div>
                    <span className="text-2xl font-bold text-[#27AE60]">5x</span>
                  </div>
                  <p className="mt-4 text-[#4F4F4F]">
                    Achieved 350% ROAS from subscription transactions while scaling monthly budget to $100K+ through strategic A/B testing.
                  </p>
                  <div className="mt-6">
                    <Button variant="tertiary" href="/results">View full case study →</Button>
                  </div>
                </div>
              </Card>
              
              <Card variant="result" highlight="success">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A]">Dagamma Ecommerce</h3>
                    <p className="text-[#4F4F4F] mt-1">Global Campaign Scaling</p>
                  </div>
                  <div className="bg-[#EBF6FF] text-[#2D9CDB] text-sm font-semibold px-3 py-1 rounded-full">
                    Case Study
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-[#4F4F4F]">CPA Before</span>
                    <span className="text-[#4F4F4F]">After</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#1A1A1A]">$12+</span>
                    <div className="h-0.5 flex-grow mx-4 bg-[#E5E5E5] relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#F2994A]"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#27AE60]"></div>
                    </div>
                    <span className="text-2xl font-bold text-[#27AE60]">$8</span>
                  </div>
                  <p className="mt-4 text-[#4F4F4F]">
                    Maintained CPA below $8 globally while scaling to $300K+ monthly budgets and achieving $2M in seasonal revenue.
                  </p>
                  <div className="mt-6">
                    <Button variant="tertiary" href="/results">View full case study →</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 md:py-24 bg-[#0F2E4C] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to scale like Bloomstories and Dagamma?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Let's discuss how I can bring the same results-driven approach to your campaigns. Direct access, proven results.
            </p>
            <div className="mt-10">
              <Button href="/work-with-me" size="lg" className="bg-white text-[#0F2E4C] hover:bg-gray-100">
                Let's Work Together
              </Button>
        </div>
    </div>
        </Container>
      </section>
    </>
  );
}
