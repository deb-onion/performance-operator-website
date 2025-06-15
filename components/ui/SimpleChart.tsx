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
}

export function SimpleChart({ 
  data, 
  type = 'line', 
  height = 200, 
  color = 'var(--color-primary)',
  showGrid = true,
  animated = true,
  className = ''
}: SimpleChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !canvasRef.current || data.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const padding = 40;
    const chartWidth = rect.width - padding * 2;
    const chartHeight = height - padding * 2;

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, height);

    // Find min/max values
    const values = data.map(d => d.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const valueRange = maxValue - minValue || 1;

    // Draw grid
    if (showGrid) {
      ctx.strokeStyle = 'var(--color-border)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      
      // Horizontal grid lines
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
      // Draw line
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
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

      // Draw points
      ctx.fillStyle = color;
      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw glow effect
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      points.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.stroke();
      ctx.shadowBlur = 0;

    } else if (type === 'bar') {
      // Draw bars
      const barWidth = chartWidth / data.length * 0.6;
      
      data.forEach((point, index) => {
        const barHeight = ((point.value - minValue) / valueRange) * chartHeight;
        const x = padding + (chartWidth / data.length) * index + (chartWidth / data.length - barWidth) / 2;
        const y = padding + chartHeight - barHeight;
        
        // Gradient fill
        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, `${color}80`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);
      });
    }

    // Draw labels
    ctx.fillStyle = 'var(--color-muted-foreground)';
    ctx.font = '12px var(--font-sans)';
    ctx.textAlign = 'center';
    
    data.forEach((point, index) => {
      const x = padding + (chartWidth / (data.length - 1)) * index;
      ctx.fillText(point.label, x, height - 10);
    });

    // Draw value labels
    ctx.textAlign = 'right';
    for (let i = 0; i <= 4; i++) {
      const value = minValue + (valueRange / 4) * (4 - i);
      const y = padding + (chartHeight / 4) * i + 4;
      ctx.fillText(value.toFixed(1), padding - 10, y);
    }

  }, [isVisible, data, type, height, color, showGrid]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full"
        style={{ height: `${height}px` }}
      />
    </div>
  );
} 