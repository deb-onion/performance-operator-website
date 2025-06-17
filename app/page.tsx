import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import SocialProof from "@/components/ui/SocialProof";
import LeadMagnet from "@/components/ui/LeadMagnet";
import Link from "next/link";

export default function Home() {
  // Case study slides for carousel
  const caseStudySlides = [
    <div key="bloomstories" className="p-8 h-full">
      <Link href="/results/" className="block h-full">
        <Card variant="result" highlight="primary" className="h-full cursor-pointer hover:scale-105 transition-transform duration-300">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground">Bloomstories</h3>
            <p className="text-muted-foreground mt-1">Subscription Platform Optimization</p>
          </div>
          <div className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
            Case Study
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted/20 rounded-lg border border-border/30">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">5x</div>
              <div className="text-sm text-muted-foreground">Sign-up Growth</div>
            </div>
            <div className="text-center p-4 bg-muted/20 rounded-lg border border-border/30">
              <div className="text-2xl sm:text-3xl font-bold text-success">350%</div>
              <div className="text-sm text-muted-foreground">ROAS</div>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            Scaled monthly budget to $100K+ through strategic A/B testing and campaign optimization, 
            achieving exceptional subscription transaction performance.
          </p>
          
            <div className="text-center">
              <span className="inline-flex items-center text-primary font-medium">
            View Case Study →
              </span>
            </div>
        </div>
      </Card>
      </Link>
    </div>,
    
    <div key="dagamma" className="p-8 h-full">
      <Link href="/results/" className="block h-full">
        <Card variant="result" highlight="success" className="h-full cursor-pointer hover:scale-105 transition-transform duration-300">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground">Dagamma Ecommerce</h3>
            <p className="text-muted-foreground mt-1">Global Campaign Scaling</p>
          </div>
          <div className="bg-success/10 text-success text-sm font-semibold px-3 py-1 rounded-full">
            Case Study
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted/20 rounded-lg border border-border/30">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">$300K+</div>
              <div className="text-sm text-muted-foreground">Monthly Budget</div>
            </div>
            <div className="text-center p-4 bg-muted/20 rounded-lg border border-border/30">
              <div className="text-2xl sm:text-3xl font-bold text-success">$2M+</div>
              <div className="text-sm text-muted-foreground">Seasonal Revenue</div>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            Maintained CPA below $8 globally while scaling campaigns and achieving 
            exceptional seasonal performance across multiple markets.
          </p>
          
            <div className="text-center">
              <span className="inline-flex items-center text-primary font-medium">
            View Case Study →
              </span>
            </div>
        </div>
      </Card>
      </Link>
    </div>,

    <div key="google" className="p-8 h-full">
      <Link href="/about/" className="block h-full">
        <Card variant="result" highlight="glow" className="h-full cursor-pointer hover:scale-105 transition-transform duration-300">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground">Google</h3>
            <p className="text-muted-foreground mt-1">Senior Associate Performance</p>
          </div>
          <div className="bg-warning/10 text-warning text-sm font-semibold px-3 py-1 rounded-full">
            Experience
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted/20 rounded-lg border border-border/30">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">400+</div>
              <div className="text-sm text-muted-foreground">Accounts/Quarter</div>
            </div>
            <div className="text-center p-4 bg-muted/20 rounded-lg border border-border/30">
              <div className="text-2xl sm:text-3xl font-bold text-success">100%</div>
              <div className="text-sm text-muted-foreground">CSAT Score</div>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            Managed 400+ accounts quarterly with 100% CSAT scores for three consecutive quarters, 
            building foundational expertise in campaign optimization at scale.
          </p>
          
            <div className="text-center">
              <span className="inline-flex items-center text-primary font-medium">
            Learn More →
              </span>
            </div>
        </div>
      </Card>
      </Link>
    </div>
  ];

  const stats = [
    {
      value: "400%",
      label: "Peak ROAS Achieved",
      description: "Consistently across multiple brands",
      icon: "📈"
    },
    {
      value: "5x",
      label: "Monthly Sign-up Growth",
      description: "At Bloomstories with $100K+ budget",
      icon: "🚀"
    },
    {
      value: "$2M+",
      label: "Revenue Generated",
      description: "During seasonal peaks at Dagamma",
      icon: "💰"
    },
    {
      value: "7+",
      label: "Years Experience",
      description: "From Google to leading brands",
      icon: "⭐"
    }
  ];

  return (
    <>
      {/* Social Proof Notifications */}
      <SocialProof />
      
      <Hero 
        headline="Google Ads Manager & PPC Agency Expert with 7+ Years Managing Multi-Million Dollar Campaigns"
        subheadline="I'm Deb, a results-driven Google Ads Manager who delivered 400% ROAS and $2M+ revenue for brands across USA & Europe. From Google to leading subscription platforms, I optimize PPC campaigns that scale. No agency bloat—just direct Google Ads expertise."
        cta="Let's Scale Together"
        ctaHref="/work-with-me/"
      />
      
      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} variant="stats" className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Google Ads Manager Expertise Outperforms Traditional PPC Agencies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Skip the layers of account managers and junior specialists. Work directly with an experienced Google Ads Manager who delivers results across USA & Europe markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="service" className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Google Ads Manager Speed</h3>
              <p className="text-muted-foreground">
                No long PPC agency onboarding processes or approval chains. Google Ads strategies go from idea to execution in days, not weeks.
              </p>
            </Card>
            
            <Card variant="service" className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Direct Google Ads Manager Access</h3>
              <p className="text-muted-foreground">
                The Google Ads Manager you talk to is the one who runs your campaigns. No PPC agency gatekeepers, no miscommunication.
              </p>
            </Card>
            
            <Card variant="service" className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">PPC Agency Cost Efficiency</h3>
              <p className="text-muted-foreground">
                You only pay for Google Ads Manager expertise, not PPC agency overhead. Get better results without the bloated agency pricing.
              </p>
            </Card>
          </div>
        </Container>
      </section>
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Google Ads Manager Results Across USA & Europe Markets
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From Google training to Bloomstories growth to Dagamma scaling, I've consistently delivered measurable PPC improvements across diverse markets and industries.
            </p>
          </div>
          
          {/* Carousel for Case Studies */}
          <div className="max-w-4xl mx-auto">
            <Carousel
              items={caseStudySlides}
              autoPlay={true}
              autoPlayInterval={8000}
              variant="elevated"
              size="auto"
              showDots={true}
              showArrows={true}
            />
          </div>
          
          <div className="text-center mt-12">
            <Button href="/results/" variant="gradient" size="lg">
              View All Google Ads Manager Case Studies
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Lead Magnet Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
        <Container>
          <LeadMagnet className="animate-fade-in-up" />
        </Container>
      </section>

      {/* FAQ Section */}
      <FAQ />
      
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready for Google Ads Manager expertise like Bloomstories and Dagamma experienced?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's discuss how I can bring the same Google Ads Manager results-driven approach to your PPC campaigns. Direct access, proven Google Ads Agency alternative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/work-with-me/" variant="gradient" size="xl">
                Work With Google Ads Manager
              </Button>
              <Button href="/results/" variant="outline" size="xl">
                View PPC Results
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
