"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const carouselVariants = cva(
  'relative overflow-hidden rounded-lg',
  {
    variants: {
      variant: {
        default: 'bg-secondary border border-border',
        elevated: 'bg-secondary shadow-2xl border border-border',
        minimal: 'bg-transparent',
      },
      size: {
        sm: 'h-64',
        md: 'h-80',
        lg: 'h-96',
        xl: 'h-[28rem]',
        auto: 'h-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'lg',
    },
  }
);

export interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
  items: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  infinite?: boolean;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ 
    className, 
    variant, 
    size, 
    items, 
    autoPlay = false,
    autoPlayInterval = 5000,
    showDots = true,
    showArrows = true,
    infinite = true,
    ...props 
  }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) => {
        if (infinite) {
          return (prevIndex + 1) % items.length;
        }
        return prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex;
      });
    }, [items.length, infinite]);

    const prevSlide = useCallback(() => {
      setCurrentIndex((prevIndex) => {
        if (infinite) {
          return prevIndex === 0 ? items.length - 1 : prevIndex - 1;
        }
        return prevIndex > 0 ? prevIndex - 1 : prevIndex;
      });
    }, [items.length, infinite]);

    const goToSlide = (index: number) => {
      setCurrentIndex(index);
    };

    useEffect(() => {
      if (autoPlay && items.length > 1) {
        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
      }
    }, [autoPlay, autoPlayInterval, nextSlide, items.length]);

    if (!items || items.length === 0) {
      return null;
    }

    return (
      <div
        className={carouselVariants({ variant, size, className })}
        ref={ref}
        {...props}
      >
        {/* Slides Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-full"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && items.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {showDots && items.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
                  currentIndex === index
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground hover:bg-foreground'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Progress Bar (optional enhancement) */}
        {autoPlay && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-muted">
            <div 
              className="h-full bg-primary transition-all duration-100 ease-linear"
              style={{ 
                width: `${((currentIndex + 1) / items.length) * 100}%`
              }}
            />
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = 'Carousel';

export { Carousel, carouselVariants }; 