import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Socials from '@/components/Socials'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name',
  description: 'Developer portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[--background] text-[--foreground] overflow-x-hidden`}
      >
        <Navbar />
        <Socials />
        <main className="relative z-0">{children}</main>
      </body>
    </html>
  )
}
