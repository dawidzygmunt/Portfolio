import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dawid Zygmunt - Fullstack Developer',
  description: 'Fullstack Developer specializing in React, Next.js, Node.js, and cloud technologies. Portfolio and projects.',
  keywords: ['fullstack developer', 'react', 'next.js', 'typescript', 'portfolio'],
  authors: [{ name: 'Dawid Zygmunt' }],
  openGraph: {
    title: 'Dawid Zygmunt - Fullstack Developer',
    description: 'Portfolio and projects',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
