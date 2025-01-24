'use client'

import { FeaturesSectionWithBentoGrid } from './ui/feature-section-with-bento-grid'

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black">
      {/* Aurora background effect */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-30"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(125deg, #0894FF, #C959DD, #FF2E54, #FF9004)',
            filter: 'blur(100px)',
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          }}
        />
      </div>
      <FeaturesSectionWithBentoGrid />
    </section>
  )
} 