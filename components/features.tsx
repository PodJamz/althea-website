export function Features() {
  return (
    <section className="py-24 bg-[hsl(var(--feature-card-bg))]">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[hsl(var(--text-primary))]">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Feature placeholders */}
          <div className="p-6 rounded-lg bg-[hsl(var(--card))]">
            <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--text-primary))]">Total Health Awareness</h3>
            <p className="text-[hsl(var(--text-secondary))]">Comprehensive health monitoring and analysis</p>
          </div>
          <div className="p-6 rounded-lg bg-[hsl(var(--card))]">
            <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--text-primary))]">Preventive Care</h3>
            <p className="text-[hsl(var(--text-secondary))]">AI-driven health prevention strategies</p>
          </div>
          <div className="p-6 rounded-lg bg-[hsl(var(--card))]">
            <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--text-primary))]">Health Optimization</h3>
            <p className="text-[hsl(var(--text-secondary))]">Personalized recommendations for optimal health</p>
          </div>
        </div>
      </div>
    </section>
  )
}

