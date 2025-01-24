import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { BlogSection } from "@/components/blog-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white flex flex-col">
      <Navigation />
      <main className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <div className="snap-start min-h-screen">
          <Hero />
        </div>
        <div className="snap-start min-h-screen">
          <AboutSection />
        </div>
        <div className="snap-start">
          <BlogSection />
        </div>
        <Footer />
      </main>
    </div>
  )
}
