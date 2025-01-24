'use client';

import { GlowEffect } from './glow-effect';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  glassOpacity?: number;
}

export function GlowCard({ 
  title, 
  children, 
  className, 
  colors,
  glassOpacity = 0.2 
}: GlowCardProps) {
  return (
    <div className={cn('relative h-full w-full group', className)}>
      {/* Subtle edge glow */}
      <div 
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 dark:opacity-[0.03] dark:group-hover:opacity-[0.05] light:opacity-[0.08] light:group-hover:opacity-[0.12]"
        style={{
          background: `linear-gradient(to right, ${colors?.[0] || '#0894FF'}, ${colors?.[1] || '#C959DD'})`,
          filter: 'blur(15px)',
        }}
      />
      <div 
        className={cn(
          "relative h-full w-full rounded-xl backdrop-blur-sm",
          "border border-black/[0.1] dark:border-white/[0.08]",
          "bg-white dark:bg-black"
        )}
        style={{
          backgroundColor: `${glassOpacity < 0.5 ? 'rgba(255, 255, 255,' : 'rgba(0, 0, 0,'} ${glassOpacity})`,
        }}
      >
        <div className="p-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-black dark:text-white">
            {title}
          </h2>
          <div className="text-base md:text-lg text-[hsl(var(--text-secondary))]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 