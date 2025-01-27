import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"

export function CareersSection() {
  return (
    <section className="relative py-24 bg-black">

      <div className="absolute inset-0 h-full w-full">
        <BackgroundBeams className="[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="container px-4 relative z-10">
        <h2 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-12">
          Join the Mission
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4 text-center">
            <p className="text-xl text-gray-400">
              We're on a mission to make healthcare smarter, and we want you in the crew
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild 
                variant="outline" 
                className="border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
              >
                <Link href="/careers#roles">Share Your Work</Link>
              </Button>
              <Button 
                asChild
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500"
              >
                <Link href="/register?type=career">Let's Chat</Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-16 border-t border-white/10 pt-12">
            <h3 className="text-xl font-semibold mb-6 text-neutral-200">
              Want to Build Cool Stuff?
            </h3>
            <div className="space-y-4 text-gray-400">
              <p>If you're into building amazing stuff and solving healthcare challenges with AI, we'd love to meet you!</p>
              <p>Drop us your GitHub, X profile, or whatever you're proud of - let's grab a coffee (virtual or IRL) and see what happens ☕️</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
