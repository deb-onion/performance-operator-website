'use client';

import { useEffect, useRef, useState } from 'react';

interface ChartDataPoint {
  label: string;
  value: number;
}

interface SimpleChartProps {
  data: ChartDataPoint[];
  type?: 'line' | 'bar';
  height?: number;
  color?: string;
  showGrid?: boolean;
  animated?: boolean;
  className?: string;
  variant?: 'default' | 'compact' | 'detailed';
}

export function SimpleChart({ 
  data, 
  type = 'line', 
  height = 200, 
  color = '#3b82f6',
  showGrid = true,
  animated = true,
  className = '',
  variant = 'default'
}: SimpleChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Ensure component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Detect dark mode - Fixed for hydration
  useEffect(() => {
    const checkDarkMode = () => {
      if (typeof window !== 'undefined') {
        const isDark = document.documentElement.classList.contains('dark') || 
                      window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(isDark);
      }
    };

    const timer = setTimeout(checkDarkMode, 100);
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkDarkMode);
    };
  }, []);

  // Chart rendering - simplified to always render when mounted
  useEffect(() => {
    if (!isMounted || !canvasRef.current || data.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with higher DPI
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Theme-aware colors - Fixed for consistent contrast
    const theme = {
      background: 'transparent',
      foreground: isDarkMode ? '#ffffff' : '#0f172a',
      muted: isDarkMode ? '#64748b' : '#64748b',
      border: isDarkMode ? '#334155' : '#e2e8f0',
      accent: isDarkMode ? '#1e293b' : '#f1f5f9'
    };

    const padding = variant === 'compact' ? 20 : 40;
    const chartWidth = rect.width - padding * 2;
    const chartHeight = height - padding * 2;

    // Clear canvas
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, rect.width, height);

    // Find min/max values
    const values = data.map(d => d.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const valueRange = maxValue - minValue || 1;

    // Draw grid
    if (showGrid && variant !== 'compact') {
      ctx.strokeStyle = theme.border;
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      
      for (let i = 0; i <= 4; i++) {
        const y = padding + (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
      }
      
      ctx.setLineDash([]);
    }

    // Calculate points
    const points = data.map((point, index) => ({
      x: padding + (chartWidth / (data.length - 1)) * index,
      y: padding + chartHeight - ((point.value - minValue) / valueRange) * chartHeight
    }));

    if (type === 'line') {
      // Draw gradient background under line
      if (variant !== 'compact') {
        const gradient = ctx.createLinearGradient(0, padding, 0, padding + chartHeight);
        gradient.addColorStop(0, `${color}15`);
        gradient.addColorStop(1, `${color}00`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(points[0].x, padding + chartHeight);
        points.forEach(point => ctx.lineTo(point.x, point.y));
        ctx.lineTo(points[points.length - 1].x, padding + chartHeight);
        ctx.closePath();
        ctx.fill();
      }

      // Draw main line
      ctx.strokeStyle = color;
      ctx.lineWidth = variant === 'compact' ? 2 : 3;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      
      ctx.beginPath();
      points.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.stroke();

      // Draw points with enhanced styling
      if (variant !== 'compact') {
        points.forEach(point => {
          // Outer glow effect
          ctx.shadowColor = color;
          ctx.shadowBlur = 8;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
          ctx.fill();
          
          // Reset shadow
          ctx.shadowBlur = 0;
          
          // White center
          ctx.fillStyle = theme.background || '#ffffff';
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
          
          // Inner accent
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
          ctx.fill();
        });
      }

    } else if (type === 'bar') {
      // Draw bars
      const barWidth = chartWidth / data.length * 0.6;
      
      data.forEach((point, index) => {
        const barHeight = ((point.value - minValue) / valueRange) * chartHeight;
        const x = padding + (chartWidth / data.length) * index + (chartWidth / data.length - barWidth) / 2;
        const y = padding + chartHeight - barHeight;
        
        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, `${color}60`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, barWidth, barHeight);
      });
    }

    // Draw labels for detailed variant
    if (variant === 'detailed') {
      // X-axis labels
      ctx.fillStyle = theme.foreground;
      ctx.font = 'bold 11px var(--font-sans, system-ui)';
      ctx.textAlign = 'center';
      
      data.forEach((point, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        ctx.fillText(point.label, x, height - 8);
      });

      // Y-axis value labels
      ctx.textAlign = 'right';
      ctx.fillStyle = theme.muted;
      ctx.font = '10px var(--font-sans, system-ui)';
      for (let i = 0; i <= 4; i++) {
        const value = minValue + (valueRange / 4) * (4 - i);
        const y = padding + (chartHeight / 4) * i + 4;
        ctx.fillText(value.toFixed(1), padding - 5, y);
      }

      // Draw data point values
      ctx.fillStyle = theme.foreground;
      ctx.font = 'bold 10px var(--font-sans, system-ui)';
      ctx.textAlign = 'center';
      points.forEach((point, index) => {
        const value = data[index].value;
        ctx.fillText(value.toString(), point.x, point.y - 8);
      });
    }

  }, [isMounted, data, type, height, color, showGrid, animated, variant, isDarkMode]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full rounded-lg"
        style={{ height: `${height}px` }}
      />
      {/* Loading overlay for unmounted state */}
      {!isMounted && (
        <div className="absolute inset-0 bg-muted/10 rounded-lg animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
} 