'use client'

import { Button } from "@/components/ui/button"
import { useRef, useEffect } from "react"
import { ShimmerButton } from "./ui/shimmer-button"
import { motion } from "framer-motion"
import Link from "next/link"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import MorphingText from "@/components/ui/morphing-text"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  const texts = [
    "λLTHEλ",
    "HEλLTH",
    "MEDICλL SUPERINTELLIGENCE"
  ];

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!highlightRef.current || !heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      highlightRef.current.style.setProperty("--x", `${x}%`)
      highlightRef.current.style.setProperty("--y", `${y}%`)
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-[hsl(var(--hero-bg))]" />

      {/* Aurora Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={highlightRef}
          className="absolute inset-0 [--x:50%] [--y:50%]"
          style={{
            background: `
              radial-gradient(
                circle at var(--x) var(--y),
                rgba(var(--aurora-1), 0.15),
                transparent 25%
              ),
              radial-gradient(
                circle at calc(100% - var(--x)) var(--y),
                rgba(var(--aurora-2), 0.15),
                transparent 25%
              ),
              radial-gradient(
                circle at var(--x) calc(100% - var(--y)),
                rgba(var(--aurora-3), 0.15),
                transparent 25%
              ),
              radial-gradient(
                circle at calc(100% - var(--x)) calc(100% - var(--y)),
                rgba(var(--aurora-4), 0.15),
                transparent 25%
              )
            `,
          }}
        />
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative h-full flex flex-col items-center justify-center gap-12 overflow-hidden px-4">
        <div className="flex flex-col items-center gap-4 text-center mt-[-15vh]">
          <div className="relative w-[90vw] h-[45vh] max-w-[1400px] max-h-[400px]">
            <TextHoverEffect text="λLTHEλ" duration={0.2} />
          </div>
          <div className="text-lg md:text-xl lg:text-2xl text-[hsl(var(--text-secondary))]">
            <MorphingText texts={texts.slice(1)} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/register">
            <ShimmerButton 
              shimmerColor="rgba(255, 255, 255, 0.2)"
              background="rgba(0, 0, 0, 0.2)"
              shimmerDuration="2s"
              className="bg-gradient-to-br from-blue-500/15 via-violet-400/10 to-fuchsia-500/5 h-10 px-6 text-sm font-medium tracking-wide rounded-full"
            >
              Register Interest
            </ShimmerButton>
          </Link>
          <InteractiveHoverButton>
            <Link href="#about">Learn more</Link>
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  )
}

