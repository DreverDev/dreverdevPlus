import Header from '@/components/layout/header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { UtilsProvider } from '@/providers/utilsContext'

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
      <body className={`font-sans z-0 bg-background text-white`}>
        <UtilsProvider>
          <Header />
          <main className="w-screen h-screen flex-grow md:snap-y md:snap-mandatory overflow-auto scroll-smooth px-10 md:px-[200px]">
            {children}
          </main>
        </UtilsProvider>
      </body>
    </html>
  )
}
