import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'bg-secondary border border-border rounded-xl transition-all duration-300 hover:border-primary/20',
  {
    variants: {
      variant: {
        default: 'hover:shadow-lg hover:shadow-primary/5',
        service: 'p-8 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] hover:bg-accent',
        result: 'p-6 hover:shadow-lg hover:shadow-primary/5 hover:bg-accent',
        testimonial: 'p-6 border-l-4 border-l-primary bg-gradient-to-r from-secondary to-accent',
        feature: 'p-6 text-center hover:shadow-lg hover:shadow-primary/5 hover:bg-accent',
        stats: 'p-8 text-center bg-gradient-to-br from-secondary to-accent border-primary/10',
      },
      highlight: {
        none: '',
        primary: 'border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent',
        success: 'border-l-4 border-l-success bg-gradient-to-r from-success/5 to-transparent',
        warning: 'border-l-4 border-l-warning bg-gradient-to-r from-warning/5 to-transparent',
        glow: 'shadow-lg shadow-primary/20 border-primary/30',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      }
    },
    defaultVariants: {
      variant: 'default',
      highlight: 'none',
      size: 'md',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
  interactive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, highlight, size, interactive = false, children, ...props }, ref) => {
    return (
      <div
        className={cardVariants({ 
          variant, 
          highlight, 
          size,
          className: `${className} ${interactive ? 'cursor-pointer' : ''}` 
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card, cardVariants }; 