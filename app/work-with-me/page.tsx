import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GlassForm } from "@/components/ui/GlassForm";
import { GoogleCalendar } from "@/components/ui/GoogleCalendar";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(
  "Work With Me - PPC Management Services",
  "Ready to scale your campaigns? Work directly with Debroop Naha for PPC management. 400% ROAS achieved, $2M+ revenue generated. Book a strategy call today.",
  "/work-with-me"
);

const whyChooseMe = [
  {
    title: "Direct Operator",
    description: "You work directly with the person running your campaigns. No account managers or junior staff handling your strategy.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Proven Results",
    description: "400% ROAS consistently achieved. $2M+ revenue generated for brands like Dagamma. 5x growth for Bloomstories.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Fast Implementation",
    description: "Changes happen in hours, not weeks. No approval chains or bureaucracy. Your campaigns get immediate attention.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const benefits = [
  "Direct access to me via Slack/email",
  "Weekly optimization and reporting", 
  "Monthly strategy calls",
  "Complete campaign setup and management",
  "Conversion tracking implementation",
  "Landing page optimization recommendations"
];

const processSteps = [
  {
    step: "01",
    title: "Strategy Call",
    description: "We discuss your business goals, current challenges, and campaign requirements.",
    duration: "30 minutes"
  },
  {
    step: "02",
    title: "Audit & Proposal",
    description: "I audit your current setup and create a custom strategy proposal.",
    duration: "3-5 days"
  },
  {
    step: "03",
    title: "Onboarding",
    description: "Account setup, tracking implementation, and campaign launch.",
    duration: "1-2 weeks"
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous testing, optimization, and scaling based on performance data.",
    duration: "Ongoing"
  }
];

const industries = [
  "E-commerce & Retail",
  "SaaS & Technology", 
  "Healthcare & Medical",
  "Finance & Insurance",
  "Education & E-learning",
  "Travel & Hospitality",
  "Professional Services",
  "Manufacturing"
];

export default function WorkWithMePage() {
  return (
    <>
      <div className="bg-gradient-to-b from-background via-background to-secondary/20 py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Ready to Scale Together?
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Let's turn your campaigns into profit machines. Book a strategy call to discuss how I can bring 
              the same results-driven approach that grew Bloomstories 5x and generated $2M+ for Dagamma.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#schedule" size="lg">
                Book a Strategy Call
              </Button>
              <Button href="/results/" variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Work With Me?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Skip the agency overhead and work directly with a specialist who's delivered results for 7+ years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseMe.map((item, index) => (
              <Card key={index} variant="service" className="text-center group bg-card border-border/50">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300 border border-primary/20">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What You Get
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-primary/20">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Investment
                </h3>
              </div>

              <div className="bg-card rounded-lg border border-border/50 overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-primary to-primary-hover text-white text-center">
                  <div className="text-3xl font-bold">15-20%</div>
                  <div className="text-white/90">of monthly ad spend</div>
                  <div className="text-sm text-white/75 mt-2">$2,500 minimum</div>
                </div>
                
                <div className="bg-card">
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">Setup Fee</span>
                        <span className="text-success font-bold">$0</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">Contract</span>
                        <span className="text-muted-foreground">3 months minimum</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">Billing</span>
                        <span className="text-muted-foreground">Monthly</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground text-center">
                        Competitive with top agencies, but with direct operator expertise and faster implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How We'll Work Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              A streamlined process that gets you from strategy to results as quickly as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center relative bg-card border-border/50">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6">
                  <span className="text-lg font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {step.description}
                </p>
                <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full border border-primary/20">
                  {step.duration}
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Industries I Specialize In
              </h2>
              <p className="mt-4 text-lg text-muted-foreground mb-8">
                7+ years of experience across diverse industries, from Google to growth-stage startups.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{industry}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ideal Budget Range
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">$15,000 - $500,000+</strong> monthly ad spend across all platforms. 
                  I work with both growth-stage startups and established brands looking to scale efficiently.
                </p>
              </div>
            </div>

            <div>
              <Card className="p-8 bg-primary/5 border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Recent Results
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-semibold text-foreground">Bloomstories</h4>
                    <p className="text-muted-foreground text-sm mb-2">Subscription Platform</p>
                    <p className="text-success font-medium">5x monthly growth, 350% ROAS</p>
                  </div>

                  <div className="border-l-4 border-success pl-6">
                    <h4 className="font-semibold text-foreground">Dagamma Ecommerce</h4>
                    <p className="text-muted-foreground text-sm mb-2">Global E-commerce</p>
                    <p className="text-success font-medium">$2M+ seasonal revenue, $300K+ budgets</p>
                  </div>

                  <div className="border-l-4 border-warning pl-6">
                    <h4 className="font-semibold text-foreground">Multiple Brands</h4>
                    <p className="text-muted-foreground text-sm mb-2">Various Industries</p>
                    <p className="text-success font-medium">400% ROAS consistently achieved</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button href="/results/" variant="outline" className="w-full">
                    View All Case Studies
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section id="schedule" className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Book Your Strategy Call
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Let's discuss your goals and see if we're a good fit. Free 30-minute consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GlassForm />
              <GoogleCalendar />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 