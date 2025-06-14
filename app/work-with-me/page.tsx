import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(
  "Work With Me | Performance Marketing Operator",
  "Ready to scale with a performance marketing operator? Book a strategy call to discuss your goals and growth potential.",
  "/work-with-me"
);

const idealClients = [
  {
    title: "E-commerce & DTC Brands",
    criteria: [
      "Monthly revenue of $50K+",
      "Currently spending $5K+ on ads",
      "Ready to scale profitably",
      "Willing to test and optimize"
    ]
  },
  {
    title: "SaaS & B2B Companies", 
    criteria: [
      "Established product-market fit",
      "Clear customer acquisition goals",
      "Budget for sustained growth",
      "Data-driven decision making"
    ]
  },
  {
    title: "Service-Based Businesses",
    criteria: [
      "Proven business model",
      "Capacity to handle more clients",
      "Local or national market focus",
      "Investment mindset for growth"
    ]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Strategy Call",
    description: "30-minute discovery call to understand your business, goals, and current challenges.",
    duration: "30 minutes",
    deliverable: "Custom growth strategy outline"
  },
  {
    step: "02",
    title: "Proposal & Planning",
    description: "Detailed proposal with strategy, timeline, and investment requirements.",
    duration: "3-5 days",
    deliverable: "Comprehensive marketing plan"
  },
  {
    step: "03",
    title: "Onboarding",
    description: "Account access, tracking setup, and campaign foundation building.",
    duration: "1-2 weeks",
    deliverable: "Fully optimized account setup"
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description: "Campaign launch with continuous optimization and performance monitoring.",
    duration: "Ongoing",
    deliverable: "Regular performance reports"
  }
];

const faqs = [
  {
    question: "How do we start working together?",
    answer: "Book a free 30-minute strategy call using the calendar below. We'll discuss your business, current marketing efforts, and growth goals to see if we're a good fit."
  },
  {
    question: "What's your minimum monthly investment?",
    answer: "I work with clients spending at least $2,500/month on management fees, which typically corresponds to $12,500+ monthly ad spend. This ensures we have enough budget to properly test and optimize campaigns."
  },
  {
    question: "Do you run the ads directly or do I maintain control?",
    answer: "I handle all campaign management directly in your accounts. You maintain ownership and access, but I do the day-to-day optimization, testing, and scaling. You'll get weekly reports and can see real-time performance anytime."
  },
  {
    question: "How quickly will I see results?",
    answer: "Initial optimizations often show improvements within 2-4 weeks. However, significant scaling and compound growth typically develop over 3-6 months as we gather data and optimize the entire funnel."
  },
  {
    question: "What platforms do you specialize in?",
    answer: "I primarily focus on Google Ads (Search, Shopping, YouTube) and Meta platforms (Facebook, Instagram). These platforms drive the majority of high-intent traffic for most businesses."
  },
  {
    question: "How is this different from working with an agency?",
    answer: "You work directly with me—no account managers or junior staff. This means faster implementation, clearer communication, and senior-level expertise on every aspect of your campaigns."
  },
  {
    question: "What if my current campaigns aren't performing well?",
    answer: "That's exactly what I specialize in fixing. Poor campaign performance usually comes from targeting, messaging, or funnel issues that can be systematically identified and resolved."
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "I work across most industries, with particular expertise in e-commerce, SaaS, professional services, and lead generation businesses. Industry experience matters less than understanding good marketing fundamentals."
  }
];

export default function WorkWithMePage() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#F9FAFB] to-white py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F2E4C] leading-tight">
              Ready to Scale Together?
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#4F4F4F]">
              Let's discuss your goals and create a strategy to drive real, measurable growth for your brand.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C]">
              Is This a Fit?
            </h2>
            <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
              I work best with founders and marketing directors who are hands-on, fast-moving, and results-obsessed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {idealClients.map((client, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-6">
                  {client.title}
                </h3>
                <ul className="space-y-3">
                  {client.criteria.map((criterion, criterionIndex) => (
                    <li key={criterionIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-[#27AE60] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#4F4F4F]">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#4F4F4F] max-w-2xl mx-auto">
              If this sounds like your business, let's talk. I work with a limited number of clients to ensure each gets the attention and results they deserve.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C] mb-6">
                Book Your Strategy Call
              </h2>
              <p className="text-lg text-[#4F4F4F] mb-8">
                30-minute call to discuss your business, current challenges, and growth opportunities. No sales pitch—just strategy.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#EBF6FF] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">Free consultation</h4>
                    <p className="text-[#4F4F4F] text-sm">No cost, no obligation strategy discussion</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#EBF6FF] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">Account audit included</h4>
                    <p className="text-[#4F4F4F] text-sm">Quick review of current campaigns and opportunities</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#EBF6FF] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-[#2D9CDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">Custom strategy outline</h4>
                    <p className="text-[#4F4F4F] text-sm">Actionable next steps regardless of whether we work together</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E5E5]">
                <h4 className="font-semibold text-[#1A1A1A] mb-3">What to prepare:</h4>
                <ul className="text-[#4F4F4F] text-sm space-y-2">
                  <li>• Current monthly revenue and ad spend</li>
                  <li>• Your primary business goals and challenges</li>
                  <li>• Access to current campaign performance (if available)</li>
                  <li>• Questions about scaling your marketing</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-[#0F2E4C] mb-6 text-center">
                  Schedule Your Call
                </h3>
                
                {/* Google Calendar appointment scheduling embed */}
                <div className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-[#2D9CDB] to-[#1B8FD3] text-white text-center">
                    <h4 className="text-lg font-semibold mb-2">Book Your 30-Minute Strategy Call</h4>
                    <p className="text-sm opacity-90">Select a time that works best for you</p>
                  </div>
                  
                  {/* Google Calendar Booking System - Live */}
                  <div className="bg-white">
                    <iframe 
                      src="https://calendar.google.com/calendar/appointments/AcZssZ3eEiEwjtCQxY8Dg9UXKk3OzM_4pEUvgwAQE00=?gv=true" 
                      style={{border: 0}} 
                      width="100%" 
                      height="600" 
                      frameBorder="0"
                      title="Book Strategy Call"
                    />
                    
                    {/* Fallback for calendar issues */}
                    <div className="p-6 text-center border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-4">
                        Having trouble with the calendar? No problem!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button 
                          href="mailto:ads@onlydeb.com?subject=Strategy Call Request&body=Hi! I'd like to schedule a 30-minute strategy call. Please let me know your available times."
                          variant="secondary"
                          size="sm"
                        >
                          Email to Schedule
                        </Button>
                        <Button 
                          href="/contact/"
                          variant="outline"
                          size="sm"
                        >
                          Contact Form
                        </Button>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-[#828282]">
                    Prefer to talk first? Email me directly at{" "}
                    <a href="mailto:ads@onlydeb.com" className="text-[#2D9CDB] hover:underline">
                      ads@onlydeb.com
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C]">
              How We'll Work Together
            </h2>
            <p className="mt-4 text-lg text-[#4F4F4F] max-w-3xl mx-auto">
              A transparent process from strategy call to scaled results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 relative">
                <div className="w-12 h-12 bg-[#2D9CDB] text-white rounded-full flex items-center justify-center mb-6">
                  <span className="text-lg font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#4F4F4F] mb-4">
                  {step.description}
                </p>
                <div className="space-y-2">
                  <div className="inline-block bg-[#EBF6FF] text-[#2D9CDB] text-sm font-semibold px-3 py-1 rounded-full">
                    {step.duration}
                  </div>
                  <p className="text-sm text-[#828282]">
                    <strong>Deliverable:</strong> {step.deliverable}
                  </p>
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

      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[#4F4F4F]">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#4F4F4F] mb-6">
              Have a question not covered here?
            </p>
            <Button href="mailto:ads@onlydeb.com?subject=Question About Working Together" variant="secondary">
              Ask Me Directly
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-[#0F2E4C] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              No Bots. No Gatekeepers. Just Growth.
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Ready to work with a performance marketing operator who puts results first? Let's build something great together.
            </p>
            <div className="mt-10">
              <Button href="#schedule" size="lg" className="bg-white text-[#0F2E4C] hover:bg-gray-100">
                Book Your Strategy Call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 