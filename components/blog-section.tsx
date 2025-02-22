import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function BlogSection() {
  const posts = [
    {
      title: "The Future of Medical AI",
      excerpt: "Exploring the potential impact of AI on healthcare delivery and patient outcomes.",
      date: "2024-01-18",
    },
    {
      title: "Preventive Healthcare Revolution",
      excerpt: "How AI is transforming the way we approach preventive medicine and wellness.",
      date: "2024-01-17",
    },
    {
      title: "Healthcare Optimization",
      excerpt: "Leveraging AI to optimize healthcare systems and improve patient care.",
      date: "2024-01-16",
    },
    {
      title: "AI in Clinical Trials",
      excerpt: "Accelerating medical research through intelligent trial design and analysis.",
      date: "2024-01-15",
    },
    {
      title: "Patient Data Security",
      excerpt: "Advanced encryption methods protecting your sensitive health information.",
      date: "2024-01-14",
    },
    {
      title: "Digital Health Transformation",
      excerpt: "The evolution of healthcare delivery in the age of artificial intelligence.",
      date: "2024-01-13",
    },
  ]

  return (
    <section className="py-32 bg-black">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.title} href="/blog">
              <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{post.excerpt}</p>
                  <p className="text-sm text-gray-500 mt-4">{post.date}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

