import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Bilbo } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const logo = Bilbo({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Dawid Zygmunt',
  description: 'Hi, this is my portfolio',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
