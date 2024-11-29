import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mixtape Music Website',
  description: 'A modern music website built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-white">
          <Sidebar />
          <main className="flex-1 ml-48">{children}</main>
        </div>
      </body>
    </html>
  )
}

