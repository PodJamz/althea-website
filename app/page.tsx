import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ChatDemoSection } from "@/components/chat-demo-section"
import { FeaturesGrid } from "@/components/features-grid"
import { BlogSection } from "@/components/blog-section"
import { CareersSection } from "@/components/careers-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-zinc-50">
      <Navigation />
      <main className="h-screen overflow-y-auto">
        <section className="h-[100vh] relative">
          <Hero />
        </section>

        <section className="h-[100vh] relative">
          <ChatDemoSection />
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        <section className="relative">
          <FeaturesGrid />
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        <section className="relative min-h-screen">
          <BlogSection />
        </section>

        <section className="relative">
          <CareersSection />
        </section>
        <Footer />
      </main>
    </div>
  )
}