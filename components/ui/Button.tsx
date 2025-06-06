import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { trackButtonClick, trackOutboundLink } from '@/lib/analytics';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-base font-semibold transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9CDB] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-[#2D9CDB] text-white hover:bg-[#1A91D4]',
        secondary: 'bg-transparent border-2 border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#EBF6FF]',
        tertiary: 'text-[#2D9CDB] hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-10 px-4 py-2 text-sm',
        lg: 'h-14 px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={buttonVariants({ variant, size, className })}
        >
          {children}
        </Link>
      );
    }
    
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants }; 