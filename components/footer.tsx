import { MyLambdaIcon } from "./my-lambda-icon"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <MyLambdaIcon className="w-6 h-6" />
              <span className="font-semibold">λLTHEλ</span>
            </Link>
            <p className="text-sm text-gray-400">
              Medical Superintelligence for everyone
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul> 
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="https://twitter.com">Twitter</Link></li>
              <li><Link href="https://linkedin.com">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-900 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} λLTHEλ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

