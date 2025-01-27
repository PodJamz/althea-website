'use client';
import Iphone15Pro from "./ui/iphone-15-pro";
import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/ui/box-reveal";
import { AuroraBackground } from "@/components/ui/aurora-background"

export function ChatDemoSection() {
  return (
    <AuroraBackground showRadialGradient>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-4xl mx-auto flex gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <BoxReveal boxColor="#6366f1" duration={0.6}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
                λLTHEA
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Artificial Medical Intelligence</div>
              </h2>
            </BoxReveal>
            
            <BoxReveal boxColor="#6366f1" duration={0.6} delay={0.2}>
              <p className="text-lg md:text-xl text-zinc-600 mb-8">
              Althea bridges the knowledge gap between you, your health data, and healthcare professionals, providing seamless, secure, and intelligent care coordination.
              </p>
            </BoxReveal>

            <div className="space-y-4">
              <BoxReveal boxColor="#6366f1" duration={0.6} delay={0.3}>
                <div className="p-4 rounded-lg bg-white border border-zinc-200">
                  <p className="text-zinc-900">
                    <span className="font-semibold text-indigo-600">You:</span> "Hey Althea, I'm scheduled for ACL surgery soon. Any tips?"
                  </p>
                </div>
              </BoxReveal>

              <BoxReveal boxColor="#6366f1" duration={0.6} delay={0.4}>
                <div className="p-4 rounded-lg bg-indigo-100 border border-indigo-200">
                  <p className="text-zinc-900">
                    <span className="font-semibold text-indigo-600">Althea:</span> "First, let's check your activity level and goals. Are you aiming for a quick recovery or a more cautious rehab plan?"
                  </p>
                </div>
              </BoxReveal>

              <BoxReveal boxColor="#6366f1" duration={0.6} delay={0.5}>
                <div className="p-4 rounded-lg bg-white border border-zinc-200">
                  <p className="text-zinc-900">
                    <span className="font-semibold text-indigo-600">You:</span> "I'd love a quicker recovery but I'm worried about pain and re-injury."
                  </p>
                </div>
              </BoxReveal>

              <BoxReveal boxColor="#6366f1" duration={0.6} delay={0.6}>
                <div className="p-4 rounded-lg bg-indigo-100 border border-indigo-200">
                  <p className="text-zinc-900">
                    <span className="font-semibold text-indigo-600">Althea:</span> "Totally understandable. A structured pre-op routine can speed healing. Would you prefer daily exercises or supervised physical therapy sessions?"
                  </p>
                </div>
              </BoxReveal>

              <BoxReveal boxColor="#6366f1" duration={0.6} delay={0.7}>
                <div className="p-4 rounded-lg bg-white border border-zinc-200">
                  <p className="text-zinc-900">
                    <span className="font-semibold text-indigo-600">You:</span> "Daily exercises sound good. Let's do that."
                  </p>
                </div>
              </BoxReveal>

              <BoxReveal boxColor="#6366f1" duration={0.6} delay={0.8}>
                <div className="p-4 rounded-lg bg-indigo-100 border border-indigo-200">
                  <p className="text-zinc-900">
                    <span className="font-semibold text-indigo-600">Althea:</span> "Great choice! I'll send you step-by-step routines focusing on strengthening and flexibility. Let's confirm your current fitness level first…"
                  </p>
                </div>
              </BoxReveal>
            </div>

            <BoxReveal boxColor="#6366f1" duration={0.6} delay={0.5}>
              <Button 
                className="mt-8 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 backdrop-blur-sm"
              >
                Start Conversation
              </Button>
            </BoxReveal>
          </div>

          {/* iPhone Container */}
          <div className="flex-1 relative max-w-[280px] mx-auto">
            <Iphone15Pro>
              <div className="h-full w-full overflow-hidden bg-white">
                {/* Placeholder for future ConversationDemo */}
                <div className="h-full flex items-center justify-center text-zinc-400">
                  Coming Soon
                </div>
              </div>
            </Iphone15Pro>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}