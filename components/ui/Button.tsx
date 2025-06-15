import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-background hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 active:scale-95',
        secondary: 'bg-secondary text-foreground border border-border hover:bg-accent hover:border-primary/20 hover:shadow-md',
        outline: 'border border-primary text-primary hover:bg-primary hover:text-background hover:shadow-lg hover:shadow-primary/25',
        ghost: 'text-foreground hover:bg-accent hover:text-primary',
        tertiary: 'text-primary hover:text-primary-hover hover:underline underline-offset-4',
        gradient: 'bg-gradient-to-r from-primary to-primary-hover text-background hover:shadow-xl hover:shadow-primary/30 hover:scale-105',
        destructive: 'bg-destructive text-background hover:bg-destructive/90 hover:shadow-lg hover:shadow-destructive/25',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        default: 'h-11 px-6 text-base',
        lg: 'h-13 px-8 text-lg',
        xl: 'h-16 px-10 text-xl',
        icon: 'h-11 w-11',
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
  external?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, external = false, loading = false, children, disabled, ...props }, ref) => {
    const buttonContent = (
      <>
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </>
    );

    if (href) {
      // Log navigation for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log('Button with href:', href, 'external:', external);
      }
      
      const linkProps = external ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href };
      return (
        <Link
          className={buttonVariants({ variant, size, className })}
          {...linkProps}
        >
          {buttonContent}
        </Link>
      );
    }

    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants }; 