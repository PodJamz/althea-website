'use client'

import Link from "next/link"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export function Navigation() {
  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md">
      <nav className="container flex items-center justify-between h-16 px-4">
      <Link href="/" className="flex items-center space-x-2">
          <span className="font-semibold text-[hsl(var(--text-primary))]">λLTHEλ</span>
        </Link>
        <div className="flex items-center space-x-4">
          <a 
            href="#about" 
            onClick={handleAboutClick}
            className="text-sm text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors cursor-pointer"
          >
            About
          </a>
          <Link href="/features" className="text-sm text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors">
            Features
          </Link>
          <Link href="/blog" className="text-sm text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors">
            Blog
          </Link>
          <Link href="/careers" className="text-sm text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors">
            Careers
          </Link>
          <Link href="/register">
            <ShimmerButton 
              shimmerColor="rgba(99, 102, 241, 0.2)"
              background="rgba(79, 70, 229, 0.1)"
              shimmerDuration="2s"
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 h-10 px-6 text-sm font-medium tracking-wide rounded-full"
            >
              Register Interest
            </ShimmerButton>
          </Link>
        </div>
      </nav>
    </header>
  )
}

