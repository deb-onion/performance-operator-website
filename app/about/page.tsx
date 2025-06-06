import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "About | Performance Marketing Operator",
  description: "Learn more about the operator behind the results. Direct, transparent performance marketing without the agency bloat.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#F9FAFB] to-white py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F2E4C] leading-tight">
              The Operator Behind the Results
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#4F4F4F]">
              I'm a performance marketing specialist who works directly with brands to deliver measurable results without the agency bloat.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-[#EBF6FF] rounded-lg mb-4 md:mb-0">
                {/* Placeholder for profile image */}
                <div className="flex items-center justify-center h-full text-[#2D9CDB]">
                  <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#0F2E4C] mb-6">
                My Story
              </h2>
              <p className="text-[#4F4F4F] mb-4">
                After years working in top marketing agencies, I noticed a consistent problem: talented marketers buried under layers of account managers, executives, and approval processes. The result? Slower implementation, miscommunication, and wasted ad spend.
              </p>
              <p className="text-[#4F4F4F] mb-4">
                I founded this practice on a simple premise: brands deserve direct access to the person running their campaigns. No gatekeepers, no lost messages, just direct expertise and accountability.
              </p>
              <p className="text-[#4F4F4F]">
                Now I work with select brands to deliver what agencies often promise but rarely achieve: fast implementation, agile optimization, and real, measurable growth.
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
                Managing high-performance campaigns across platforms
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-[#EBF6FF] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-[#2D9CDB]">$10M+</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#1A1A1A]">Ad Spend Managed</h3>
              <p className="mt-4 text-[#4F4F4F]">
                Optimized for maximum ROI across Google and Meta platforms
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-[#EBF6FF] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-[#2D9CDB]">30+</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#1A1A1A]">Brands Scaled</h3>
              <p className="mt-4 text-[#4F4F4F]">
                From DTC startups to established e-commerce brands
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
              Ready to work with an operator, not an agency?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Let's discuss how I can help scale your brand with precision and transparency.
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