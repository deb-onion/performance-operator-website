import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(
  "About Debroop Naha",
  "Meet Debroop Naha - 7+ years PPC Manager who delivered 400% ROAS at Google, Bloomstories, Dagamma. Performance marketing without agency bloat.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#F9FAFB] to-white py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F2E4C] leading-tight">
              Hi, I'm Debroop Naha
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#4F4F4F]">
              A results-driven PPC Manager with 7+ years managing multi-million dollar campaigns across e-commerce, BFSI, automotive, and technology. From Google to Bloomstories, I deliver scalable, data-driven solutions.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-[#EBF6FF] rounded-lg mb-4 md:mb-0 overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Debroop Naha - Performance Marketing Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#0F2E4C] mb-6">
                My Journey
              </h2>
              <p className="text-[#4F4F4F] mb-4">
                My performance marketing journey started at Google as a Senior Associate, where I managed 400+ accounts quarterly and achieved 100% CSAT scores for three consecutive quarters. This experience taught me the fundamentals of campaign optimization at scale.
              </p>
              <p className="text-[#4F4F4F] mb-4">
                From there, I worked with leading brands like Bloomstories (Germany) and Dagamma Ecommerce Solutions, managing monthly budgets of $100K-$300K+ and consistently delivering exceptional results - 400% ROAS, 5x growth in sign-ups, and $2M+ in seasonal revenue.
              </p>
              <p className="text-[#4F4F4F]">
                Now I work directly with brands who want proven expertise without agency overhead. Whether it's Google Ads, Meta Ads, or multi-platform campaigns, I bring the same precision and results that scaled major brands to every client partnership.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C]">
              Experience You Can Trust
            </h2>
            <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
              Specialized expertise backed by real results across industries and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-[#EBF6FF] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-[#2D9CDB]">7+</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#1A1A1A]">Years of Experience</h3>
              <p className="mt-4 text-[#4F4F4F]">
                From Google to Bloomstories to Dagamma - proven results across industries
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-[#EBF6FF] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-[#2D9CDB]">$5M+</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#1A1A1A]">Ad Spend Managed</h3>
              <p className="mt-4 text-[#4F4F4F]">
                Annual budgets across Google Ads, Meta Ads, Spotify, and Apple Search Ads
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-[#EBF6FF] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-[#2D9CDB]">400%</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#1A1A1A]">Peak ROAS Achieved</h3>
              <p className="mt-4 text-[#4F4F4F]">
                Consistently delivered across subscription and e-commerce models
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C]">
              Why I Don't Run an Agency
            </h2>
            <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
              There's a fundamental difference between operators and agencies. Here's why it matters to your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">The Agency Model</h3>
              <ul className="space-y-3 text-[#4F4F4F]">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#F2994A] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Multiple layers between you and your campaign manager</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#F2994A] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Junior staff often handling day-to-day operations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#F2994A] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Slow approval processes and implementation timelines</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#F2994A] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Higher fees to cover overhead and multiple team members</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#F2994A] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Divided attention across dozens of clients</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">The Operator Model</h3>
              <ul className="space-y-3 text-[#4F4F4F]">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#27AE60] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct access to the specialist running your campaigns</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#27AE60] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Senior expertise on every aspect of your account</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#27AE60] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rapid implementation and agile optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#27AE60] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cost-efficient with no hidden fees or overhead</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#27AE60] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Focused attention with limited client roster</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-[#0F2E4C] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to work with proven expertise?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Let's discuss how I can bring the same performance that scaled Bloomstories and Dagamma to your campaigns.
            </p>
            <div className="mt-10">
              <Button href="/work-with-me/" size="lg" className="bg-white text-[#0F2E4C] hover:bg-gray-100">
                Let's Work Together
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 