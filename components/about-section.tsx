'use client'

import { AuroraBackground } from "@/components/ui/aurora-background"
import { FeaturesSectionWithBentoGrid } from './ui/feature-section-with-bento-grid'

export function AboutSection() {
  return (
    <AuroraBackground id="about" showRadialGradient={false}>
      <FeaturesSectionWithBentoGrid />
    </AuroraBackground>
  )
} 