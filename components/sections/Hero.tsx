"use client";

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  headline: string;
  subheadline: string;
  cta: string;
  ctaHref: string;
}

export default function Hero({ headline, subheadline, cta, ctaHref }: HeroProps) {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Simplified background gradient - reduced complexity */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/20" />
      
      {/* Simplified animated background elements - reduced blur and size */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block text-foreground mb-2">
              {headline.split(' ').slice(0, -3).join(' ')}
            </span>
            <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              {headline.split(' ').slice(-3).join(' ')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            {subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              href={ctaHref} 
              variant="gradient" 
              size="xl"
              className="min-w-[200px]"
            >
              {cta}
            </Button>
            <Button 
              href="/results/" 
              variant="outline" 
              size="xl"
              className="min-w-[200px]"
            >
              View Results
            </Button>
          </div>
          
          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">400%</div>
              <div className="text-sm text-muted-foreground">Peak ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">$2M+</div>
              <div className="text-sm text-muted-foreground">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </Container>

      {/* Simplified scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
} 