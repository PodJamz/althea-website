import { CareersSection } from "@/components/careers-section"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />
      <CareersSection />
      <Footer />
    </div>
  )
}