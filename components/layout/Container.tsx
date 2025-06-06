import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const containerVariants = cva(
  'mx-auto px-4 sm:px-6 lg:px-8',
  {
    variants: {
      size: {
        default: 'max-w-7xl', // 1280px
        narrow: 'max-w-5xl',  // 1024px
        wide: 'max-w-screen-2xl', // 1536px
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <div
        className={containerVariants({ size, className })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export { Container, containerVariants }; 