import React from 'react';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Carousel } from '@/components/ui/Carousel';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    content: "Debroop transformed our Google Ads performance completely. We went from barely breaking even to achieving 380% ROAS in just 3 months. His strategic approach and attention to detail is unmatched.",
    rating: 5,
    image: "👩‍💼",
    metrics: {
      before: "120% ROAS",
      after: "380% ROAS",
      improvement: "+217%"
    }
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "EcoLiving Brands",
    content: "Working with Debroop was a game-changer for our subscription business. He didn't just manage our campaigns - he became a strategic partner who understood our business goals.",
    rating: 5,
    image: "👨‍💼",
    metrics: {
      before: "$45 CPA",
      after: "$18 CPA",
      improvement: "-60%"
    }
  },
  {
    id: 3,
    name: "Lisa Thompson",
    role: "Growth Marketing Lead",
    company: "FitnessTech Inc",
    content: "The level of transparency and communication was outstanding. Debroop provided weekly insights that helped us make better business decisions beyond just advertising.",
    rating: 5,
    image: "👩‍🏫",
    metrics: {
      before: "2.1x Revenue",
      after: "4.8x Revenue",
      improvement: "+129%"
    }
  },
  {
    id: 4,
    name: "David Kim",
    role: "VP of Marketing",
    company: "SaaS Startup",
    content: "Debroop's expertise in Meta Ads helped us scale our B2B SaaS from $50K to $200K MRR. His data-driven approach and quick optimizations were crucial to our growth.",
    rating: 5,
    image: "👨‍💻",
    metrics: {
      before: "$50K MRR",
      after: "$200K MRR",
      improvement: "+300%"
    }
  },
  {
    id: 5,
    name: "Anna Petrov",
    role: "E-commerce Manager",
    company: "Fashion Forward",
    content: "During our peak season, Debroop managed campaigns that generated over $1.2M in revenue. His understanding of seasonal trends and consumer behavior is exceptional.",
    rating: 5,
    image: "👩‍🎨",
    metrics: {
      before: "$300K Revenue",
      after: "$1.2M Revenue",
      improvement: "+300%"
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
            <div className="text-2xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-2xl font-bold text-primary mb-1">$5M+</div>
            <div className="text-sm text-muted-foreground">Ad Spend Managed</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl font-bold text-primary mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Client Retention</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-2xl font-bold text-primary mb-1">7+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </Container>
    </section>
  );
} 