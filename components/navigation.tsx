'use client'

import Link from "next/link"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Navigation() {
  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--nav-bg))] backdrop-blur-md">
      <nav className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-semibold text-[hsl(var(--text-primary))]">λLTHEλ</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/blog" className="text-sm text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors">
            Blog
          </Link>
          <a 
            href="#about" 
            onClick={handleAboutClick}
            className="text-sm text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors cursor-pointer"
          >
            About
          </a>
          <Link href="/careers" className="text-sm text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors">
            Careers
          </Link>
          <Link href="/register">
            <ShimmerButton 
              shimmerColor="rgba(255, 255, 255, 0.2)"
              background="rgba(0, 0, 0, 0.2)"
              shimmerDuration="2s"
              className="bg-gradient-to-br from-blue-500/15 via-violet-400/10 to-fuchsia-500/5 h-10 px-6 text-sm font-medium tracking-wide rounded-full"
            >
              Register Interest
            </ShimmerButton>
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

