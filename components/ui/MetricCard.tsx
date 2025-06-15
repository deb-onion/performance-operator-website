import { Card } from './Card';
import { AnimatedCounter } from './AnimatedCounter';

interface MetricCardProps {
  number: string | number;
  label: string;
  description: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  isAnimated?: boolean;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function MetricCard({ 
  number, 
  label, 
  description, 
  icon,
  trend = 'neutral',
  isAnimated = true,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
  style
}: MetricCardProps) {
  const trendColors = {
    up: 'text-success',
    down: 'text-destructive',
    neutral: 'text-primary'
  };

  const trendIcons = {
    up: (
      <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    down: (
      <svg className="w-5 h-5 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    neutral: null
  };

  return (
    <Card 
      variant="stats" 
      className={`group hover:scale-105 transition-all duration-300 ${className}`}
      style={style}
    >
      <div className="flex items-start justify-between mb-4">
        {icon && (
          <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
        )}
        {trend !== 'neutral' && trendIcons[trend]}
      </div>

      <div className={`text-3xl md:text-4xl font-bold mb-2 ${trendColors[trend]}`}>
        {isAnimated && typeof number === 'number' ? (
          <AnimatedCounter 
            end={number} 
            prefix={prefix} 
            suffix={suffix} 
            decimals={decimals}
          />
        ) : (
          `${prefix}${number}${suffix}`
        )}
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">
        {label}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    </Card>
  );
} 