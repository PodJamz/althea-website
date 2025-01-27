import type { Metadata } from 'next'
import { Toaster } from "sonner"
import { Providers } from "./providers"

import './globals.css'

export const metadata: Metadata = {
  title: 'λLTHEλ',
  description: 'Medical Superintelligence',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
