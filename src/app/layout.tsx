import './globals.css'
import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Built with Next.js + Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a192f] text-gray-300 font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
