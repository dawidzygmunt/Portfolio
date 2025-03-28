import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dawid Zygmunt',
  description: 'Hi, this is my portfolio',
  viewport: 'width=device-width, initial-scale=1.0',
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
