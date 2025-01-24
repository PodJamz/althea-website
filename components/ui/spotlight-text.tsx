'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Props {
  text: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function SpotlightText({ text, className = '', size = 'md' }: Props) {
  const textRef = useRef<HTMLDivElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current || !highlightRef.current) return

      const rect = textRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      highlightRef.current.style.setProperty('--x', `${x}%`)
      highlightRef.current.style.setProperty('--y', `${y}%`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl'
  }

  return (
    <div ref={textRef} className={`relative ${className}`}>
      {/* Base outline text */}
      <h2 
        className={`${sizeClasses[size]} font-bold leading-none tracking-tighter hero-text-outline`}
        style={{ color: 'transparent' }}
      >
        {text}
      </h2>

      {/* Glowing mask that follows mouse */}
      <div 
        ref={highlightRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          WebkitMaskImage: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 30%, transparent 80%)',
          background: 'linear-gradient(to right, hsl(var(--text-primary)), hsl(var(--text-primary)))',
          opacity: 0.15,
          filter: 'blur(1px)',
        }}
      >
        <h2 
          className={`${sizeClasses[size]} font-bold leading-none tracking-tighter text-white`}
        >
          {text}
        </h2>
      </div>

      {/* Main text */}
      <div className="absolute inset-0">
        <h2 
          className={`${sizeClasses[size]} font-bold leading-none tracking-tighter text-[hsl(var(--text-primary))]`}
        >
          {text}
        </h2>
      </div>
    </div>
  )
} 