import React from 'react';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Carousel } from '@/components/ui/Carousel';

const testimonials = [
  {
    id: 1,
    name: "Black Voyage Team",
    role: "Shopify",
    company: "Luggage Brand",
    content: "The transformation was immediate and dramatic. Within weeks of taking over our campaigns, we saw our ROAS more than double and our purchase volume explode. The clean campaign structure and proper tracking setup made all the difference in our Shopify store performance.",
    rating: 5,
    image: "🧳",
    metrics: {
      before: "1.69 ROAS",
      after: "4.26 ROAS",
      improvement: "+152%"
    }
  },
  {
    id: 2,
    name: "Michael Albertshauser",
    role: "COO",
    company: "Bloom Stories",
    content: "Debroop excelled at refining keyword strategies, optimizing ad copy for higher engagement, and leveraging advanced analytics to uncover valuable opportunities. Their analytical prowess enabled them to convert complex data into actionable insights effectively.",
    rating: 5,
    image: "🎧",
    metrics: {
      before: "150% ROAS",
      after: "350% ROAS",
      improvement: "+133%"
    }
  },
  {
    id: 3,
    name: "Mitho Kuna",
    role: "President & CEO",
    company: "Baby Doppler (Dagamma)",
    content: "I am pleased to write this letter of recommendation for Debroop Naha, who served as PPC Manager at Baby Doppler for 1 year and 10 months. During his time with us, Deb consistently demonstrated a high level of expertise in pay-per-click advertising and delivered exceptional results.",
    rating: 5,
    image: "👶",
    metrics: {
      before: "$12+ CPA",
      after: "$8 CPA",
      improvement: "-33%"
    }
  },
  {
    id: 4,
    name: "Mandarin Duck",
    role: "Archery Equipment",
    company: "Retailer",
    content: "Working in the archery niche requires deep understanding of our specialized audience. The campaign optimization and feed management delivered consistent 400% ROAS across multiple quarters, which is exceptional in our competitive vertical.",
    rating: 5,
    image: "🎯",
    metrics: {
      before: "200% ROAS",
      after: "400% ROAS",
      improvement: "+100%"
    }
  },
  {
    id: 5,
    name: "Garage Doors LA",
    role: "Local Service",
    company: "Provider",
    content: "The lead generation campaigns transformed our business. Going from 100 to 500+ daily leads while cutting costs in half gave us the scale we needed to dominate the LA garage door market. The geo-targeting and timing optimization were game-changers.",
    rating: 5,
    image: "🚪",
    metrics: {
      before: "100/day leads",
      after: "500+/day leads",
      improvement: "+400%"
    }
  },
  {
    id: 6,
    name: "Growthpep Team",
    role: "Jewelry eCommerce",
    company: "Brand",
    content: "During the most challenging period for retail, the hybrid Google + Native strategy delivered our best performance ever. Achieving 9.78 ROAS during lockdown when most competitors struggled was remarkable and kept our jewelry business thriving.",
    rating: 5,
    image: "💎",
    metrics: {
      before: "3x ROAS",
      after: "9.78 ROAS",
      improvement: "+226%"
    }
  }
];

export default function Testimonials() {
  const testimonialSlides = testimonials.map((testimonial) => (
    <div key={testimonial.id} className="p-8 h-full">
      <Card variant="testimonial" className="h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">{testimonial.image}</div>
            <div>
              <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              <p className="text-sm text-primary">{testimonial.company}</p>
            </div>
          </div>
          
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
            "{testimonial.content}"
          </blockquote>
        </div>
        
        <div className="border-t border-border/50 pt-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-sm text-muted-foreground">Before</div>
              <div className="font-semibold text-foreground">{testimonial.metrics.before}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">After</div>
              <div className="font-semibold text-success">{testimonial.metrics.after}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Improvement</div>
              <div className="font-bold text-primary">{testimonial.metrics.improvement}</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ));

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Clients Say About Working With Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses. See how direct expertise delivers measurable outcomes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            items={testimonialSlides}
            autoPlay={true}
            autoPlayInterval={6000}
            variant="minimal"
            size="auto"
            showDots={true}
            showArrows={true}
          />
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up">
            <div className="text-2xl font-bold text-primary mb-1">400%</div>
            <div className="text-sm text-muted-foreground">Peak ROAS Achieved</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-2xl font-bold text-primary mb-1">$5M+</div>
            <div className="text-sm text-muted-foreground">Ad Spend Managed</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl font-bold text-primary mb-1">$2M+</div>
            <div className="text-sm text-muted-foreground">Revenue Generated</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-2xl font-bold text-primary mb-1">8+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </Container>
    </section>
  );
} 