import Header from '@/components/layout/header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Drever Dev',
  description: 'Web portfolio by Dídac Reverte',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} z-0`}>
        <Header />
        {children}
      </body>
    </html>
  )
}