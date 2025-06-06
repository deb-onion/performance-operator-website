import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'bg-white border border-[#E5E5E5] rounded-lg shadow-sm transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'hover:shadow-md',
        service: 'p-8 hover:shadow-md hover:scale-[1.02]',
        result: 'p-6 hover:shadow-md',
      },
      highlight: {
        none: '',
        primary: 'border-l-4 border-l-[#2D9CDB]',
        success: 'border-l-4 border-l-[#27AE60]',
      }
    },
    defaultVariants: {
      variant: 'default',
      highlight: 'none',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, highlight, children, ...props }, ref) => {
    return (
      <div
        className={cardVariants({ variant, highlight, className })}
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