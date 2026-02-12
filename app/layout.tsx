import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Las Vegas Pool House | Short-Term Rentals in Las Vegas, Nevada',
  description: 'Comfortable furnished apartments for short and extended stays in Las Vegas, Nevada. Perfect for business travelers, relocations, and visitors.',
  keywords: 'Anchorage rentals, short-term rental, furnished apartment, Alaska lodging, extended stay Anchorage',
  openGraph: {
    title: 'Las Vegas Pool House | Short-Term Rentals',
    description: 'Comfortable furnished apartments in Las Vegas, Nevada',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
